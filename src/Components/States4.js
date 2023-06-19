
import React,{useState} from "react";

const States4 = () => {
    let [color, setColor] = useState("")
    let [favorite, setFavorite] = useState(["red","blue","green"])

     function addColor(){
            setFavorite([color, ...favorite])
     }

    return(
        <div>
              <h1>{favorite.join()}</h1> 

               <input type="text"  onChange={e => setColor(e.target.value)}/>
               <button onClick={addColor}> Add to Favourite</button>
        </div>
    )
}

export default States4;