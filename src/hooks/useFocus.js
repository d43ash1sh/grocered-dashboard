import { useRef } from "react";

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {
        htmlElRef.current && htmlElRef.current.focus()
        const len = htmlElRef.current.value.length;

        setTimeout(() => {
            htmlElRef.current.setSelectionRange(len, len);
        }, 0)
    }
    return [htmlElRef, setFocus]
}

export default useFocus;