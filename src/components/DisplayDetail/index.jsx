import styles from '../Navigation/navigation.module.css';

const DisplayDetail = ({uniqueCountry, countryLink}) => {

    return (
        <div className={styles.country_div}>
        {console.log(uniqueCountry)}
        <p className={styles.country_name} onClick={() => countryLink(uniqueCountry)}>{uniqueCountry}</p>
        </div>
    )
}


export default DisplayDetail;