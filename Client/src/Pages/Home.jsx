import React from "react";
import Layout from "../Layout/Layout";
import Header from "../Components/Header";
import { Speciality } from "../Components/Speciality";
import DoctorsGrid from "../Components/DoctorsGrid";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Speciality />
      <DoctorsGrid />
    </Layout>
  );
};

export default Home;
