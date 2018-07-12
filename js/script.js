var map;

require(["esri/map",
    "esri/geometry/Point",
    "esri/tasks/QueryTask",
    "esri/tasks/query",
    "dojo/domReady!"
  ],

  function(Map,
    Point,
    QueryTask,
    Query) {

    var pt = new Point(-3.70325, 40.4167);

    map = new Map("map", {
      center: pt,
      basemap: "national-geographic",
      zoom: 9
    });


    //Definicion de las variables que hacen llamada a los elementos html a traves del id.
    //Elementos de Widgets
    var btnConsultas = document.getElementById("btnConsultas");
    var menuConsultas = document.getElementById("menuConsultas");
    var btnServiceAreas = document.getElementById("btnServiceAreas");
    var menuServiceAreas = document.getElementById("menuServiceAreas");
    //Elementos de Transacciones
    var btnComprar = document.getElementById("comprar");
    var labelComprar = document.getElementById("labelComprar");
    var btnAlquilar = document.getElementById("alquilar");
    var labelAlquilar = document.getElementById("labelAlquilar");
    //Elementos de Tipos de inmuebles
    var viviendas = document.getElementById("viviendas");
    var labelViviendas = document.getElementById("labelViviendas");
    var habitaciones = document.getElementById("habitaciones");
    var labelHabitaciones = document.getElementById("labelHabitaciones");
    var oficinas = document.getElementById("oficinas");
    var labelOficinas = document.getElementById("labelOficinas");
    var locales = document.getElementById("locales");
    var labelLocales = document.getElementById("labelLocales");
    var terrenos = document.getElementById("terrenos");
    var labelTerrenos = document.getElementById("labelTerrenos");
    var trasteros = document.getElementById("trasteros");
    var labelTrasteros = document.getElementById("labelTrasteros");
    var garajes = document.getElementById("garajes");
    var labelGarajes = document.getElementById("labelGarajes");
    //Elementos de Subtipos de Inmuebles
    // -> Elementos de Tipos de Viviendas
    var subTipoViviendas = document.getElementById("SubTipoViviendas");
    var subtipoVivienda1 = document.getElementById("subtipoVivienda1");
    var btnPiso = document.getElementById("btnPiso");
    var subtipoVivienda2 = document.getElementById("subtipoVivienda2");
    var btnChalet = document.getElementById("btnChalet");
    var subtipoVivienda3 = document.getElementById("subtipoVivienda3");
    var btnCasa = document.getElementById("btnCasa");
    var subtipoVivienda4 = document.getElementById("subtipoVivienda4");
    var btnDuplex = document.getElementById("btnDuplex");
    var subtipoVivienda5 = document.getElementById("subtipoVivienda5");
    var btnAtico = document.getElementById("btnAtico");
    // -> Elementos de Tipos de Locales
    var subTipoLocales = document.getElementById("SubTipoLocales");
    var subtipoLocal1 = document.getElementById("subtipoLocal1");
    var btnLocal = document.getElementById("btnLocal");
    var subtipoLocal2 = document.getElementById("subtipoLocal2");
    var btnNave = document.getElementById("btnNave");
    // -> Elementos de Tipos de Terrenos
    var subTipoTerrenos = document.getElementById("SubTipoTerrenos");
    var subtipoTerreno1 = document.getElementById("subtipoTerreno1");
    var btnUrbano = document.getElementById("btnUrbano");
    var subtipoTerreno2 = document.getElementById("subtipoTerreno2");
    var btnRural = document.getElementById("btnRural");
    //Elementos de Precios de Inmuebles
    var precioInmuebles = document.getElementById("PrecioInmuebles");
    var precioVentaViviendasDesde = document.getElementById("precio-venta-viviendas-desde");
    var precioVentaViviendasHasta = document.getElementById("precio-venta-viviendas-hasta");
    var precioAlquilerViviendasDesde = document.getElementById("precio-alquiler-viviendas-desde");
    var precioAlquilerViviendasHasta = document.getElementById("precio-alquiler-viviendas-hasta");
    var precioVentaOficinasDesde = document.getElementById("precio-venta-oficinas-desde");
    var precioVentaOficinasHasta = document.getElementById("precio-venta-oficinas-hasta");
    var precioAlquilerOficinasDesde = document.getElementById("precio-alquiler-oficinas-desde");
    var precioAlquilerOficinasHasta = document.getElementById("precio-alquiler-oficinas-hasta");
    var precioVentaLocalesDesde = document.getElementById("precio-venta-locales-desde");
    var precioVentaLocalesHasta = document.getElementById("precio-venta-locales-hasta");
    var precioAlquilerLocalesDesde = document.getElementById("precio-alquiler-locales-desde");
    var precioAlquilerLocalesHasta = document.getElementById("precio-alquiler-locales-hasta");
    var precioVentaOficinasDesde = document.getElementById("precio-venta-oficinas-desde");
    var precioVentaOficinasHasta = document.getElementById("precio-venta-oficinas-hasta");
    var precioAlquilerOficinasDesde = document.getElementById("precio-alquiler-oficinas-desde");
    var precioAlquilerOficinasHasta = document.getElementById("precio-alquiler-oficinas-hasta");
    var precioVentaTerrenosDesde = document.getElementById("precio-venta-terrenos-desde");
    var precioVentaTerrenosHasta = document.getElementById("precio-venta-terrenos-hasta");
    var precioAlquilerTerrenosDesde = document.getElementById("precio-alquiler-terrenos-desde");
    var precioAlquilerTerrenosHasta = document.getElementById("precio-alquiler-terrenos-hasta");
    var precioVentaTrasterosDesde = document.getElementById("precio-venta-trasteros-desde");
    var precioVentaTrasterosHasta = document.getElementById("precio-venta-trasteros-hasta");
    var precioAlquilerTrasterosDesde = document.getElementById("precio-alquiler-trasteros-desde");
    var precioAlquilerTrasterosHasta = document.getElementById("precio-alquiler-trasteros-hasta");
    var precioVentaGarajesDesde = document.getElementById("precio-venta-garajes-desde");
    var precioVentaGarajesHasta = document.getElementById("precio-venta-garajes-hasta");
    var precioAlquilerGarajesDesde = document.getElementById("precio-alquiler-garajes-desde");
    var precioAlquilerGarajesHasta = document.getElementById("precio-alquiler-garajes-hasta");
    var precioAlquilerHabitacionesDesde = document.getElementById("precio-alquiler-habitaciones-desde");
    var precioAlquilerHabitacionesHasta = document.getElementById("precio-alquiler-habitaciones-hasta");
    //Elementos de Caracteristicas de Inmuebles
    var caracteristicas = document.getElementById("Caracteristicas");
    var caracteristicasViviendas1 = document.getElementById("habitaciones-viviendas");
    var caracteristicasViviendas2 = document.getElementById("aseos-viviendas");
    var caracteristicasViviendas3 = document.getElementById("superficie-viviendas");
    var caracteristicasOficinas = document.getElementById("superficie-oficinas");
    var caracteristicasLocales = document.getElementById("superficie-locales");
    var caracteristicasTerrenos1 = document.getElementById("uso-terrenos");
    var caracteristicasTerrenos2 = document.getElementById("pendiente-terrenos");
    var caracteristicasTerrenos3 = document.getElementById("superficie-terrenos");
    var caracteristicasTrasteros = document.getElementById("superficie-trasteros");
    var caracteristicasGarajes1 = document.getElementById("vehiculo-garajes");
    var caracteristicasGarajes2 = document.getElementById("tamanoVehiculo-garajes");
    var caracteristicasGarajes3 = document.getElementById("numeroPlazas-garajes");
    //Elementos de Antiguedad de Construccion de las Viviendas
    var antiguedadViviendas = document.getElementById("AntiguedadViviendas");
    var subtipoAntiguedad1 = document.getElementById("subtipoAntiguedad1");
    var btnAntiguo = document.getElementById("btnAntiguo");
    var subtipoAntiguedad2 = document.getElementById("subtipoAntiguedad2");
    var btnModerno = document.getElementById("btnModerno");
    var subtipoAntiguedad3 = document.getElementById("subtipoAntiguedad3");
    var btnObranueva = document.getElementById("btnObranueva");
    //Elementos de Estado de Inmuebles
    var estado = document.getElementById("EstadoInmuebles");
    var subtipoEstado1 = document.getElementById("subtipoEstado1");
    var btnNuevo = document.getElementById("btnNuevo");
    var subtipoEstado2 = document.getElementById("subtipoEstado2");
    var btnCasinuevo = document.getElementById("btnCasinuevo");
    var subtipoEstado3 = document.getElementById("subtipoEstado3");
    var btnMuybien = document.getElementById("btnMuybien");
    var subtipoEstado4 = document.getElementById("subtipoEstado4");
    var btnBien = document.getElementById("btnBien");
    var subtipoEstado5 = document.getElementById("subtipoEstado5");
    var btnReformado = document.getElementById("btnReformado");
    var subtipoEstado6 = document.getElementById("subtipoEstado6");
    var btnAreformar = document.getElementById("btnAreformar");
    //Elementos de Extras de Inmuebles
    // -> Elementos de Extras de Viviendas
    var extrasViviendas = document.getElementById("ExtrasViviendas");
    var subtipoExtraVivienda1 = document.getElementById("subtipoExtraVivienda1");
    var btnTerraza = document.getElementById("btnTerraza");
    var subtipoExtraVivienda2 = document.getElementById("subtipoExtraVivienda2");
    var btnJardin = document.getElementById("btnJardin");
    var subtipoExtraVivienda3 = document.getElementById("subtipoExtraVivienda3");
    var btnPiscina = document.getElementById("btnPiscina");
    var subtipoExtraVivienda4 = document.getElementById("subtipoExtraVivienda4");
    var btnParking = document.getElementById("btnParking");
    var subtipoExtraVivienda5 = document.getElementById("subtipoExtraVivienda5");
    var btnTrastero = document.getElementById("btnTrastero");
    var subtipoExtraVivienda6 = document.getElementById("subtipoExtraVivienda6");
    var btnAscensor = document.getElementById("btnAscensor");
    var subtipoExtraVivienda7 = document.getElementById("subtipoExtraVivienda7");
    var btnAmueblado = document.getElementById("btnAmueblado");
    var subtipoExtraVivienda8 = document.getElementById("subtipoExtraVivienda8");
    var btnCalefaccion = document.getElementById("btnCalefaccion");
    // -> Elementos de Extras de Habitaciones
    var extrasHabitaciones = document.getElementById("ExtrasHabitaciones");
    var subtipoExtraHabitaciones1 = document.getElementById("subtipoExtraHabitaciones1");
    var btnAmuebladoHab = document.getElementById("btnAmuebladoHab");
    var subtipoExtraHabitaciones2 = document.getElementById("subtipoExtraHabitaciones2");
    var btnAseosHab = document.getElementById("btnAseosHab");
    // -> Elementos de Extras de Oficinas
    var extrasOficinas = document.getElementById("ExtrasOficinas");
    var subtipoExtraOficinas1 = document.getElementById("subtipoExtraOficinas1");
    var btnParkingOficinas = document.getElementById("btnParkingOficinas");
    // -> Elementos de Extras de Locales
    var extrasLocales = document.getElementById("ExtrasLocales");
    var subtipoExtraLocales1 = document.getElementById("subtipoExtraLocales1");
    var btnParkingLocales = document.getElementById("btnParkingLocales");
    var subtipoExtraLocales2 = document.getElementById("subtipoExtraLocales2");
    var btnCalefaccionLocales = document.getElementById("btnCalefaccionLocales");
    var subtipoExtraLocales3 = document.getElementById("subtipoExtraLocales3");
    var btnAireAcondicionado = document.getElementById("btnAireAcondicionado");
    var subtipoExtraLocales4 = document.getElementById("subtipoExtraLocales4");
    var btnSalidaHumos = document.getElementById("btnSalidaHumos");
    // -> Elementos de Extras de Terrenos
    var extrasTerrenos = document.getElementById("ExtrasTerrenos");
    var subtipoExtraTerrenos1 = document.getElementById("subtipoExtraTerrenos1");
    var btnArbolado = document.getElementById("btnArbolado");
    // -> Elementos de Extras de Trasteros
    var extrasTrasteros = document.getElementById("ExtrasTrasteros");
    var subtipoExtraTrasteros1 = document.getElementById("subtipoExtraTrasteros1");
    var btnVigilancia = document.getElementById("btnVigilancia");
    var subtipoExtraTrasteros2 = document.getElementById("subtipoExtraTrasteros2");
    var btnAcceso = document.getElementById("btnAcceso");
    var subtipoExtraTrasteros3 = document.getElementById("subtipoExtraTrasteros3");
    var btnCargaDescarga = document.getElementById("btnCargaDescarga");
    // -> Elementos de Extras de Garajes
    var extrasGarajes = document.getElementById("ExtrasGarajes");
    var subtipoExtraGarajes1 = document.getElementById("subtipoExtraGarajes1");
    var btnVigilanciaPrivada = document.getElementById("btnVigilanciaPrivada");
    var subtipoExtraGarajes2 = document.getElementById("subtipoExtraGarajes2");
    var btnPuertaAutomatica = document.getElementById("btnPuertaAutomatica");
    //Elemento de Boton de Ejecucion
    var btnEjecutarConsulta = document.getElementById("btnEjecutarConsulta");

    //Variables de los Valores de los Inputs
    // -> Variables de los Valores de los Subtipos de Viviendas
    var valorSubtipoVivienda1;
    var valorSubtipoVivienda2;
    var valorSubtipoVivienda3;
    var valorSubtipoVivienda4;
    var valorSubtipoVivienda5;
    // -> Variables de los Valores de los Subtipos de Locales
    var valorSubtipoLocal1;
    var valorSubtipoLocal2;
    // -> Variables de los Valores de los Subtipos de Terrenos
    var valorSubtipoTerreno1;
    var valorSubtipoTerreno2;
    // -> Variables de los Valores de los Precios de Viviendas
    var valorPrecioDesdeViviendas;
    var valorPrecioHastaViviendas;
    // -> Variables de los Valores de los Precios de Habitaciones
    var valorPrecioDesdeHabitaciones;
    var valorPrecioHastaHabitaciones;
    // -> Variables de los Valores de los Precios de Oficinas
    var valorPrecioDesdeOficinas;
    var valorPrecioHastaOficinas;
    // -> Variables de los Valores de los Precios de Locales
    var valorPrecioDesdeLocales;
    var valorPrecioHastaLocales;
    // -> Variables de los Valores de los Precios de Terrenos
    var valorPrecioDesdeTerrenos;
    var valorPrecioHastaTerrenos;
    // -> Variables de los Valores de los Precios de Trasteros
    var valorPrecioDesdeTrasteros;
    var valorPrecioHastaTrasteros;
    // -> Variables de los Valores de los Precios de Garajes
    var valorPrecioDesdeGarajes;
    var valorPrecioHastaGarajes;
    // -> Variables de los Valores de las Caracteristicas de las Viviendas
    var valorHabitacionesViviendas;
    var valorAseosViviendas;
    var valorSuperficieViviendas;




    ///////////////////////////////////////////////////////////
    //AÑADIR VALORES DEL RESTO DE Inputs///////////////////////
    ///////////////////////////////////////////////////////////





    //Variables de URL de los Servicios de inmuebles
    var urlViviendas = "";
    var urlHabitaciones = "";
    var urlOficinas = "";
    var urlLocales = "";
    var urlTerrenos = "";
    var urlTrasteros = "";
    var urlGarajes = "";
    //Variables de las Query Task de los Servicios de inmuebles
    var qTaskViviendas = new QueryTask(urlViviendas);
    var qTaskHabitaciones = new QueryTask(urlHabitaciones);
    var qTaskOficinas = new QueryTask(urlOficinas);
    var qTaskLocales = new QueryTask(urlLocales);
    var qTaskTerrenos = new QueryTask(urlTerrenos);
    var qTaskTrasteros = new QueryTask(urlTrasteros);
    var qTaskGarajes = new QueryTask(urlGarajes);
    //Variables de las Querys de los Servicios de inmuebles
    var queryViviendas = new Query();
    var queryHabitaciones = new Query();
    var queryOficinas = new Query();
    var queryLocales = new Query();
    var queryTerrenos = new Query();
    var queryTrasteros = new Query();
    var queryGarajes = new Query();


    //Variable de la Graphics Layer
    var graphicsLayer = new GraphicsLayer();
    map.addLayer(graphicsLayer);


    //Eventos asociados a los Widgets
    btnConsultas.onclick = MenuConsultas;
    btnServiceAreas.onclick = MenuServiceAreas;
    //Eventos asociados a las Transacciones
    btnComprar.onclick = SeleccionadoComprar;
    btnAlquilar.onclick = SeleccionadoAlquilar;
    //Eventos asociados a los Tipos de Inmuebles
    viviendas.onclick = SeleccionarTipoTransaccion;
    habitaciones.onclick = SeleccionarTipoTransaccion;
    oficinas.onclick = SeleccionarTipoTransaccion;
    locales.onclick = SeleccionarTipoTransaccion;
    terrenos.onclick = SeleccionarTipoTransaccion;
    trasteros.onclick = SeleccionarTipoTransaccion;
    garajes.onclick = SeleccionarTipoTransaccion;


    //Eventos asociados a los Subtipos de Inmuebles
    // -> Eventos asociados a los Tipos de Viviendas
    btnPiso.onclick = function() {
      ComprobarCheckBoton(btnPiso, subtipoVivienda1);
    };
    btnChalet.onclick = function() {
      ComprobarCheckBoton(btnChalet, subtipoVivienda2);
    };
    btnCasa.onclick = function() {
      ComprobarCheckBoton(btnCasa, subtipoVivienda3);
    };
    btnDuplex.onclick = function() {
      ComprobarCheckBoton(btnDuplex, subtipoVivienda4);
    };
    btnAtico.onclick = function() {
      ComprobarCheckBoton(btnAtico, subtipoVivienda5);
    };
    // -> Eventos asociados a los Tipos de Locales
    btnLocal.onclick = function() {
      ComprobarCheckBoton(btnLocal, subtipoLocal1);
    };
    btnNave.onclick = function() {
      ComprobarCheckBoton(btnNave, subtipoLocal2);
    };
    // -> Eventos asociados a los Tipos de Terrenos
    btnUrbano.onclick = function() {
      ComprobarCheckBoton(btnUrbano, subtipoTerreno1);
    };
    btnRural.onclick = function() {
      ComprobarCheckBoton(btnRural, subtipoTerreno2);
    };
    //Eventos asociados a la Antiguedad de Construccion de las Viviendas
    btnAntiguo.onclick = function() {
      ComprobarCheckBoton(btnAntiguo, subtipoAntiguedad1);
    };
    btnModerno.onclick = function() {
      ComprobarCheckBoton(btnModerno, subtipoAntiguedad2);
    };
    btnObranueva.onclick = function() {
      ComprobarCheckBoton(btnObranueva, subtipoAntiguedad3);
    };
    //Eventos asociados al Estado de Inmuebles
    btnNuevo.onclick = function() {
      ComprobarCheckBoton(btnNuevo, subtipoEstado1);
    };
    btnCasinuevo.onclick = function() {
      ComprobarCheckBoton(btnCasinuevo, subtipoEstado2);
    };
    btnMuybien.onclick = function() {
      ComprobarCheckBoton(btnMuybien, subtipoEstado3);
    };
    btnBien.onclick = function() {
      ComprobarCheckBoton(btnBien, subtipoEstado4);
    };
    btnReformado.onclick = function() {
      ComprobarCheckBoton(btnReformado, subtipoEstado5);
    };
    btnAreformar.onclick = function() {
      ComprobarCheckBoton(btnAreformar, subtipoEstado6);
    };
    //Eventos asociados a los Extras de Inmuebles
    // -> Eventos asociados a los Extras de Viviendas
    btnTerraza.onclick = function() {
      ComprobarCheckBoton(btnTerraza, subtipoExtraVivienda1);
    };
    btnJardin.onclick = function() {
      ComprobarCheckBoton(btnJardin, subtipoExtraVivienda2);
    };
    btnPiscina.onclick = function() {
      ComprobarCheckBoton(btnPiscina, subtipoExtraVivienda3);
    };
    btnParking.onclick = function() {
      ComprobarCheckBoton(btnParking, subtipoExtraVivienda4);
    };
    btnTrastero.onclick = function() {
      ComprobarCheckBoton(btnTrastero, subtipoExtraVivienda5);
    };
    btnAscensor.onclick = function() {
      ComprobarCheckBoton(btnAscensor, subtipoExtraVivienda6);
    };
    btnAmueblado.onclick = function() {
      ComprobarCheckBoton(btnAmueblado, subtipoExtraVivienda7);
    };
    btnCalefaccion.onclick = function() {
      ComprobarCheckBoton(btnCalefaccion, subtipoExtraVivienda8);
    };
    // -> Eventos asociados a los Extras de Habitaciones
    btnAmuebladoHab.onclick = function() {
      ComprobarCheckBoton(btnAmuebladoHab, subtipoExtraHabitaciones1);
    };
    btnAseosHab.onclick = function() {
      ComprobarCheckBoton(btnAseosHab, subtipoExtraHabitaciones2);
    };
    // -> Eventos asociados a los Extras de Oficinas
    btnParkingOficinas.onclick = function() {
      ComprobarCheckBoton(btnParkingOficinas, subtipoExtraOficinas1);
    };
    // -> Eventos asociados a los Extras de Locales
    btnParkingLocales.onclick = function() {
      ComprobarCheckBoton(btnParkingLocales, subtipoExtraLocales1);
    };
    btnCalefaccionLocales.onclick = function() {
      ComprobarCheckBoton(btnCalefaccionLocales, subtipoExtraLocales2);
    };
    btnAireAcondicionado.onclick = function() {
      ComprobarCheckBoton(btnAireAcondicionado, subtipoExtraLocales3);
    };
    btnSalidaHumos.onclick = function() {
      ComprobarCheckBoton(btnSalidaHumos, subtipoExtraLocales4);
    };
    // -> Eventos asociados a los Extras de Terrenos
    btnArbolado.onclick = function() {
      ComprobarCheckBoton(btnArbolado, subtipoExtraTerrenos1);
    };
    // -> Eventos asociados a los Extras de Trasteros
    btnVigilancia.onclick = function() {
      ComprobarCheckBoton(btnVigilancia, subtipoExtraTrasteros1);
    };
    btnAcceso.onclick = function() {
      ComprobarCheckBoton(btnAcceso, subtipoExtraTrasteros2);
    };
    btnCargaDescarga.onclick = function() {
      ComprobarCheckBoton(btnCargaDescarga, subtipoExtraTrasteros3);
    };
    // -> Eventos asociados a los Extras de Garajes
    btnVigilanciaPrivada.onclick = function() {
      ComprobarCheckBoton(btnVigilanciaPrivada, subtipoExtraGarajes1);
    };
    btnPuertaAutomatica.onclick = function() {
      ComprobarCheckBoton(btnPuertaAutomatica, subtipoExtraGarajes2);
    };

    //////////////////////////////////////////////////
    //Evento asociado al Boton de Ejecucion
    //btnEjecutarConsulta.onclick = EjecutarConsulta;
    //////////////////////////////////////////////////


    //Funciones generales de cambio de display
    // -> Funcion general de Mostrar un objeto
    function MuestraObj(obj) {
      obj.style.display = "block";
    };
    // -> Funcion general de Ocultar un objeto
    function OcultaObj(obj) {
      obj.style.display = "none";
    };


    // Funcion general de Comprobar el Check de un Boton
    function ComprobarCheckBoton(btn, obj) {
      if (obj.checked == false) {
        obj.checked = true;
        btn.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        btn.style.color = "#fff";
      } else {
        obj.checked = false;
        btn.style.backgroundColor = "transparent";
        btn.style.color = "#8b8989";
      }
    };


    //Funciones asociadas a los eventos de los elementos de Widgets
    function MenuConsultas() {
      if (menuConsultas.style.display == "block") {
        OcultaObj(menuConsultas);
        btnConsultas.style.backgroundColor = "transparent";
        btnConsultas.style.borderColor = "transparent";
      } else {
        MuestraObj(menuConsultas);
        CambioEstiloBoton("rgba(40, 40, 40, 0.3)", "#000", btnConsultas);
        SeleccionadoComprar();
      }
      if (menuServiceAreas.style.display == "block") {
        OcultaObj(menuServiceAreas);
        btnServiceAreas.style.backgroundColor = "transparent";
        btnServiceAreas.style.borderColor = "transparent";
      }
    };

    function MenuServiceAreas() {
      if (menuServiceAreas.style.display == "block") {
        OcultaObj(menuServiceAreas);
        btnServiceAreas.style.backgroundColor = "transparent";
        btnServiceAreas.style.borderColor = "transparent";
      } else {
        MuestraObj(menuServiceAreas);
        CambioEstiloBoton("rgba(40, 40, 40, 0.3)", "#000", btnServiceAreas);
      }
      if (menuConsultas.style.display == "block") {
        OcultaObj(menuConsultas);
        btnConsultas.style.backgroundColor = "transparent";
        btnConsultas.style.borderColor = "transparent";
      }
    };


    function CambioEstiloBoton(color, bordercolor, obj) {
      obj.style.backgroundColor = color;
      obj.style.borderColor = bordercolor;
    };


    //Funciones asociadas a los eventos de los elementos de Transacciones
    //Funcion de Seleccionado de Tipo de Transaccion
    function SeleccionarTipoTransaccion() {
      if (btnComprar.checked == true) {
        SeleccionadoComprar();
      }
      if (btnAlquilar.checked == true) {
        SeleccionadoAlquilar();
      }
    };


    //Funcion de Seleccionado de Transaccion de Compra
    function SeleccionadoComprar() {
      if (btnComprar.checked == true) {
        labelComprar.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelComprar.style.color = "#fff";
      } else {
        labelComprar.style.backgroundColor = "transparent";
        labelComprar.style.color = "#8b8989";
      }
      if (btnAlquilar.checked == true) {
        labelAlquilar.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelAlquilar.style.color = "#fff";
      } else {
        labelAlquilar.style.backgroundColor = "transparent";
        labelAlquilar.style.color = "#8b8989";
      }
      if (viviendas.checked == true) {
        labelViviendas.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelViviendas.style.color = "#fff";
        SeleccionadoViviendas();
      } else {
        labelViviendas.style.backgroundColor = "transparent";
        labelViviendas.style.color = "#8b8989";
      }
      if (habitaciones.checked == true) {
        labelHabitaciones.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelHabitaciones.style.color = "#fff";
        SeleccionadoHabitaciones();
      } else {
        labelHabitaciones.style.backgroundColor = "transparent";
        labelHabitaciones.style.color = "#8b8989";
      }
      if (oficinas.checked == true) {
        labelOficinas.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelOficinas.style.color = "#fff";
        SeleccionadoOficinas();
      } else {
        labelOficinas.style.backgroundColor = "transparent";
        labelOficinas.style.color = "#8b8989";
      }
      if (locales.checked == true) {
        labelLocales.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelLocales.style.color = "#fff";
        SeleccionadoLocales();
      } else {
        labelLocales.style.backgroundColor = "transparent";
        labelLocales.style.color = "#8b8989";
      }
      if (terrenos.checked == true) {
        labelTerrenos.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelTerrenos.style.color = "#fff";
        SeleccionadoTerrenos();
      } else {
        labelTerrenos.style.backgroundColor = "transparent";
        labelTerrenos.style.color = "#8b8989";
      }
      if (trasteros.checked == true) {
        labelTrasteros.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelTrasteros.style.color = "#fff";
        SeleccionadoTrasteros();
      } else {
        labelTrasteros.style.backgroundColor = "transparent";
        labelTrasteros.style.color = "#8b8989";
      }
      if (garajes.checked == true) {
        labelGarajes.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelGarajes.style.color = "#fff";
        SeleccionadoGarajes();
      } else {
        labelGarajes.style.backgroundColor = "transparent";
        labelGarajes.style.color = "#8b8989";
      }
    };

    //Funcion de Seleccionado de Transaccion de Alquiler
    function SeleccionadoAlquilar() {
      if (btnComprar.checked == true) {
        labelComprar.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelComprar.style.color = "#fff";
      } else {
        labelComprar.style.backgroundColor = "transparent";
        labelComprar.style.color = "#8b8989";
      }
      if (btnAlquilar.checked == true) {
        labelAlquilar.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelAlquilar.style.color = "#fff";
      } else {
        labelAlquilar.style.backgroundColor = "transparent";
        labelAlquilar.style.color = "#8b8989";
      }
      if (viviendas.checked == true) {
        labelViviendas.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelViviendas.style.color = "#fff";
        SeleccionadoViviendas();
      } else {
        labelViviendas.style.backgroundColor = "transparent";
        labelViviendas.style.color = "#8b8989";
      }
      if (habitaciones.checked == true) {
        labelHabitaciones.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelHabitaciones.style.color = "#fff";
        SeleccionadoHabitaciones();
      } else {
        labelHabitaciones.style.backgroundColor = "transparent";
        labelHabitaciones.style.color = "#8b8989";
      }
      if (oficinas.checked == true) {
        labelOficinas.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelOficinas.style.color = "#fff";
        SeleccionadoOficinas();
      } else {
        labelOficinas.style.backgroundColor = "transparent";
        labelOficinas.style.color = "#8b8989";
      }
      if (locales.checked == true) {
        labelLocales.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelLocales.style.color = "#fff";
        SeleccionadoLocales();
      } else {
        labelLocales.style.backgroundColor = "transparent";
        labelLocales.style.color = "#8b8989";
      }
      if (terrenos.checked == true) {
        labelTerrenos.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelTerrenos.style.color = "#fff";
        SeleccionadoTerrenos();
      } else {
        labelTerrenos.style.backgroundColor = "transparent";
        labelTerrenos.style.color = "#8b8989";
      }
      if (trasteros.checked == true) {
        labelTrasteros.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelTrasteros.style.color = "#fff";
        SeleccionadoTrasteros();
      } else {
        labelTrasteros.style.backgroundColor = "transparent";
        labelTrasteros.style.color = "#8b8989";
      }
      if (garajes.checked == true) {
        labelGarajes.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelGarajes.style.color = "#fff";
        SeleccionadoGarajes();
      } else {
        labelGarajes.style.backgroundColor = "transparent";
        labelGarajes.style.color = "#8b8989";
      }
    };


    //Funciones asociadas a los eventos de los elementos de Tipo de Inmuebles
    //Funcion de Seleccionado de Inmuebles de Tipo Viviendas
    function SeleccionadoViviendas() {
      MuestraObj(subTipoViviendas);
      MuestraObj(antiguedadViviendas);
      MuestraObj(caracteristicasViviendas1);
      MuestraObj(caracteristicasViviendas2);
      MuestraObj(caracteristicasViviendas3);
      MuestraObj(estado);
      MuestraObj(extrasViviendas);
      MuestraObj(btnEjecutarConsulta);
      MuestraObj(precioInmuebles);
      OcultaObj(subTipoLocales);
      OcultaObj(subTipoTerrenos);
      OcultaObj(caracteristicasOficinas);
      OcultaObj(caracteristicasLocales);
      OcultaObj(caracteristicasTerrenos1);
      OcultaObj(caracteristicasTerrenos2);
      OcultaObj(caracteristicasTerrenos3);
      OcultaObj(caracteristicasTrasteros);
      OcultaObj(caracteristicasGarajes1);
      OcultaObj(caracteristicasGarajes2);
      OcultaObj(caracteristicasGarajes3);
      OcultaObj(extrasHabitaciones);
      OcultaObj(extrasOficinas);
      OcultaObj(extrasLocales);
      OcultaObj(extrasTerrenos);
      OcultaObj(extrasTrasteros);
      OcultaObj(extrasGarajes);
      OcultaObj(precioAlquilerHabitacionesDesde);
      OcultaObj(precioAlquilerHabitacionesHasta);
      OcultaObj(precioVentaOficinasDesde);
      OcultaObj(precioVentaOficinasHasta);
      OcultaObj(precioAlquilerOficinasDesde);
      OcultaObj(precioAlquilerOficinasHasta);
      OcultaObj(precioVentaLocalesDesde);
      OcultaObj(precioVentaLocalesHasta);
      OcultaObj(precioAlquilerLocalesDesde);
      OcultaObj(precioAlquilerLocalesHasta);
      OcultaObj(precioVentaTerrenosDesde);
      OcultaObj(precioVentaTerrenosHasta);
      OcultaObj(precioAlquilerTerrenosDesde);
      OcultaObj(precioAlquilerTerrenosHasta);
      OcultaObj(precioVentaTrasterosDesde);
      OcultaObj(precioVentaTrasterosHasta);
      OcultaObj(precioAlquilerTrasterosDesde);
      OcultaObj(precioAlquilerTrasterosHasta);
      OcultaObj(precioVentaGarajesDesde);
      OcultaObj(precioVentaGarajesHasta);
      OcultaObj(precioAlquilerGarajesDesde);
      OcultaObj(precioAlquilerGarajesHasta);
      if (btnComprar.checked == true) {
        MuestraObj(precioVentaViviendasDesde);
        MuestraObj(precioVentaViviendasHasta);
        OcultaObj(precioAlquilerViviendasDesde);
        OcultaObj(precioAlquilerViviendasHasta);
      }
      if (btnAlquilar.checked == true) {
        MuestraObj(precioAlquilerViviendasDesde);
        MuestraObj(precioAlquilerViviendasHasta);
        OcultaObj(precioVentaViviendasDesde);
        OcultaObj(precioVentaViviendasHasta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Habitaciones
    function SeleccionadoHabitaciones() {
      OcultaObj(subTipoViviendas);
      OcultaObj(subTipoLocales);
      OcultaObj(subTipoTerrenos);
      OcultaObj(antiguedadViviendas);
      OcultaObj(caracteristicas);
      OcultaObj(extrasViviendas);
      OcultaObj(extrasOficinas);
      OcultaObj(extrasLocales);
      OcultaObj(extrasTerrenos);
      OcultaObj(extrasTrasteros);
      OcultaObj(extrasGarajes);
      OcultaObj(precioVentaViviendasDesde);
      OcultaObj(precioVentaViviendasHasta);
      OcultaObj(precioAlquilerViviendasDesde);
      OcultaObj(precioAlquilerViviendasHasta);
      OcultaObj(precioVentaOficinasDesde);
      OcultaObj(precioVentaOficinasHasta);
      OcultaObj(precioAlquilerOficinasDesde);
      OcultaObj(precioAlquilerOficinasHasta);
      OcultaObj(precioVentaLocalesDesde);
      OcultaObj(precioVentaLocalesHasta);
      OcultaObj(precioAlquilerLocalesDesde);
      OcultaObj(precioAlquilerLocalesHasta);
      OcultaObj(precioVentaTerrenosDesde);
      OcultaObj(precioVentaTerrenosHasta);
      OcultaObj(precioAlquilerTerrenosDesde);
      OcultaObj(precioAlquilerTerrenosHasta);
      OcultaObj(precioVentaTrasterosDesde);
      OcultaObj(precioVentaTrasterosHasta);
      OcultaObj(precioAlquilerTrasterosDesde);
      OcultaObj(precioAlquilerTrasterosHasta);
      OcultaObj(precioVentaGarajesDesde);
      OcultaObj(precioVentaGarajesHasta);
      OcultaObj(precioAlquilerGarajesDesde);
      OcultaObj(precioAlquilerGarajesHasta);
      if (btnComprar.checked == true) {
        alert("No hay habitaciones en venta");
        OcultaObj(estado);
        OcultaObj(extrasHabitaciones);
        OcultaObj(precioInmuebles);
        OcultaObj(btnEjecutarConsulta);
      }
      if (btnAlquilar.checked == true) {
        MuestraObj(precioAlquilerHabitacionesDesde);
        MuestraObj(precioAlquilerHabitacionesHasta);
        MuestraObj(estado);
        MuestraObj(extrasHabitaciones);
        MuestraObj(precioInmuebles);
        MuestraObj(btnEjecutarConsulta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Oficinas
    function SeleccionadoOficinas() {
      MuestraObj(caracteristicasOficinas);
      MuestraObj(estado);
      MuestraObj(extrasOficinas);
      MuestraObj(precioInmuebles);
      MuestraObj(btnEjecutarConsulta);
      OcultaObj(subTipoViviendas);
      OcultaObj(subTipoLocales);
      OcultaObj(subTipoTerrenos);
      OcultaObj(antiguedadViviendas);
      OcultaObj(caracteristicasViviendas1);
      OcultaObj(caracteristicasViviendas2);
      OcultaObj(caracteristicasViviendas3);
      OcultaObj(caracteristicasLocales);
      OcultaObj(caracteristicasTerrenos1);
      OcultaObj(caracteristicasTerrenos2);
      OcultaObj(caracteristicasTerrenos3);
      OcultaObj(caracteristicasTrasteros);
      OcultaObj(caracteristicasGarajes1);
      OcultaObj(caracteristicasGarajes2);
      OcultaObj(caracteristicasGarajes3);
      OcultaObj(extrasViviendas);
      OcultaObj(extrasHabitaciones);
      OcultaObj(extrasLocales);
      OcultaObj(extrasTerrenos);
      OcultaObj(extrasTrasteros);
      OcultaObj(extrasGarajes);
      OcultaObj(precioVentaViviendasDesde);
      OcultaObj(precioVentaViviendasHasta);
      OcultaObj(precioAlquilerViviendasDesde);
      OcultaObj(precioAlquilerViviendasHasta);
      OcultaObj(precioAlquilerHabitacionesDesde);
      OcultaObj(precioAlquilerHabitacionesHasta);
      OcultaObj(precioVentaLocalesDesde);
      OcultaObj(precioVentaLocalesHasta);
      OcultaObj(precioAlquilerLocalesDesde);
      OcultaObj(precioAlquilerLocalesHasta);
      OcultaObj(precioVentaTerrenosDesde);
      OcultaObj(precioVentaTerrenosHasta);
      OcultaObj(precioAlquilerTerrenosDesde);
      OcultaObj(precioAlquilerTerrenosHasta);
      OcultaObj(precioVentaTrasterosDesde);
      OcultaObj(precioVentaTrasterosHasta);
      OcultaObj(precioAlquilerTrasterosDesde);
      OcultaObj(precioAlquilerTrasterosHasta);
      OcultaObj(precioVentaGarajesDesde);
      OcultaObj(precioVentaGarajesHasta);
      OcultaObj(precioAlquilerGarajesDesde);
      OcultaObj(precioAlquilerGarajesHasta);
      if (btnComprar.checked == true) {
        MuestraObj(precioVentaOficinasDesde);
        MuestraObj(precioVentaOficinasHasta);
        OcultaObj(precioAlquilerOficinasDesde);
        OcultaObj(precioAlquilerOficinasHasta);
      }
      if (btnAlquilar.checked == true) {
        MuestraObj(precioAlquilerOficinasDesde);
        MuestraObj(precioAlquilerOficinasHasta);
        OcultaObj(precioVentaOficinasDesde);
        OcultaObj(precioVentaOficinasHasta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Locales
    function SeleccionadoLocales() {
      MuestraObj(subTipoLocales);
      MuestraObj(caracteristicasLocales);
      MuestraObj(estado);
      MuestraObj(extrasLocales);
      MuestraObj(precioInmuebles);
      MuestraObj(btnEjecutarConsulta);
      OcultaObj(subTipoViviendas);
      OcultaObj(subTipoTerrenos);
      OcultaObj(antiguedadViviendas);
      OcultaObj(caracteristicasViviendas1);
      OcultaObj(caracteristicasViviendas2);
      OcultaObj(caracteristicasViviendas3);
      OcultaObj(caracteristicasOficinas);
      OcultaObj(caracteristicasTerrenos1);
      OcultaObj(caracteristicasTerrenos2);
      OcultaObj(caracteristicasTerrenos3);
      OcultaObj(caracteristicasTrasteros);
      OcultaObj(caracteristicasGarajes1);
      OcultaObj(caracteristicasGarajes2);
      OcultaObj(caracteristicasGarajes3);
      OcultaObj(extrasViviendas);
      OcultaObj(extrasHabitaciones);
      OcultaObj(extrasOficinas);
      OcultaObj(extrasTerrenos);
      OcultaObj(extrasTrasteros);
      OcultaObj(extrasGarajes);
      OcultaObj(precioVentaViviendasDesde);
      OcultaObj(precioVentaViviendasHasta);
      OcultaObj(precioAlquilerViviendasDesde);
      OcultaObj(precioAlquilerViviendasHasta);
      OcultaObj(precioAlquilerHabitacionesDesde);
      OcultaObj(precioAlquilerHabitacionesHasta);
      OcultaObj(precioVentaOficinasDesde);
      OcultaObj(precioVentaOficinasHasta);
      OcultaObj(precioAlquilerOficinasDesde);
      OcultaObj(precioAlquilerOficinasHasta);
      OcultaObj(precioVentaTerrenosDesde);
      OcultaObj(precioVentaTerrenosHasta);
      OcultaObj(precioAlquilerTerrenosDesde);
      OcultaObj(precioAlquilerTerrenosHasta);
      OcultaObj(precioVentaTrasterosDesde);
      OcultaObj(precioVentaTrasterosHasta);
      OcultaObj(precioAlquilerTrasterosDesde);
      OcultaObj(precioAlquilerTrasterosHasta);
      OcultaObj(precioVentaGarajesDesde);
      OcultaObj(precioVentaGarajesHasta);
      OcultaObj(precioAlquilerGarajesDesde);
      OcultaObj(precioAlquilerGarajesHasta);
      if (btnComprar.checked == true) {
        MuestraObj(precioVentaLocalesDesde);
        MuestraObj(precioVentaLocalesHasta);
        OcultaObj(precioAlquilerLocalesDesde);
        OcultaObj(precioAlquilerLocalesHasta);
      }
      if (btnAlquilar.checked == true) {
        MuestraObj(precioAlquilerLocalesDesde);
        MuestraObj(precioAlquilerLocalesHasta);
        OcultaObj(precioVentaLocalesDesde);
        OcultaObj(precioVentaLocalesHasta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Terrenos
    function SeleccionadoTerrenos() {
      MuestraObj(subTipoTerrenos);
      MuestraObj(caracteristicasTerrenos1);
      MuestraObj(caracteristicasTerrenos2);
      MuestraObj(caracteristicasTerrenos3);
      MuestraObj(extrasTerrenos);
      MuestraObj(precioInmuebles);
      MuestraObj(btnEjecutarConsulta);
      OcultaObj(subTipoViviendas);
      OcultaObj(subTipoLocales);
      OcultaObj(antiguedadViviendas);
      OcultaObj(caracteristicasViviendas1);
      OcultaObj(caracteristicasViviendas2);
      OcultaObj(caracteristicasViviendas3);
      OcultaObj(caracteristicasOficinas);
      OcultaObj(caracteristicasLocales);
      OcultaObj(caracteristicasTrasteros);
      OcultaObj(caracteristicasGarajes1);
      OcultaObj(caracteristicasGarajes2);
      OcultaObj(caracteristicasGarajes3);
      OcultaObj(estado);
      OcultaObj(extrasViviendas);
      OcultaObj(extrasHabitaciones);
      OcultaObj(extrasOficinas);
      OcultaObj(extrasLocales);
      OcultaObj(extrasTrasteros);
      OcultaObj(extrasGarajes);
      OcultaObj(precioVentaViviendasDesde);
      OcultaObj(precioVentaViviendasHasta);
      OcultaObj(precioAlquilerViviendasDesde);
      OcultaObj(precioAlquilerViviendasHasta);
      OcultaObj(precioAlquilerHabitacionesDesde);
      OcultaObj(precioAlquilerHabitacionesHasta);
      OcultaObj(precioVentaOficinasDesde);
      OcultaObj(precioVentaOficinasHasta);
      OcultaObj(precioAlquilerOficinasDesde);
      OcultaObj(precioAlquilerOficinasHasta);
      OcultaObj(precioVentaLocalesDesde);
      OcultaObj(precioVentaLocalesHasta);
      OcultaObj(precioAlquilerLocalesDesde);
      OcultaObj(precioAlquilerLocalesHasta);
      OcultaObj(precioVentaTrasterosDesde);
      OcultaObj(precioVentaTrasterosHasta);
      OcultaObj(precioAlquilerTrasterosDesde);
      OcultaObj(precioAlquilerTrasterosHasta);
      OcultaObj(precioVentaGarajesDesde);
      OcultaObj(precioVentaGarajesHasta);
      OcultaObj(precioAlquilerGarajesDesde);
      OcultaObj(precioAlquilerGarajesHasta);
      if (btnComprar.checked == true) {
        MuestraObj(precioVentaTerrenosDesde);
        MuestraObj(precioVentaTerrenosHasta);
        OcultaObj(precioAlquilerTerrenosDesde);
        OcultaObj(precioAlquilerTerrenosHasta);
      }
      if (btnAlquilar.checked == true) {
        MuestraObj(precioAlquilerTerrenosDesde);
        MuestraObj(precioAlquilerTerrenosHasta);
        OcultaObj(precioVentaTerrenosDesde);
        OcultaObj(precioVentaTerrenosHasta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Trasteros
    function SeleccionadoTrasteros() {
      MuestraObj(caracteristicasTrasteros);
      MuestraObj(estado);
      MuestraObj(extrasTrasteros);
      MuestraObj(precioInmuebles);
      MuestraObj(btnEjecutarConsulta);
      OcultaObj(subTipoViviendas);
      OcultaObj(subTipoLocales);
      OcultaObj(subTipoTerrenos);
      OcultaObj(antiguedadViviendas);
      OcultaObj(caracteristicasViviendas1);
      OcultaObj(caracteristicasViviendas2);
      OcultaObj(caracteristicasViviendas3);
      OcultaObj(caracteristicasOficinas);
      OcultaObj(caracteristicasLocales);
      OcultaObj(caracteristicasTerrenos1);
      OcultaObj(caracteristicasTerrenos2);
      OcultaObj(caracteristicasTerrenos3);
      OcultaObj(caracteristicasGarajes1);
      OcultaObj(caracteristicasGarajes2);
      OcultaObj(caracteristicasGarajes3);
      OcultaObj(extrasViviendas);
      OcultaObj(extrasHabitaciones);
      OcultaObj(extrasOficinas);
      OcultaObj(extrasLocales);
      OcultaObj(extrasTerrenos);
      OcultaObj(extrasGarajes);
      OcultaObj(precioVentaViviendasDesde);
      OcultaObj(precioVentaViviendasHasta);
      OcultaObj(precioAlquilerViviendasDesde);
      OcultaObj(precioAlquilerViviendasHasta);
      OcultaObj(precioAlquilerHabitacionesDesde);
      OcultaObj(precioAlquilerHabitacionesHasta);
      OcultaObj(precioVentaOficinasDesde);
      OcultaObj(precioVentaOficinasHasta);
      OcultaObj(precioAlquilerOficinasDesde);
      OcultaObj(precioAlquilerOficinasHasta);
      OcultaObj(precioVentaLocalesDesde);
      OcultaObj(precioVentaLocalesHasta);
      OcultaObj(precioAlquilerLocalesDesde);
      OcultaObj(precioAlquilerLocalesHasta);
      OcultaObj(precioVentaTerrenosDesde);
      OcultaObj(precioVentaTerrenosHasta);
      OcultaObj(precioAlquilerTerrenosDesde);
      OcultaObj(precioAlquilerTerrenosHasta);
      OcultaObj(precioVentaGarajesDesde);
      OcultaObj(precioVentaGarajesHasta);
      OcultaObj(precioAlquilerGarajesDesde);
      OcultaObj(precioAlquilerGarajesHasta);
      if (btnComprar.checked == true) {
        MuestraObj(precioVentaTrasterosDesde);
        MuestraObj(precioVentaTrasterosHasta);
        OcultaObj(precioAlquilerTrasterosDesde);
        OcultaObj(precioAlquilerTrasterosHasta);
      }
      if (btnAlquilar.checked == true) {
        MuestraObj(precioAlquilerTrasterosDesde);
        MuestraObj(precioAlquilerTrasterosHasta);
        OcultaObj(precioVentaTrasterosDesde);
        OcultaObj(precioVentaTrasterosHasta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Garajes
    function SeleccionadoGarajes() {
      MuestraObj(caracteristicasGarajes1);
      MuestraObj(caracteristicasGarajes2);
      MuestraObj(caracteristicasGarajes3);
      MuestraObj(extrasGarajes);
      MuestraObj(precioInmuebles);
      MuestraObj(btnEjecutarConsulta);
      OcultaObj(subTipoViviendas);
      OcultaObj(subTipoLocales);
      OcultaObj(subTipoTerrenos);
      OcultaObj(antiguedadViviendas);
      OcultaObj(caracteristicasViviendas1);
      OcultaObj(caracteristicasViviendas2);
      OcultaObj(caracteristicasViviendas3);
      OcultaObj(caracteristicasOficinas);
      OcultaObj(caracteristicasLocales);
      OcultaObj(caracteristicasTerrenos1);
      OcultaObj(caracteristicasTerrenos2);
      OcultaObj(caracteristicasTerrenos3);
      OcultaObj(caracteristicasTrasteros);
      OcultaObj(estado);
      OcultaObj(extrasViviendas);
      OcultaObj(extrasHabitaciones);
      OcultaObj(extrasOficinas);
      OcultaObj(extrasLocales);
      OcultaObj(extrasTerrenos);
      OcultaObj(extrasTrasteros);
      OcultaObj(precioVentaViviendasDesde);
      OcultaObj(precioVentaViviendasHasta);
      OcultaObj(precioAlquilerViviendasDesde);
      OcultaObj(precioAlquilerViviendasHasta);
      OcultaObj(precioAlquilerHabitacionesDesde);
      OcultaObj(precioAlquilerHabitacionesHasta);
      OcultaObj(precioVentaOficinasDesde);
      OcultaObj(precioVentaOficinasHasta);
      OcultaObj(precioAlquilerOficinasDesde);
      OcultaObj(precioAlquilerOficinasHasta);
      OcultaObj(precioVentaLocalesDesde);
      OcultaObj(precioVentaLocalesHasta);
      OcultaObj(precioAlquilerLocalesDesde);
      OcultaObj(precioAlquilerLocalesHasta);
      OcultaObj(precioVentaTerrenosDesde);
      OcultaObj(precioVentaTerrenosHasta);
      OcultaObj(precioAlquilerTerrenosDesde);
      OcultaObj(precioAlquilerTerrenosHasta);
      OcultaObj(precioVentaTrasterosDesde);
      OcultaObj(precioVentaTrasterosHasta);
      OcultaObj(precioAlquilerTrasterosDesde);
      OcultaObj(precioAlquilerTrasterosHasta);
      if (btnComprar.checked == true) {
        MuestraObj(precioVentaGarajesDesde);
        MuestraObj(precioVentaGarajesHasta);
        OcultaObj(precioAlquilerGarajesDesde);
        OcultaObj(precioAlquilerGarajesHasta);
      }
      if (btnAlquilar.checked == true) {
        MuestraObj(precioAlquilerGarajesDesde);
        MuestraObj(precioAlquilerGarajesHasta);
        OcultaObj(precioVentaGarajesDesde);
        OcultaObj(precioVentaGarajesHasta);
      }
    };


    //Funcion de Ejecucion de la Consulta
    function EjecutarConsulta() {
      graphicsLayer.clear();
      if (btnComprar.checked == true) {
        EjecutarComprar();
      }
      if (btnAlquilar.checked == true) {
        EjecutarAlquilar();
      }
    };


    //Funcion de Ejecucion de Consulta con Tipo de Transaccion Comprar
    function EjecutarComprar() {
      if (viviendas.checked == true) {
        ComprobarBotonesViviendas();
      }
      if (oficinas.checked == true) {
        ComprobarBotonesOficinas();
      }
      if (locales.checked == true) {
        ComprobarBotonesLocales();
      }
      if (terrenos.checked == true) {
        ComprobarBotonesTerrenos();
      }
      if (trasteros.checked == true) {
        ComprobarBotonesTrasteros();
      }
      if (garajes.checked == true) {
        ComprobarBotonesGarajes();
      }
    };

    //Funcion de Ejecucion de Consulta con Tipo de Transaccion Alquilar
    function EjecutarAlquilar() {
      if (viviendas.checked == true) {
        ComprobarBotonesViviendas();
      }
      if (habitaciones.checked == true) {
        ComprobarBotonesHabitaciones();
      }
      if (oficinas.checked == true) {
        ComprobarBotonesOficinas();
      }
      if (locales.checked == true) {
        ComprobarBotonesLocales();
      }
      if (terrenos.checked == true) {
        ComprobarBotonesTerrenos();
      }
      if (trasteros.checked == true) {
        ComprobarBotonesTrasteros();
      }
      if (garajes.checked == true) {
        ComprobarBotonesGarajes();
      }
    };


    //Funcion de Ejecucion de Comprar Viviendas
    function ComprobarBotonesViviendas() {
      // -> Comprobar los Botones de Subtipo de Viviendas para aplicar en la query
      if (subtipoVivienda1.checked == true) {
        valorSubtipoVivienda1 = subtipoVivienda1.value;
      }
      if (subtipoVivienda2.checked == true) {
        valorSubtipoVivienda2 = subtipoVivienda2.value;
      }
      if (subtipoVivienda3.checked == true) {
        valorSubtipoVivienda3 = subtipoVivienda3.value;
      }
      if (subtipoVivienda4.checked == true) {
        valorSubtipoVivienda4 = subtipoVivienda4.value;
      }
      if (subtipoVivienda5.checked == true) {
        valorSubtipoVivienda5 = subtipoVivienda5.value;
      }
      // -> Comprobar los Botones de Antiguedad de Construccion de Viviendas para aplicar en la query
      if (subtipoAntiguedad1.checked == true) {

      }
      if (subtipoAntiguedad2.checked == true) {

      }
      if (subtipoAntiguedad3.checked == true) {

      }
      // -> Comprobar los Botones de Estado de Viviendas para aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Viviendas para aplicar en la query
      if (subtipoExtraVivienda1.checked == true) {

      }
      if (subtipoExtraVivienda2.checked == true) {

      }
      if (subtipoExtraVivienda3.checked == true) {

      }
      if (subtipoExtraVivienda4.checked == true) {

      }
      if (subtipoExtraVivienda5.checked == true) {

      }
      if (subtipoExtraVivienda6.checked == true) {

      }
      if (subtipoExtraVivienda7.checked == true) {

      }
      if (subtipoExtraVivienda8.checked == true) {

      }



      ////////////////////////////////////////////////////////////////////////
      //Los precios y caracteristicas: recoger el .value del obj en la query??
      ////////////////////////////////////////////////////////////////////////



    };

    //Funcion de Ejecucion de Comprar Habitaciones
    function ComprobarBotonesHabitaciones() {
      // -> Comprobar los Botones de Estado de Habitaciones para aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Habitaciones para aplicar en la query
      if (subtipoExtraHabitaciones1.checked == true) {

      }
      if (subtipoExtraHabitaciones2.checked == true) {

      }
    };

    //Funcion de Ejecucion de Comprar Oficinas
    function ComprobarBotonesOficinas() {
      // -> Comprobar los Botones de Estado de Oficinas para aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Oficinas para aplicar en la query
      if (subtipoExtraOficinas1.checked == true) {

      }
    };

    //Funcion de Ejecucion de Comprar Locales
    function ComprobarBotonesLocales() {
      // -> Comprobar los Botones de Subtipo de Locales para aplicar en la query
      if (subtipoLocal1.checked == true) {

      }
      if (subtipoLocal2.checked == true) {

      }
      // -> Comprobar los Botones de Estado de Locales para aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Locales para aplicar en la query
      if (subtipoExtraLocales1.checked == true) {

      }
      if (subtipoExtraLocales2.checked == true) {

      }
      if (subtipoExtraLocales3.checked == true) {

      }
      if (subtipoExtraLocales4.checked == true) {

      }
    };

    //Funcion de Ejecucion de Comprar Terrenos
    function ComprobarBotonesTerrenos() {
      // -> Comprobar los Botones de Subtipo de Terrenos para aplicar en la query
      if (subtipoTerreno1.checked == true) {

      }
      if (subtipoTerreno2.checked == true) {

      }
      // -> Comprobar los Botones de Extras de Terrenos para aplicar en la query
      if (subtipoExtraTerrenos1.checked == true) {

      }
    };

    //Funcion de Ejecucion de Comprar Trasteros
    function ComprobarBotonesTrasteros() {
      // -> Comprobar los Botones de Estado de Trasteros para aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Trasteros para aplicar en la query
      if (subtipoExtraTrasteros1.checked == true) {

      }
      if (subtipoExtraTrasteros2.checked == true) {

      }
      if (subtipoExtraTrasteros3.checked == true) {

      }
    };

    //Funcion de Ejecucion de Comprar Garajes
    function ComprobarBotonesGarajes() {
      // -> Comprobar los Botones de Extras de Garajes para aplicar en la query
      if (subtipoExtraGarajes1.checked == true) {

      }
      if (subtipoExtraGarajes2.checked == true) {

      }
    };


    function ComprobarEstado() {
      if (subtipoEstado1.checked == true) {

      }
      if (subtipoEstado2.checked == true) {

      }
      if (subtipoEstado3.checked == true) {

      }
      if (subtipoEstado4.checked == true) {

      }
      if (subtipoEstado5.checked == true) {

      }
      if (subtipoEstado6.checked == true) {

      }
    };


    //Definir las Querys de los Inmuebles
    // -> Definir la Query de las Viviendas
    queryViviendas.where = "";
    queryViviendas.outFields = ["", "", ""];
    queryViviendas.returnGeometry = true;
    queryViviendas.outSpatialReference = map.spatialReference;
    // -> Definir la Query de las Habitaciones
    queryHabitaciones.where = "";
    queryHabitaciones.outFields = ["", "", ""];
    queryHabitaciones.returnGeometry = true;
    queryHabitaciones.outSpatialReference = map.spatialReference;
    // -> Definir la Query de las Oficinas
    queryOficinas.where = "";
    queryOficinas.outFields = ["", "", ""];
    queryOficinas.returnGeometry = true;
    queryOficinas.outSpatialReference = map.spatialReference;
    // -> Definir la Query de las Locales
    queryLocales.where = "";
    queryLocales.outFields = ["", "", ""];
    queryLocales.returnGeometry = true;
    queryLocales.outSpatialReference = map.spatialReference;
    // -> Definir la Query de las Terrenos
    queryTerrenos.where = "";
    queryTerrenos.outFields = ["", "", ""];
    queryTerrenos.returnGeometry = true;
    queryTerrenos.outSpatialReference = map.spatialReference;
    // -> Definir la Query de las Trasteros
    queryTrasteros.where = "";
    queryTrasteros.outFields = ["", "", ""];
    queryTrasteros.returnGeometry = true;
    queryTrasteros.outSpatialReference = map.spatialReference;
    // -> Definir la Query de las Garajes
    queryGarajes.where = "";
    queryGarajes.outFields = ["", "", ""];
    queryGarajes.returnGeometry = true;
    queryGarajes.outSpatialReference = map.spatialReference;


    //Ejecutar las Query Task de los Inmuebles
    // -> Ejecutar la Query Task de las Viviendas
    qTaskViviendas.execute(queryViviendas, callback);
    // -> Ejecutar la Query Task de las Habitaciones
    qTaskHabitaciones.execute(queryHabitaciones, callback);
    // -> Ejecutar la Query Task de las Oficinas
    qTaskOficinas.execute(queryOficinas, callback);
    // -> Ejecutar la Query Task de las Locales
    qTaskLocales.execute(queryLocales, callback);
    // -> Ejecutar la Query Task de las Terrenos
    qTaskTerrenos.execute(queryTerrenos, callback);
    // -> Ejecutar la Query Task de las Trasteros
    qTaskTrasteros.execute(queryTrasteros, callback);
    // -> Ejecutar la Query Task de las Garajes
    qTaskGarajes.execute(queryGarajes, callback);


    //Funcion de Callback de las Query Task de los Inmuebles
    function callback(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          arrayGraphicos[i].setSymbol(markerPoint);
          graphicLayer.add(arrayGraphicos[i]);
        }
      } else {
        alert("No se han encontrado resultados para los filtros establecidos.");
      };
    };

  });