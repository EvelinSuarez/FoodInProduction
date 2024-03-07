let stock
const optionInsumos = document.getElementById('optionInsumos')
optionInsumos.addEventListener('change', (e) => {
  stock = e.target.value
  if (stock === 'stockInsumos') {
    location.href = '../stock/stockInsumos.html'
  } else if (stock === 'stockproveedores') {
    location.href = '../stock/stockProveedor.html'
  } else if (stock === 'categorias') {
    location.href = '../stock/categorias.html'
  }
})

const optionProveedores = document.getElementById('optionProveedores')
optionProveedores.addEventListener('change', (e) => {
  stock = e.target.value
  if (stock === 'proveedores') {
    location.href = '../proveedor/proveedor.html'
  } else if (stock === 'Listado') {
    location.href = '../proveedor/listado.html'
  }
})

const optionConfiguracion = document.getElementById('optionConfiguracion')
optionConfiguracion.addEventListener('change', (e) => {
  stock = e.target.value
  if (stock === 'Miperfil') {
    location.href = '../config/miperfil.html'
  } else if (stock === 'Perfilsecundario') {
    location.href = '../config/perfilsecundario.html'
  } else if (stock === 'Cerrarsesion') {
    location.href = '../config/cerrarsesion.html'
  }
})
