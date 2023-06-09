import React, {useState} from 'react'

// input: state variables (flavor, quantity, cost, sprinkles)
const IceCreamForm = (props) => {
    const [flavor, setFlavor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [cost, setCost] = useState(0);
    const [sprinkles, setSprinkles] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newIceCream = {flavor,quantity,cost,sprinkles};
        props.onNewOrder(newIceCream);
        setFlavor("");
        setQuantity(1);
        setCost(0);
        setSprinkles(false);
    }

  return (
    <div>
        <h1>Ice Cream Form</h1>
        <form className='form-group' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="flavor">Flavor: </label>
                <select name="flavor" className='form-control' value={flavor} onChange={(e)=>setFlavor(e.target.value)}>
                    <option hidden>Please choose your flavor.</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Pistachio">Pistachio</option>
                    <option value="Rocky Road">Rocky Road</option>
                    <option value="Strawberry">Strawberry</option>
                </select>
            </div>
            <div>
                <label htmlFor="quatity">Quantity: </label>
                <input type="number"  className='form-control' name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="cost">Cost: </label>
                <input type="number" className='form-control' name="cost" value={cost} onChange={(e) => setCost(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="sprinkles">Sprinkles: </label>
                <input type="checkbox" name="sprinkles" value={sprinkles} onChange={(e) => setSprinkles(e.target.value)}/>
            </div>
            <div>
                <button className='btn btn-outline-primary mt-2'>Add to Order</button>
            </div>
        </form>
    </div>
  )
}

export default IceCreamForm