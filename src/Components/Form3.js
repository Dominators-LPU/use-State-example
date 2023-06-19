import React,{useState} from "react";


const Form3 = () => {
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    // const [confirmPassword,setConfirmPassword] = useState("");
    const [user,setUser] = useState({name:"",email:"",password:"",confirmPassword:""})
    const [error, setError] = useState("")

    let {name,email,password,confirmPassword} = user

    console.log("user" , user)


    // function updateName(e){
    //     //  setUser({name:e.target.value, email:email,password:password,confirmPassword:confirmPassword})
    //     setUser({...user, name:e.target.value})
    // }

    function handleSubmit(e){
          e.preventDefault()
          if(!name || !email || !password || !confirmPassword){
              return setError("Please fill all the fields")
          }
          if(password !=confirmPassword){
                return setError("Password does not match")
          }

          console.log("Information Submitted")
          
    }


    return(
        <div className="form3">
             <h3>{error}</h3>
             <form>
                <input type="text" placeholder="Enter your name" 
                    onChange={(e) => setUser({...user, name:e.target.value})}
                />
                <input type="email" placeholder="Enter your email" 
                    onChange={(e) => setUser({...user, email:e.target.value})}
                />
                <input type="password" placeholder="Enter your password" 
                    onChange={(e) => setUser({...user, password:e.target.value})}
                />
                <input type="password" placeholder="Confirm Password" 
                     onChange={(e) => setUser({...user, confirmPassword:e.target.value})}
                />
                <button onClick={handleSubmit}>Submit</button>
             </form>
        </div>
    )
}

export default Form3;