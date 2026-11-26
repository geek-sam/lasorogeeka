import AboutHero from "../components/sections/about/AboutHero";
import OurStory from "../components/sections/about/OurStory";
import Process from "../components/sections/about/Process";
import Team from "../components/sections/about/Team";
import TrustedClients from "../components/sections/about/TrustedClients";
import FAQ from "../components/sections/common/FAQ";
// import Recognition from "../components/sections/home/Recognition";

export default function About() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <Process />
      <TrustedClients />
      <Team />
      <FAQ />
    </div>
  );
}
