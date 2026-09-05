import React, { useState } from 'react'

const Card = (props) => {
    const [Like, setLike] = useState(0)

    function like(){
        setLike(Like+1);
    }
    function Dislike(){
        setLike(Like-1);
    }
    return (
        <div className='p-5'>
            <div className="card p-3 flex flex-col w-60 h-70 bg-zinc-600 rounded-md">
                <img className='w-20 h-20 rounded-full' src={props.user.DP} alt="" />
                <h1>{props.user.Name}</h1>
                <p>{props.user.Title}</p>
                <div className='w-full py-5 flex gap-4'>
                    <button onClick={like} className='px-8 py-3 bg-blue-500 rounded-md'><span>Like</span></button>
                    <button onClick={Dislike} className='px-8 py-3 bg-red-500 rounded-md'>Dislike</button>
                </div>
                <div className="like-count">Likes = {Like}</div>
            </div>
        </div>
    )
}

export default Card
