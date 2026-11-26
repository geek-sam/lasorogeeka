import Hero from "../components/sections/home/Hero";
import Introduction from "../components/sections/home/Introduction";
import Recognition from "../components/sections/home/Recognition";
import Services from "../components/sections/common/Services";
import FAQ from "../components/sections/common/FAQ";
import FeaturedProjects from "../components/sections/home/FeaturedProjects";

const Homepage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      {/* Thsis is home page */}
      <Hero />
      <Introduction />
      <Services />
      <FeaturedProjects />
      <Recognition />
      <FAQ />
    </>
  );
};

export default Homepage;
