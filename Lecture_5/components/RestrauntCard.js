import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString, }) => {
    //cloudinaryImageId ye swiggy ka website se liye hai image change karne ka api hai.
    return (
        <div className="card">

            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>

        </div>
    );

};

export default RestrauntCard;