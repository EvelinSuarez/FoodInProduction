import { insumos } from "./data/stockInsumos.js";

const tblBody = document.getElementById("tblBody");
insumos.forEach((info) => {
  tblBody.innerHTML += `
  <tr class="bg-gray-200 border-2 border-black">
    <td class="px-4 py-3 border-gray-400 ">${info.id}</td>
    <td class="px-4 py-3 border-gray-400 ">${info.idProveedor}</td>
    <td class="px-4 py-3 border-gray-400 ">${info.nombre}</td>
    <td class="px-4 py-3 border-gray-400 ">${info.unidadMedida}</td>
    <td class="px-4 py-3 border-gray-400 ">${info.cantidadActual}</td>
    <td class="px-4 py-3 border-gray-400 ">${info.minimos}</td>
    <td class="px-4 py-3 border-gray-400 ">${info.maximos}</td>
    <td class="px-4 py-3 border-gray-400 ">
      <button class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"> 🗑 </button>
      <button class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"> 🔍 </button> 
    </td>
  </tr>`;
});
