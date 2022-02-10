const Activities_SP = () => {
  return (
    <>
      <div className="Self_head1 text-center">
        <u>Actividades</u>
      </div>

      <div className="Self_TextBody">
      Las siguientes actividades están disponibles en el área de Punta Cana. Puede hacer clic en el siguiente enlace para obtener más información:
      </div>

      <ul className="Self_TextBody">
        <li>Ecoparque Punta Cana</li>
        <li>Visita a la Isla Saona</li>
        <li>Nadando con delfines</li>
        <li>Zipline</li>
        <li>Buggys</li>
        <li>Bucear</li>
        <li>Visitas a la ciudad cercana</li>
        <li>
        Para obtener mas información o otras opciones,{" "}
          <a
          target="_blank"
            href={`https://www.amstardmc.com/excursions/search-results.33.punta-cana/`}
          >
            <button className="btn btn-primary btn-sm Self-TextBody">CLIC AQUI</button>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Activities_SP;
