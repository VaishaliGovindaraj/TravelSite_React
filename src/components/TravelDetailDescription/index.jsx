import styles from './TravelDetail.module.css'

const TravelDetailDescription = ({traveldetail}) => {
        return(
            <div>
                <p>Country : {traveldetail.country}</p>
                <p>City : {traveldetail.city}</p>
                <p>Activity: {traveldetail.activity}</p>
                <p>Description:{traveldetail.description}</p>
            </div>
        )
}

export default TravelDetailDescription;