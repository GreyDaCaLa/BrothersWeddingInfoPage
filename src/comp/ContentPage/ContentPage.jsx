import "./css/styles.css";
import "./css/SelfStyle.css";
import BookingYourStay from "../TextContent/English/BookingYourStay/BookingYourStay";
import StayingAtDM from "../TextContent/English/StayingAtDM/StayingAtDM";
import Activities from "../TextContent/English/Activities/Activites";
import BookingFlight from "../TextContent/English/BookingFlight/BookingFlight";
import RSVPAdditional from "../TextContent/English/RSVPandAdditional/RSVPAdditional";

// BookingYourStay
// StayingAtDM
// Activities
// BookingFlight
// RSVPAdditional

const ContentPages = ({len,setPage}) => {
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
                  BookingYourStay
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#StayingAtDM"> 
                  StayingAtDM 
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#Activities">
                  Activities
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#BookingFlight">
                BookingFlight
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#RSVPAdditional">
                    Additional Info
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
          <h1 class="fw-bolder">We Hope You Can Attend!!</h1>
          <p class="lead">
            Below we have information to help you make that decision.
          </p>
          <p class="lead">
            If You Made up your mind and plan on coming then please RSVP on our
            WithJOY site below.
          </p>
          <a
            class="btn btn-outline-light"
            href="https://withjoy.com/loanna-and-gregorio/welcome"
          >
            I Want to RSVP
          </a>
        </div>
      </header>

      {/* BookingYourStay */}
      <section id="BookingYourStay" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
              <BookingYourStay />
            </div>
          </div>
        </div>
      </section>

      {/* StayingAtDM */}
      <section id="StayingAtDM" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
              <StayingAtDM />
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="Activities" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
              <Activities />
            </div>
          </div>
        </div>
      </section>

      {/* BookingFlight */}
      <section id="BookingFlight" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
              <BookingFlight />
            </div>
          </div>
        </div>
      </section>

      {/* RSVPAdditional */}
      <section id="RSVPAdditional" className="bg-lg bg-gradient">
        <div class="container px-4 ">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-10">
              <RSVPAdditional />
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
