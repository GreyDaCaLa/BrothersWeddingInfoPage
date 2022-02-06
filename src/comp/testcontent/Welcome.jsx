import "./css/styles.css";
import "./css/SelfStyle.css";



const Welcome = ({setPage}) => {
    return (
      <div className="Self_LandingBody">
        {/* Navigation */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Language/Lenguage</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"><a class="nav-link" onClick={()=>{setPage('en')}}>English</a></li>
                        <li class="nav-item"><a class="nav-link" onClick={()=>{setPage('sp')}}>Espanol</a></li>
                        {/* <!-- <li class="nav-item"><a class="nav-link" href="#!">Services</a></li> -->
                        <!-- <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li> --> */}
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Page Content--> */}
        <section>
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-6 Self_LandingText">
                        <h1 class="mt-2 Self_LandingText">{`Loanna & Gregorio's Wedding`}</h1>
                        <p>Attendance Information Site</p>
                    </div>
                </div>
            </div>
        </section>

      </div>
    );
  };
  
  export default Welcome;
  
