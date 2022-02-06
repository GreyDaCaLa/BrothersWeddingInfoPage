const Activities_EN = () => {
  return (
    <>
      <div className="Self_head1 text-center">
        <u>Activities</u>
      </div>

      <div className="Self_TextBody">
        The following activities are available in the Punta Cana area. You may
        click on the link below for more information:
      </div>

      <ul className="Self_TextBody">
        <li>Eco Park Punta Cana</li>
        <li>Visit to Islas Saona</li>
        <li>Swimming with Dolphins</li>
        <li>Zip Lines</li>
        <li>Buggys</li>
        <li>Snorkeling</li>
        <li>Nearby city tours</li>
        <li>
          For Information or other options follow the link below{" "}
          <a
            href={`https://www.amstardmc.com/excursions/search-results.33.punta-cana/`}
          >
            <button className="btn btn-primary btn-sm Self-TextBody">CLICK HERE</button>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Activities_EN;
