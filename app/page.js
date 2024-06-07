import { navs } from "./static_data";
import Banner from "@/src/sections/banner";
import Footer from "@/src/sections/footer";
import Custom_nav from "@/src/sections/nav";
import Padder from "@/src/components/padder";
import Contact_us_today from "@/src/sections/contact_us";

const Home = async ({}) => {
  return (
    <div id="main-wrapper">
      <Custom_nav navs_data={{ navs }} />
      {/* <Padder /> */}

      <Banner />

      <Contact_us_today />

      <Footer />
    </div>
  );
};

export default Home;
