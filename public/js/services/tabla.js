const articulos = [
    {
        id: 1234,
        idProveedor: 234235,
        nombre: "Lo que sea",
        unidadMedida: "kg",
        cantidadActual: 200,
        minimos: 20,
        maximos: 250
    },{
        id: 5678,
        idProveedor: 3452,
        nombre: "Nose",
        unidadMedida: "kg",
        cantidadActual: 200,
        minimos: 20,
        maximos: 250
    },{
        id: 5678,
        idProveedor: 3452,
        nombre: "Nose",
        unidadMedida: "kg",
        cantidadActual: 200,
        minimos: 20,
        maximos: 250
    },{
        id: 5678,
        idProveedor: 3452,
        nombre: "Nose",
        unidadMedida: "kg",
        cantidadActual: 200,
        minimos: 20,
        maximos: 250
    }

]
const tblBody = document.getElementById("tblBody")
articulos.forEach((info)=>{ 
  tblBody.innerHTML += `
  <tr class="bg-gray-200">
            <td class="px-4 py-3 border-gray-400 ">${info.id}</td>
            <td class="px-4 py-3 border-gray-400 ">${info.idProveedor}</td>
            <td class="px-4 py-3 border-gray-400 ">${info.nombre}</td>
            <td class="px-4 py-3 border-gray-400 ">${info.unidadMedida}</td>
            <td class="px-4 py-3 border-gray-400 ">${info.cantidadActual}</td>
            <td class="px-4 py-3 border-gray-400 ">${info.minimos}</td>
            <td class="px-4 py-3 border-gray-400 ">${info.maximos}</td>
        </tr>`
})