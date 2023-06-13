import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const [favFood, setFavFood] = useState("Pizza");
    const [favFoodErr, setFavFoodErr] = useState("");
    const navigate = useNavigate();

    const submitHandler =(e) =>{
        e.preventDefault();
        if(favFood.length<2){
            setFavFoodErr("Food need to be more than 1 character in length")
        }else{
            setFavFoodErr('')
            navigate(`/favFood/${favFood}`)
        }
    }

  return (
    <div>
        <h1>Landing</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="favFood">What is your favorite food? </label>
                <input type="text" name='favFood' value={favFood} onChange={(e)=>setFavFood(e.target.value)}/>
                {favFoodErr?<p>{favFoodErr}</p>:""}
            </div>
            <div>
                <button>Next</button>
            </div>
        </form>
    </div>
  )
}

export default Landing