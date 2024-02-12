
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

export const Header = () => {

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

  