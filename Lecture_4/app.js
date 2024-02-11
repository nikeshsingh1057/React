import ReactDOM, { createRoot } from "react-dom/client";

{
  /*
  Header 
    Logs
    List-Items
    carts
  Body 
      Search bar
      Restarurent List
        Restaruent cart
          Images
          Names
          Cusines
  footer
    links
    copyright
  */
}

const Title = () => (
  //   <h1 id="title" key="h2">
  //      Food villa
  //    </h1>
  <a href="/" >
    <img
      className="logo" alt="logo" src="https://th.bing.com/th/id/OIP.WRUnwFa0F_sBiU8T1SOrAwHaHa?rs=1&pid=ImgDetMain"
    />
  </a>
);


const Header = () => {

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
};

// to make it dynamic 

const burgerKing={           // in real word data not like this data is in form of array

  name:"burgerKing", 
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a621fa2337beff38368bb19988d27fcb",
  cusions: ["burger", "amrican"],
  rating : "4.5"

};

const RestaruentCard=()=>{
  return (
    <div className="card">
      <img src ={burgerKing.image} ></img>
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusions.join(", ")}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  )
}
// this is hard cord we cannt do like this ye wrong way hai. we need dyanmic way to do task.
/*
const RestaruentCard=()=>{
  return (
    <div className="card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a621fa2337beff38368bb19988d27fcb" ></img>
      <h2>Burger King</h2>
      <h3>Burger,American</h3>
      <h4>4.5 stars</h4>
    </div>
  )
}
*/
const Body= ()=>{
  return (
    <div className="restaurant-list">
      <RestaruentCard/>
      <RestaruentCard/>
      <RestaruentCard/>
      <RestaruentCard/>
      <RestaruentCard/>
      <RestaruentCard/>
      <RestaruentCard/>
      <RestaruentCard/>
      <RestaruentCard/>
      <RestaruentCard/>
    </div>
  )
} 


const Footer = ()=>{
  return <h4> Footer </h4>
}
const AppLayout = () => {
  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);