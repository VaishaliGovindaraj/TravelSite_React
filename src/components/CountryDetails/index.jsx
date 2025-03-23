import TravelDetailDescription from "../TravelDetailDescription";

const CountryDetail = ({countryArray}) => {
    return(
        <>
        
        <div>{countryArray.map((item,index)=> <TravelDetailDescription traveldetail={item} key={index}/>)}</div>

        </>
    )
}
export default CountryDetail;