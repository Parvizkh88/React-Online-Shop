import React, { useEffect, useState } from "react";
import HTTPService from "../service/HTTPService";
import UserService from "../service/UserService";

const Profile = () => {
  const [profile, setProfile] = useState();

  const handleGetProfile = async () => {
    let profile = await UserService.profile();
    setProfile(profile);
  };

  useEffect(handleGetProfile, []);

  return (
    <div className="container">
      <p>{profile?.name}</p>
      <p>{profile?.age}</p>
    </div>
  );
};

export default Profile;
