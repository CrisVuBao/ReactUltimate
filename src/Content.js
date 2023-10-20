
// useEffect

//3. useEffect(callback, [dependency])
// - Callback sẽ được gọi lại mỗi khi dependency thay đổi

// -------------------------------
// Callback luôn được gọi sau khi Component Mounted

import { Button } from "@mui/material";
import { useEffect, useState } from "react"

export default function Content() {
    const [countTime, setCountTime] = useState(180);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountTime(prev => prev - 1)
        }, 1000)

        console.log("call")

        clearInterval(timer);
    }, [])



    return (
        <>
            <h1>{countTime}</h1>
        </>
    )
}