import styles from "./Foodinput.module.css";
const Foodinput=({handleKeyDown})=>{
    
return <input type="text" 
placeholder="Enter Food Item here"
className={styles.food}
onKeyDown={handleKeyDown}/>
}
export default Foodinput;