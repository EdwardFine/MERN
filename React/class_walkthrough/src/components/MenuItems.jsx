import React, {useState} from 'react'


const MenuItems = (props) => {
    const {dishName,price,children,likes} = props;

    const [like, setLikes] = useState(likes);
    
    const addLike = () => setLikes(like + 1);
    const removeLike = () => setLikes(like - 1)

    const getTax = (price) => (price*1.2).toFixed(2);
  return (
    <div>
        <h3>Menu Item Compenent File.</h3>
        <h1>{dishName}</h1>
        <p>Price: ${getTax(price)}</p>
        <h3>Number of Likes: {like}</h3>
        <h4>{children}</h4>
        <button onClick={addLike}>Add Like</button>
        <button onClick={removeLike}>Remove Like</button>
    </div>
  )
}



export default MenuItems