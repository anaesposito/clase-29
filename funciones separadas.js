//TODO LO DE CHECKBOX FUNCIONANDO
const hayAlgunCheckBoxChequeado = () => {
  for (let checkbox of filtroColor) {
    if (checkbox.checked) {
      return checkbox.value;
    }
  }
};

const pasaFiltros = (card) => {
  if (hayAlgunCheckBoxChequeado() === card.dataset.color) {
    return true;
  } else {
    return false;
  }
};

// input en pasa filtro
const pasaFiltros = (card) => {
  if (hayAlgoEscritoEnElInput()) {
    if (compararInputConTarjeta(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

//Radio funcionando
const pasaFiltros = (card) => {
  if (hayAlgunRadioChequeado() === card.dataset.sexo) {
    return true;
  } else {
    return false;
  }
};

const hayAlgunRadioChequeado = () => {
  for (let radio of filtroSexo) {
    if (radio.checked) {
      return radio.dataset.sexo;
    }
  }
};

// el completo que funciona casi
const pasaFiltros = (card) => {
  if (hayAlgunRadioChequeado()) {
    if (hayAlgunRadioChequeado() === card.dataset.sexo) {
      return true;
    } else {
      return false;
    }
  } else if (hayAlgunCheckBoxChequeado()) {
    if (hayAlgunCheckBoxChequeado() === card.dataset.color) {
      return true;
    } else {
      return false;
    }
  } else if (hayAlgoEscritoEnElInput()) {
    if (compararInputConTarjeta(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
