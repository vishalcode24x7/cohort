import React, { useState } from 'react'

const Card = ({ postData, deleteHandler, setEdit, settitle, setdesc }) => {
    const [Like, setLike] = useState(0)

    function like() {
        setLike(Like + 1);
    }
    function Dislike() {
        setLike(Like - 1);
    }
    return (
        <div className='p-5 flex gap-3'>
            {postData.map((post, idx) => (
                <div key={idx} className="card p-3 flex flex-col w-70 h-70 bg-zinc-600 rounded-md relative">
                    <h1>{post.title}</h1>
                    <p>{post.desc}</p>
                    <div  className='w-full py-5 flex gap-4'>
                        <button onClick={like} className='px-8 py-3 bg-blue-500 rounded-md'><span>Like</span></button>
                        <button onClick={Dislike} className='px-8 py-3 bg-red-500 rounded-md'>Dislike</button>
                    </div>
                    <div className="like-count">Likes ={Like}</div>
                    <button onClick={()=>{
                        deleteHandler(idx)
                    }} className='px-8 py-3 bg-red-500 rounded-md absolute bottom-2 '>Delete</button>
                    <button onClick={()=>{
                        settitle(post.title)
                        setdesc(post.desc)
                        setEdit(idx)
                    }} className='px-8 py-3 bg-blue-500 rounded-md absolute bottom-2 right-2'>Edit</button>
                </div>
            ))}
        </div>
    )
}

export default Card
