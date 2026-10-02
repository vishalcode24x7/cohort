import React, { useEffect } from "react"

import { useAuth } from "../../auth/hooks/useAuth"
import { usePost } from "../Hook/usePost"

import "../style/profile.scss"

const Profile = () => {

    const { user } = useAuth()

console.log("PROFILE USER:", user)

    const {
        post,
        loading,
        handleGetMyPosts
    } = usePost()

    useEffect(() => {
        handleGetMyPosts()
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <main className="profile-page">

            <section className="profile-header">

                <img
                    src={user?.profileImage}
                    alt="profile"
                    className="profile-image"
                />

                <div className="profile-info">

                    <h1>@{user?.username}</h1>

                    <p>{user?.bio}</p>

                    <p>
                        {post?.length || 0} Posts
                    </p>

                </div>

            </section>


            <section className="posts-section">

                <h2>Posts</h2>

                <div className="posts-grid">

                    {post?.map((item) => (

                        <div
                            className="post-card"
                            key={item._id}
                        >

                            <img
                                src={item.imgUrl}
                                alt={item.caption}
                            />

                            <p>
                                {item.caption}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

        </main>
    )
}

export default Profile