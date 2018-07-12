var map;

require(["esri/map",
    "dojo/domReady!"
  ],

  function(Map) {
    //Variables de botones de Cerrar Ventanas
    var btnCerrarVentana1 = document.getElementById("btnCerrarVentana1");
    var btnCerrarVentana2 = document.getElementById("btnCerrarVentana2");
    //Eventos asociados a los botones de Cerrar Ventana
    btnCerrarVentana1.onclick = CerrarVentanas;
    btnCerrarVentana2.onclick = CerrarVentanas;
    //Funcion asociada a los eventos de los botones de Cerrar Ventanas
    function CerrarVentanas() {
      OcultaObj(menuConsultas);
      btnConsultas.style.backgroundColor = "rgba(27, 75, 79, 0.55)";
      btnConsultas.style.borderColor = "transparent";
      OcultaObj(menuServiceAreas);
      btnServiceAreas.style.backgroundColor = "rgba(27, 75, 79, 0.55)";
      btnServiceAreas.style.borderColor = "transparent";
    };
  });

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
    btn.style.backgroundColor = "#173e43";
    btn.style.color = "#fff";
  } else {
    obj.checked = false;
    btn.style.backgroundColor = "#fff";
    btn.style.color = "#8b8989";
  }
};

//Funcion de cambio de estilos de los Botones
function CambioEstiloBoton(color, bordercolor, obj) {
  obj.style.backgroundColor = color;
  obj.style.borderColor = bordercolor;
};