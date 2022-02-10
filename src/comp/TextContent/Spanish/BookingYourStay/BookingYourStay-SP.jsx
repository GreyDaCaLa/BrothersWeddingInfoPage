const BookingYourStay_SP = () => {
  const dispTable1 = () => {
    return (
      <>
        <table class="table table-bordered border-dark border-5 Self_TableText m-0">
          <tbody>
            <tr>
              {/* <th scope="row">1</th> */}
              <td>$55 - Pase de Boda</td>
              <td>
                (Los invitados pueden llegar una hora antes de la ceremonia
                hasta que finalice la recepción de la boda.)
              </td>
            </tr>
            <tr>
              {/* <th scope="row">2</th> */}
              <td>$79 - Pase de Medio Dia**</td>
              <td>(De 12:00 pm hasta que finalice la recepción de la boda) </td>
            </tr>
            <tr>
              {/* <th scope="row">3</th> */}
              <td>$109 - Pase de Dia Completo**</td>
              <td>(Incluye desayuno, almuerzo y cena.)</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      <div className="Self_TextBody">
        <div className="row m-0 p-0 text-center text-md-end justify-content-center justify-content-md-start">
          <strong className="col-sm-2 p-0 ">Ubicación:</strong>{" "}
          <span className="col-auto ps-1"> Punta Cana, Dominican Republic</span>
        </div>
        <div className="row m-0 p-0 text-center text-md-end justify-content-center justify-content-md-start">
          <strong className="col-sm-2 p-0">Resort:</strong>{" "}
          <a
            className="col-auto ps-1"
            href={`https://www.dreamsresorts.com.do/`}
            target="_blank"
          >
            Dreams Macao Punta Cana
          </a>
        </div>
        <div className="row m-0 p-0 text-center text-md-end justify-content-center justify-content-md-start">
          <strong className="col-sm-2 p-0">Dirección:</strong>{" "}
          <span className="col-10 ps-1 text-md-start">
            {" "}
            Playa Macao, Uvero Alto, 23000 Punta Cana, Dominican Republic
          </span>
        </div>
      </div>

      <div className="Self_head1">
        <u>Reservando su estadia </u>
      </div>
      {/* <hr className="m-0"/> */}

      <div className="Self_TextBody">
        Para la boda los invitados tienen dos opciones: hospedarse en el Dreams
        Macao (lugar de la boda) o otro hotel/resort. A continuación pueden
        encontrar más información sobre ambas opciones.
      </div>

      <div className="Self_head1 text-center">
        <u>Otro Resort/Hotel</u>
      </div>

      <div className="Self_TextBody">
        Dreams Macao es donde se llevará a cabo la boda, sin embargo,
        <strong> no es necesario</strong> que se hospede en este resort. Si es
        más conveniente para su presupuesto hospedarse en un hotel/resort más
        económico, hágalo. Solo háganos saber dónde se hospedará.
      </div>

      <div className="Self_TextBody">
        Si deciden hospedarse en otro resort, asegúrese de averiguar con su
        resort un medio de transporte para llegar desde su resort al Dreams
        Macao para el día de la boda. Así que asegúrese de saber la distancia de
        su resort al Dreams Macao para asegurarse de que esté a una distancia
        razonable. Además, también{" "}
        <strong>
          hay una tarifa de pase de un día para aquellos que no se hospedan en
          Dreams Macao{" "}
        </strong>{" "}
        (Esta es la política del hotel, NO es nuestra). A continuación están las
        tres opciones de pases de día que ofrece el Dreams Maco.
      </div>

      <div className="Self_head1 text-center">
        <u>Precios para Pases de Dia</u>
      </div>

      {dispTable1()}

      <div className="Self_TextBody text-center">
        <strong>
          **Si está considerando un pase de medio día o de día completo, tengan
          en cuenta que esas opciones no incluyen el acceso a una habitación
          para cambiarse o guardar sus pertenencias. Tendrán que dejar sus
          pertenencias en un casillero o con alguien que se esté quedando en el
          resort.**
        </strong>
      </div>

      <div className="Self_TextBody">
        No podemos recalcar esto lo suficiente. Comiencen a buscar su hotel y
        vuelo <strong>lo más antes posible</strong>. Esto los ayudará a
        determinar si asistir a nuestra boda es posible para usted. Tenga en
        cuenta que nuestra boda es durante las vacaciones navideñas, que es una
        temporada muy alta y ocupada en la República Dominicana. Debido a esta
        época del año <strong>TODO </strong>
        será más caro.{" "}
        <strong>
          De ninguna manera nos sentiremos mal o nos ofenderemos si no pueden
          asistir
        </strong>
        . Esto es definitivamente costoso y lo entendemos completamente. Sin
        embargo, le prometemos que tendrá unas excelentes vacaciones. Dreams
        Macao es absolutamente hermoso y obtendrá el valor de su dinero. Nos
        hemos alojado en este resort antes. Por eso lo elegimos. Habiendo dicho
        todo esto, si fuéramos ustedes, reservaríamos el resort primero para
        asegurarnos de que tiene seguro el lugar donde se hospedará.
      </div>
    </>
  );
};

export default BookingYourStay_SP;
