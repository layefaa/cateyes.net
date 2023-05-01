import {Hero} from "@/components/templates";
import dynamic from "next/dynamic";

// const ShortAbout = lazy(() => );
// const ShortWorks = lazy(() => import('@/components/templates/ShortWorks'));
const ShortAbout = dynamic(() => import('@/components/templates/ShortAbout'), {
  ssr: false
});

const ShortWorks = dynamic(() => import('@/components/templates/ShortWorks'), {
  ssr: false
});

const HomePage = () => {
  return (
      <>
        <section>
          <Hero/>
        </section>
        <section>
          <ShortAbout/>
        </section>
        <section>
          <ShortWorks/>
        </section>
        <section/>


      </>
  );
};

export default HomePage;
