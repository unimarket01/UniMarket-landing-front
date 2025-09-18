import React from "react";

import NavBar from '../../../shared/components/NavBar';
import Hero from "../components/Hero";
import WhatIsUnimarket from "../components/WhatIsUnimarket";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import JoinWaitlistForm from "../components/joinWaitlistForm";
import Footer from "../components/Footer";


const Home: React.FC = () => {
    return(
        <div>
        <NavBar />
        <Hero />
        <WhatIsUnimarket />
        <HowItWorks />
        <Benefits />
        <JoinWaitlistForm />
        <Footer />
        </div>
    )

}
export default Home;

