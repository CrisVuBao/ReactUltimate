
// useEffect

//3. useEffect(callback, [dependency])
// - Callback sẽ được gọi lại mỗi khi dependency thay đổi

// -------------------------------
// Callback luôn được gọi sau khi Component Mounted

import { Button } from "@mui/material";
import { useEffect, useState } from "react"

let typeClick = ["posts", "comments", "albums", "photos", "todos", "users"]

export default function Content() {
    const [text, setText] = useState('');
    const [changeText, setChangeText] = useState([])
    const [click, setClick] = useState("posts")
    const [dataPost, setDataPost] = useState([])

    const handleText = (text) => {
        setChangeText(prev =>
            [...prev, text])
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${click}`)
            .then(res => res.json())
            .then(data => setDataPost(data))
    }, [click])

    return (
        <>
            <div>
                {typeClick.map(c =>
                    <Button
                        key={c}
                        color="warning"
                        onClick={() => setClick(c)}
                        style={c === click ? { backgroundColor: '#F4DFB6' } : {}}
                    >{c}</Button>
                )}
                <ul>
                    {dataPost.map(dt =>
                        <li key={dt.id}>{dt.title}</li>
                    )}
                </ul>
            </div >
            <div>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={() => handleText(text)}
                >xuất text</button>
                <ul>
                    {changeText.map(text =>
                        <li key={text}>{text}</li>
                    )}
                </ul>
            </div>
        </>
    )
}