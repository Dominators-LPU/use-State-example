import React, {useState} from "react";


const Form2 = () => {
    let [name, setName] = useState("")
    let [displayName, setDisplayName] = useState("")


    function submit(){
      setDisplayName(name)
    }

    return(
        <div>
              <input type="text" placeholder="Enter your name" 
                onChange = {(event)=> setName(event.target.value)}
              />
              <button onClick={submit}>Submit</button>

              <p>Welcome {displayName} </p>
        </div>
    )
}

export default Form2;