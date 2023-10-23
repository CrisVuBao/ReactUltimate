import { useContext } from "react";
import { ParentContext, ThemeContext } from "../Context/ParentContext"
import '../App.css';

export default function Text() {

    // sử dụng dữ liệu được nhận từ ParentContext
    const childrenContext = useContext(ParentContext);

    return (
        <>
            <p className={childrenContext.theme}>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.</p>
        </>
    )
}