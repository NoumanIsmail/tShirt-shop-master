import React from "react";
function CategoryCards(props){
    return(
        <>
            <div className="category-cards">
                <div className="cat-img"><img src={props.image} alt="" /></div>
                <div className="cat-name"><h2>{props.title}</h2></div>
            </div>
         
        </>
    );
}
export default CategoryCards;