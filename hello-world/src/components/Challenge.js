import { useState } from "react"

const Challenge = () => {

    let a = 10
    let b = 5
    const [soma, setSoma] = useState(" ")

    const handleSoma = () => {
         return setSoma(a + b)
    }

    return (
        <div>
            <div>{a} + {b} = {soma}</div>
            <button onClick={handleSoma}>Soma</button>
        </div>
    )
}

export default Challenge