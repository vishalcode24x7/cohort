import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";
import "./FaceExpression.scss";

function releaseFaceDetector({ landmarkerRef, videoRef, streamRef }) {
    landmarkerRef.current?.close();
    streamRef.current?.getTracks().forEach((track) => track.stop());
    if (videoRef.current) videoRef.current.srcObject = null;
}

export default function FaceExpression({ onClick = () => { } }) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);
    const mountedRef = useRef(false);

    const [expression, setExpression] = useState("Camera is off");
    const [cameraReady, setCameraReady] = useState(false);
    const [cameraLoading, setCameraLoading] = useState(false);
    const [cameraError, setCameraError] = useState("");

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
            releaseFaceDetector({ landmarkerRef, videoRef, streamRef });
        };
    }, []);

    async function handleClick() {
        if (cameraLoading) return;
        if (!cameraReady) {
            setCameraLoading(true);
            setCameraError("");
            setExpression("Preparing camera...");
            try {
                await init({ landmarkerRef, videoRef, streamRef });
                if (!mountedRef.current) {
                    releaseFaceDetector({ landmarkerRef, videoRef, streamRef });
                    return;
                }
                setCameraReady(true);
                setExpression("Ready to detect");
            } catch {
                if (!mountedRef.current) return;
                releaseFaceDetector({ landmarkerRef, videoRef, streamRef });
                setCameraError("Camera or face-detection setup failed. Check camera permissions and try again.");
                setExpression("Camera unavailable");
            } finally {
                if (mountedRef.current) setCameraLoading(false);
            }
            return;
        }

        const detectedExpression = detect({ landmarkerRef, videoRef, setExpression })
        if (detectedExpression) onClick(detectedExpression)
    }


    return (
        <section className="face-expression" aria-labelledby="face-expression-title">
            <div className="face-expression__heading">
                <span className="face-expression__eyebrow">MOOD-POWERED LISTENING</span>
                <h1 id="face-expression-title">How are you feeling?</h1>
                <p>Let your expression set the mood. We’ll find music to match.</p>
            </div>

            <div className="face-expression__camera">
                <div className="face-expression__camera-label">
                    <span className="face-expression__live-dot" aria-hidden="true" />
                    CAMERA PREVIEW
                </div>
                <div className="face-expression__video-frame">
                    <video
                        ref={videoRef}
                        className="face-expression__video"
                        playsInline
                        muted
                        aria-label="Live camera preview"
                    />
                    <span className="face-expression__corner face-expression__corner--top-left" aria-hidden="true" />
                    <span className="face-expression__corner face-expression__corner--top-right" aria-hidden="true" />
                    <span className="face-expression__corner face-expression__corner--bottom-left" aria-hidden="true" />
                    <span className="face-expression__corner face-expression__corner--bottom-right" aria-hidden="true" />
                </div>
            </div>

            <div className="face-expression__result" aria-live="polite">
                <span className="face-expression__result-label">YOUR EXPRESSION</span>
                <strong>{expression}</strong>
            </div>

            {cameraError && <p className="face-expression__error" role="alert">{cameraError}</p>}

            <button className="face-expression__button" onClick={handleClick} disabled={cameraLoading}>
                {cameraLoading ? "Starting camera..." : cameraReady ? "Detect my expression" : "Enable camera"}
                <span aria-hidden="true"></span>
            </button>
        </section>
    );
}