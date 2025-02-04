import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react"; 
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState(resList);
    const [searchText, setSearchText] = useState("");

    // fetch the data
    useEffect(()=>{
        fetchData();
    }, []);

    console.log("Body Rendered successfully!!");

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // Optional Chaining
        const restaurants = json?.data?.cards?.find(card => 
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
        // setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    

    return (listOfRestaurants.length === 0) ? (<Shimmer/>) : (
        <div className="body">
        <div className="filter">
            <div className="search">
            <input type="text" className="search-text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button className="search-btn" onClick={()=>{
                const filteredRestaurants= listOfRestaurants.filter((res)=>res?.info.name?.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurants(filteredRestaurants);
            }}> Search </button>
            </div>
            
            <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=>res?.info?.avgRating > 4.5);
                setFilteredRestaurants(filteredList);
            }}
            >Top Rated Restaurants</button></div>
        <div className="res-container">
            
            {filteredRestaurants.map((restaurant) => (
                /* Not using Key(Not at all Acceptable) << index as key(Last Option) <<<<<<<<<<<<< Unique id(Best Practice) */
                <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info}/>
            ))}
        </div>
        </div>
    );
};

export default Body 