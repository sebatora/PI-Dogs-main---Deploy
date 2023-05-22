export const averageWeight = (data) => {

  data = data.replace(/\s/g, '');
  // Verificar si hay un guion en los datos
  if (data.includes('-')) {
    const dataSplit = data.split('-');
    const firstNumber = parseInt(dataSplit[0]);
    const secondNumber = parseInt(dataSplit[1]);
    
    // Calcular el promedio
    const average = (firstNumber + secondNumber) / 2;
    return average;
  }
  else {
    // Si no hay guion
    const firstNumber = parseInt(data);
    return firstNumber;
  }
}