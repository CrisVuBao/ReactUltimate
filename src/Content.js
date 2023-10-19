
// useEffect

//3. useEffect(callback, [dependency])
// - Callback sẽ được gọi lại mỗi khi dependency thay đổi

// -------------------------------
// Callback luôn được gọi sau khi Component Mounted

import { Button } from "@mui/material";
import { useEffect, useState } from "react"

export default function Content() {
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleSize = () => {
            setSize(window.innerWidth);
        }

        window.addEventListener('resize', handleSize)
        console.log("AddSize");

        return () => {
            window.removeEventListener("resize", handleSize)
            console.log("Remove Size");
        }
    }, [])



    return (
        <>
            <Button
                variant="outlined"
                onClick={() => setSize(size + 1)}
            >Bấm</Button>
            <h1>{size}</h1>
        </>
    )
}