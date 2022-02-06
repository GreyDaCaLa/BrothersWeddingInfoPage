import "./css/styles.css";
import "./css/SelfStyle.css";
import HeaderRSVP_EN from "../TextContent/English/HeaderRSVP_EN";
import HeaderRSVP_SP from "../TextContent/Spanish/HeaderRSVP_SP";
import BookingYourStay_EN from "../TextContent/English/BookingYourStay/BookingYourStay-EN";
import BookingYourStay_SP from "../TextContent/Spanish/BookingYourStay/BookingYourStay-SP";
import StayingAtDM_EN from "../TextContent/English/StayingAtDM/StayingAtDM-EN";
import StayingAtDM_SP from "../TextContent/Spanish/StayingAtDM/StayingAtDM-SP";
import Activities_EN from "../TextContent/English/Activities/Activities-EN";
import Activities_SP from "../TextContent/Spanish/Activities/Activities-SP";
import BookingFlight_EN from "../TextContent/English/BookingFlight/BookingFlight-EN";
import BookingFlight_SP from "../TextContent/Spanish/BookingFlight/BookingFlight-SP";
import RSVPAdditional_EN from "../TextContent/English/RSVPandAdditional/RSVPAdditional-EN";
import RSVPAdditional_SP from "../TextContent/Spanish/RSVPandAdditional/RSVPAdditional-SP";

// BookingYourStay
// StayingAtDM
// Activities
// BookingFlight
// RSVPAdditional

const ContentPages = ({lan,setPage}) => {


  function chooseLAN(){
    return lan=='sp';
    // return true;
  }

  return (
    <>
      {/* <!-- Navigation--> */}
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <div class="container px-4">
          <a class="navbar-brand" onClick={()=>{setPage('')}} >{`L&G's Wedding`}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">



              <li class="nav-item">
                <a class="nav-link" href="#BookingYourStay">
                  {chooseLAN()?"Reservando su estadia":"BookingYourStay"}
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#StayingAtDM"> 
                {chooseLAN()?"Alojamiento en el Dreams Macao":"StayingAtDM"}
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#Activities">
                {chooseLAN()?"Actividades":"Activities"}
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#BookingFlight">
                {chooseLAN()?"Compra de Vuelo":"BookingFlight"}
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#RSVPAdditional">
                {chooseLAN()?"Información Adicional":"Additional Info"}
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#toptop">
                    RSVP
                </a>
              </li>



            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Header--> */}
      <header id="toptop" class="Self_ContHS bg-gradient text-white">
        <div class="container px-4 text-center">
          {chooseLAN()?<HeaderRSVP_SP/>:<HeaderRSVP_EN/>}
        </div>
      </header>

      {/* BookingYourStay */}
      <section id="BookingYourStay" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
            {chooseLAN()?<BookingYourStay_SP/>:<BookingYourStay_EN/>}
            </div>
          </div>
        </div>
      </section>

      {/* StayingAtDM */}
      <section id="StayingAtDM" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
            {chooseLAN()?<StayingAtDM_SP/>:<StayingAtDM_EN/>}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="Activities" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
              {chooseLAN()?<Activities_SP/>:<Activities_EN/>}
            </div>
          </div>
        </div>
      </section>

      {/* BookingFlight */}
      <section id="BookingFlight" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
            {chooseLAN()?<BookingFlight_SP/>:<BookingFlight_EN/>}
            </div>
          </div>
        </div>
      </section>

      {/* RSVPAdditional */}
      <section id="RSVPAdditional" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
            {chooseLAN()?<RSVPAdditional_SP/>:<RSVPAdditional_EN/>}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer--> */}
      <footer class="py-5 bg-dark">
        <div class="container px-4"></div>
      </footer>
    </>
  );
};

export default ContentPages;
