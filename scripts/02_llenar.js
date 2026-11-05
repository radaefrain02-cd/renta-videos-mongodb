// 02_llenar.js - Insertar datos de ejemplo

db = db.getSiblingDB("renta_videos");

//  CLIENTES
db.clientes.insertMany([
  { _id: "C1", nombre: "Ana Quispe",    correo: "ana@mail.com",    telefono: "70011122" },
  { _id: "C2", nombre: "Luis Mamani",   correo: "luis@mail.com",   telefono: "70022233" },
  { _id: "C3", nombre: "Carla Rojas",   correo: "carla@mail.com",  telefono: "70033344" },
  { _id: "C4", nombre: "Diego Flores",  correo: "diego@mail.com",  telefono: "70044455" },
  { _id: "C5", nombre: "Sofia Condori", correo: "sofia@mail.com",  telefono: "70055566" }
]);

//  VIDEOS 
db.videos.insertMany([
  { _id: "V1", titulo: "El Padrino",     genero: "Drama",     precio: 30, copias_totales: 3, copias_disponibles: 3 },
  { _id: "V2", titulo: "Matrix",         genero: "Ciencia ficcion", precio: 30, copias_totales: 3, copias_disponibles: 2 },
  { _id: "V3", titulo: "Toy Story",      genero: "Animacion", precio: 25, copias_totales: 2, copias_disponibles: 1 },
  { _id: "V4", titulo: "Jurassic Park",  genero: "Aventura",  precio: 40, copias_totales: 2, copias_disponibles: 2 },
  { _id: "V5", titulo: "Shrek",          genero: "Animacion", precio: 25, copias_totales: 2, copias_disponibles: 1 },
  { _id: "V6", titulo: "Gladiador",      genero: "Accion",    precio: 35, copias_totales: 2, copias_disponibles: 2 }
]);

//  RENTAS
// fecha_devolucion = null significa que el video todavia no se devuelvee
db.rentas.insertMany([
  { _id: "R1", id_cliente: "C1", id_video: "V4", fecha_renta: new Date("2026-09-05"), fecha_devolucion: new Date("2026-09-08"), monto: 40, estado: "devuelta" },
  { _id: "R2", id_cliente: "C2", id_video: "V1", fecha_renta: new Date("2026-09-12"), fecha_devolucion: new Date("2026-09-15"), monto: 30, estado: "devuelta" },
  { _id: "R3", id_cliente: "C1", id_video: "V1", fecha_renta: new Date("2026-10-02"), fecha_devolucion: new Date("2026-10-05"), monto: 30, estado: "devuelta" },
  { _id: "R4", id_cliente: "C3", id_video: "V6", fecha_renta: new Date("2026-10-10"), fecha_devolucion: new Date("2026-10-13"), monto: 35, estado: "devuelta" },
  { _id: "R5", id_cliente: "C2", id_video: "V3", fecha_renta: new Date("2026-10-20"), fecha_devolucion: new Date("2026-10-23"), monto: 25, estado: "devuelta" },
  { _id: "R6", id_cliente: "C1", id_video: "V2", fecha_renta: new Date("2026-11-01"), fecha_devolucion: null, monto: 30, estado: "rentada" },
  { _id: "R7", id_cliente: "C4", id_video: "V3", fecha_renta: new Date("2026-11-02"), fecha_devolucion: null, monto: 25, estado: "rentada" },
  { _id: "R8", id_cliente: "C2", id_video: "V5", fecha_renta: new Date("2026-11-03"), fecha_devolucion: null, monto: 25, estado: "rentada" }
]);

// Verificamos cuantos documentos hay en cada coleccion
print("Clientes: " + db.clientes.countDocuments());
print("Videos: " + db.videos.countDocuments());
print("Rentas: " + db.rentas.countDocuments());
