import React from "react";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav />
      </main>
    </>
  );
};

export default Dashboard;
