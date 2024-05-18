import React from "react";
import Cards from "./Cards";
import FeaturedCards from "../MyData/FeaturedCardsData";
import CategoryCardsData from "../MyData/CategoryCardsData";
import featuresData from "../MyData/featuresData";
import CategoryCards from "./CategoryCards";
import Features from "./Features";
import LoginPage from "../auth/LoginPage";
function MyHome(){
    
return(
    <>
    <div className="hero">
    <main >
    {
        FeaturedCards.map((value) => {
          return  <Cards image={value.image} title={value.title} desc={value.desc} />
        })
    }
    </main>
    </div>
    <div className="features">
    {
      featuresData.map((value) =>{
        return(

          <Features message={value.message}  image={value.image} />
        )
      })
    }
    </div>
    <div className="category">
    <main>
    {
      CategoryCardsData.map((value) =>{
        return <CategoryCards image={value.image} title={value.title} />
      })
    }
    </main>
    </div>
      <div className="login">
        <LoginPage/>
      </div>

    </>
)
}
export default MyHome;