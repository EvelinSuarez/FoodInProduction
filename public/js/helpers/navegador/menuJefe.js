let stock;
const optionInsumos = document.getElementById("optionInsumos");
optionInsumos.addEventListener("change", (e) => {
  stock = e.target.value;
  if (stock === "stockInsumos") {
    location.href = "../stock/stockInsumos.html";
  } else if (stock === "stockproduccion") {
    location.href = "../stock/stockProduccion.html";
  } else if (stock === "categorias") {
    location.href = "../stock/categorias.html";
  }
});

const optionProduccion = document.getElementById("optionProduccion");
optionProduccion.addEventListener("change", (e) => {
  stock = e.target.value;
  if (stock === "produccion") {
    location.href = "../produccion/produccion.html";
  } else if (stock === "Listado") {
    location.href = "../produccion/listado.html";
  }
});

const optionConfiguracion = document.getElementById("optionConfiguracion");
optionConfiguracion.addEventListener("change", (e) => {
  stock = e.target.value;
  if (stock === "Miperfil") {
    location.href = "../config/miperfil.html";
  } else if (stock === "Perfilsecundario") {
    location.href = "../config/perfilsecundario.html";
  } else if (stock === "Cerrarsesion") {
    location.href = "../config/cerrarsesion.html";
  }
});
