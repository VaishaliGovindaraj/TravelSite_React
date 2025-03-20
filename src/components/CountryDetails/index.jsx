import TravelDetailDescription from "../TravelDetailDescription";

const CountryDetail = ({countryArray}) => {
    return(
        <>
        {console.log(countryArray)}
        <div>{countryArray.map((item,index)=> <TravelDetailDescription traveldetail={item} key={index}/>)}</div>
        <div>CountryDetailspage</div>
        </>
    )
}
export default CountryDetail;