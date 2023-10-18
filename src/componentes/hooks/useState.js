import { useState } from "react";

const Estado = () =>{
    //     valor , mudança 
    const [count , setcount] = useState(0);
    const incremento = () => {
        setcount((prevState)=>prevState + 1) 
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incremento}>incremento</button>
        </div>
    )
}
export default Estado;