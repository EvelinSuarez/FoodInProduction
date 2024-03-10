let stock;
const optionInsumos = document.getElementById("optionInsumos");
optionInsumos.addEventListener("change", (e) => {
  stock = e.target.value;
  if (stock === "stockInsumos") {
    location.href = "../../modulos/stock/stockInsumos.html";
  } else if (stock === "stockproveedores") {
    location.href = "../../modulos/stock/stockProveedor.html";
  } else if (stock === "categorias") {
    location.href = "../../modulos/stock/categorias.html";
  }
});

const optionProveedores = document.getElementById("optionProveedores");
optionProveedores.addEventListener("change", (e) => {
  stock = e.target.value;
  if (stock === "proveedores") {
    location.href = "../../modulos/proveedor/proveedor.html";
  } else if (stock === "Listado") {
    location.href = "../../modulos/proveedor/listado.html";
  }
});

const optionConfiguracion = document.getElementById("optionConfiguracion");
optionConfiguracion.addEventListener("change", (e) => {
  stock = e.target.value;
  if (stock === "Miperfil") {
    location.href = "../../modulos/config/miperfil.html";
  } else if (stock === "PerfilSecundario") {
    location.href = "../../modulos/config/secundario.html";
  } else if (stock === "CerrarSesion") {
    location.href = "../../index.html";
  }
});
