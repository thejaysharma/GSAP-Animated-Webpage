import About from "@/components/About";
import AheadApp from "@/components/AheadApp";
import FamiliarCards from "@/components/FamiliarCards";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import LandingInfo from "@/components/LandingInfo";
import MyInfo from "@/components/MyInfo";
import Nav from "@/components/Nav";
import SelfImprovement from "@/components/SelfImprovement";
import SocialSkillsRating from "@/components/SocialSkillsRating";
import Test from "@/components/Test";
import Vacancies from "@/components/Vacancies";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="px-20 pt-20 overflow-hidden ">
        <Landing />
        <LandingInfo />
        <FamiliarCards />
        <AheadApp />
        <SelfImprovement />
        <MyInfo />
        <SocialSkillsRating />
        <Test />
        <About />
        <Vacancies />
        <Footer />
      </div>
    </div>
  );
}
