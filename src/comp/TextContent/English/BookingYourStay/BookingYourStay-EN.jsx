const BookingYourStay_EN = () => {


  const dispTable1 = ()=>{
    return(
      <>
      <table class="table table-bordered border-dark border-5 Self_TableText m-0">
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td>$55 - Wedding Pass</td>
      <td>(Guest can arrive one hour before the ceremony until the wedding reception end)</td>
    </tr>
    <tr>
      {/* <th scope="row">2</th> */}
      <td>$79 - Half Day Pass**</td>
      <td>(From 12:00 pm until the wedding reception ends)</td>
    </tr>
    <tr>
      {/* <th scope="row">3</th> */}
      <td>$109 - Full Day Pass**</td>
      <td>(Includes breakfast, lunch and dinner)</td>
    </tr>
  </tbody>
</table>
      </>
    )
  }


  return (
    <>
    
    <div className="Self_TextBody">
        <div className="row m-0 p-0 text-center text-md-end justify-content-center justify-content-md-start">
        <strong className="col-sm-2 p-0 ">Location:</strong> <span className="col-auto ps-1"> Punta Cana, Dominican Republic</span>
        </div>
        <div className="row m-0 p-0 text-center text-md-end justify-content-center justify-content-md-start">
        <strong className="col-sm-2 p-0">Resort:</strong> <a className="col-auto ps-1" href={`https://www.amrcollection.com/en/resorts-hotels/dreams/dominican-republic/macao-beach-punta-cana/?utm_source=gmb&utm_medium=Yext`}>Dreams Macao Punta Cana</a> 
        </div>
        <div className="row m-0 p-0 text-center text-md-end justify-content-center justify-content-md-start">
        <strong className="col-sm-2 p-0">Address:</strong> <span className="col-10 ps-1 text-md-start"> Playa Macao, Uvero Alto, 23000 Punta Cana, Dominican Republic</span>
        </div>
      </div>

      

      <div className="Self_head1"><u>Booking Your Stay</u></div>
      {/* <hr className="m-0"/> */}

      <div className="Self_TextBody">
        For this destination wedding you have two options: Staying at Dreams
        Macao (Wedding location) or another hotel/resort. Below you can find
        more information regarding both options.
      </div>

      

      <div className="Self_head1 text-center">
        <u>Other Hotel/Resort</u>
        </div>
      <div className="Self_TextBody">
        Dreams Macao is where the wedding will happen, however, you <strong> do not</strong> need
        to stay at this resort. If it is more convenient for your budget to stay
        at a more affordable hotel/resort, please do so. Just let us know where
        you will be staying.
      </div>
      <div className="Self_TextBody">
        If you stay at another resort make sure you figure out with your resort
        a means of transportation to get from your resort to Dreams Macao for
        the day of the wedding. So make sure you know the distance of your
        resort to Dreams Macao to make sure it is within reason. Furthermore,
        there is also a <strong>day pass fee for those that are not staying at Dreams
        Macao</strong> (This is hotel policy, NOT our doing). Below are the three day
        pass options that Dreams Macao has to offer:
      </div>
      
      <div className="Self_head1 text-center"><u>Day Pass Fees</u></div>
      
      {dispTable1()}
      

      <div className="Self_TextBody text-center"><strong>
        **If you are considering a Half or Full day pass please be aware that
        those options do not include access to a room to change or keep your
        belongings in. You will either have to leave your belongings in a locker
        or with someone that is staying at the resort.**
      </strong>
      </div>
      
      <div className="Self_TextBody">
        We cannot emphasize this enough. Start looking into pricing of hotel and
        flight ASAP. That will help you determine if attending our wedding is
        doable. Keep in mind our wedding is during the holidays which is a high
        and busy season in the Dominican Republic and you're traveling to the
        Caribbean. <strong>EVERYTHING</strong> will be more expensive due to the time of the
        year. We <strong>WILL NOT</strong> be mad or offended if you <strong>CANNOT</strong> attend. This is
        definitely expensive and we completely understand. However, you are
        getting the vacation of your life we promise you. Dreams Macao is
        absolutely beautiful and you will be getting your money's worth. We have
        stayed at this resort before. Hence why we chose it. With all that being
        said if we were you we would book the resort 1st to make sure you have
        where you are staying secured.
      </div>
    </>
  );
};

export default BookingYourStay_EN;
