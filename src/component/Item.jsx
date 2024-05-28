import Styles from "./Item.module.css";
const Item=({fooditems})=>{
    const handleBybuttonClicked=(event)=>{
        console.log(event);
        console.log(`${fooditems} being bought`) 
    }
    
    return(
     <li className={`${Styles["kg-item"]} list-group-item`} >
        <span className={Styles["kb-span"]}>{fooditems}</span> 
        <button className={`${Styles.button} btn btn-info`}
        onClick={(event)=> handleBybuttonClicked(event)}
        >Buy</button>
        </li>

   );
 };
export default Item;