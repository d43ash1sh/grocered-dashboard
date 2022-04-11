import { useEffect, useState } from 'react';

export const useWidth = myRef => {
    const [dimensions, setDimensions] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setDimensions(myRef.current.offsetWidth)
        }

        if (myRef.current) {
            handleResize()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [myRef])

    return dimensions;
};