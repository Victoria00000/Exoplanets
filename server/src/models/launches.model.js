const launches = new Map(); //Un Map es una estructura de datos en JavaScript que almacena pares clave-valor.

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["VA", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
//Agregando un nuevo elemento al objeto Map llamado launches. En este caso, la clave (key) del elemento será launch.flightNumber,
//y el valor (value) asociado con esa clave será el objeto launch completo.
//console.log(launches.get(100)); // Devolverá el objeto `launch` relacionado con el número de vuelo 100

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
