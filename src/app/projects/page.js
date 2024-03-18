import PrimaryButton from "@/components/ui/PrimaryButton";
import Layout from "@/layout/Layout";
import Image from "next/image";
import React from "react";
import Back from "./components/Back";
import Sticky from "./components/Sticky";
import MainCard from "./components/MainCard";
import ProjectStages from "./components/ProjectStages";
import TokenUtilities from "./components/TokenUtilities";
import ProjectDetails from "./components/ProjectDetails";
import KeyFeatures from "./components/KeyFeatures";
import MeetTheTeam from "./components/MeetTheTeam";
import Community from "./components/Community";
import ProjectRoadmap from "./components/ProjectRoadmap";
import Tokenomics from "./components/Tokenomics";

export default function Page() {
  return (
    <Layout>
      <div className="py-[50px] theme-container px-10">
        <Back />
        <div className="flex items-start mt-6 gap-5">
          <div>
            <MainCard />
            <ProjectStages />
            <TokenUtilities />
            <Tokenomics />
            <ProjectDetails />
            <KeyFeatures />
            <MeetTheTeam />
            <Community />
            <ProjectRoadmap />
          </div>
          <Sticky />
        </div>
      </div>
    </Layout>
  );
}
