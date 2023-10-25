import Landing from "@/components/Landing";
import LandingInfo from "@/components/LandingInfo";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="px-20 pt-20 overflow-hidden ">
        <Landing />
        <LandingInfo />
      </div>
    </div>
  );
}
