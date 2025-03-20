import DisplayDetail from "../DisplayDetail";
import styles from "../Navigation/navigation.module.css";


const DisplayOptions = ({categoryArray, selectedLink}) => {
    
    return(
        <div className={styles.menu}>
            {console.log(selectedLink)}
            {categoryArray.map((item,index) => <DisplayDetail key={index} uniqueCountry={item} countryLink ={() => selectedLink(item)} /> )}
            
        </div>
    )
}

export default DisplayOptions;