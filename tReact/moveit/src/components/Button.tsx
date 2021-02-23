import { useState } from "react"

interface ButtonProps {
    color: string;
    children: string;
}

//https://youtu.be/XDFlV76UJuA?t=4041

export function Button(props: ButtonProps) {

    const [counter, setCounter] = useState<number>(0);

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <button type="button" style={{ backgroundColor: props.color }} onClick={()=>increment()}>
            {props.children}
            <strong>{counter}</strong>
        </button>
    )
}