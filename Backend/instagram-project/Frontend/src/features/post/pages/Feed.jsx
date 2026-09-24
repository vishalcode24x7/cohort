import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../Hook/usePost'

const Feed = () => {

    const {feed, handleGetFeed, loading }  = usePost()
    useEffect(() =>{
        handleGetFeed()
    }, [])

    if(loading || !feed){
        return <h1>
            Feed is Loading...
        </h1>
    }

    console.log(feed);
    


    return (
        <main className='feed-page'>
            <div className="feed">
                <div className="posts">
                    {feed.map(post=>{
                        return <Post user={post.user} post={post} />
                    })}
                </div>
            </div>
        </main>
    )
}

export default Feed
