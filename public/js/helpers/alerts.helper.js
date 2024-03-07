//informacion de las alertas
const alertsData = [
    {
      titulo: "Alerta Positiva",
      mensaje: "Este proveedor tiene mejor rendimiento",
      color: "green",
      logo: "https://img.icons8.com/doodle/48/checked-checkbox.png",
    },
    {
      titulo: "Alerta Secundaria",
      mensaje: "El perfil segundario sequiere una actualizacion",
      color: "blue",
      logo: "https://img.icons8.com/ultraviolet/40/light.png",
    },
    {
      titulo: "Alerta urgente",
      mensaje: "El producto carne de cerdo llego a su minimo",
      color: "red",
      logo: "https://img.icons8.com/color/48/high-priority.png",
    },
    {
      titulo: "Alerta Pasiva",
      mensaje: "Se necesita comprar verduras",
      color: "yellow",
      logo: "https://img.icons8.com/ios-filled/50/FAB005/error--v1.png",
    },
  ];

  let alerts; //variable de alertas (puede varias)

  //Preguntar si esta cargando la pagina
  window.addEventListener("load", (e) => {
    if (e) {
      alerts = document.getElementById("alerts"); // Seleccionar la seccion de alertas para agregarlas
      loadAlerts(alertsData); //cargas las alertas cuando cargue la pantalla
    }
  });

  //funcion para cargar las alertas
  const loadAlerts = (data) => {
    //recorrer la variable de data (que se recibe cuando se ejecuta la funcion)
    data.forEach((alert) => {
      //agregar cada una de las alertas en el HTML seleccionado previamente
      alerts.innerHTML += `
    <article
      class="flex justify-between max-w-lg p-5 overflow-hidden text-${alert.color}-700 bg-${alert.color}-100 rounded shadow-md shadow-${alert.color}-500/20"
    >
      <div class="p-4 mx-2 shrink-0">
        <img
          width="40"
          height="40"
          src="${alert.logo}"
          alt="checked-checkbox"
        />
      </div>
      <div class="flex flex-col w-[200px]">
        <h2 class="text-xl font-black text-${alert.color}-500 capitalize">
          ${alert.titulo}
        </h2>
        <p class="text-sm">${alert.mensaje}</p>
      </div>
      <div class="flex items-center justify-center">
        <a href="#" class="mx-4 text-sm tracking-wide hover:underline"
          >Consultar</a
        >
        <button class="mx-4 text-3xl font-semibold">X</button>
      </div>
    </article>
    `;
    });
  };