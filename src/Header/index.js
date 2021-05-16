import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import "./styles.scss";

/* Header Component
Conatins Logo, Title and Link to Profile Page
- Clicking the logo in the header from any view will Link to Home Component
- Clicking on Welcome in the header from any view will Link to Profile Component
*/

const Header = () => {
  const dataSource = useContext(DataContext);
  return (
    <div className="headerSection">
      <Link to={"/"}>
        <img src={dataSource.site.logoImage} className="homeIcon" />
      </Link>
      <div className="title"> {dataSource.site.title}</div>
      <Link to={"/profile"}>
        <div className="welcome">
          {`Welcome ${dataSource.profile.firstName}`}
        </div>
      </Link>
    </div>
  );
};

export default Header;
