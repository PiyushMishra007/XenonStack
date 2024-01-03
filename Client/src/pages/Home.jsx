import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

const Home = () => {
  const navigate = useNavigate();
  const { account,setAccount } = useContext(DataContext);
  
  useEffect(() => {
    console.log(account)

    if (account.user_id == "") {
      navigate("/login");
    }},[account])

  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
