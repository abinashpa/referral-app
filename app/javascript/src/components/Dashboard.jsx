import React, { useState, useEffect } from "react";

import Logger from "js-logger";

import NavBar from "./Common/NavBar";
import CustomizedTables from "./Common/Table";

import referralApi from "../apis/referral";

const Dashboard = () => {
  const [referrals, setReferrals] = useState([]);

  const fetchReferrals = async () => {
    try {
      const response = await referralApi.get();
      setReferrals(response.data.referrals);
    } catch (err) {
      Logger.error(err);
      localStorage.clear();
    }
  };

  useEffect(() => {
    fetchReferrals();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <CustomizedTables list={referrals} />
      </div>
    </>
  );
};

export default Dashboard;
