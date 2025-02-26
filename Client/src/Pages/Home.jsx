import React from "react";
import Layout from "../Layout/Layout";
import Header from "../Components/Header";
import { Speciality } from "../Components/Speciality";
import DoctorsGrid from "../Components/DoctorsGrid";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Speciality />
      <DoctorsGrid />
      <Banner />
    </Layout>
  );
};

export default Home;
