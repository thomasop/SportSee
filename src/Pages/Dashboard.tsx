import React from "react";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import DisplayMainData from "../Components/Data/DisplayMainData";
import DisplayActivityData from "../Components/Data/DisplayActivityData";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav />

        <div className="dashboard__all">
          <DisplayMainData type={"text"} />
          <div className="dashboard__data">
            <div className="dashboard__charts">
              <div className="dashboard__activity">
                <DisplayActivityData />
              </div>
              <div className="dashboard__flex">
                <div className="dashboard__flex--average">
                </div>
                <div className="dashboard__flex--performance">
                </div>
                <div className="dashboard__flex--score">
                </div>
              </div>
            </div>
            <div className="dashboard__keyData">
              <DisplayMainData type={"keyData"} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
