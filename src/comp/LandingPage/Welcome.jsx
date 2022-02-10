import "./css/styles.css";
import "./css/SelfStyle.css";



const Welcome = ({setPage}) => {
    return (
      <div className="Self_LandingBody">
        {/* Navigation */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
            <div class="container px-4 px-lg-5">
                <button class="btn btn-outline-light" onClick={()=>{setPage('en')}} >ENGLISH</button>
                <button class="btn btn-outline-light" onClick={()=>{setPage('sp')}} >ESPAÑOL</button>
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
  
