# Padharo Sa Food Ordering App

/**
 * Architecture of Website
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

/*
// When we have to pass the dynamically data to the component, we pass the props to the component.
// Passing props to a component is just similar to passing the argument to the function.
// Functional component is nothing but the javascript function at the end of the day.
*/

/*
const RestaurantCard = (props) =>{
    return(
        <div className="res-card">
            <h3>{props.resData}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.5 stars</h4>
            <h4>36 minutes</h4>
        </div>
    );
};
*/

// Destructuring on flying - this is javascript not react-js
/*
const RestaurantCard = ({resData,cuisine}) =>{
    return(
        <div className="res-card">
            <h3>{resData}</h3>
            <h4>{cuisine}</h4>
            <h4>4.5 stars</h4>
            <h4>36 minutes</h4>
        </div>
    );
};
*/

{/* We can use for loop or map method(Imp) to iterate on the all restaurants */}
{/* We are passing the unique id from data to remove the warning from console - Very Imp
Because if new restaurant comes React will render all if Id is not present as don't know which one is new 
so we use id(unique) so that the React will only render the new id comes in the picture*/}
{/* React officially said that index should not be the unique id/keys - BAD Practice NOT Acceptable*/}
{/* Not using Key(Not at all Acceptable) << index as key(Last Option) <<<<<<<<<<<<< Unique id(Best Practice) */}


- Two types of Export and import

    - Default Export/Import

    export default Component;
    import Component from "path";

    - Named Export/Import

    export const Component;
    import {Component} from "path";


# React Hooks
 - Normal JS Utility functions
 - Hooks - Normal JS function given by React to us.

 - Hooks
 - useState() 
    - Super powerful state variables in react
    - How to import useState()?? : import {useState} from "react"; // Import as named import
    - How to use useState()?? : const [state,setState] = useState([]);  // Naming Convention if ResData then setResData
     // State Variable - Super Powerful variable (HOOKS) - useState()
     // Also work for Array Destructuring
     // Hook is nothing but the js function, has its oen use cases.
    - Whenever a state variable updates, react Re-Renders the component.

    - Array Destructuring
        - const [listOfRestaurants, setListOfRestaurants] = useState(resList);
        - const arr = useState(resList);
          const [listOfRestaurants, setListOfRestaurants] = arr; // Destructuring
        - const arr = useState(resList);
          const listOfRestaurants = arr[0]; const setListOfRestaurants = arr[1];

 - useEffect()
    // useEffect(Callback function, dependencies);
    // Callback function called only after the body is rendered
 


# Why react is fast? 
- React is doing the Efficient DOM Manipulation.
- Because of its DOM Operation, it re-renders the DOM whenever the UI updates.
- React uses Virtual DOM (JS Object, It is the representation of Actual DOM) to store the UI state.

# Reconciliation Algorithm(React Fiber)
- React uses a concept called Reconciliation Algorithm to compare the Virtual DOM with the Actual DOM.
- When the state changes, React updates the Virtual DOM, Then React compares the Virtual DOM with the Real DOM.
- If there is a difference between the two, React updates the Actual DOM to match the Virtual DOM.
- This process is very fast because it only updates the parts of the DOM that have changed, This is why React is so fast and efficient.

React Fiber
- React Fiber is the new version of Reconciliation Algorithm which is faster than the previous one.
- Incremental rendering - the ability to split rendering work into chunks and spread it out over multiple frames.

# Diff Algorithm
- React uses a diff algorithm to find the difference between the Virtual DOM with the Real DOM.
- It calculates the difference and it will actually then updates the DOM for every render cycle.
- The diff algorithm is a fast and efficient way to compare two objects.
- It only updates the parts of the DOM that have changed.
- This is why React is so fast and efficient.

# Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>; 
    // }
