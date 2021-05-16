import React, { useContext } from "react";
import { DataContext } from "../../App";
import "./styles.scss";

/**
 * Profile Component
 * Renders Profile Picture, First Name, Last Name, Phone, Email, Bio in a Grid
 */

const createProfileGrid = (desc, info) => {
  return (
    <>
      <div className="text">{desc}</div>
      <div className="detail">{info}</div>
    </>
  );
};

const Profile = () => {
  const dataSource = useContext(DataContext);

  return (
    <div className="profileComponents">
      <div className="titlePage">Profile</div>
      <div className="column">
        <div className="profile">
          <img src={dataSource.profile.avatarImage} className="profileImage" />
        </div>
        <div className="profileDetails">
          {createProfileGrid("First Name", dataSource.profile.firstName)}
          {createProfileGrid("Last Name", dataSource.profile.lastName)}
          {createProfileGrid("Phone", dataSource.profile.phone)}
          {createProfileGrid("Email", dataSource.profile.email)}
          {createProfileGrid("Bio", dataSource.profile.bio)}
        </div>
      </div>
    </div>
  );
};

export default Profile;
