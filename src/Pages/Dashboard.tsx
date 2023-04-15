import React from "react";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import DisplayMainData from "../Components/DisplayMainData";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav />
        <DisplayMainData />
      </main>
    </>
  );
};

export default Dashboard;
