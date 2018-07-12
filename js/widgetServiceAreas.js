var map;

require(["esri/map",
    "esri/symbols/PictureMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/Color",
    "esri/renderers/UniqueValueRenderer",
    "esri/graphic",
    "esri/layers/GraphicsLayer",
    "esri/graphicsUtils",
    "esri/tasks/QueryTask",
    "esri/tasks/query",
    "esri/InfoTemplate",
    "esri/tasks/FeatureSet",
    "esri/tasks/Geoprocessor",
    "esri/tasks/ParameterValue",
    "dojo/domReady!"
  ],

  function(Map,
    PictureMarkerSymbol,
    SimpleLineSymbol,
    SimpleMarkerSymbol,
    SimpleFillSymbol,
    Color,
    UniqueValueRenderer,
    Graphic,
    GraphicsLayer,
    graphicsUtils,
    QueryTask,
    Query,
    InfoTemplate,
    FeatureSet,
    Geoprocessor,
    ParameterValue) {
    //Definicion de las variables que hacen llamada a los elementos html a traves del id.
    //Elementos del Widget
    var btnServiceAreas = document.getElementById("btnServiceAreas");
    var menuServiceAreas = document.getElementById("menuServiceAreas");
    //Elemento de Seleccion de Punto
    var btnSeleccionPunto = document.getElementById("btnSeleccionPunto");
    //Elementos de Sitios de infoTempGarajesVenta
    // -> Elementos de Educacion
    var tipoEducacion = document.getElementById("tipoEducacion");
    var btnEducacion = document.getElementById("btnEducacion");
    var bloqueEducacion = document.getElementById("bloqueEducacion");
    var subtipoEducacion1 = document.getElementById("subtipoEducacion1");
    var btnUniversidad = document.getElementById("btnUniversidad");
    var subtipoEducacion2 = document.getElementById("subtipoEducacion2");
    var btnEducacionArtistica = document.getElementById("btnEducacionArtistica");
    var subtipoEducacion3 = document.getElementById("subtipoEducacion3");
    var btnEducacionEspecial = document.getElementById("btnEducacionEspecial");
    var subtipoEducacion4 = document.getElementById("subtipoEducacion4");
    var btnEducacionInfantil = document.getElementById("btnEducacionInfantil");
    var subtipoEducacion5 = document.getElementById("subtipoEducacion5");
    var btnEducacionPrimaria = document.getElementById("btnEducacionPrimaria");
    var subtipoEducacion6 = document.getElementById("subtipoEducacion6");
    var btnEducacionSecundaria = document.getElementById("btnEducacionSecundaria");
    var subtipoEducacion7 = document.getElementById("subtipoEducacion7");
    var btnEducacionAdultos = document.getElementById("btnEducacionAdultos");
    var subtipoEducacion8 = document.getElementById("subtipoEducacion8");
    var btnInstitutoSecundaria = document.getElementById("btnInstitutoSecundaria");
    var subtipoEducacion9 = document.getElementById("subtipoEducacion9");
    var btnEscuelaIdiomas = document.getElementById("btnEscuelaIdiomas");
    // -> Elementos de Comercio
    var tipoComercio = document.getElementById("tipoComercio");
    var btnComercio = document.getElementById("btnComercio");
    var bloqueComercio = document.getElementById("bloqueComercio");
    var subtipoComercio10 = document.getElementById("subtipoComercio10");
    var btnCentroComercial = document.getElementById("btnCentroComercial");
    var subtipoComercio11 = document.getElementById("subtipoComercio11");
    var btnAlimentacion = document.getElementById("btnAlimentacion");
    var subtipoComercio12 = document.getElementById("subtipoComercio12");
    var btnGrandesSuperficies = document.getElementById("btnGrandesSuperficies");
    var subtipoComercio13 = document.getElementById("subtipoComercio13");
    var btnHipermercado = document.getElementById("btnHipermercado");
    var subtipoComercio14 = document.getElementById("subtipoComercio14");
    var btnMercadoAbastos = document.getElementById("btnMercadoAbastos");
    // -> Elementos de Transportes y Comunicaciones
    var tipoTransportes = document.getElementById("tipoTransportes");
    var btnTransportes = document.getElementById("btnTransportes");
    var bloqueTransportes = document.getElementById("bloqueTransportes");
    var subtipoTransporte15 = document.getElementById("subtipoTransporte15");
    var btnCercanias = document.getElementById("btnCercanias");
    var subtipoTransporte16 = document.getElementById("subtipoTransporte16");
    var btnMetro = document.getElementById("btnMetro");
    var subtipoTransporte17 = document.getElementById("subtipoTransporte17");
    var btnAparcamiento = document.getElementById("btnAparcamiento");
    var subtipoTransporte18 = document.getElementById("subtipoTransporte18");
    var btnEstacionesServicio = document.getElementById("btnEstacionesServicio");
    // -> Elementos de Ocio y Entretenimiento
    var tipoOcio = document.getElementById("tipoOcio");
    var btnOcio = document.getElementById("btnOcio");
    var bloqueOcio = document.getElementById("bloqueOcio");
    var subtipoOcio19 = document.getElementById("subtipoOcio19");
    var btnCine = document.getElementById("btnCine");
    var subtipoOcio20 = document.getElementById("subtipoOcio20");
    var btnTeatro = document.getElementById("btnTeatro");
    var subtipoOcio21 = document.getElementById("subtipoOcio21");
    var btnJardines = document.getElementById("btnJardines");
    // -> Elementos de Salud
    var tipoSalud = document.getElementById("tipoSalud");
    var btnSalud = document.getElementById("btnSalud");
    var bloqueSalud = document.getElementById("bloqueSalud");
    var subtipoSalud22 = document.getElementById("subtipoSalud22");
    var btnFarmacia = document.getElementById("btnFarmacia");
    var subtipoSalud23 = document.getElementById("subtipoSalud23");
    var btnConsultorio = document.getElementById("btnConsultorio");
    var subtipoSalud24 = document.getElementById("subtipoSalud24");
    var btnCentroSalud = document.getElementById("btnCentroSalud");
    var subtipoSalud25 = document.getElementById("subtipoSalud25");
    var btnHospital = document.getElementById("btnHospital");
    // -> Elementos de Proteccion y Seguridad
    var tipoProteccion = document.getElementById("tipoProteccion");
    var btnProteccion = document.getElementById("btnProteccion");
    var bloqueProteccion = document.getElementById("bloqueProteccion");
    var subtipoProteccion26 = document.getElementById("subtipoProteccion26");
    var btnCruzRoja = document.getElementById("btnCruzRoja");
    var subtipoProteccion27 = document.getElementById("subtipoProteccion27");
    var btnGuardiaCivil = document.getElementById("btnGuardiaCivil");
    var subtipoProteccion28 = document.getElementById("subtipoProteccion28");
    var btnPoliciaLocal = document.getElementById("btnPoliciaLocal");
    var subtipoProteccion29 = document.getElementById("subtipoProteccion29");
    var btnPoliciaNacional = document.getElementById("btnPoliciaNacional");
    //Elementos de Modo de Transporte
    var btnAndando = document.getElementById("btnAndando");
    var labelAndando = document.getElementById("labelAndando");
    var btnCoche = document.getElementById("btnCoche");
    var labelCoche = document.getElementById("labelCoche");
    //Elementos de Valores de Corte
    // -> Elementos de Valores de Corte Andando
    var valoresAndando = document.getElementById("valoresAndando");
    var inputValorCorte1 = document.getElementById("inputValorCorte1");
    var inputValorCorte2 = document.getElementById("inputValorCorte2");
    var inputValorCorte3 = document.getElementById("inputValorCorte3");
    // -> Elementos de Valores de Corte en Coche
    var valoresCoche = document.getElementById("valoresCoche");
    var inputValorCorte4 = document.getElementById("inputValorCorte4");
    var inputValorCorte5 = document.getElementById("inputValorCorte5");
    var inputValorCorte6 = document.getElementById("inputValorCorte6");
    //Elemento de Boton de Ejecucion
    var btnEjecutarGPS = document.getElementById("btnEjecutarGPS");
    //Elemento de Boton de btnLimpiar
    var btnLimpiar = document.getElementById("btnLimpiar");
    //Elemento de Leyenda de los Sitios de Interes
    var contSitiosInteres = document.getElementById("contSitiosInteres");
    var legendSitiosInteres = document.getElementById("legendSitiosInteres");

    //Variable de Leyenda de los Sitios de Interes
    var leyendaSitiosInteres = "";

    //Variable de Comprobacion de Subtipos de Sitios de Interes
    var sendSubtipo = false;

    //Variables de los Valores de los Inputs
    var atributoTiempo = "";
    var breakValues = "";

    //Variable de la URL del Servicio de Geoprocesamiento
    var urlGPS = "https://localhost:6443/arcgis/rest/services/PropertFy/GPSAreasServicio/GPServer/GPSAreasServicio";

    //Variable de la la Expresion de los Sitios de Interes
    var expresionSitiosInteres = "";


    //Variable de la InfoTemplate de las Areas de Servicio
    var infoTempServiceAreas = new InfoTemplate("<h3>Área de Servicio</h3>",
      "Región accesible entre ${FromBreak} y ${ToBreak} minutos");


    //Variable de la InfoTemplate de los Sitios de Interes
    var infoTempSitiosInteres = new InfoTemplate("<h3>Características del Sitio de Interés</h3>",
      "<h4>${tipo}:</h4> ${nombre}<hr>" +
      "<h4>Descripción:</h4> ${descripcion}");


    //Variables del Simbolos
    //Variable de Simbolo del Punto del Mapa
    var iconoPuntoMapa = new PictureMarkerSymbol();
    iconoPuntoMapa.setHeight(18);
    iconoPuntoMapa.setWidth(18);
    iconoPuntoMapa.setUrl("https://image.ibb.co/hWmJc7/punto_Mapa.png");
    //Variables de Simbolos de Areas de Servicio
    var line = new SimpleLineSymbol();
    line.setStyle(SimpleLineSymbol.STYLE_NULL);
    var fill0 = new SimpleFillSymbol();
    fill0.setColor(new Color([255, 0, 0, 0.54]));
    fill0.setOutline(line);
    var fill1 = new SimpleFillSymbol();
    fill1.setColor(new Color([230, 152, 0, 0.54]));
    fill1.setOutline(line);
    var fill2 = new SimpleFillSymbol();
    fill2.setColor(new Color([76, 230, 0, 0.54]));
    fill2.setOutline(line);
    //Variables de Simbolo de Sitios de Interes
    // Variables de Simbolo de Educacion
    // -> Variable de Simbolo de Universidad
    var iconoUniversidad = new PictureMarkerSymbol();
    iconoUniversidad.setHeight(15);
    iconoUniversidad.setWidth(15);
    iconoUniversidad.setUrl("https://image.ibb.co/cu28c7/uni.png");
    // -> Variable de Simbolo de Educacion Artistica
    var iconoEducacionArtistica = new PictureMarkerSymbol();
    iconoEducacionArtistica.setHeight(15);
    iconoEducacionArtistica.setWidth(15);
    iconoEducacionArtistica.setUrl("https://image.ibb.co/d51OAS/ed_artistica.png");
    // -> Variable de Simbolo de Educacion Especial
    var iconoEducacionEspecial = new PictureMarkerSymbol();
    iconoEducacionEspecial.setHeight(15);
    iconoEducacionEspecial.setWidth(15);
    iconoEducacionEspecial.setUrl("https://image.ibb.co/eFEMx7/ed_especial.png");
    // -> Variable de Simbolo de Educacion Infantil
    var iconoEducacionInfantil = new PictureMarkerSymbol();
    iconoEducacionInfantil.setHeight(15);
    iconoEducacionInfantil.setWidth(15);
    iconoEducacionInfantil.setUrl("https://image.ibb.co/cLGC4n/educacion_infantil.png");
    // -> Variable de Simbolo de Educacion Primaria
    var iconoEducacionPrimaria = new PictureMarkerSymbol();
    iconoEducacionPrimaria.setHeight(15);
    iconoEducacionPrimaria.setWidth(15);
    iconoEducacionPrimaria.setUrl("https://image.ibb.co/khKMx7/educacion_primaria.png");
    // -> Variable de Simbolo de Educacion Secundaria
    var iconoEducacionSecundaria = new PictureMarkerSymbol();
    iconoEducacionSecundaria.setHeight(15);
    iconoEducacionSecundaria.setWidth(15);
    iconoEducacionSecundaria.setUrl("https://image.ibb.co/eeuoc7/educacion_secundaria.png");
    // -> Variable de Simbolo de Educacion para Adultos
    var iconoEducacionAdultos = new PictureMarkerSymbol();
    iconoEducacionAdultos.setHeight(15);
    iconoEducacionAdultos.setWidth(15);
    iconoEducacionAdultos.setUrl("https://image.ibb.co/jV3EH7/ed_adultos.png");
    // -> Variable de Simbolo de Formacion Profesional
    var iconoFormacionProfesional = new PictureMarkerSymbol();
    iconoFormacionProfesional.setHeight(15);
    iconoFormacionProfesional.setWidth(15);
    iconoFormacionProfesional.setUrl("https://image.ibb.co/cGL5Pn/formacion_profesional.png");
    // -> Variable de Simbolo de Escuela de Idiomas
    var iconoEscuelaIdiomas = new PictureMarkerSymbol();
    iconoEscuelaIdiomas.setHeight(15);
    iconoEscuelaIdiomas.setWidth(15);
    iconoEscuelaIdiomas.setUrl("https://image.ibb.co/cW0iAS/escuela_idiomas.png");
    // Variables de Simbolo de Comercio
    // -> Variable de Simbolo de Centro Comercial
    var iconoCentroComercial = new PictureMarkerSymbol();
    iconoCentroComercial.setHeight(15);
    iconoCentroComercial.setWidth(15);
    iconoCentroComercial.setUrl("https://image.ibb.co/jHUbVS/centrocomercial.png");
    // -> Variable de Simbolo de Alimentacion
    var iconoAlimentacion = new PictureMarkerSymbol();
    iconoAlimentacion.setHeight(15);
    iconoAlimentacion.setWidth(15);
    iconoAlimentacion.setUrl("https://image.ibb.co/bMcVqS/alimentacion.png");
    // -> Variable de Simbolo de Grandes Superficies
    var iconoGrandesSuperficies = new PictureMarkerSymbol();
    iconoGrandesSuperficies.setHeight(15);
    iconoGrandesSuperficies.setWidth(15);
    iconoGrandesSuperficies.setUrl("https://image.ibb.co/nu7kPn/grandessuperficies.png");
    // -> Variable de Simbolo de Hipermercado
    var iconoHipermercado = new PictureMarkerSymbol();
    iconoHipermercado.setHeight(15);
    iconoHipermercado.setWidth(15);
    iconoHipermercado.setUrl("https://image.ibb.co/huxVqS/hipermercados.png");
    // -> Variable de Simbolo de Mercado de Abastos
    var iconoMercadoAbastos = new PictureMarkerSymbol();
    iconoMercadoAbastos.setHeight(15);
    iconoMercadoAbastos.setWidth(15);
    iconoMercadoAbastos.setUrl("https://image.ibb.co/kO8QPn/mercadoabastos.png");
    // Variables de Simbolo de Transporte y Comunicaciones
    // -> Variable de Simbolo de Cercanias
    var iconoCercanias = new PictureMarkerSymbol();
    iconoCercanias.setHeight(15);
    iconoCercanias.setWidth(15);
    iconoCercanias.setUrl("https://image.ibb.co/bNs24n/cercanias.png");
    // -> Variable de Simbolo de Metro
    var iconoMetro = new PictureMarkerSymbol();
    iconoMetro.setHeight(15);
    iconoMetro.setWidth(15);
    iconoMetro.setUrl("https://image.ibb.co/fZBvPn/metro.png");
    // -> Variable de Simbolo de Parking
    var iconoParking = new PictureMarkerSymbol();
    iconoParking.setHeight(15);
    iconoParking.setWidth(15);
    iconoParking.setUrl("https://image.ibb.co/ddFN4n/parking.png");
    // -> Variable de Simbolo de Estacion de Servicio
    var iconoEstacionServicio = new PictureMarkerSymbol();
    iconoEstacionServicio.setHeight(15);
    iconoEstacionServicio.setWidth(15);
    iconoEstacionServicio.setUrl("https://image.ibb.co/khs24n/estacionesservicio.png");
    // Variables de Simbolo de Ocio y Entretenimiento
    // -> Variable de Simbolo de Cine
    var iconoCine = new PictureMarkerSymbol();
    iconoCine.setHeight(15);
    iconoCine.setWidth(15);
    iconoCine.setUrl("https://image.ibb.co/f1qTc7/cine.png");
    // -> Variable de Simbolo de Teatro
    var iconoTeatro = new PictureMarkerSymbol();
    iconoTeatro.setHeight(15);
    iconoTeatro.setWidth(15);
    iconoTeatro.setUrl("https://image.ibb.co/cCrZH7/teatro.png");
    // -> Variable de Simbolo de Jardines
    var iconoJardin = new PictureMarkerSymbol();
    iconoJardin.setHeight(15);
    iconoJardin.setWidth(15);
    iconoJardin.setUrl("https://image.ibb.co/gQxkPn/parques.png");
    // Variables de Simbolo de Salud
    // -> Variable de Simbolo de Farmacia
    var iconoFarmacia = new PictureMarkerSymbol();
    iconoFarmacia.setHeight(15);
    iconoFarmacia.setWidth(15);
    iconoFarmacia.setUrl("https://image.ibb.co/dBfpjn/farmacia.png");
    // -> Variable de Simbolo de Consultorio de Salud
    var iconoConsultorio = new PictureMarkerSymbol();
    iconoConsultorio.setHeight(15);
    iconoConsultorio.setWidth(15);
    iconoConsultorio.setUrl("https://image.ibb.co/cGogx7/consultorio.png");
    // -> Variable de Simbolo de Centro de Salud
    var iconoCentroSalud = new PictureMarkerSymbol();
    iconoCentroSalud.setHeight(15);
    iconoCentroSalud.setWidth(15);
    iconoCentroSalud.setUrl("https://image.ibb.co/iw4Mx7/centrosalud.png");
    // -> Variable de Simbolo de Hospital
    var iconoHospital = new PictureMarkerSymbol();
    iconoHospital.setHeight(15);
    iconoHospital.setWidth(15);
    iconoHospital.setUrl("https://image.ibb.co/mQGjH7/hospital.png");
    // Variables de Simbolo de Proteccion y Seguridad
    // -> Variable de Simbolo de Cruz Roja
    var iconoCruzRoja = new PictureMarkerSymbol();
    iconoCruzRoja.setHeight(15);
    iconoCruzRoja.setWidth(15);
    iconoCruzRoja.setUrl("https://image.ibb.co/cLeAqS/cruzroja.png");
    // -> Variable de Simbolo de Guardia Civil
    var iconoGuardiaCivil = new PictureMarkerSymbol();
    iconoGuardiaCivil.setHeight(15);
    iconoGuardiaCivil.setWidth(15);
    iconoGuardiaCivil.setUrl("https://image.ibb.co/hZT3AS/guardiacivil.png");
    // -> Variable de Simbolo de Policia Local
    var iconoPoliciaLocal = new PictureMarkerSymbol();
    iconoPoliciaLocal.setHeight(15);
    iconoPoliciaLocal.setWidth(15);
    iconoPoliciaLocal.setUrl("https://image.ibb.co/mets4n/policia_local.png");
    // -> Variable de Simbolo de Policia Nacional
    var iconoPoliciaNacional = new PictureMarkerSymbol();
    iconoPoliciaNacional.setHeight(15);
    iconoPoliciaNacional.setWidth(15);
    iconoPoliciaNacional.setUrl("https://image.ibb.co/ezBOAS/policia_nacional.png");


    //Variables de Simbolos Renderer de Sitios de Interes
    // -> Variable de Simbolo por Defecto
    var iconoDefault = new PictureMarkerSymbol();
    iconoDefault.setHeight(13);
    iconoDefault.setWidth(13);
    iconoDefault.setUrl("https://image.ibb.co/fV2VcH/punto_Sitios2.png");
    // -> Variable de Renderer de Sitios de Interes
    var rendererSitiosInteres = new UniqueValueRenderer(iconoDefault, "subtipo");
    rendererSitiosInteres.addValue("1", iconoUniversidad);
    rendererSitiosInteres.addValue("2", iconoEducacionArtistica);
    rendererSitiosInteres.addValue("3", iconoEducacionEspecial);
    rendererSitiosInteres.addValue("4", iconoEducacionInfantil);
    rendererSitiosInteres.addValue("5", iconoEducacionPrimaria);
    rendererSitiosInteres.addValue("6", iconoEducacionSecundaria);
    rendererSitiosInteres.addValue("7", iconoEducacionAdultos);
    rendererSitiosInteres.addValue("8", iconoFormacionProfesional);
    rendererSitiosInteres.addValue("9", iconoEscuelaIdiomas);
    rendererSitiosInteres.addValue("10", iconoCentroComercial);
    rendererSitiosInteres.addValue("11", iconoAlimentacion);
    rendererSitiosInteres.addValue("12", iconoGrandesSuperficies);
    rendererSitiosInteres.addValue("13", iconoHipermercado);
    rendererSitiosInteres.addValue("14", iconoMercadoAbastos);
    rendererSitiosInteres.addValue("15", iconoCercanias);
    rendererSitiosInteres.addValue("16", iconoMetro);
    rendererSitiosInteres.addValue("17", iconoParking);
    rendererSitiosInteres.addValue("18", iconoEstacionServicio);
    rendererSitiosInteres.addValue("19", iconoCine);
    rendererSitiosInteres.addValue("20", iconoTeatro);
    rendererSitiosInteres.addValue("21", iconoJardin);
    rendererSitiosInteres.addValue("22", iconoFarmacia);
    rendererSitiosInteres.addValue("23", iconoConsultorio);
    rendererSitiosInteres.addValue("24", iconoCentroSalud);
    rendererSitiosInteres.addValue("25", iconoHospital);
    rendererSitiosInteres.addValue("26", iconoCruzRoja);
    rendererSitiosInteres.addValue("27", iconoGuardiaCivil);
    rendererSitiosInteres.addValue("28", iconoPoliciaLocal);
    rendererSitiosInteres.addValue("29", iconoPoliciaNacional);


    //Variable de la Graphics Layer de Areas de Servicio
    var graphicsLayerAreasServicio = new GraphicsLayer();
    map.addLayer(graphicsLayerAreasServicio, 2);
    //Variable de la Graphics Layer de Punto
    var graphicsLayerPunto = new GraphicsLayer();
    map.addLayer(graphicsLayerPunto, 3);
    //Variable de la Graphics Layer de Sitios de Interes
    var graphicsLayerSitiosInteres = new GraphicsLayer();
    map.addLayer(graphicsLayerSitiosInteres, 3);


    //Variable de Punto Seleccionado del Mapa
    var puntoSeleccionado;
    //Variable de Feature Set del Punto Seleccionado del Mapa
    var fSetPunto = new FeatureSet();
    var featurePunto = [];


    //Variable del Geoprocessor
    var gprocessor = new Geoprocessor(urlGPS);
    gprocessor.setOutSpatialReference({
      wkid: 102100
    });


    //Eventos asociados a los Widgets
    btnServiceAreas.onclick = MenuServiceAreas;

    //Eventos asociados al Boton de Seleccion de Punto
    btnSeleccionPunto.onclick = SeleccionarPunto;

    //Eventos asociados a los Botones de Sitios de Interes
    btnEducacion.onclick = function() {
      ComprobarCheckBoton(btnEducacion, tipoEducacion);
      if (bloqueEducacion.style.display == "block") {
        OcultaObj(bloqueEducacion);
      } else {
        MuestraObj(bloqueEducacion);
      }
    };
    btnComercio.onclick = function() {
      ComprobarCheckBoton(btnComercio, tipoComercio);
      if (bloqueComercio.style.display == "block") {
        OcultaObj(bloqueComercio);
      } else {
        MuestraObj(bloqueComercio);
      }
    };
    btnTransportes.onclick = function() {
      ComprobarCheckBoton(btnTransportes, tipoTransportes);
      if (bloqueTransportes.style.display == "block") {
        OcultaObj(bloqueTransportes);
      } else {
        MuestraObj(bloqueTransportes);
      }
    };
    btnOcio.onclick = function() {
      ComprobarCheckBoton(btnOcio, tipoOcio);
      if (bloqueOcio.style.display == "block") {
        OcultaObj(bloqueOcio);
      } else {
        MuestraObj(bloqueOcio);
      }
    };
    btnSalud.onclick = function() {
      ComprobarCheckBoton(btnSalud, tipoSalud);
      if (bloqueSalud.style.display == "block") {
        OcultaObj(bloqueSalud);
      } else {
        MuestraObj(bloqueSalud);
      }
    };
    btnProteccion.onclick = function() {
      ComprobarCheckBoton(btnProteccion, tipoProteccion);
      if (bloqueProteccion.style.display == "block") {
        OcultaObj(bloqueProteccion);
      } else {
        MuestraObj(bloqueProteccion);
      }
    };

    //Eventos asociados a los Subtipos de Sitios de infoTempGarajesVenta
    // -> Eventos asociados a la Educacion
    btnUniversidad.onclick = function() {
      ComprobarCheckBoton(btnUniversidad, subtipoEducacion1);
    };
    btnEducacionArtistica.onclick = function() {
      ComprobarCheckBoton(btnEducacionArtistica, subtipoEducacion2);
    };
    btnEducacionEspecial.onclick = function() {
      ComprobarCheckBoton(btnEducacionEspecial, subtipoEducacion3);
    };
    btnEducacionInfantil.onclick = function() {
      ComprobarCheckBoton(btnEducacionInfantil, subtipoEducacion4);
    };
    btnEducacionPrimaria.onclick = function() {
      ComprobarCheckBoton(btnEducacionPrimaria, subtipoEducacion5);
    };
    btnEducacionSecundaria.onclick = function() {
      ComprobarCheckBoton(btnEducacionSecundaria, subtipoEducacion6);
    };
    btnEducacionAdultos.onclick = function() {
      ComprobarCheckBoton(btnEducacionAdultos, subtipoEducacion7);
    };
    btnInstitutoSecundaria.onclick = function() {
      ComprobarCheckBoton(btnInstitutoSecundaria, subtipoEducacion8);
    };
    btnEscuelaIdiomas.onclick = function() {
      ComprobarCheckBoton(btnEscuelaIdiomas, subtipoEducacion9);
    };
    // -> Eventos asociados al Comercio
    btnCentroComercial.onclick = function() {
      ComprobarCheckBoton(btnCentroComercial, subtipoComercio10);
    };
    btnAlimentacion.onclick = function() {
      ComprobarCheckBoton(btnAlimentacion, subtipoComercio11);
    };
    btnGrandesSuperficies.onclick = function() {
      ComprobarCheckBoton(btnGrandesSuperficies, subtipoComercio12);
    };
    btnHipermercado.onclick = function() {
      ComprobarCheckBoton(btnHipermercado, subtipoComercio13);
    };
    btnMercadoAbastos.onclick = function() {
      ComprobarCheckBoton(btnMercadoAbastos, subtipoComercio14);
    };
    // -> Eventos asociados a los Transportes y Comunicaciones
    btnCercanias.onclick = function() {
      ComprobarCheckBoton(btnCercanias, subtipoTransporte15);
    };
    btnMetro.onclick = function() {
      ComprobarCheckBoton(btnMetro, subtipoTransporte16);
    };
    btnAparcamiento.onclick = function() {
      ComprobarCheckBoton(btnAparcamiento, subtipoTransporte17);
    };
    btnEstacionesServicio.onclick = function() {
      ComprobarCheckBoton(btnEstacionesServicio, subtipoTransporte18);
    };
    // -> Eventos asociados al Ocio y Entretenimiento
    btnCine.onclick = function() {
      ComprobarCheckBoton(btnCine, subtipoOcio19);
    };
    btnTeatro.onclick = function() {
      ComprobarCheckBoton(btnTeatro, subtipoOcio20);
    };
    btnJardines.onclick = function() {
      ComprobarCheckBoton(btnJardines, subtipoOcio21);
    };
    // -> Eventos asociados a la Salud
    btnFarmacia.onclick = function() {
      ComprobarCheckBoton(btnFarmacia, subtipoSalud22);
    };
    btnConsultorio.onclick = function() {
      ComprobarCheckBoton(btnConsultorio, subtipoSalud23);
    };
    btnCentroSalud.onclick = function() {
      ComprobarCheckBoton(btnCentroSalud, subtipoSalud24);
    };
    btnHospital.onclick = function() {
      ComprobarCheckBoton(btnHospital, subtipoSalud25);
    };
    // -> Eventos asociados a la Proteccion y Seguridad
    btnCruzRoja.onclick = function() {
      ComprobarCheckBoton(btnCruzRoja, subtipoProteccion26);
    };
    btnGuardiaCivil.onclick = function() {
      ComprobarCheckBoton(btnGuardiaCivil, subtipoProteccion27);
    };
    btnPoliciaLocal.onclick = function() {
      ComprobarCheckBoton(btnPoliciaLocal, subtipoProteccion28);
    };
    btnPoliciaNacional.onclick = function() {
      ComprobarCheckBoton(btnPoliciaNacional, subtipoProteccion29);
    };

    //Eventos asociados al Modo de Transporte
    btnAndando.onclick = SeleccionarModoTransporte;
    btnCoche.onclick = SeleccionarModoTransporte;

    //Evento asociado al Boton de Ejecucion
    btnEjecutarGPS.onclick = EjecutarGPS;

    //Evento asociado al Boton de Limpiar
    btnLimpiar.onclick = EjecutarLimpiar;



    //Funciones asociadas a los eventos de los elementos de Widgets
    function MenuServiceAreas() {
      if (menuServiceAreas.style.display == "block") {
        OcultaObj(menuServiceAreas);
        btnServiceAreas.style.backgroundColor = "rgba(27, 75, 79, 0.55)";
        btnServiceAreas.style.borderColor = "transparent";
      } else {
        MuestraObj(menuServiceAreas);
        CambioEstiloBoton("rgba(2, 24, 26, 0.65)", "#062f34", btnServiceAreas);
        SeleccionarModoTransporte();
      }
      if (menuConsultas.style.display == "block") {
        OcultaObj(menuConsultas);
        btnConsultas.style.backgroundColor = "rgba(27, 75, 79, 0.55)";
        btnConsultas.style.borderColor = "transparent";
      }
    };


    //Funcion de Seleccionar Modo de Transporte
    function SeleccionarModoTransporte() {
      if (btnAndando.checked) {
        labelAndando.style.backgroundColor = "#173e43";
        labelAndando.style.color = "#fff";
        MuestraObj(valoresAndando);
        OcultaObj(valoresCoche);
      } else {
        labelAndando.style.backgroundColor = "transparent";
        labelAndando.style.color = "#8b8989";
        OcultaObj(valoresAndando);
        MuestraObj(valoresCoche);
      }
      if (btnCoche.checked) {
        labelCoche.style.backgroundColor = "#173e43";
        labelCoche.style.color = "#fff";
        MuestraObj(valoresCoche);
        OcultaObj(valoresAndando);
      } else {
        labelCoche.style.backgroundColor = "transparent";
        labelCoche.style.color = "#8b8989";
        OcultaObj(valoresCoche);
        MuestraObj(valoresAndando);
      }
    };


    //Funcion de Seleccionar Punto
    function SeleccionarPunto() {
      if (subtipoEducacion1.checked || subtipoEducacion2.checked || subtipoEducacion3.checked ||
        subtipoEducacion4.checked || subtipoEducacion5.checked || subtipoEducacion6.checked ||
        subtipoEducacion7.checked || subtipoEducacion8.checked || subtipoEducacion9.checked ||
        subtipoComercio10.checked || subtipoComercio11.checked || subtipoComercio12.checked ||
        subtipoComercio13.checked || subtipoComercio14.checked || subtipoTransporte15.checked ||
        subtipoTransporte16.checked || subtipoTransporte17.checked || subtipoTransporte18.checked ||
        subtipoOcio19.checked || subtipoOcio20.checked || subtipoOcio21.checked || subtipoSalud22.checked ||
        subtipoSalud23.checked || subtipoSalud24.checked || subtipoSalud25.checked ||
        subtipoProteccion26.checked || subtipoProteccion27.checked || subtipoProteccion28.checked ||
        subtipoProteccion29.checked) {
        btnSeleccionPunto.style.backgroundColor = "#173e43";
        btnSeleccionPunto.style.color = "#fff";
        map.on("click", funcionClick);
      } else {
        alert("Primero debes seleccionar los sitios de interés");
      }
    };


    //Funcion de Pulsar sobre el Mapa para Seleccionar Punto
    function funcionClick(objEvt) {
      if (menuServiceAreas.style.display == "block") {
        if (btnSeleccionPunto.style.backgroundColor != "transparent") {
          featurePunto = [];
          graphicsLayerPunto.clear();
          puntoSeleccionado = objEvt.mapPoint;

          var grPunto = new Graphic(puntoSeleccionado, iconoPuntoMapa);
          graphicsLayerPunto.add(grPunto);

          featurePunto.push(grPunto);
          fSetPunto.features = featurePunto;

          ComprobarSitiosInteres();
          MuestraObj(btnLimpiar);
        }
      }
    };


    //Funcion de Ejecutar el Geoprocesamiento
    function EjecutarGPS() {
      //COMPROBACION  DEL FEATURE SET  DEL PUNTO
      if (featurePunto != 0) {
        var graficosAreasServicio = graphicsLayerAreasServicio.graphics;
        graphicsLayerAreasServicio.remove(graficosAreasServicio);
        graphicsLayerAreasServicio.clear();

        var graficosSitiosInteres = graphicsLayerSitiosInteres.graphics;
        graphicsLayerSitiosInteres.remove(graficosSitiosInteres);
        graphicsLayerSitiosInteres.clear();

        console.log("Feature Set del Punto del Mapa:");
        console.log(fSetPunto);
      } else {
        alert("Pulsa el botón para seleccionar una ubicación en el mapa.")
      }

      //COMPROBACION DE LAS QUERY WHERE DE LOS SITIOS DE INTERES
      if (subtipoEducacion1.checked || subtipoEducacion2.checked || subtipoEducacion3.checked ||
        subtipoEducacion4.checked || subtipoEducacion5.checked || subtipoEducacion6.checked ||
        subtipoEducacion7.checked || subtipoEducacion8.checked || subtipoEducacion9.checked ||
        subtipoComercio10.checked || subtipoComercio11.checked || subtipoComercio12.checked ||
        subtipoComercio13.checked || subtipoComercio14.checked || subtipoTransporte15.checked ||
        subtipoTransporte16.checked || subtipoTransporte17.checked || subtipoTransporte18.checked ||
        subtipoOcio19.checked || subtipoOcio20.checked || subtipoOcio21.checked || subtipoSalud22.checked ||
        subtipoSalud23.checked || subtipoSalud24.checked || subtipoSalud25.checked ||
        subtipoProteccion26.checked || subtipoProteccion27.checked || subtipoProteccion28.checked ||
        subtipoProteccion29.checked) {
        //COMPROBACION FEATURE SET SITIOS INTERES
        console.log("Expresion de Sitios de Interes: " + expresionSitiosInteres);
      } else {
        alert("Selecciona al menos un sitio de interés");
      }

      ComprobarAtributoTiempo();
      //COMPROBACION DEL ATRIBUTO DE TIEMPO
      console.log("Atributo de Tiempo: " + atributoTiempo);

      ComprobarBreakValues();
      //COMPROBACION DE LOS INTERVALOS DE TIEMPO
      console.log("Intervalos de Tiempo: " + breakValues);

      var parametrosEntrada = {
        "Ubicacion": fSetPunto,
        "Expression": expresionSitiosInteres,
        "Time_Attribute": atributoTiempo,
        "Break_Values": breakValues,
      }
      gprocessor.execute(parametrosEntrada, callbackGeoprocessor, errBack);
    };


    //Funcion de Combrobar los Sitios de Interes
    function ComprobarSitiosInteres() {
      // -> Comprobar los Botones de Sitios de Interes para construir la Leyenda
      leyendaSitiosInteres = "";
      if (subtipoEducacion1.checked || subtipoEducacion2.checked || subtipoEducacion3.checked ||
        subtipoEducacion4.checked || subtipoEducacion5.checked || subtipoEducacion6.checked ||
        subtipoEducacion7.checked || subtipoEducacion8.checked || subtipoEducacion9.checked ||
        subtipoComercio10.checked || subtipoComercio11.checked || subtipoComercio12.checked ||
        subtipoComercio13.checked || subtipoComercio14.checked || subtipoTransporte15.checked ||
        subtipoTransporte16.checked || subtipoTransporte17.checked || subtipoTransporte18.checked ||
        subtipoOcio19.checked || subtipoOcio20.checked || subtipoOcio21.checked || subtipoSalud22.checked ||
        subtipoSalud23.checked || subtipoSalud24.checked || subtipoSalud25.checked ||
        subtipoProteccion26.checked || subtipoProteccion27.checked || subtipoProteccion28.checked ||
        subtipoProteccion29.checked) {
        if (subtipoEducacion1.checked) {
          valorSubtipoEducacion1 = subtipoEducacion1.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/cu28c7/uni.png'>" + " Universidad<br/>";
        }
        if (subtipoEducacion2.checked) {
          valorSubtipoEducacion2 = subtipoEducacion2.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/d51OAS/ed_artistica.png'>" + " Educación Artística<br/>";
        }
        if (subtipoEducacion3.checked) {
          valorSubtipoEducacion3 = subtipoEducacion3.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/eFEMx7/ed_especial.png'>" + " Educación Especial<br/>";
        }
        if (subtipoEducacion4.checked) {
          valorSubtipoEducacion4 = subtipoEducacion4.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/cLGC4n/educacion_infantil.png'>" + " Educación Infantil<br/>";
        }
        if (subtipoEducacion5.checked) {
          valorSubtipoEducacion5 = subtipoEducacion5.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/khKMx7/educacion_primaria.png'>" + " Educación Infantil y Primaria<br/>";
        }
        if (subtipoEducacion6.checked) {
          valorSubtipoEducacion6 = subtipoEducacion6.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/eeuoc7/educacion_secundaria.png'>" + " Educación Infantil, Primaria y Secundaria<br/>";
        }
        if (subtipoEducacion7.checked) {
          valorSubtipoEducacion7 = subtipoEducacion7.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/jV3EH7/ed_adultos.png'>" + " Educación para Adultos<br/>";
        }
        if (subtipoEducacion8.checked) {
          valorSubtipoEducacion8 = subtipoEducacion8.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/cGL5Pn/formacion_profesional.png'>" + " Instituto de Secundaria o Formación Profesional<br/>";
        }
        if (subtipoEducacion9.checked) {
          valorSubtipoEducacion9 = subtipoEducacion9.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/cW0iAS/escuela_idiomas.png'>" + " Escuela Oficial de Idiomas<br/>";
        }
        if (subtipoComercio10.checked) {
          valorSubtipoComercio10 = subtipoComercio10.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/jHUbVS/centrocomercial.png'>" + " Centro Comercial<br/>";
        }
        if (subtipoComercio11.checked) {
          valorSubtipoComercio11 = subtipoComercio11.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/bMcVqS/alimentacion.png'>" + " Alimentación<br/>";
        }
        if (subtipoComercio12.checked) {
          valorSubtipoComercio12 = subtipoComercio12.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/nu7kPn/grandessuperficies.png'>" + " Grandes Superficies<br/>";
        }
        if (subtipoComercio13.checked) {
          valorSubtipoComercio13 = subtipoComercio13.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/huxVqS/hipermercados.png'>" + " Hipermercado<br/>";
        }
        if (subtipoComercio14.checked) {
          valorSubtipoComercio14 = subtipoComercio14.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/kO8QPn/mercadoabastos.png'>" + " Mercado de Abastos<br/>";
        }
        if (subtipoTransporte15.checked) {
          valorSubtipoTransporte15 = subtipoTransporte15.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/bNs24n/cercanias.png'>" + " Cercanías<br/>";
        }
        if (subtipoTransporte16.checked) {
          valorSubtipoTransporte16 = subtipoTransporte16.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/fZBvPn/metro.png'>" + " Metro<br/>";
        }
        if (subtipoTransporte17.checked) {
          valorSubtipoTransporte17 = subtipoTransporte17.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/ddFN4n/parking.png'>" + " Parking<br/>";
        }
        if (subtipoTransporte18.checked) {
          valorSubtipoTransporte18 = subtipoTransporte18.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/khs24n/estacionesservicio.png'>" + " Estacion de Servicio<br/>";
        }
        if (subtipoOcio19.checked) {
          valorSubtipoOcio19 = subtipoOcio19.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/f1qTc7/cine.png'>" + " Cine<br/>";
        }
        if (subtipoOcio20.checked) {
          valorSubtipoOcio20 = subtipoOcio20.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/cCrZH7/teatro.png'>" + " Teatro<br/>";
        }
        if (subtipoOcio21.checked) {
          valorSubtipoOcio21 = subtipoOcio21.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/gQxkPn/parques.png'>" + " Jardines o Parques<br/>";
        }
        if (subtipoSalud22.checked) {
          valorSubtipoSalud22 = subtipoSalud22.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/dBfpjn/farmacia.png'>" + " Farmacia<br/>";
        }
        if (subtipoSalud23.checked) {
          valorSubtipoSalud23 = subtipoSalud23.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/cGogx7/consultorio.png'>" + " Consultorio de Salud<br/>";
        }
        if (subtipoSalud24.checked) {
          valorSubtipoSalud24 = subtipoSalud24.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/iw4Mx7/centrosalud.png'>" + " Centro de Salud<br/>";
        }
        if (subtipoSalud25.checked) {
          valorSubtipoSalud25 = subtipoSalud25.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/mQGjH7/hospital.png'>" + " Hospital<br/>";
        }
        if (subtipoProteccion26.checked) {
          valorSubtipoProteccion26 = subtipoProteccion26.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/cLeAqS/cruzroja.png'>" + " Cruz Roja<br/>";
        }
        if (subtipoProteccion27.checked) {
          valorSubtipoProteccion27 = subtipoProteccion27.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/hZT3AS/guardiacivil.png'>" + " Guardia Civil<br/>";
        }
        if (subtipoProteccion28.checked) {
          valorSubtipoProteccion28 = subtipoProteccion28.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/mets4n/policia_local.png'>" + " Policía Local<br/>";
        }
        if (subtipoProteccion29.checked) {
          valorSubtipoProteccion29 = subtipoProteccion29.value;
          leyendaSitiosInteres += "<img width='15px' src='https://image.ibb.co/ezBOAS/policia_nacional.png'>" + " Policía Nacional";
        }
        ExpresionSitiosInteres();
      }
    };


    //Definir la Expresion de los Sitios de Interes
    function ExpresionSitiosInteres() {
      expresionSitiosInteres = "subtipo = ";
      var subtipoList = [];
      if (subtipoEducacion1.checked) {
        subtipoList.push(valorSubtipoEducacion1);
      }
      if (subtipoEducacion2.checked) {
        subtipoList.push(valorSubtipoEducacion2);
      }
      if (subtipoEducacion3.checked) {
        subtipoList.push(valorSubtipoEducacion3);
      }
      if (subtipoEducacion4.checked) {
        subtipoList.push(valorSubtipoEducacion4);
      }
      if (subtipoEducacion5.checked) {
        subtipoList.push(valorSubtipoEducacion5);
      }
      if (subtipoEducacion6.checked) {
        subtipoList.push(valorSubtipoEducacion6);
      }
      if (subtipoEducacion7.checked) {
        subtipoList.push(valorSubtipoEducacion7);
      }
      if (subtipoEducacion8.checked) {
        subtipoList.push(valorSubtipoEducacion8);
      }
      if (subtipoEducacion9.checked) {
        subtipoList.push(valorSubtipoEducacion9);
      }
      if (subtipoComercio10.checked) {
        subtipoList.push(valorSubtipoComercio10);
      }
      if (subtipoComercio11.checked) {
        subtipoList.push(valorSubtipoComercio11);
      }
      if (subtipoComercio12.checked) {
        subtipoList.push(valorSubtipoComercio12);
      }
      if (subtipoComercio13.checked) {
        subtipoList.push(valorSubtipoComercio13);
      }
      if (subtipoComercio14.checked) {
        subtipoList.push(valorSubtipoComercio14);
      }
      if (subtipoTransporte15.checked) {
        subtipoList.push(valorSubtipoTransporte15);
      }
      if (subtipoTransporte16.checked) {
        subtipoList.push(valorSubtipoTransporte16);
      }
      if (subtipoTransporte17.checked) {
        subtipoList.push(valorSubtipoTransporte17);
      }
      if (subtipoTransporte18.checked) {
        subtipoList.push(valorSubtipoTransporte18);
      }
      if (subtipoOcio19.checked) {
        subtipoList.push(valorSubtipoOcio19);
      }
      if (subtipoOcio20.checked) {
        subtipoList.push(valorSubtipoOcio20);
      }
      if (subtipoOcio21.checked) {
        subtipoList.push(valorSubtipoOcio21);
      }
      if (subtipoSalud22.checked) {
        subtipoList.push(valorSubtipoSalud22);
      }
      if (subtipoSalud23.checked) {
        subtipoList.push(valorSubtipoSalud23);
      }
      if (subtipoSalud24.checked) {
        subtipoList.push(valorSubtipoSalud24);
      }
      if (subtipoSalud25.checked) {
        subtipoList.push(valorSubtipoSalud25);
      }
      if (subtipoProteccion26.checked) {
        subtipoList.push(valorSubtipoProteccion26);
      }
      if (subtipoProteccion27.checked) {
        subtipoList.push(valorSubtipoProteccion27);
      }
      if (subtipoProteccion28.checked) {
        subtipoList.push(valorSubtipoProteccion28);
      }
      if (subtipoProteccion29.checked) {
        subtipoList.push(valorSubtipoProteccion29);
      }
      for (var i = 0; i < subtipoList.length; i++) {
        if (i > 0) {
          expresionSitiosInteres += " OR subtipo = ";
        }
        expresionSitiosInteres += subtipoList[i];
      }
    };


    //Funcion de Callback de Sitios de Interes
    function callbackSitiosInteres(featureSet) {
      var arrayGraphicos = featureSet.features;
      if (arrayGraphicos.length != 0) {
        for (var i = 0; i < arrayGraphicos.length; i++) {
          featuresSitiosInteres.push(arrayGraphicos[i]);
        }
        fSetSitiosInteres.features = featuresSitiosInteres;
      }
    };


    //Funcion de Comprobar los Atributos de Tiempo
    function ComprobarAtributoTiempo() {
      if (btnAndando.checked) {
        atributoTiempo = "TiempoAndando";
      } else {
        atributoTiempo = "TiempoCoche";
      }
    };


    //Funcion de Comprobar los Rangos de Tiempo
    function ComprobarBreakValues() {
      if (btnAndando.checked) {
        breakValues = inputValorCorte1.value + ", " + inputValorCorte2.value + ", " + inputValorCorte3.value;
      } else {
        breakValues = inputValorCorte4.value + ", " + inputValorCorte5.value + ", " + inputValorCorte6.value;
      }
    };


    //Funcion de Ejecutar Limpiar
    function EjecutarLimpiar() {
      OcultaObj(contSitiosInteres);

      featurePunto = [];
      fSetPunto.features = featurePunto;
      graphicsLayerPunto.clear();

      var graficosAreasServicio = graphicsLayerAreasServicio.graphics;
      graphicsLayerAreasServicio.remove(graficosAreasServicio);
      graphicsLayerAreasServicio.clear();

      var graficosSitiosInteres = graphicsLayerSitiosInteres.graphics;
      graphicsLayerSitiosInteres.remove(graficosSitiosInteres);
      graphicsLayerSitiosInteres.clear();

      OcultaObj(btnLimpiar);
      btnSeleccionPunto.style.backgroundColor = "transparent";
      btnSeleccionPunto.style.color = "#8b8989";
    };



    //Funcion de Callback del Geoprocessor
    function callbackGeoprocessor(resultados, mensajes) {
      var paramAreasServicio = resultados[0].value;
      var arryGraphAreasServicio = paramAreasServicio.features;
      var primerValor = arryGraphAreasServicio[0];
      primerValor.setSymbol(fill0);
      var segundoValor = arryGraphAreasServicio[1];
      segundoValor.setSymbol(fill1);
      var tercerValor = arryGraphAreasServicio[2];
      tercerValor.setSymbol(fill2);
      graphicsLayerAreasServicio.add(primerValor);
      graphicsLayerAreasServicio.add(segundoValor);
      graphicsLayerAreasServicio.add(tercerValor);
      graphicsLayerAreasServicio.setInfoTemplate(infoTempServiceAreas);

      var paramSitiosInteres = resultados[1].value;
      var arryGraphSitiosInteres = paramSitiosInteres.features;
      if (arryGraphSitiosInteres.length != 0) {
        for (var i = 0; i < arryGraphSitiosInteres.length; i++) {
          graphicsLayerSitiosInteres.add(arryGraphSitiosInteres[i]);
          graphicsLayerSitiosInteres.setRenderer(rendererSitiosInteres);
          graphicsLayerSitiosInteres.setInfoTemplate(infoTempSitiosInteres);
        }
      } else {
        alert("No se han encontrado Sitios de Interés dentro de las Áreas de Servicio.");
      }
      var extent = graphicsUtils.graphicsExtent(graphicsLayerAreasServicio.graphics);
      map.setExtent(extent, true);

      //Muestra de la Leyenda de los Sitios de Interes
      MuestraObj(contSitiosInteres);
      legendSitiosInteres.innerHTML = leyendaSitiosInteres;

      MuestraObj(btnLimpiar);
    };

    //Funcion de Errores del Geoprocessor
    function errBack(msg) {
      alert("Error en la ejecucion de la herramienta.");
      console.log("Mensaje de Error de GPS: " + msg);
    };

  });