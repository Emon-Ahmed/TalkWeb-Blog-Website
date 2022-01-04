import React from "react";
import Contact from "../AboutAndContact/Contact/Contact";
import Faq from "../Faq/Faq";
import Posts from "../HomeNastedRoutes/Posts/Posts/Posts";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../TermsOfUse/TermsOfUse";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Posts></Posts>
      <Faq></Faq>
      <PrivacyPolicy></PrivacyPolicy>
      <TermsOfUse></TermsOfUse>
      <Contact></Contact>
    </div>
  );
};

export default Home;
