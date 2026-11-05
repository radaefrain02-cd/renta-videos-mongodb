// 03_operaciones.js - Agregar, rentar y devolver

db = db.getSiblingDB("renta_videos");

// PROCESO 1: Agregar nuevo cliente 
db.clientes.insertOne({
  _id: "C6",
  nombre: "Elena Choque",
  correo: "elena@mail.com",
  telefono: "70066677"
});

// Verificacion
db.clientes.find({ _id: "C6" });

// PROCESO 2: Renta de un video 
// Paso 1: registrar la renta (el cliente C6 renta el video V1)
db.rentas.insertOne({
  _id: "R9",
  id_cliente: "C6",
  id_video: "V1",
  fecha_renta: new Date(),
  fecha_devolucion: null,
  monto: 30,
  estado: "rentada"
});

// Paso 2: restar una copia disponible del video
db.videos.updateOne(
  { _id: "V1" },
  { $inc: { copias_disponibles: -1 } }
);

// Verificacion
db.rentas.find({ _id: "R9" });
db.videos.find({ _id: "V1" });

// PROCESO 5: Registrar video devuelto
// Paso 1: marcar la renta R6 como devuelta
db.rentas.updateOne(
  { _id: "R6" },
  { $set: { estado: "devuelta", fecha_devolucion: new Date() } }
);

// Paso 2: sumar una copia disponible al video V2
db.videos.updateOne(
  { _id: "V2" },
  { $inc: { copias_disponibles: 1 } }
);

// Verificacion
db.rentas.find({ _id: "R6" });
db.videos.find({ _id: "V2" });
