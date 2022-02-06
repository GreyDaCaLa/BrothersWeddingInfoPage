import "./App.scss";
// import BookingYourStay from "./comp/TextContent/English/BookingYourStay/BookingYourStay.jsx";
// import StayingAtDM from "./comp/TextContent/English/StayingAtDM/StayingAtDM";
// import Activities from "./comp/TextContent/English/Activities/Activites";
// import BookingFlight from "./comp/TextContent/English/BookingFlight/BookingFlight";
// import RSVPAdditional from "./comp/TextContent/English/RSVPandAdditional/RSVPAdditional";
import Welcome from "./comp/LandingPage/Welcome";
import ContentPages from "./comp/ContentPage/ContentPage";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("");

  function newStuff() {
    switch (page) {
      case "en":
        return (<ContentPages lan="en" setPage={setPage} />);
        
      case "sp":
        return (<ContentPages lan="sp" setPage={setPage} />);
        

      default:
        return <Welcome setPage={setPage} />;
    }
  }

  return <div className="App">{newStuff()}</div>;
}

export default App;
