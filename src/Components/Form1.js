import React, {useState} from "react";


const Form1 = () => {
    let [name, setName] = useState("")

    return(
        <div>
              <input type="text" placeholder="Enter your name" 
                onChange = {(event)=> setName(event.target.value)}
              />

              <p>Welcome  {name}</p>
        </div>
    )
}

export default Form1;