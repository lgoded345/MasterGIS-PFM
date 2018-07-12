require(["esri/map",
    "esri/layers/FeatureLayer",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/Color",
    "esri/symbols/PictureMarkerSymbol",
    "esri/renderers/UniqueValueRenderer",
    "esri/graphic",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
    "esri/tasks/QueryTask",
    "esri/tasks/query",
    "esri/InfoTemplate",
    "esri/dijit/PopupTemplate",
    "dojo/domReady!"
  ],

  function(Map,
    FeatureLayer,
    SimpleLineSymbol,
    SimpleMarkerSymbol,
    Color,
    PictureMarkerSymbol,
    UniqueValueRenderer,
    graphic,
    GraphicsLayer,
    FeatureLayer,
    QueryTask,
    Query,
    InfoTemplate,
    PopupTemplate) {

    //Definicion de las variables que hacen llamada a los elementos html a traves del id.
    //Elementos del Widget
    var btnConsultas = document.getElementById("btnConsultas");
    var menuConsultas = document.getElementById("menuConsultas");
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
    var precioAlquilerHabitacionesDesde = document.getElementById("precio-alquiler-habitaciones-desde");
    var precioAlquilerHabitacionesHasta = document.getElementById("precio-alquiler-habitaciones-hasta");
    var precioVentaOficinasDesde = document.getElementById("precio-venta-oficinas-desde");
    var precioVentaOficinasHasta = document.getElementById("precio-venta-oficinas-hasta");
    var precioAlquilerOficinasDesde = document.getElementById("precio-alquiler-oficinas-desde");
    var precioAlquilerOficinasHasta = document.getElementById("precio-alquiler-oficinas-hasta");
    var precioVentaLocalesDesde = document.getElementById("precio-venta-locales-desde");
    var precioVentaLocalesHasta = document.getElementById("precio-venta-locales-hasta");
    var precioAlquilerLocalesDesde = document.getElementById("precio-alquiler-locales-desde");
    var precioAlquilerLocalesHasta = document.getElementById("precio-alquiler-locales-hasta");
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
    //Elemento de Leyenda de los Inmuebles
    var legendInmuebles = document.getElementById("legendInmuebles");


    //Variables de Leyenda de los Inmuebles
    var leyendaViviendas = "";
    var leyendaHabitaciones = "";
    var leyendaOficinas = "";
    var leyendaLocales = "";
    var leyendaTerrenos = "";
    var leyendaTrasteros = "";
    var leyendaGarajes = "";

    //Variables de Comprobacion de Inputs Checkeados
    // -> Variable de Comprobacion de Subtipos de Inmuebles
    var sendSubtipo = false;
    // -> Variable de Comprobacion de Caracteristicas de Inmuebles
    var sendHabitaciones = false;
    var sendAseos = false;
    var sendSuperficie = false;
    var sendUsos = false;
    var sendPendiente = false;
    var sendTipoVehiculo = false;
    var sendTamanoVehiculo = false;
    var sendNumeroPlazas = false;
    // -> Variable de Comprobacion de Antiguedad de Viviendas
    var sendAntiguedad = false;
    // -> Variable de Comprobacion de Estado de Inmuebles
    var sendEstado = false;
    // -> Variable de Comprobacion de Extras de Inmuebles
    var sendExtras = false;

    //Variable de Tipo de Operacion
    var tipoOperacion = "Venta";

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
    // -> Variables de los Valores de las Caracteristicas de los Inmuebles
    var valorHabitacionesViviendas;
    var valorAseosViviendas;
    var valorSuperficieViviendas;
    var valorSuperficieOficinas;
    var valorSuperficieLocales;
    var valorUsoTerrenos;
    var valorPendienteTerrenos;
    var valorSuperficieTerrenos;
    var valorSuperficieTrasteros;
    var valorVehiculoGarajes;
    var valorTamanoVehiculoGarajes;
    var valorNumeroPlazasGarajes;
    // -> Variables de los valores de Antiguedad de Construccion de las Viviendas
    var valorSubtipoAntiguedad1;
    var valorSubtipoAntiguedad2;
    var valorSubtipoAntiguedad3;
    // -> Variables de los valores de Estado de los Inmuebles
    var valorSubtipoEstado1;
    var valorSubtipoEstado2;
    var valorSubtipoEstado3;
    var valorSubtipoEstado4;
    var valorSubtipoEstado5;
    var valorSubtipoEstado6;
    // -> Variables de los valores de Extras de las Viviendas
    var valorSubtipoExtraVivienda1;
    var valorSubtipoExtraVivienda2;
    var valorSubtipoExtraVivienda3;
    var valorSubtipoExtraVivienda4;
    var valorSubtipoExtraVivienda5;
    var valorSubtipoExtraVivienda6;
    var valorSubtipoExtraVivienda7;
    var valorSubtipoExtraVivienda8;
    // -> Variables de los valores de Extras de las Habitaciones
    var valorSubtipoExtraHabitaciones1;
    var valorSubtipoExtraHabitaciones2;
    // -> Variables de los valores de Extras de las Oficinas
    var valorSubtipoExtraOficinas1;
    // -> Variables de los valores de Extras de los Locales
    var valorSubtipoExtraLocales1;
    var valorSubtipoExtraLocales2;
    var valorSubtipoExtraLocales3;
    var valorSubtipoExtraLocales4;
    // -> Variables de los valores de Extras de los Terrenos
    var valorSubtipoExtraTerrenos1;
    // -> Variables de los valores de Extras de los Trasteros
    var valorSubtipoExtraTrasteros1;
    var valorSubtipoExtraTrasteros2;
    var valorSubtipoExtraTrasteros3;
    // -> Variables de los valores de Extras de los Garajes
    var valorSubtipoExtraGarajes1;
    var valorSubtipoExtraGarajes2;


    //Variables de URL de los Servicios de inmuebles
    var urlViviendas = "https://localhost:6443/arcgis/rest/services/PropertFy/Inmuebles/MapServer/0";
    var urlHabitaciones = "https://localhost:6443/arcgis/rest/services/PropertFy/Inmuebles/MapServer/5";
    var urlOficinas = "https://localhost:6443/arcgis/rest/services/PropertFy/Inmuebles/MapServer/3";
    var urlLocales = "https://localhost:6443/arcgis/rest/services/PropertFy/Inmuebles/MapServer/4";
    var urlTerrenos = "https://localhost:6443/arcgis/rest/services/PropertFy/Inmuebles/MapServer/2";
    var urlTrasteros = "https://localhost:6443/arcgis/rest/services/PropertFy/Inmuebles/MapServer/1";
    var urlGarajes = "https://localhost:6443/arcgis/rest/services/PropertFy/Inmuebles/MapServer/6";


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


    //Variables de las InfoTemplate de los Inmuebles
    // -> Variables de InfoTemplate de las Viviendas
    var infoTempViviendasVenta = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/fApUWc/anuncio_Piso.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> ${tipo}<hr>" +
      "<h4>Titulo:</h4> ${nombre}<hr>" +
      "<h4>Precio:</h4> ${precio} €<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Superficie:</h4> ${superficie} m2<hr>" +
      "<h4>Numero de habitaciones:</h4> ${num_hab}<hr>" +
      "<h4>Numero de plantas:</h4> ${num_plantas}<hr>" +
      "<h4>Numero de baños:</h4> ${num_aseos}<hr>" +
      "<h4>Estado:</h4> ${estado}<hr>" +
      "<h4>Antigüedad de construcción:</h4> ${antig_constru}<hr>" +
      "<h4>Contacto:</h4><br><div class='btnContacto'><button class='btnCntact'><img width='50px' src='https://image.ibb.co/igkdrc/icono_contacto.png'></button></div>");


    var infoTempViviendasAlquiler = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/fApUWc/anuncio_Piso.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> ${tipo}<hr>" +
      "<h4>Titulo:</h4> ${nombre}<hr>" +
      "<h4>Precio:</h4> ${precio} €/mes<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Superficie:</h4> ${superficie} m2<hr>" +
      "<h4>Numero de habitaciones:</h4> ${num_hab}<hr>" +
      "<h4>Numero de plantas:</h4> ${num_plantas}<hr>" +
      "<h4>Numero de baños:</h4> ${num_aseos}<hr>" +
      "<h4>Estado:</h4> ${estado}<hr>" +
      "<h4>Antigüedad de construcción:</h4> ${antig_constru}" +
      "<h4>Contacto:</h4><br><div class='btnContacto'><button class='btnCntact'><img width='50px' src='https://image.ibb.co/igkdrc/icono_contacto.png'></button></div>");
    // -> Variables de InfoTemplate de las Habitaciones
    var infoTempHabitaciones = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/nL78rc/anuncio_Habitacion.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> Habitación<hr>" +
      "<h4>Titulo:</h4> ${nombre}<hr>" +
      "<h4>Precio:</h4> ${precio} €/mes<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Habitaciones disponibles en la vivienda:</h4> ${habitaciones}<hr>" +
      "<h4>Compañeros de la vivienda:</h4> ${companeros}<hr>" +
      "<h4>Superficie:</h4> ${superficie} m2<hr>" +
      "<h4>Estado:</h4> ${estado}<hr>" +
      "<h4>Contacto:</h4><br><div class='btnContacto'><button class='btnCntact'><img width='50px' src='https://image.ibb.co/igkdrc/icono_contacto.png'></button></div>");
    // -> Variable de la InfoTemplate de las Oficinas
    var infoTempOficinasVenta = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/dPrCHH/anuncio_Oficina.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> Oficina<hr>" +
      "<h4>Titulo:</h4> ${titulo}<hr>" +
      "<h4>Precio:</h4> ${precio} €<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Superficie:</h4> ${superficie} m2<hr>" +
      "<h4>Estado:</h4> ${estado}<hr>" +
      "<h4>Contacto:</h4><br><div class='btnContacto'><button class='btnCntact'><img width='50px' src='https://image.ibb.co/igkdrc/icono_contacto.png'></button></div>");
    var infoTempOficinasAlquiler = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/dPrCHH/anuncio_Oficina.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> Oficina<hr>" +
      "<h4>Titulo:</h4> ${titulo}<hr>" +
      "<h4>Precio:</h4> ${precio} €/mes<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Superficie:</h4> ${superficie} m2<hr>" +
      "<h4>Estado:</h4> ${estado}<hr>");
    // -> Variable de la InfoTemplate de las Locales
    var infoTempLocalesVenta = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/hbzzxH/anuncio_Local.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> ${tipo}<hr>" +
      "<h4>Titulo:</h4> ${titulo}<hr>" +
      "<h4>Precio:</h4> ${precio} €<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Numero de plantas:</h4> ${num_plantas}<hr>" +
      "<h4>Superficie:</h4> ${superfice} m2<hr>" +
      "<h4>Precio/Superficie:</h4> ${precio_superficie} €/m2<hr>" +
      "<h4>Estado:</h4> ${estado}<hr>" +
      "<h4>Contacto:</h4><br><div class='btnContacto'><button class='btnCntact'><img width='50px' src='https://image.ibb.co/igkdrc/icono_contacto.png'></button></div>");
    var infoTempLocalesAlquiler = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/hbzzxH/anuncio_Local.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> ${tipo}<hr>" +
      "<h4>Titulo:</h4> ${titulo}<hr>" +
      "<h4>Precio:</h4> ${precio} €/mes<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Numero de plantas:</h4> ${num_plantas}<hr>" +
      "<h4>Superficie:</h4> ${superfice} m2<hr>" +
      "<h4>Precio/Superficie:</h4> ${precio_superficie} €/m2<hr>" +
      "<h4>Estado:</h4> ${estado}<hr>" +
      "<h4>Contacto:</h4><br><div class='btnContacto'><button class='btnCntact'><img width='50px' src='https://image.ibb.co/igkdrc/icono_contacto.png'></button></div>");
    // -> Variable de la InfoTemplate de las Terrenos
    var infoTempTerrenosVenta = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/nH2xjx/anuncio_Terreno.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> Terreno ${uso}<hr>" +
      "<h4>Titulo:</h4> ${nombre}<hr>" +
      "<h4>Precio:</h4> ${precio} €<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Superficie:</h4> ${superficie} m2<hr>" +
      "<h4>Pendiente:</h4> ${pendiente}<hr>");
    var infoTempTerrenosAlquiler = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/nH2xjx/anuncio_Terreno.jpgg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> Terreno ${uso}<hr>" +
      "<h4>Titulo:</h4> ${nombre}<hr>" +
      "<h4>Precio:</h4> ${precio} €/mes<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Superficie:</h4> ${superficie} m2<hr>" +
      "<h4>Pendiente:</h4> ${pendiente}<hr>" +
      "<h4>Contacto:</h4><br><div class='btnContacto'><button class='btnCntact'><img width='50px' src='https://image.ibb.co/igkdrc/icono_contacto.png'></button></div>");
    // -> Variable de la InfoTemplate de las Trasteros
    var infoTempTrasterosVenta = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/iRKMBc/anuncio_Trastero.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> Trastero<hr>" +
      "<h4>Titulo:</h4> ${nombre}<hr>" +
      "<h4>Precio:</h4> ${precio} €<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Superficie:</h4> ${superficie} m2<hr>" +
      "<h4>Dimensiones:</h4> ${dimensiones} m<hr>" +
      "<h4>Estado:</h4> ${estado}<hr>");
    var infoTempTrasterosAlquiler = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/iRKMBc/anuncio_Trastero.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> Trastero<hr>" +
      "<h4>Titulo:</h4> ${nombre}<hr>" +
      "<h4>Precio:</h4> ${precio} €/mes<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Superficie:</h4> ${superficie} m2<hr>" +
      "<h4>Dimensiones:</h4> ${dimensiones} m<hr>" +
      "<h4>Estado:</h4> ${estado}<hr>" +
      "<h4>Contacto:</h4><br><div class='btnContacto'><button class='btnCntact'><img width='50px' src='https://image.ibb.co/igkdrc/icono_contacto.png'></button></div>");
    // -> Variable de la InfoTemplate de las Garajes
    var infoTempGarajesVenta = new InfoTemplate("<h3>Características del inmueble</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/e74orc/anuncio_Garaje.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> Garaje<hr>" +
      "<h4>Titulo:</h4> ${titulo}<hr>" +
      "<h4>Precio:</h4> ${precio} €<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Número de plazas:</h4> ${numero_plazas}<hr>" +
      "<h4>Capacidad para:</h4> ${tipo_vehiculo}<hr>" +
      "<h4>Tamaño del vehículo:</h4> ${tamaño_vehiculo}<hr>");
    var infoTempGarajesAlquiler = new InfoTemplate("<h3>Características de la vivienda</h3>",
      "<div class='imgInfoTemp'><img width='240px' src='https://image.ibb.co/e74orc/anuncio_Garaje.jpg'></div><hr>" +
      "<h4>Tipo de inmueble:</h4> Garaje<hr>" +
      "<h4>Titulo:</h4> ${titulo}<hr>" +
      "<h4>Precio:</h4> ${precio} €/mes<hr>" +
      "<h4>Dirección:</h4> ${direccion}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}<hr>" +
      "<h4>Número de plazas:</h4> ${numero_plazas}<hr>" +
      "<h4>Capacidad para:</h4> ${tipo_vehiculo}<hr>" +
      "<h4>Tamaño del vehículo:</h4> ${tamaño_vehiculo}<hr>" +
      "<h4>Contacto:</h4><br><div class='btnContacto'><button class='btnCntact'><img width='50px' src='https://image.ibb.co/igkdrc/icono_contacto.png'></button></div>");


    //Variables del Simbolos
    // -> Variable de Simbolo de Piso
    var iconPiso = new PictureMarkerSymbol();
    iconPiso.setHeight(15);
    iconPiso.setWidth(15);
    iconPiso.setUrl("https://image.ibb.co/eWfpjn/piso.png");
    // -> Variable de Simbolo de Chalet
    var iconChalet = new PictureMarkerSymbol();
    iconChalet.setHeight(15);
    iconChalet.setWidth(15);
    iconChalet.setUrl("https://image.ibb.co/n7bJc7/chalet.png");
    // -> Variable de Simbolo de Casa
    var iconCasa = new PictureMarkerSymbol();
    iconCasa.setHeight(15);
    iconCasa.setWidth(15);
    iconCasa.setUrl("https://image.ibb.co/fbzFPn/casaadosada.png");
    // -> Variable de Simbolo de Duplex
    var iconDuplex = new PictureMarkerSymbol();
    iconDuplex.setHeight(15);
    iconDuplex.setWidth(15);
    iconDuplex.setUrl("https://image.ibb.co/i0TmVS/duplex.png");
    // -> Variable de Simbolo de Atico
    var iconAtico = new PictureMarkerSymbol();
    iconAtico.setHeight(15);
    iconAtico.setWidth(15);
    iconAtico.setUrl("https://image.ibb.co/mAHfqS/atico.png");
    // -> Variable de Simbolo de Habitacion
    var iconHabitacion = new PictureMarkerSymbol();
    iconHabitacion.setHeight(15);
    iconHabitacion.setWidth(15);
    iconHabitacion.setUrl("https://image.ibb.co/mbLdc7/habitacion.png");
    // -> Variable de Simbolo de Oficina
    var iconOficina = new PictureMarkerSymbol();
    iconOficina.setHeight(15);
    iconOficina.setWidth(15);
    iconOficina.setUrl("https://image.ibb.co/dDjtAS/oficina.png");
    // -> Variable de Simbolo de Local Comercial
    var iconLocal = new PictureMarkerSymbol();
    iconLocal.setHeight(15);
    iconLocal.setWidth(15);
    iconLocal.setUrl("https://image.ibb.co/hdu4H7/local.png");
    // -> Variable de Simbolo de Nave Industrial
    var iconNave = new PictureMarkerSymbol();
    iconNave.setHeight(15);
    iconNave.setWidth(15);
    iconNave.setUrl("https://image.ibb.co/fNNfqS/nave.png");
    // -> Variable de Simbolo de Terreno Urbano
    var iconTerrenoUrbano = new PictureMarkerSymbol();
    iconTerrenoUrbano.setHeight(15);
    iconTerrenoUrbano.setWidth(15);
    iconTerrenoUrbano.setUrl("https://image.ibb.co/dbhfqS/terrenourbano.png");
    // -> Variable de Simbolo de Terreno Rural
    var iconTerrenoRural = new PictureMarkerSymbol();
    iconTerrenoRural.setHeight(15);
    iconTerrenoRural.setWidth(15);
    iconTerrenoRural.setUrl("https://image.ibb.co/iubjH7/terrenrural.png");
    // -> Variable de Simbolo de Trasteros
    var iconTrastero = new PictureMarkerSymbol();
    iconTrastero.setHeight(15);
    iconTrastero.setWidth(15);
    iconTrastero.setUrl("https://image.ibb.co/msqBx7/trastero.png");
    // -> Variable de Simbolo de Garajes
    var iconGaraje = new PictureMarkerSymbol();
    iconGaraje.setHeight(15);
    iconGaraje.setWidth(15);
    iconGaraje.setUrl("https://image.ibb.co/ci9tAS/garaje.png");


    //Variables de Simbolos Renderer de Inmuebles
    // -> Variable de Simbolo Renderer de Viviendas
    var rendererViviendas = new UniqueValueRenderer(null, "tipo");
    rendererViviendas.addValue("Piso", iconPiso);
    rendererViviendas.addValue("Chalet", iconChalet);
    rendererViviendas.addValue("Casa adosada", iconCasa);
    rendererViviendas.addValue("Duplex", iconDuplex);
    rendererViviendas.addValue("Atico", iconAtico);
    // -> Variable de Simbolo Renderer de Locales
    var rendererLocales = new UniqueValueRenderer(null, "tipo");
    rendererLocales.addValue("Local", iconLocal);
    rendererLocales.addValue("Nave", iconNave);
    // -> Variable de Simbolo Renderer de Terrenos
    var rendererTerrenos = new UniqueValueRenderer(null, "uso");
    rendererTerrenos.addValue("Urbano", iconTerrenoUrbano);
    rendererTerrenos.addValue("Rural", iconTerrenoRural);



    //Variable de la Capas de Inmuebles que se carga por defecto al iniciar la aplicacion
    var flViviendasVenta = new FeatureLayer(urlViviendas, {
      definitionExpression: "operación = 'Venta'",
      infoTemplate: infoTempViviendasVenta,
      outFields: ["*"]
    });
    flViviendasVenta.setRenderer(rendererViviendas);

    //Capas cargadas por defecto al iniciar la aplicacion
    map.addLayer(flViviendasVenta);

    //Variable de la Graphics Layer de los Inmuebles
    var graphicsLayerInmuebles = new GraphicsLayer();
    map.addLayer(graphicsLayerInmuebles, 2);


    //Eventos asociados a los Widgets
    btnConsultas.onclick = MenuConsultas;

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

    //Evento asociado al Boton de Ejecucion
    btnEjecutarConsulta.onclick = EjecutarConsulta;


    //Funciones asociadas a los eventos de los elementos de Widgets
    function MenuConsultas() {
      if (menuConsultas.style.display == "block") {
        OcultaObj(menuConsultas);
        btnConsultas.style.backgroundColor = "rgba(27, 75, 79, 0.55)";
        btnConsultas.style.borderColor = "transparent";
      } else {
        MuestraObj(menuConsultas);
        CambioEstiloBoton("rgba(2, 24, 26, 0.65)", "#062f34", btnConsultas);
        SeleccionadoComprar();
      }
      if (menuServiceAreas.style.display == "block") {
        OcultaObj(menuServiceAreas);
        btnServiceAreas.style.backgroundColor = "rgba(27, 75, 79, 0.55)";
        btnServiceAreas.style.borderColor = "transparent";
      }
    };


    //Funciones asociadas a los eventos de los elementos de Transacciones
    //Funcion de Seleccionado de Tipo de Transaccion
    function SeleccionarTipoTransaccion() {
      if (btnComprar.checked) {
        SeleccionadoComprar();
      }
      if (btnAlquilar.checked) {
        SeleccionadoAlquilar();
      }
    };

    //Funcion de Seleccionado de Transaccion de Compra
    function SeleccionadoComprar() {
      if (btnComprar.checked) {
        labelComprar.style.backgroundColor = "#173e43";
        labelComprar.style.color = "#fff";
      } else {
        labelComprar.style.backgroundColor = "#fff";
        labelComprar.style.color = "#8b8989";
      }
      if (btnAlquilar.checked) {
        labelAlquilar.style.backgroundColor = "#173e43";
        labelAlquilar.style.color = "#fff";
      } else {
        labelAlquilar.style.backgroundColor = "#fff";
        labelAlquilar.style.color = "#8b8989";
      }
      if (viviendas.checked) {
        labelViviendas.style.backgroundColor = "#173e43";
        labelViviendas.style.color = "#fff";
        SeleccionadoViviendas();
      } else {
        labelViviendas.style.backgroundColor = "#fff";
        labelViviendas.style.color = "#8b8989";
      }
      if (habitaciones.checked) {
        labelHabitaciones.style.backgroundColor = "#173e43";
        labelHabitaciones.style.color = "#fff";
        SeleccionadoHabitaciones();
      } else {
        labelHabitaciones.style.backgroundColor = "#fff";
        labelHabitaciones.style.color = "#8b8989";
      }
      if (oficinas.checked) {
        labelOficinas.style.backgroundColor = "#173e43";
        labelOficinas.style.color = "#fff";
        SeleccionadoOficinas();
      } else {
        labelOficinas.style.backgroundColor = "#fff";
        labelOficinas.style.color = "#8b8989";
      }
      if (locales.checked) {
        labelLocales.style.backgroundColor = "#173e43";
        labelLocales.style.color = "#fff";
        SeleccionadoLocales();
      } else {
        labelLocales.style.backgroundColor = "#fff";
        labelLocales.style.color = "#8b8989";
      }
      if (terrenos.checked) {
        labelTerrenos.style.backgroundColor = "#173e43";
        labelTerrenos.style.color = "#fff";
        SeleccionadoTerrenos();
      } else {
        labelTerrenos.style.backgroundColor = "#fff";
        labelTerrenos.style.color = "#8b8989";
      }
      if (trasteros.checked) {
        labelTrasteros.style.backgroundColor = "#173e43";
        labelTrasteros.style.color = "#fff";
        SeleccionadoTrasteros();
      } else {
        labelTrasteros.style.backgroundColor = "#fff";
        labelTrasteros.style.color = "#8b8989";
      }
      if (garajes.checked) {
        labelGarajes.style.backgroundColor = "#173e43";
        labelGarajes.style.color = "#fff";
        SeleccionadoGarajes();
      } else {
        labelGarajes.style.backgroundColor = "#fff";
        labelGarajes.style.color = "#8b8989";
      }
    };

    //Funcion de Seleccionado de Transaccion de Alquiler
    function SeleccionadoAlquilar() {
      if (btnComprar.checked) {
        labelComprar.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelComprar.style.color = "#fff";
      } else {
        labelComprar.style.backgroundColor = "#fff";
        labelComprar.style.color = "#8b8989";
      }
      if (btnAlquilar.checked) {
        labelAlquilar.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelAlquilar.style.color = "#fff";
      } else {
        labelAlquilar.style.backgroundColor = "#fff";
        labelAlquilar.style.color = "#8b8989";
      }
      if (viviendas.checked) {
        labelViviendas.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelViviendas.style.color = "#fff";
        SeleccionadoViviendas();
      } else {
        labelViviendas.style.backgroundColor = "#fff";
        labelViviendas.style.color = "#8b8989";
      }
      if (habitaciones.checked) {
        labelHabitaciones.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelHabitaciones.style.color = "#fff";
        SeleccionadoHabitaciones();
      } else {
        labelHabitaciones.style.backgroundColor = "#fff";
        labelHabitaciones.style.color = "#8b8989";
      }
      if (oficinas.checked) {
        labelOficinas.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelOficinas.style.color = "#fff";
        SeleccionadoOficinas();
      } else {
        labelOficinas.style.backgroundColor = "#fff";
        labelOficinas.style.color = "#8b8989";
      }
      if (locales.checked) {
        labelLocales.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelLocales.style.color = "#fff";
        SeleccionadoLocales();
      } else {
        labelLocales.style.backgroundColor = "#fff";
        labelLocales.style.color = "#8b8989";
      }
      if (terrenos.checked) {
        labelTerrenos.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelTerrenos.style.color = "#fff";
        SeleccionadoTerrenos();
      } else {
        labelTerrenos.style.backgroundColor = "#fff";
        labelTerrenos.style.color = "#8b8989";
      }
      if (trasteros.checked) {
        labelTrasteros.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelTrasteros.style.color = "#fff";
        SeleccionadoTrasteros();
      } else {
        labelTrasteros.style.backgroundColor = "#fff";
        labelTrasteros.style.color = "#8b8989";
      }
      if (garajes.checked) {
        labelGarajes.style.backgroundColor = "rgba(45, 45, 45, 0.9)";
        labelGarajes.style.color = "#fff";
        SeleccionadoGarajes();
      } else {
        labelGarajes.style.backgroundColor = "#fff";
        labelGarajes.style.color = "#8b8989";
      }
    };


    //Funciones asociadas a los eventos de los elementos de Tipo de Inmuebles
    //Funcion de Seleccionado de Inmuebles de Tipo Viviendas
    function SeleccionadoViviendas() {
      MuestraObj(subTipoViviendas);
      MuestraObj(antiguedadViviendas);
      MuestraObj(caracteristicas);
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
      if (btnComprar.checked) {
        MuestraObj(precioVentaViviendasDesde);
        MuestraObj(precioVentaViviendasHasta);
        OcultaObj(precioAlquilerViviendasDesde);
        OcultaObj(precioAlquilerViviendasHasta);
      }
      if (btnAlquilar.checked) {
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
      if (btnComprar.checked) {
        alert("No hay habitaciones en venta.");
        OcultaObj(estado);
        OcultaObj(extrasHabitaciones);
        OcultaObj(precioInmuebles);
        OcultaObj(btnEjecutarConsulta);
      }
      if (btnAlquilar.checked) {
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
      MuestraObj(caracteristicas);
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
      if (btnComprar.checked) {
        MuestraObj(precioVentaOficinasDesde);
        MuestraObj(precioVentaOficinasHasta);
        OcultaObj(precioAlquilerOficinasDesde);
        OcultaObj(precioAlquilerOficinasHasta);
      }
      if (btnAlquilar.checked) {
        MuestraObj(precioAlquilerOficinasDesde);
        MuestraObj(precioAlquilerOficinasHasta);
        OcultaObj(precioVentaOficinasDesde);
        OcultaObj(precioVentaOficinasHasta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Locales
    function SeleccionadoLocales() {
      MuestraObj(subTipoLocales);
      MuestraObj(caracteristicas);
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
      if (btnComprar.checked) {
        MuestraObj(precioVentaLocalesDesde);
        MuestraObj(precioVentaLocalesHasta);
        OcultaObj(precioAlquilerLocalesDesde);
        OcultaObj(precioAlquilerLocalesHasta);
      }
      if (btnAlquilar.checked) {
        MuestraObj(precioAlquilerLocalesDesde);
        MuestraObj(precioAlquilerLocalesHasta);
        OcultaObj(precioVentaLocalesDesde);
        OcultaObj(precioVentaLocalesHasta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Terrenos
    function SeleccionadoTerrenos() {
      MuestraObj(subTipoTerrenos);
      MuestraObj(caracteristicas);
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
      if (btnComprar.checked) {
        MuestraObj(precioVentaTerrenosDesde);
        MuestraObj(precioVentaTerrenosHasta);
        OcultaObj(precioAlquilerTerrenosDesde);
        OcultaObj(precioAlquilerTerrenosHasta);
      }
      if (btnAlquilar.checked) {
        MuestraObj(precioAlquilerTerrenosDesde);
        MuestraObj(precioAlquilerTerrenosHasta);
        OcultaObj(precioVentaTerrenosDesde);
        OcultaObj(precioVentaTerrenosHasta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Trasteros
    function SeleccionadoTrasteros() {
      MuestraObj(caracteristicas);
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
      if (btnComprar.checked) {
        MuestraObj(precioVentaTrasterosDesde);
        MuestraObj(precioVentaTrasterosHasta);
        OcultaObj(precioAlquilerTrasterosDesde);
        OcultaObj(precioAlquilerTrasterosHasta);
      }
      if (btnAlquilar.checked) {
        MuestraObj(precioAlquilerTrasterosDesde);
        MuestraObj(precioAlquilerTrasterosHasta);
        OcultaObj(precioVentaTrasterosDesde);
        OcultaObj(precioVentaTrasterosHasta);
      }
    };

    //Funcion de Seleccionado de Inmuebles de Tipo Garajes
    function SeleccionadoGarajes() {
      MuestraObj(caracteristicas);
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
      if (btnComprar.checked) {
        MuestraObj(precioVentaGarajesDesde);
        MuestraObj(precioVentaGarajesHasta);
        OcultaObj(precioAlquilerGarajesDesde);
        OcultaObj(precioAlquilerGarajesHasta);
      }
      if (btnAlquilar.checked) {
        MuestraObj(precioAlquilerGarajesDesde);
        MuestraObj(precioAlquilerGarajesHasta);
        OcultaObj(precioVentaGarajesDesde);
        OcultaObj(precioVentaGarajesHasta);
      }
    };


    //Funcion de Ejecutar la Consulta
    function EjecutarConsulta() {
      map.removeLayer(flViviendasVenta);
      graphicsLayerInmuebles.clear();
      if (btnComprar.checked) {
        tipoOperacion = "Venta";
        EjecutarComprar();
      }
      if (btnAlquilar.checked) {
        tipoOperacion = "Alquiler";
        EjecutarAlquilar();
      }
    };


    //Funcion de Ejecutar Consulta con Tipo de Transaccion Comprar
    function EjecutarComprar() {
      if (viviendas.checked) {
        valorPrecioDesdeViviendas = precioVentaViviendasDesde.value;
        valorPrecioHastaViviendas = precioVentaViviendasHasta.value;
        ComprobarBotonesViviendas();
        QueryWhereViviendas();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaViviendas;
        // -> Ejecutar la Query Task de las Viviendas
        qTaskViviendas.execute(queryViviendas, callbackViviendasVenta);
      }
      if (oficinas.checked) {
        valorPrecioDesdeOficinas = precioVentaOficinasDesde.value;
        valorPrecioHastaOficinas = precioVentaOficinasHasta.value;
        ComprobarBotonesOficinas();
        QueryWhereOficinas();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaOficinas;
        // -> Ejecutar la Query Task de las Oficinas
        qTaskOficinas.execute(queryOficinas, callbackOficinasVenta);
      }
      if (locales.checked) {
        valorPrecioDesdeLocales = precioVentaLocalesDesde.value;
        valorPrecioHastaLocales = precioVentaLocalesHasta.value;
        ComprobarBotonesLocales();
        QueryWhereLocales();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaLocales;
        // -> Ejecutar la Query Task de las Locales
        qTaskLocales.execute(queryLocales, callbackLocalesVenta);
      }
      if (terrenos.checked) {
        valorPrecioDesdeTerrenos = precioVentaTerrenosDesde.value;
        valorPrecioHastaTerrenos = precioVentaTerrenosHasta.value;
        ComprobarBotonesTerrenos();
        QueryWhereTerrenos();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaTerrenos;
        // -> Ejecutar la Query Task de las Terrenos
        qTaskTerrenos.execute(queryTerrenos, callbackTerrenosVenta);
      }
      if (trasteros.checked) {
        valorPrecioDesdeTrasteros = precioVentaTrasterosDesde.value;
        valorPrecioHastaTrasteros = precioVentaTrasterosHasta.value;
        ComprobarBotonesTrasteros();
        QueryWhereTrasteros();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaTrasteros;
        // -> Ejecutar la Query Task de las Trasteros
        qTaskTrasteros.execute(queryTrasteros, callbackTrasterosVenta);
      }
      if (garajes.checked) {
        valorPrecioDesdeGarajes = precioVentaGarajesDesde.value;
        valorPrecioHastaGarajes = precioVentaGarajesHasta.value;
        ComprobarBotonesGarajes();
        QueryWhereGarajes();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaGarajes;
        // -> Ejecutar la Query Task de las Garajes
        qTaskGarajes.execute(queryGarajes, callbackGarajesVenta);
      }
    };


    //Funcion de Ejecutar Consulta con Tipo de Transaccion Alquilar
    function EjecutarAlquilar() {
      if (viviendas.checked) {
        valorPrecioDesdeViviendas = precioAlquilerViviendasDesde.value;
        valorPrecioHastaViviendas = precioAlquilerViviendasHasta.value;
        ComprobarBotonesViviendas();
        QueryWhereViviendas();
        legendInmuebles.innerHTML = leyendaViviendas;
        // -> Ejecutar la Query Task de las Viviendas
        qTaskViviendas.execute(queryViviendas, callbackViviendasAlquiler);
      }
      if (habitaciones.checked) {
        valorPrecioDesdeHabitaciones = precioAlquilerHabitacionesDesde.value;
        valorPrecioHastaHabitaciones = precioAlquilerHabitacionesHasta.value;
        ComprobarBotonesHabitaciones();
        QueryWhereHabitaciones();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaHabitaciones;
        // -> Ejecutar la Query Task de las Habitaciones
        qTaskHabitaciones.execute(queryHabitaciones, callbackHabitaciones);
      }
      if (oficinas.checked) {
        valorPrecioDesdeOficinas = precioAlquilerOficinasDesde.value;
        valorPrecioHastaOficinas = precioAlquilerOficinasHasta.value;
        ComprobarBotonesOficinas();
        QueryWhereOficinas();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaOficinas;
        // -> Ejecutar la Query Task de las Oficinas
        qTaskOficinas.execute(queryOficinas, callbackOficinasAlquiler);
      }
      if (locales.checked) {
        valorPrecioDesdeLocales = precioAlquilerLocalesDesde.value;
        valorPrecioHastaLocales = precioAlquilerLocalesHasta.value;
        ComprobarBotonesLocales();
        QueryWhereLocales();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaLocales;
        // -> Ejecutar la Query Task de las Locales
        qTaskLocales.execute(queryLocales, callbackLocalesAlquiler);
      }
      if (terrenos.checked) {
        valorPrecioDesdeTerrenos = precioAlquilerTerrenosDesde.value;
        valorPrecioHastaTerrenos = precioAlquilerTerrenosHasta.value;
        ComprobarBotonesTerrenos();
        QueryWhereTerrenos();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaTerrenos;
        // -> Ejecutar la Query Task de las Terrenos
        qTaskTerrenos.execute(queryTerrenos, callbackTerrenosAlquiler);
      }
      if (trasteros.checked) {
        valorPrecioDesdeTrasteros = precioAlquilerTrasterosDesde.value;
        valorPrecioHastaTrasteros = precioAlquilerTrasterosHasta.value;
        ComprobarBotonesTrasteros();
        QueryWhereTrasteros();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaTrasteros;
        // -> Ejecutar la Query Task de las Trasteros
        qTaskTrasteros.execute(queryTrasteros, callbackTrasterosAlquiler);
      }
      if (garajes.checked) {
        valorPrecioDesdeGarajes = precioAlquilerGarajesDesde.value;
        valorPrecioHastaGarajes = precioAlquilerGarajesHasta.value;
        ComprobarBotonesGarajes();
        QueryWhereGarajes();
        // -> Añadir los elementos seleccionados a la Leyenda
        legendInmuebles.innerHTML = leyendaGarajes;
        // -> Ejecutar la Query Task de las Garajes
        qTaskGarajes.execute(queryGarajes, callbackGarajesAlquiler);
      }
    };


    //Funcion de Ejecutar Comprar Viviendas
    function ComprobarBotonesViviendas() {
      // -> Comprobar los Botones de Subtipo de Viviendas para construir la Leyenda
      leyendaViviendas = "";
      // -> Comprobar los Botones de Subtipo de Viviendas para recoger valores y aplicar en la query
      if (subtipoVivienda1.checked || subtipoVivienda2.checked || subtipoVivienda3.checked ||
        subtipoVivienda4.checked || subtipoVivienda5.checked) {
        sendSubtipo = true;
        if (subtipoVivienda1.checked) {
          valorSubtipoVivienda1 = subtipoVivienda1.value;
          leyendaViviendas += "<img width='15px' src='https://image.ibb.co/eWfpjn/piso.png'>" + " Piso<br/>";
        }
        if (subtipoVivienda2.checked) {
          valorSubtipoVivienda2 = subtipoVivienda2.value;
          leyendaViviendas += "<img width='15px' src='https://image.ibb.co/n7bJc7/chalet.png'>" + " Chalet<br/>";
        }
        if (subtipoVivienda3.checked) {
          valorSubtipoVivienda3 = subtipoVivienda3.value;
          leyendaViviendas += "<img width='15px' src='https://image.ibb.co/fbzFPn/casaadosada.png'>" + " Casa adosada<br/>";
        }
        if (subtipoVivienda4.checked) {
          valorSubtipoVivienda4 = subtipoVivienda4.value;
          leyendaViviendas += "<img width='15px' src='https://image.ibb.co/i0TmVS/duplex.png'>" + " Duplex<br/>";
        }
        if (subtipoVivienda5.checked) {
          valorSubtipoVivienda5 = subtipoVivienda5.value;
          leyendaViviendas += "<img width='15px' src='https://image.ibb.co/mAHfqS/atico.png'>" + " Ático<br/>";
        }
      } else {
        sendSubtipo = false;
        leyendaViviendas = "<img width='15px' src='https://image.ibb.co/eWfpjn/piso.png'>" + " Piso<br/>" +
          "<img width='15px' src='https://image.ibb.co/n7bJc7/chalet.png'>" + " Chalet<br/>" +
          "<img width='15px' src='https://image.ibb.co/fbzFPn/casaadosada.png'>" + " Casa adosada<br/>" +
          "<img width='15px' src='https://image.ibb.co/i0TmVS/duplex.png'>" + " Duplex<br/>" +
          "<img width='15px' src='https://image.ibb.co/mAHfqS/atico.png'>" + " Ático";
      }
      // -> Comprobar los Botones de Caracteristicas de Viviendas para recoger valores y aplicar en la query
      sendHabitaciones = caracteristicasViviendas1.value > 0 ? true : false;
      valorHabitacionesViviendas = caracteristicasViviendas1.value;
      sendAseos = caracteristicasViviendas2.value > 0 ? true : false;
      valorAseosViviendas = caracteristicasViviendas2.value;
      sendSuperficie = caracteristicasViviendas3.value > 0 ? true : false;
      valorSuperficieViviendas = caracteristicasViviendas3.value;
      // -> Comprobar los Botones de Antiguedad de Construccion de Viviendas para recoger valores y aplicar en la query
      if (subtipoAntiguedad1.checked || subtipoAntiguedad2.checked || subtipoAntiguedad3.checked) {
        sendAntiguedad = true;
        if (subtipoAntiguedad1.checked) {
          valorSubtipoAntiguedad1 = subtipoAntiguedad1.value;
        }
        if (subtipoAntiguedad2.checked) {
          valorSubtipoAntiguedad2 = subtipoAntiguedad2.value;
        }
        if (subtipoAntiguedad3.checked) {
          valorSubtipoAntiguedad3 = subtipoAntiguedad3.value;
        }
      } else {
        sendAntiguedad = false;
      }
      // -> Comprobar los Botones de Estado de Viviendas para recoger valores y aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Viviendas para recoger valores y aplicar en la query
      if (subtipoExtraVivienda1.checked || subtipoExtraVivienda2.checked || subtipoExtraVivienda3.checked ||
        subtipoExtraVivienda4.checked || subtipoExtraVivienda5.checked || subtipoExtraVivienda6.checked ||
        subtipoExtraVivienda7.checked || subtipoExtraVivienda8.checked) {
        sendExtras = true;
        if (subtipoExtraVivienda1.checked) {
          valorSubtipoExtraVivienda1 = 'True';
        } else {
          valorSubtipoExtraVivienda1 = 'False';
        }
        if (subtipoExtraVivienda2.checked) {
          valorSubtipoExtraVivienda2 = 'True';
        } else {
          valorSubtipoExtraVivienda2 = 'False';
        }
        if (subtipoExtraVivienda3.checked) {
          valorSubtipoExtraVivienda3 = 'True';
        } else {
          valorSubtipoExtraVivienda3 = 'False';
        }
        if (subtipoExtraVivienda4.checked) {
          valorSubtipoExtraVivienda4 = 'True';
        } else {
          valorSubtipoExtraVivienda4 = 'False';
        }
        if (subtipoExtraVivienda5.checked) {
          valorSubtipoExtraVivienda5 = 'True';
        } else {
          valorSubtipoExtraVivienda5 = 'False';
        }
        if (subtipoExtraVivienda6.checked) {
          valorSubtipoExtraVivienda6 = 'True';
        } else {
          valorSubtipoExtraVivienda6 = 'False';
        }
        if (subtipoExtraVivienda7.checked) {
          valorSubtipoExtraVivienda7 = 'True';
        } else {
          valorSubtipoExtraVivienda7 = 'False';
        }
        if (subtipoExtraVivienda8.checked) {
          valorSubtipoExtraVivienda8 = 'True';
        } else {
          valorSubtipoExtraVivienda8 = 'False';
        }
      } else {
        sendExtras = false;
      }
    };

    //Funcion de Ejecutar Comprar Habitaciones
    function ComprobarBotonesHabitaciones() {
      // -> Construir Leyenda Habitaciones
      leyendaHabitaciones = "<img width='15px' src='https://image.ibb.co/mbLdc7/habitacion.png'> Habitacion";
      // -> Comprobar los Botones de Estado de Habitaciones para recoger valores y aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Habitaciones para recoger valores y aplicar en la query
      if (subtipoExtraHabitaciones1.checked || subtipoExtraHabitaciones2.checked) {
        sendExtras = true;
        if (subtipoExtraHabitaciones1.checked) {
          valorSubtipoExtraHabitaciones1 = 'True';
        } else {
          valorSubtipoExtraHabitaciones1 = 'False';
        }
        if (subtipoExtraHabitaciones2.checked) {
          valorSubtipoExtraHabitaciones2 = 'True';
        } else {
          valorSubtipoExtraHabitaciones2 = 'False';
        }
      } else {
        sendExtras = false;
      }
    };

    //Funcion de Ejecutar Comprar Oficinas
    function ComprobarBotonesOficinas() {
      // -> Construir Leyenda Oficinas
      leyendaOficinas = "<img width='15px' src='https://image.ibb.co/dDjtAS/oficina.png'> Oficina";
      // -> Comprobar los Botones de Caracteristicas de Oficinas para recoger valores y aplicar en la query
      sendSuperficie = caracteristicasOficinas.value > 0 ? true : false;
      valorSuperficieOficinas = caracteristicasOficinas.value;
      // -> Comprobar los Botones de Estado de Oficinas para recoger valores y aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Oficinas para recoger valores y aplicar en la query
      if (subtipoExtraOficinas1.checked) {
        sendExtras = true;
        valorSubtipoExtraOficinas1 = 'True';
      } else {
        valorSubtipoExtraOficinas1 = 'False';
      }
    };

    //Funcion de Ejecutar Comprar Locales
    function ComprobarBotonesLocales() {
      // -> Comprobar los Botones de Subtipo de Locales para construir la Leyenda
      leyendaLocales = "";
      // -> Comprobar los Botones de Subtipo de Locales para recoger valores y aplicar en la query
      if (subtipoLocal1.checked || subtipoLocal2.checked) {
        sendSubtipo = true;
        if (subtipoLocal1.checked) {
          valorSubtipoLocal1 = subtipoLocal1.value;
          leyendaLocales += "<img width='15px' src='https://image.ibb.co/hdu4H7/local.png'>" + " Local comercial<br/>";
        }
        if (subtipoLocal2.checked) {
          valorSubtipoLocal2 = subtipoLocal2.value;
          leyendaLocales += "<img width='15px' src='https://image.ibb.co/fNNfqS/nave.png'>" + " Nave industrial";
        }
      } else {
        sendSubtipo = false;
        leyendaLocales = "<img width='15px' src='https://image.ibb.co/hdu4H7/local.png'>" + " Local comercial<br/>" +
          "<img width='15px' src='https://image.ibb.co/fNNfqS/nave.png'>" + " Nave industrial";
      }
      // -> Comprobar los Botones de Caracteristicas de Locales para recoger valores y aplicar en la query
      sendSuperficie = caracteristicasLocales.value > 0 ? true : false;
      valorSuperficieLocales = caracteristicasLocales.value;
      // -> Comprobar los Botones de Estado de Locales para recoger valores y aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Locales para recoger valores y aplicar en la query
      if (subtipoExtraLocales1.checked || subtipoExtraLocales2.checked || subtipoExtraLocales3.checked ||
        subtipoExtraLocales4.checked) {
        sendExtras = true;
        if (subtipoExtraLocales1.checked) {
          valorSubtipoExtraLocales1 = 'True';
        } else {
          valorSubtipoExtraLocales1 = 'False';
        }
        if (subtipoExtraLocales2.checked) {
          valorSubtipoExtraLocales2 = 'True';
        } else {
          valorSubtipoExtraLocales2 = 'False';
        }
        if (subtipoExtraLocales3.checked) {
          valorSubtipoExtraLocales3 = 'True';
        } else {
          valorSubtipoExtraLocales3 = 'False';
        }
        if (subtipoExtraLocales4.checked) {
          valorSubtipoExtraLocales4 = 'True';
        } else {
          valorSubtipoExtraLocales4 = 'False';
        }
      } else {
        sendExtras = false;
      }
    };

    //Funcion de Ejecutar Comprar Terrenos
    function ComprobarBotonesTerrenos() {
      // -> Comprobar los Botones de Subtipo de Terrenos para construir la Leyenda
      leyendaTerrenos = "";
      // -> Comprobar los Botones de Subtipo de Terrenos para recoger valores y aplicar en la query
      if (subtipoTerreno1.checked || subtipoTerreno2.checked) {
        sendSubtipo = true;
        if (subtipoTerreno1.checked) {
          valorSubtipoTerreno1 = subtipoTerreno1.value;
          leyendaTerrenos += "<img width='15px' src='https://image.ibb.co/dbhfqS/terrenourbano.png'>" + " Terreno Urbano<br/>";
        }
        if (subtipoTerreno2.checked) {
          valorSubtipoTerreno2 = subtipoTerreno2.value;
          leyendaTerrenos += "<img width='15px' src='https://image.ibb.co/iubjH7/terrenrural.png'>" + " Terreno Rural";
        }
      } else {
        sendSubtipo = false;
        leyendaTerrenos = "<img width='15px' src='https://image.ibb.co/dbhfqS/terrenourbano.png'>" + " Terreno Urbano<br/>" +
          "<img width='15px' src='https://image.ibb.co/iubjH7/terrenrural.png'>" + " Terreno Rural";
      }
      // -> Comprobar los Botones de Caracteristicas de Terrenos para recoger valores y aplicar en la query
      sendUsos = caracteristicasTerrenos1.value > 0 ? true : false;
      valorUsoTerrenos = caracteristicasTerrenos1.value;
      sendPendiente = caracteristicasTerrenos2.value > 0 ? true : false;
      valorPendienteTerrenos = caracteristicasTerrenos2.value;
      sendSuperficie = caracteristicasTerrenos3.value > 0 ? true : false;
      valorSuperficieTerrenos = caracteristicasTerrenos3.value;
      // -> Comprobar los Botones de Extras de Terrenos para recoger valores y aplicar en la query
      if (subtipoExtraTerrenos1.checked) {
        sendExtras = true;
        valorSubtipoExtraTerrenos1 = 'True';
      } else {
        valorSubtipoExtraTerrenos1 = 'False';
      }
    };

    //Funcion de Ejecutar Comprar Trasteros
    function ComprobarBotonesTrasteros() {
      // -> Construir Leyenda Trasteros
      leyendaTrasteros = "<img width='15px' src='https://image.ibb.co/msqBx7/trastero.png'>" + " Trastero";
      // -> Comprobar los Botones de Caracteristicas de Trasteros para recoger valores y aplicar en la query
      sendSuperficie = caracteristicasTrasteros.value > 0 ? true : false;
      valorSuperficieTrasteros = caracteristicasTrasteros.value;
      // -> Comprobar los Botones de Estado de Trasteros para recoger valores y aplicar en la query
      ComprobarEstado();
      // -> Comprobar los Botones de Extras de Trasteros para recoger valores y aplicar en la query
      if (subtipoExtraTrasteros1.checked || subtipoExtraTrasteros2.checked || subtipoExtraTrasteros3.checked) {
        sendExtras = true;
        if (subtipoExtraTrasteros1.checked) {
          valorSubtipoExtraTrasteros1 = 'True';
        } else {
          valorSubtipoExtraTrasteros1 = 'False';
        }
        if (subtipoExtraTrasteros2.checked) {
          valorSubtipoExtraTrasteros2 = 'True';
        } else {
          valorSubtipoExtraTrasteros2 = 'False';
        }
        if (subtipoExtraTrasteros3.checked) {
          valorSubtipoExtraTrasteros3 = 'True';
        } else {
          valorSubtipoExtraTrasteros3 = 'False';
        }
      } else {
        sendExtras = false;
      }
    };

    //Funcion de Ejecutar Comprar Garajes
    function ComprobarBotonesGarajes() {
      // -> Construir Leyenda Garajes
      leyendaGarajes = "<img width='15px' src='https://image.ibb.co/ci9tAS/garaje.png'>" + " Garaje";
      // -> Comprobar los Botones de Caracteristicas de Garajes para recoger valores y aplicar en la query
      sendTipoVehiculo = caracteristicasGarajes1.value != 0 ? true : false;
      valorVehiculoGarajes = caracteristicasGarajes1.value;
      sendTamanoVehiculo = caracteristicasGarajes2.value != 0 ? true : false;
      valorTamanoVehiculoGarajes = caracteristicasGarajes2.value;
      sendNumeroPlazas = caracteristicasGarajes3.value != 0 ? true : false;
      valorNumeroPlazasGarajes = caracteristicasGarajes3.value;
      // -> Comprobar los Botones de Extras de Garajes para recoger valores y aplicar en la query
      if (subtipoExtraGarajes1.checked || subtipoExtraGarajes2.checked) {
        sendExtras = true;
        if (subtipoExtraGarajes1.checked) {
          valorSubtipoExtraGarajes1 = 'True';
        } else {
          valorSubtipoExtraGarajes1 = 'False';
        }
        if (subtipoExtraGarajes2.checked) {
          valorSubtipoExtraGarajes2 = 'True';
        } else {
          valorSubtipoExtraGarajes2 = 'False';
        }
      } else {
        sendExtras = false;
      }
    };


    //Funcion de Comprobar el Estado de los Inmuebles
    function ComprobarEstado() {
      if (subtipoEstado1.checked || subtipoEstado2.checked || subtipoEstado3.checked ||
        subtipoEstado4.checked || subtipoEstado5.checked || subtipoEstado6.checked) {
        sendEstado = true;
        if (subtipoEstado1.checked) {
          valorSubtipoEstado1 = subtipoEstado1.value;
        }
        if (subtipoEstado2.checked) {
          valorSubtipoEstado2 = subtipoEstado2.value;
        }
        if (subtipoEstado3.checked) {
          valorSubtipoEstado3 = subtipoEstado3.value;
        }
        if (subtipoEstado4.checked) {
          valorSubtipoEstado4 = subtipoEstado4.value;
        }
        if (subtipoEstado5.checked) {
          valorSubtipoEstado5 = subtipoEstado5.value;
        }
        if (subtipoEstado6.checked) {
          valorSubtipoEstado6 = subtipoEstado6.value;
        }
      } else {
        sendEstado = false;
      }
    };

    //Definir las Querys de los Inmuebles
    // -> Definir la Query de las Viviendas
    function QueryWhereViviendas() {
      queryViviendas.where = "precio >= " + valorPrecioDesdeViviendas;
      queryViviendas.where += " AND precio <= " + valorPrecioHastaViviendas;
      queryViviendas.where += " AND operación = " + "'" + tipoOperacion + "'";
      if (sendSubtipo) {
        queryViviendas.where += " AND (subtipo = ";
        var subtipoList = [];
        if (subtipoVivienda1.checked) {
          subtipoList.push(valorSubtipoVivienda1);
        }
        if (subtipoVivienda2.checked) {
          subtipoList.push(valorSubtipoVivienda2);
        }
        if (subtipoVivienda3.checked) {
          subtipoList.push(valorSubtipoVivienda3);
        }
        if (subtipoVivienda4.checked) {
          subtipoList.push(valorSubtipoVivienda4);
        }
        if (subtipoVivienda5.checked) {
          subtipoList.push(valorSubtipoVivienda5);
        }
        for (var i = 0; i < subtipoList.length; i++) {
          if (i > 0) {
            queryViviendas.where += " OR subtipo = ";
          }
          queryViviendas.where += subtipoList[i];
        }
        queryViviendas.where += ")"
      }
      if (sendAseos) {
        queryViviendas.where += " AND num_aseos >= " + valorAseosViviendas;
      }
      if (sendHabitaciones) {
        queryViviendas.where += " AND num_hab >= " + valorHabitacionesViviendas;
      }
      if (sendSuperficie) {
        queryViviendas.where += " AND superficie >= " + valorSuperficieViviendas;
      }
      if (sendAntiguedad) {
        var antList = [];
        if (subtipoAntiguedad1.checked) {
          antList.push(valorSubtipoAntiguedad1);
        }
        if (subtipoAntiguedad2.checked) {
          antList.push(valorSubtipoAntiguedad2);
        }
        if (subtipoAntiguedad3.checked) {
          antList.push(valorSubtipoAntiguedad3);
        }
        for (var i = 0; i < antList.length; i++) {
          if (i == 0) {
            queryViviendas.where += " AND (antig_constru = " + "'" + antList[i] + "'";
          } else {
            queryViviendas.where += " OR antig_constru = " + "'" + antList[i] + "'";
          }
        }
        queryViviendas.where += ")";
      }
      if (sendEstado) {
        var estList = [];
        if (subtipoEstado1.checked) {
          estList.push(valorSubtipoEstado1);
        }
        if (subtipoEstado2.checked) {
          estList.push(valorSubtipoEstado2);
        }
        if (subtipoEstado3.checked) {
          estList.push(valorSubtipoEstado3);
        }
        if (subtipoEstado4.checked) {
          estList.push(valorSubtipoEstado4);
        }
        if (subtipoEstado5.checked) {
          estList.push(valorSubtipoEstado5);
        }
        if (subtipoEstado6.checked) {
          estList.push(valorSubtipoEstado6);
        }
        for (var i = 0; i < estList.length; i++) {
          if (i == 0) {
            queryViviendas.where += " AND (estado = " + "'" + estList[i] + "'";
          } else {
            queryViviendas.where += " OR estado = " + "'" + estList[i] + "'";
          }
        }
        queryViviendas.where += ")";
      }
      if (sendExtras) {
        if (subtipoExtraVivienda1.checked) {
          queryViviendas.where += " AND terraza = " + "'" + valorSubtipoExtraVivienda1 + "'";
        }
        if (subtipoExtraVivienda2.checked) {
          queryViviendas.where += " AND jardin = " + "'" + valorSubtipoExtraVivienda2 + "'";
        }
        if (subtipoExtraVivienda3.checked) {
          queryViviendas.where += " AND piscina = " + "'" + valorSubtipoExtraVivienda3 + "'";
        }
        if (subtipoExtraVivienda4.checked) {
          queryViviendas.where += " AND parking = " + "'" + valorSubtipoExtraVivienda4 + "'";
        }
        if (subtipoExtraVivienda5.checked) {
          queryViviendas.where += " AND trastero = " + "'" + valorSubtipoExtraVivienda5 + "'";
        }
        if (subtipoExtraVivienda6.checked) {
          queryViviendas.where += " AND ascensor = " + "'" + valorSubtipoExtraVivienda6 + "'";
        }
        if (subtipoExtraVivienda7.checked) {
          queryViviendas.where += " AND amueblado = " + "'" + valorSubtipoExtraVivienda7 + "'";
        }
        if (subtipoExtraVivienda8.checked) {
          queryViviendas.where += " AND calefaccion = " + "'" + valorSubtipoExtraVivienda8 + "'";
        }
      }
      queryViviendas.outFields = ["*"];
      queryViviendas.returnGeometry = true;
      queryViviendas.outSpatialReference = map.spatialReference;
      //COMPROBACION QUERY WHERE
      console.log("Query Viviendas: " + queryViviendas.where);
    }


    // -> Definir la Query de las Habitaciones
    function QueryWhereHabitaciones() {
      queryHabitaciones.where = "precio >= " + valorPrecioDesdeHabitaciones;
      queryHabitaciones.where += " AND precio <= " + valorPrecioHastaHabitaciones;
      if (sendEstado) {
        var estList = [];
        if (subtipoEstado1.checked) {
          estList.push(valorSubtipoEstado1);
        }
        if (subtipoEstado2.checked) {
          estList.push(valorSubtipoEstado2);
        }
        if (subtipoEstado3.checked) {
          estList.push(valorSubtipoEstado3);
        }
        if (subtipoEstado4.checked) {
          estList.push(valorSubtipoEstado4);
        }
        if (subtipoEstado5.checked) {
          estList.push(valorSubtipoEstado5);
        }
        if (subtipoEstado6.checked) {
          estList.push(valorSubtipoEstado6);
        }
        for (var i = 0; i < estList.length; i++) {
          if (i == 0) {
            queryHabitaciones.where += " AND (estado = " + "'" + estList[i] + "'";
          } else {
            queryHabitaciones.where += " OR estado = " + "'" + estList[i] + "'";
          }
        }
        queryHabitaciones.where += ")";
      }
      if (sendExtras) {
        if (subtipoExtraHabitaciones1.checked) {
          queryHabitaciones.where += " AND amueblado = " + "'" + valorSubtipoExtraHabitaciones1 + "'";
        }
        if (subtipoExtraHabitaciones2.checked) {
          queryHabitaciones.where += " AND aseos = " + "'" + valorSubtipoExtraHabitaciones2 + "'";
        }
      }
      queryHabitaciones.outFields = ["*"];
      queryHabitaciones.returnGeometry = true;
      queryHabitaciones.outSpatialReference = map.spatialReference;
      //COMPROBACION QUERY WHERE
      console.log("Query Habitaciones: " + queryHabitaciones.where);
    };


    // -> Definir la Query de las Oficinas
    function QueryWhereOficinas() {
      queryOficinas.where = "precio >= " + valorPrecioDesdeOficinas;
      queryOficinas.where += " AND precio <= " + valorPrecioHastaOficinas;
      queryOficinas.where += " AND operacion = " + "'" + tipoOperacion + "'";
      if (sendSuperficie) {
        queryOficinas.where += " AND superficie >= " + valorSuperficieOficinas;
      }
      if (sendEstado) {
        var estList = [];
        if (subtipoEstado1.checked) {
          estList.push(valorSubtipoEstado1);
        }
        if (subtipoEstado2.checked) {
          estList.push(valorSubtipoEstado2);
        }
        if (subtipoEstado3.checked) {
          estList.push(valorSubtipoEstado3);
        }
        if (subtipoEstado4.checked) {
          estList.push(valorSubtipoEstado4);
        }
        if (subtipoEstado5.checked) {
          estList.push(valorSubtipoEstado5);
        }
        if (subtipoEstado6.checked) {
          estList.push(valorSubtipoEstado6);
        }
        for (var i = 0; i < estList.length; i++) {
          if (i == 0) {
            queryOficinas.where += " AND (estado = " + "'" + estList[i] + "'";
          } else {
            queryOficinas.where += " OR estado = " + "'" + estList[i] + "'";
          }
        }
        queryOficinas.where += ")";
      }
      if (sendExtras) {
        if (subtipoExtraOficinas1.checked) {
          queryOficinas.where += " AND aparcamiento = " + "'" + valorSubtipoExtraOficinas1 + "'";
        }
      }
      queryOficinas.outFields = ["*"];
      queryOficinas.returnGeometry = true;
      queryOficinas.outSpatialReference = map.spatialReference;
      //COMPROBACION QUERY WHERE
      console.log("Query Oficinas: " + queryOficinas.where);
    };


    // -> Definir la Query de las Locales
    function QueryWhereLocales() {
      queryLocales.where = "precio >= " + valorPrecioDesdeLocales;
      queryLocales.where += " AND precio <= " + valorPrecioHastaLocales;
      queryLocales.where += " AND operacion = " + "'" + tipoOperacion + "'";
      if (sendSubtipo) {
        queryLocales.where += " AND (subtipo = ";
        var subtipoList = [];
        if (subtipoLocal1.checked) {
          subtipoList.push(valorSubtipoLocal1);
        }
        if (subtipoLocal2.checked) {
          subtipoList.push(valorSubtipoLocal2);
        }
        for (var i = 0; i < subtipoList.length; i++) {
          if (i > 0) {
            queryLocales.where += " OR subtipo = ";
          }
          queryLocales.where += subtipoList[i];
        }
        queryLocales.where += ")"
      }
      if (sendSuperficie) {
        queryLocales.where += " AND superficie >= " + valorSuperficieLocales;
      }
      if (sendEstado) {
        var estList = [];
        if (subtipoEstado1.checked) {
          estList.push(valorSubtipoEstado1);
        }
        if (subtipoEstado2.checked) {
          estList.push(valorSubtipoEstado2);
        }
        if (subtipoEstado3.checked) {
          estList.push(valorSubtipoEstado3);
        }
        if (subtipoEstado4.checked) {
          estList.push(valorSubtipoEstado4);
        }
        if (subtipoEstado5.checked) {
          estList.push(valorSubtipoEstado5);
        }
        if (subtipoEstado6.checked) {
          estList.push(valorSubtipoEstado6);
        }
        for (var i = 0; i < estList.length; i++) {
          if (i == 0) {
            queryLocales.where += " AND (estado = " + "'" + estList[i] + "'";
          } else {
            queryLocales.where += " OR estado = " + "'" + estList[i] + "'";
          }
        }
        queryLocales.where += ")";
      }
      if (sendExtras) {
        if (subtipoExtraLocales1.checked) {
          queryLocales.where += " AND parking = " + "'" + valorSubtipoExtraLocales1 + "'";
        }
        if (subtipoExtraLocales2.checked) {
          queryLocales.where += " AND calefaccion = " + "'" + valorSubtipoExtraLocales2 + "'";
        }
        if (subtipoExtraLocales3.checked) {
          queryLocales.where += " AND aire_acond = " + "'" + valorSubtipoExtraLocales3 + "'";
        }
        if (subtipoExtraLocales4.checked) {
          queryLocales.where += " AND salidahumos = " + "'" + valorSubtipoExtraLocales4 + "'";
        }
      }
      queryLocales.outFields = ["*"];
      queryLocales.returnGeometry = true;
      queryLocales.outSpatialReference = map.spatialReference;
      //COMPROBACION QUERY WHERE
      console.log("Query Locales: " + queryLocales.where);
    };


    // -> Definir la Query de las Terrenos
    function QueryWhereTerrenos() {
      queryTerrenos.where = "precio >= " + valorPrecioDesdeTerrenos;
      queryTerrenos.where += " AND precio <= " + valorPrecioHastaTerrenos;
      queryTerrenos.where += " AND operacion = " + "'" + tipoOperacion + "'";
      if (sendSubtipo) {
        queryTerrenos.where += " AND (subtipo = ";
        var subtipoList = [];
        if (subtipoTerreno1.checked) {
          subtipoList.push(valorSubtipoTerreno1);
        }
        if (subtipoTerreno2.checked) {
          subtipoList.push(valorSubtipoTerreno2);
        }
        for (var i = 0; i < subtipoList.length; i++) {
          if (i > 0) {
            queryTerrenos.where += " OR subtipo = ";
          }
          queryTerrenos.where += subtipoList[i];
        }
        queryTerrenos.where += ")"
      }
      if (sendUsos) {
        queryTerrenos.where += " AND uso = " + "'" + valorUsoTerrenos + "'";
      }
      if (sendPendiente) {
        queryTerrenos.where += " AND pendiente = " + "'" + valorPendienteTerrenos + "'";
      }
      if (sendSuperficie) {
        queryTerrenos.where += " AND superficie >= " + valorSuperficieTerrenos;
      }
      if (sendExtras) {
        if (subtipoExtraTerrenos1.checked) {
          queryTerrenos.where += " AND arbolado = " + "'" + valorSubtipoExtraTerrenos1 + "'";
        }
      }
      queryTerrenos.outFields = ["*"];
      queryTerrenos.returnGeometry = true;
      queryTerrenos.outSpatialReference = map.spatialReference;
      //COMPROBACION QUERY WHERE
      console.log("Query Terrenos: " + queryTerrenos.where);
    };


    // -> Definir la Query de las Trasteros
    function QueryWhereTrasteros() {
      queryTrasteros.where = "precio >= " + valorPrecioDesdeTrasteros;
      queryTrasteros.where += " AND precio <= " + valorPrecioHastaTrasteros;
      queryTrasteros.where += " AND operacion = " + "'" + tipoOperacion + "'";
      if (sendSuperficie) {
        queryTrasteros.where += " AND superficie >= " + valorSuperficieTrasteros;
      }
      if (sendEstado) {
        var estList = [];
        if (subtipoEstado1.checked) {
          estList.push(valorSubtipoEstado1);
        }
        if (subtipoEstado2.checked) {
          estList.push(valorSubtipoEstado2);
        }
        if (subtipoEstado3.checked) {
          estList.push(valorSubtipoEstado3);
        }
        if (subtipoEstado4.checked) {
          estList.push(valorSubtipoEstado4);
        }
        if (subtipoEstado5.checked) {
          estList.push(valorSubtipoEstado5);
        }
        if (subtipoEstado6.checked) {
          estList.push(valorSubtipoEstado6);
        }
        for (var i = 0; i < estList.length; i++) {
          if (i == 0) {
            queryTrasteros.where += " AND (estado = " + "'" + estList[i] + "'";
          } else {
            queryTrasteros.where += " OR estado = " + "'" + estList[i] + "'";
          }
        }
        queryTrasteros.where += ")";
      }
      if (sendExtras) {
        if (subtipoExtraTrasteros1.checked) {
          queryTrasteros.where += " AND vigiliancia24h = " + "'" + valorSubtipoExtraTrasteros1 + "'";
        }
        if (subtipoExtraTrasteros2.checked) {
          queryTrasteros.where += " AND acceso24h_365dias = " + "'" + valorSubtipoExtraTrasteros2 + "'";
        }
        if (subtipoExtraTrasteros3.checked) {
          queryTrasteros.where += " AND carga_descarga = " + "'" + valorSubtipoExtraTrasteros3 + "'";
        }
      }
      queryTrasteros.outFields = ["*"];
      queryTrasteros.returnGeometry = true;
      queryTrasteros.outSpatialReference = map.spatialReference;
      //COMPROBACION QUERY WHERE
      console.log("Query Trasteros: " + queryTrasteros.where);
    };


    // -> Definir la Query de las Garajes
    function QueryWhereGarajes() {
      queryGarajes.where = "precio >= " + valorPrecioDesdeGarajes;
      queryGarajes.where += " AND precio <= " + valorPrecioHastaGarajes;
      queryGarajes.where += " AND operacion = " + "'" + tipoOperacion + "'";
      if (sendTipoVehiculo) {
        queryGarajes.where += " AND tipo_vehiculo = " + "'" + valorVehiculoGarajes + "'";
      }
      if (sendTamanoVehiculo) {
        queryGarajes.where += " AND tamaño_vehiculo = " + "'" + valorTamanoVehiculoGarajes + "'";
      }
      if (sendNumeroPlazas) {
        queryGarajes.where += " AND numero_plazas >= " + valorNumeroPlazasGarajes;
      }
      if (sendExtras) {
        if (subtipoExtraGarajes1.checked) {
          queryGarajes.where += " AND vigilancia = " + "'" + valorSubtipoExtraGarajes1 + "'";
        }
        if (subtipoExtraGarajes2.checked) {
          queryGarajes.where += " AND puerta = " + "'" + valorSubtipoExtraGarajes2 + "'";
        }
      }
      queryGarajes.outFields = ["*"];
      queryGarajes.returnGeometry = true;
      queryGarajes.outSpatialReference = map.spatialReference;
      //COMPROBACION QUERY WHERE
      console.log("Query Garajes: " + queryGarajes.where);
    };



    //Funciones de Callback de las Query Task de los Inmuebles
    // -> Funcion de Callback de la Query de Viviendas
    function callbackViviendasVenta(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setRenderer(rendererViviendas);

          // INTENTO de obtener la url de los adjuntos para añadir a la infoTemplate
          // var layerDefinition = {
          //   "geometryType": "esriGeometryPoint",
          //   "fields": [{
          //     "OBJECTID": "OBJECTID",
          //     "type": "esriFieldTypeInteger",
          //     "alias": "OBJECTID"
          //   }]
          // };
          // var featureCollection = {
          //   layerDefinition: layerDefinition,
          //   featureSet: featureSet,
          // };
          // var fl = new FeatureLayer(featureCollection, options);
          //
          // var objectId = arrayGraphicos[i].attributes[arrayGraphicos.OBJECTID];
          // arrayGraphicos.queryAttachmentInfos(objectId, function(infos) {
          //   var img = document.createElement('img');
          //   if (!!infos[0].url) {
          //     img.setAttribute('src', infos[0].url);
          //     infoTempViviendasVenta.setContent(img);
          //   }
          // }, function errBack(msg) {
          //   alert("Error al cargar los adjuntos del grafico.");
          //   console.log("Mensaje de Error de adjuntos: " + msg);
          // });

          graphicsLayerInmuebles.setInfoTemplate(infoTempViviendasVenta);
        }
      } else {
        alert("No se han encontrado viviendas para los filtros establecidos.");
      }
    };

    function callbackViviendasAlquiler(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setRenderer(rendererViviendas);
          graphicsLayerInmuebles.setInfoTemplate(infoTempViviendasAlquiler);
        }
      } else {
        alert("No se han encontrado viviendas para los filtros establecidos.");
      }
    };
    // -> Funcion de Callback de la Query de Habitaciones
    function callbackHabitaciones(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          arrayGraphicos[i].setSymbol(iconHabitacion);
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setInfoTemplate(infoTempHabitaciones);
        }
      } else {
        alert("No se han encontrado habitaciones para los filtros establecidos.");
      }
    };
    // -> Funcion de Callback de la Query de Oficinas
    function callbackOficinasVenta(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          arrayGraphicos[i].setSymbol(iconOficina);
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setInfoTemplate(infoTempOficinasVenta);
        }
      } else {
        alert("No se han encontrado oficinas para los filtros establecidos.");
      }
    };

    function callbackOficinasAlquiler(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          arrayGraphicos[i].setSymbol(iconOficina);
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setInfoTemplate(infoTempOficinasAlquiler);
        }
      } else {
        alert("No se han encontrado oficinas para los filtros establecidos.");
      }
    };
    // -> Funcion de Callback de la Query de Locales
    function callbackLocalesVenta(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setRenderer(rendererLocales);
          graphicsLayerInmuebles.setInfoTemplate(infoTempLocalesVenta);
        }
      } else {
        alert("No se han encontrado locales para los filtros establecidos.");
      }
    };

    function callbackLocalesAlquiler(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setRenderer(rendererLocales);
          graphicsLayerInmuebles.setInfoTemplate(infoTempLocalesAlquiler);
        }
      } else {
        alert("No se han encontrado locales para los filtros establecidos.");
      }
    };
    // -> Funcion de Callback de la Query de Terrenos
    function callbackTerrenosVenta(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setRenderer(rendererTerrenos);
          graphicsLayerInmuebles.setInfoTemplate(infoTempTerrenosVenta);
        }
      } else {
        alert("No se han encontrado terrenos para los filtros establecidos.");
      }
    };

    function callbackTerrenosAlquiler(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setRenderer(rendererTerrenos);
          graphicsLayerInmuebles.setInfoTemplate(infoTempTerrenosAlquiler);
        }
      } else {
        alert("No se han encontrado terrenos para los filtros establecidos.");
      }
    };
    // -> Funcion de Callback de la Query de Trasteros
    function callbackTrasterosVenta(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          arrayGraphicos[i].setSymbol(iconTrastero);
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setInfoTemplate(infoTempTrasterosVenta);
        }
      } else {
        alert("No se han encontrado trasteros para los filtros establecidos.");
      }
    };

    function callbackTrasterosAlquiler(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          arrayGraphicos[i].setSymbol(iconTrastero);
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setInfoTemplate(infoTempTrasterosAlquiler);
        }
      } else {
        alert("No se han encontrado trasteros para los filtros establecidos.");
      }
    };
    // -> Funcion de Callback de la Query de Garajes
    function callbackGarajesVenta(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          arrayGraphicos[i].setSymbol(iconGaraje);
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setInfoTemplate(infoTempGarajesVenta);
        }
      } else {
        alert("No se han encontrado garajes para los filtros establecidos.");
      }
    };

    function callbackGarajesAlquiler(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          arrayGraphicos[i].setSymbol(iconGaraje);
          graphicsLayerInmuebles.add(arrayGraphicos[i]);
          graphicsLayerInmuebles.setInfoTemplate(infoTempGarajesAlquiler);
        }
      } else {
        alert("No se han encontrado garajes para los filtros establecidos.");
      }
    };
  });