import "../../Style/WeddingEvent.css";
import Journey from "../Components/WeddingEvent/Journey"
import Wishes from "../Components/WeddingEvent/Wishes";
import Reception from "../Components/WeddingEvent/Reception"
import Invitation from "../Components/WeddingEvent/Invitation";





const WeddingEvent = () => {
  return (
    <>
      <Invitation />
      <Journey />
      <Reception />
      <Wishes />
    </>
  );
};

export default WeddingEvent;