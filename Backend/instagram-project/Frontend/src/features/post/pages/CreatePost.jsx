import React, { useRef, useState } from 'react'
import "../style/createpost.scss"
import { usePost } from '../Hook/usePost'
import {useNavigate} from 'react-router'

const CreatePost = () => {

    const [caption, setCaption] = useState("")
    const postImageinputFieldRef = useRef(null)

    const navigate = useNavigate()

    const {loading, handleCreatePost} = usePost()

    async function handleSubmit(e){
        e.preventDefault()
        const file = postImageinputFieldRef.current.files[0]

        await handleCreatePost(file, caption)

        navigate('/')
    }

    if(loading){
        return(
            <main>
                <h1>Creating Post</h1>
            </main>
        )
    }

    return (
        <main className='create-post-page'>
            <div className="form-container">
                <h1>Create Post</h1>
                <form onSubmit={handleSubmit}>
                    <label className='post-image-label' htmlFor="postImage">
                        <span>Select Image</span>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934L22.0007 13.3417C21.3749 13.1204 20.7015 13 20 13V5H4L4.001 19L13.2929 9.70715C13.6528 9.34604 14.22 9.31823 14.6123 9.62322L14.7065 9.70772L18.2521 13.2586C15.791 14.0069 14 16.2943 14 19C14 19.7015 14.1204 20.3749 14.3417 21.0007L2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z"></path></svg>
                        </div>
                    </label>
                    <input ref={postImageinputFieldRef} hidden type="file" name='postImage' id='postImage' />
                    <input
                    value={caption} 
                    onChange={(e)=>{setCaption(e.target.value)}}
                    type="text" name='caption' id='caption' placeholder='Enter caption' />
                    <button className="button primay-button">Create Post</button>
                </form>
            </div>
        </main>
    )
}

export default CreatePost
