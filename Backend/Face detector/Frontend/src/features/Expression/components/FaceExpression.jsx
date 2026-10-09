import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";
import "./FaceExpression.scss";

export default function FaceExpression({ onClick = () => { } }) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [expression, setExpression] = useState("Detecting...");

    useEffect(() => {
        init({ landmarkerRef, videoRef, streamRef });

        return () => {
            if (landmarkerRef.current) {
                landmarkerRef.current.close();
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    async function handleClick() {
        const expression = detect({ landmarkerRef, videoRef, setExpression })
        console.log(expression)
        onClick(expression)
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

            <button className="face-expression__button" onClick={handleClick}>
                Detect my expression
                <span aria-hidden="true"></span>
            </button>
        </section>
    );
}