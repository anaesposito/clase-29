// const filtroBotones = document.querySelectorAll(".filtro-boton");

// for (let boton of filtroBotones) {
//   boton.onclick = () => {
//     console.log(boton.onclick);
//     for (let card of cards) {
//       if (boton.dataset.color === card.dataset.color) {
//         card.classList.remove("hidden");
//       } else if (boton.dataset.color === "todos") {
//         card.classList.remove("hidden");
//       } else card.classList.add("hidden");
//     }
//   };
// }

const cards = document.querySelectorAll(".card");
const busquedaNombre = document.querySelector("#nombre");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const radios = document.querySelectorAll("input[type='radio']");

const ocultarTarjeta = (card) => {
  return card.classList.add("hidden");
};

const mostrarTarjeta = (card) => {
  return card.classList.remove("hidden");
};

const filtrarTarjetas = () => {
  for (let card of cards) {
    if (pasaFiltros(card)) {
      mostrarTarjeta(card);
    } else {
      ocultarTarjeta(card);
    }
  }
};

const compararImputConTarjetas = (card) => {
  if (card.dataset.nombre.includes(busquedaNombre.value.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const hayAlgunCheckboxChequeado = () => {
  for (checkbox of checkboxes) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

const hayAlgunRadioChequeado = () => {
  for (radio of radios) {
    console.log(radio);
    if (radio.checked) {
      return true;
    }
  }
  return false;
};

const busquedaTieneValue = () => {
  if (busquedaNombre.value) {
    return true;
  }
  return false;
};

busquedaNombre.oninput = () => {
  filtrarTarjetas();
};

for (let checkbox of checkboxes) {
  checkbox.oninput = () => {
    filtrarTarjetas();
  };
}

for (let radio of radios) {
  radio.oninput = () => {
    filtrarTarjetas();
  };
}

const pasaFiltros = () => {
  if (busquedaTieneValue()) {
    if (compararImputConTarjetas(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
// pasaFiltros -> param card -> return true o false nombreCoincideConBusqueda
// CUMPLIDA revisar si hay algo escrito en input // true / false
// CUMPLIDA revisar si hay algo chequeado en los checkbox // true / false
// CUMPLIDA revisar si hay algo chequeado en los radio // true / false
// ver si el nombre escrit en el input coincide con el data-nombre de la tarjeta // true / false
// ver si alguno de los checkbox chequeados coincide con los colores de la tarjeta // true / false
// ver si el radio chequeado coincide con el sexo de la tarjeta // true / false

// const nombreCoincideConBusqueda = () => {
//   busquedaNombre.oninput = () => {
//     if (busquedaNombre.value.includes(card.dataset.nombre)) {
//       return true;
//     }
//   };
// };

// const nombreCoincideConBusqueda = () => {
//   busquedaNombre.oninput = () => {
//     for (let card of cards) {
//       let nombre = card.dataset.nombre;
//       let busqueda = busquedaNombre.value;
//       if (nombre.includes(busqueda)) {
//         return true;
//       }
//     }
//   };
//   return false;
// };

//ESTO ERA UNA FUNCION PRUEBA
//   for (let card of cards) {
//     let nombre = card.dataset.nombre;
//     let busqueda = busquedaNombre.value;
//     if (busquedaNombre.oninput && nombre.includes(busqueda)) {
//       card.classList.add("hidden");
//     }
//   }
// };

// ESTA ERA UNA FUNCION Q SI SERVIA
// busquedaNombre.oninput = () => {
//   for (let card of cards) {
//     let nombre = card.dataset.nombre;
//     let busqueda = busquedaNombre.value;
//     if (nombre.includes(busqueda)) {
//       card.classList.remove("hidden");
//     } else {
//       card.classList.add("hidden");
//     }
//     if (busquedaNombre.value == "") {
//       card.classList.remove("hidden");
//     }
//   }
// };

// const radioMacho = document.querySelector("#macho");
// const radioHembra = document.querySelector("#hembra");
// const radioIndistinto = document.querySelector("#indistinto");

// radioMacho.onclick = () => {
//   for (let card of cards) {
//     if (radioMacho.dataset.sexo === card.dataset.sexo) {
//       card.classList.remove("hidden");
//     } else {
//       card.classList.add("hidden");
//     }
//   }
// };

// radioHembra.onclick = () => {
//   for (let card of cards) {
//     if (radioHembra.dataset.sexo === card.dataset.sexo) {
//       card.classList.remove("hidden");
//     } else {
//       card.classList.add("hidden");
//     }
//   }
// };

// radioIndistinto.onclick = () => {
//   for (let card of cards) {
//     if (radioIndistinto.dataset.sexo === card.dataset.sexo) {
//       card.classList.remove("hidden");
//     } else {
//       card.classList.add("hidden");
//     }
//   }
// };

// const todos = document.querySelector("#todos");

// for (let checkbox of checkboxes) {
//   checkbox.oninput = () => {
//     for (let card of cards) {
//       card.classList.add("hidden");
//       for (let filtro2 of checkboxes) {
//         if (filtro2.checked) {
//           if (filtro2.value === card.dataset.color) {
//             card.classList.remove("hidden");
//           }
//         } else if (todos.checked) {
//           card.classList.remove("hidden");
//         }
//       }
//     }
//   };
