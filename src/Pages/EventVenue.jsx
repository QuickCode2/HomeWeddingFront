import React from "react";
import Footer from "../Components/Footer/Footer";
import EventVenue from "../Components/VanueLocation/EventVenue";
import RSVP from "../Components/VanueLocation/RSVP";


const EventVenuePage = () => {
  return (
    <>
        <EventVenue />
        <RSVP />
        <Footer />
    </>
  );
};

export default EventVenuePage;