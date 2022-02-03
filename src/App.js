import "./App.scss";
import Activities from "./comp/Activities/Activites";
import BookingFlight from "./comp/BookingFlight/BookingFlight";
import BookingYourStay from "./comp/BookingYourStay/BookingYourStay";
import RSVPAdditional from "./comp/RSVPandAdditional/RSVPAdditional";
import StayingAtDM from "./comp/StayingAtDM/StayingAtDM";

function App() {
  return (
    <div className="App">
      <div className="Self_TitleText">{`Loanna & Gregorio`}  </div>
      <div className="w-100">
          <img src="/images/TheCouple.jpg" alt="" className="w-100" />
      </div>
          <div className="container">
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
