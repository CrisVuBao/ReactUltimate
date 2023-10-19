
// useEffect
// 1. useEffect(callback)
// - Gọi callback mỗi khi componet re-render
// - Gọi callback sau khi component thêm element vào DOM

// 2. useEffect(callback, [])
// - Chỉ gọi callback một lần sau khi component được mounted

// -------------------------------
// 1.Callback luôn được gọi sau khi Component Mounted

import { useEffect, useState } from "react"

export default function Content() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(inputPost => setPost(inputPost))
    }, [])

    return (
        <>
            <ul>
                {post.map(p =>
                    <li key={p.id}>{p.title}</li>
                )}
            </ul>
        </>
    )
}