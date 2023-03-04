import React from "react";
import {WorksCarousel} from "@/components/templates";
import {Tabs} from "@/components/molecules";
import {WorksGallery} from "@/components/organisms";

const WorksPage = () => {
  return (
      <>
        <section>
          <WorksCarousel/>
          <WorksGallery/>
        </section>
        <section/>
      </>

  );
};

export default WorksPage;
