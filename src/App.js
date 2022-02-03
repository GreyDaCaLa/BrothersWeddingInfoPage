import "./App.scss";
import Activities from "./comp/Activities/Activites";
import BookingFlight from "./comp/BookingFlight/BookingFlight";
import BookingYourStay from "./comp/BookingYourStay/BookingYourStay";
import RSVPAdditional from "./comp/RSVPandAdditional/RSVPAdditional";
import StayingAtDM from "./comp/StayingAtDM/StayingAtDM";

function App() {
  return (
    <div className="App">
          <div className="container mt-3">
          <BookingYourStay/>
          <StayingAtDM/>
          <Activities/>
          <BookingFlight/>
        <RSVPAdditional/>
        </div>


    </div>
  );
}

export default App;
