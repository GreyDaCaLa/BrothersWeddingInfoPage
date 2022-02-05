import "./App.scss";
import BookingYourStay from "./comp/TextContent/English/BookingYourStay/BookingYourStay.jsx";
import StayingAtDM from "./comp/TextContent/English/StayingAtDM/StayingAtDM";
import Activities from "./comp/TextContent/English/Activities/Activites";
import BookingFlight from "./comp/TextContent/English/BookingFlight/BookingFlight";
import RSVPAdditional from "./comp/TextContent/English/RSVPandAdditional/RSVPAdditional";
import Welcome from "./comp/testcontent/Welcome";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import ContentPages from "./comp/ContentPage/ContentPage";

function App() {

  function dispOLD(){
    return(
      <>
      <div className="Self_TitleText" >{`Loanna & Gregorio`} </div>
      <div className="w-100">
        <img src="/images/TheCouple.jpg" alt="" className="w-100" />
      </div>
      <div style={{backgroundColor:"white"}} className="container">

        <BookingYourStay/>
        <StayingAtDM/>
        <Activities/>
        <BookingFlight/>
        <RSVPAdditional/>
      </div>
      </>

    )
  }

  const experiment = true;

function newStuff(){
  return(
    <>
    <BrowserRouter>
        <Routes>
           <Route exact path="/en" element={<ContentPages/>}/>
        </Routes>
        <Routes>
           <Route exact path="/sp" element={<ContentPages/>}/>
        </Routes>
        <Routes>
           <Route exact path="/old" element={dispOLD()}/>
        </Routes>
        <Routes>
           <Route exact path="/" element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}





  return (
    <div className="App">
      {experiment?newStuff():dispOLD()}
    </div>
  );
}

export default App;
