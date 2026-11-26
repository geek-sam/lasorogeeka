import Hero from "../components/sections/home/Hero";
import Introduction from "../components/sections/home/Introduction";
import Recognition from "../components/sections/home/Recognition";
import Services from "../components/sections/common/Services";
import FAQ from "../components/sections/common/FAQ";

const Homepage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      {/* Thsis is home page */}
      <Hero />
      <Introduction />
      <Services />
      <Recognition />
      <FAQ />
    </>
  );
};

export default Homepage;
