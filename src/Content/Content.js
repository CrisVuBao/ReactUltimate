
// useEffect

//3. useEffect(callback, [dependency])
// - Callback sẽ được gọi lại mỗi khi dependency thay đổi

// -------------------------------
// Callback luôn được gọi sau khi Component Mounted

import { Button } from "@mui/material";
import { useEffect, useState } from "react"
import "./content.css";

const data = [{
    id: 1,
    name: "Học React"
},
{
    id: 2,
    name: "Học ASP"
},
{
    id: 3,
    name: "Học Siêu nhân"
}
]

export default function Content() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleLesson = (title) => {
            console.log(title);
        }

        window.addEventListener(`Lesson ${lessonId}`, handleLesson)

        // Cleanup Function
        return () => {
            window.removeEventListener(`Lesson ${lessonId}`, handleLesson)
        }
    }, [lessonId])

    return (
        <>
            {data.map(data =>
                <Button
                    key={data.id}
                    style={{
                        backgroundColor: lessonId === data.id ? "#9EDDFF" : ""
                    }}
                    onClick={() => {
                        setLessonId(data.id);
                        console.log(`Click id :${data.id}`);
                    }}
                >{data.name}</Button>
            )}
        </>
    )
}