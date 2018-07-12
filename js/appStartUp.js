var map;

require(["esri/map",
    "esri/geometry/Point",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/dijit/Search",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/Color",
    "esri/renderers/SimpleRenderer",
    "esri/InfoTemplate",
    "esri/dijit/HomeButton",
    "esri/dijit/LocateButton",
    "esri/dijit/Scalebar",
    "esri/dijit/BasemapToggle",
    "esri/dijit/LayerList",
    "esri/dijit/Legend",
    "dojo/domReady!"
  ],

  function(Map,
    Point,
    FeatureLayer,
    GraphicsLayer,
    Search,
    SimpleLineSymbol,
    SimpleFillSymbol,
    Color,
    SimpleRenderer,
    InfoTemplate,
    HomeButton,
    LocateButton,
    Scalebar,
    BasemapToggle,
    LayerList,
    Legend) {

    var pt = new Point(-3.80325, 40.5167);

    map = new Map("map", {
      center: pt,
      basemap: "topo-vector",
      zoom: 8
    });


    //Capa de Limite Administrativo de la Provincia de Madrid
    var urlProvinciaMadrid = "https://localhost:6443/arcgis/rest/services/PropertFy/LimitesAdministrativos/MapServer/2";
    var flProvinciaMadrid = new FeatureLayer(urlProvinciaMadrid);
    flProvinciaMadrid.setOpacity(0.05);
    map.addLayer(flProvinciaMadrid, 2);

    //Widget de Home
    var btnHome = new HomeButton({
      map: map
    }, "btnHome");
    btnHome.startup();

    //Widget de Locate Button
    var locateButton = new LocateButton({
      map: map
    }, "btnLocate");
    locateButton.startup();

    //Widget de Busquedas
    var graphicsLayerSearch = new GraphicsLayer();
    map.addLayer(graphicsLayerSearch, 1);

    // -> Simbolo de los resultados de los municipios y distritos del Widget Search
    var line = new SimpleLineSymbol();
    line.setColor(new Color([163, 112, 149]));
    var fill = new SimpleFillSymbol();
    fill.setColor(new Color([84, 30, 81, 0.15]));
    fill.setOutline(line);

    var searches = new Search({
        map: map,
        enableInfoWindow: true,
        showInfoWindowOnSelect: true,
        graphicsLayer: graphicsLayerSearch,
      },
      "search");
    var sources = searches.get("sources");

    //Configuracion de Ventanas emergentes y Fuentes de Busqueda
    var infoTempMunicipios = new InfoTemplate("Atributos de la entidad",
      "Nombre del Municipio: ${DESBDT}<br>" +
      "Código del Municipio: ${GEOCODIGO}");
    sources.push({
      featureLayer: new FeatureLayer("https://localhost:6443/arcgis/rest/services/PropertFy/LimitesAdministrativos/MapServer/1"),
      searchFields: ["DESBDT"],
      suggestionTemplate: "${DESBDT}",
      exactMatch: false,
      name: "Municipios de Madrid",
      outFields: ["DESBDT", "GEOCODIGO"],
      placeholder: "Buscar Municipios de Madrid",
      maxResults: 6,
      maxSuggestions: 6,
      infoTemplate: infoTempMunicipios,
      highlightSymbol: fill,
      enableSuggestions: true,
      showInfoWindowOnSelect: false,
      activeSourceIndex: 1
    });
    var infoTempDistritos = new InfoTemplate("Atributos de la entidad",
      "Nombre del Distrito: ${Distrito}<br>" +
      "Código del Distrito: ${GEOCODIGO}");
    sources.push({
      featureLayer: new FeatureLayer("https://localhost:6443/arcgis/rest/services/PropertFy/LimitesAdministrativos/MapServer/0"),
      searchFields: ["Distrito"],
      suggestionTemplate: "${Distrito}",
      exactMatch: false,
      name: "Distritos de Madrid",
      outFields: ["Distrito", "GEOCODIGO"],
      placeholder: "Buscar Distritos de Madrid",
      maxResults: 6,
      maxSuggestions: 6,
      infoTemplate: infoTempDistritos,
      highlightSymbol: fill,
      enableSuggestions: true,
      showInfoWindowOnSelect: false,
      activeSourceIndex: 1
    });
    searches.set("sources", sources);
    searches.startup();


    //Widget de Scalebar
    var scaleBar = new Scalebar({
      map: map,
      scalebarUnit: "metric",
      attachTo: "bottom-left"
    });

    //Widget de Basemap Toggle
    var toggle = new BasemapToggle({
      map: map,
      visible: true,
      basemap: "satellite"
    }, "bmToggle");
    toggle.startup();

    //Leyenda cargada por defecto al iniciar la aplicacion
    var legendInmuebles = document.getElementById("legendInmuebles");
    var leyendaViviendas = "<img width='15px' src='https://image.ibb.co/eWfpjn/piso.png'> Piso</br>" +
      "<img width='15px' src='https://image.ibb.co/n7bJc7/chalet.png'> Chalet<br/>" +
      "<img width='15px' src='https://image.ibb.co/fbzFPn/casaadosada.png'> Casa adosada<br/>" +
      "<img width='15px' src='https://image.ibb.co/i0TmVS/duplex.png'> Duplex<br/>" +
      "<img width='15px' src='https://image.ibb.co/mAHfqS/atico.png'> Ático<br/>";
    legendInmuebles.innerHTML = leyendaViviendas;

  });