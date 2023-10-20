
// useEffect

//3. useEffect(callback, [dependency])
// - Callback sẽ được gọi lại mỗi khi dependency thay đổi

// -------------------------------
// Callback luôn được gọi sau khi Component Mounted

import { Button } from "@mui/material";
import { useEffect, useState } from "react"
import "./content.css";

export default function Content() {

    const [avatar, setAvatar] = useState();

    useEffect(() => {

        // Đây là cleanup Function, đây là phương pháp tránh bị rò rỉ bộ nhớ (memory leak);
        return () => {
            avatar && URL.revokeObjectURL(avatar.game);
        }
    }, [avatar])

    const handleFile = (e) => {
        let file = e.target.files[0];

        file.game = URL.createObjectURL(file);

        setAvatar(file);
    }

    return (
        <>
            <div className="sm">
                <label class="block container">
                    <span class="sr-only">Choose profile photo</span>
                    <input type="file" class="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-rose-600
                hover:file:bg-violet-100
                "
                        onChange={handleFile}
                    />
                    {avatar &&
                        <img src={avatar.game} alt="" width="80%" />
                    }
                </label>
            </div>
        </>
    )
}