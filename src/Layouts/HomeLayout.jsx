import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProjectSections from "../sections/ProjectSections";

const HomeLayout = () => {
  return (
    <div>
      <ProjectSections />
      <Navbar />
    </div>
  );
};

export default HomeLayout;
