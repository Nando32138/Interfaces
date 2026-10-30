let clics = 0;
 
function contar() {
  clics++;
  document.getElementById('contador').textContent = 'Clics: ' + clics;
}
function reiniciar() {
  clics = 0;
  document.getElementById('contador').textContent = 'Clics: 0';
}
 
document.getElementById('app').innerHTML = `
  <h1>Nivel 1: componentes</h1>
  ${Tarjeta('1. Botón y eventos', `
  <p id="contador">Clics: 0</p>
  ${Boton('Presióname', 'contar()')}
  ${Boton('Reiniciar', 'reiniciar()', 'peligro')}
`)};
`;