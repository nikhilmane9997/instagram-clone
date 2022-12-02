import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import HeaderProfile from "../components/Profile/HeaderProfile";

const Profile = () => {
  const router = useRouter();
  const { handle } = router.query;
  return (
    <div>
      <Header />
      <HeaderProfile />
      This is {handle}
    </div>
  );
};

export default Profile;
