// 04_consultas.js - Consultas

db = db.getSiblingDB("renta_videos");

// 1. Ver todos los clientes
db.clientes.find();

// 2. Ver solo el nombre y correo de los clientes
db.clientes.find({}, { nombre: 1, correo: 1, _id: 0 });

// 3. Videos que tienen copias disponibles
db.videos.find({ copias_disponibles: { $gt: 0 } });

// 4. Videos de genero Animacion
db.videos.find({ genero: "Animacion" });

// 5. Videos ordenados del mas barato al mas caro
db.videos.find().sort({ precio: 1 });

// 6. Rentas que todavia no se devuelven
db.rentas.find({ estado: "rentada" });

// 7. Todas las rentas de un cliente (C1)
db.rentas.find({ id_cliente: "C1" });

// 8. Cuantas rentas hay en total
db.rentas.countDocuments();

// PROCESO 3: Informe para administracion

// 9. Cuantas veces se ha rentado cada video y cuanto dinero dejo
db.rentas.aggregate([
  { $group: { _id: "$id_video", veces_rentado: { $sum: 1 }, total_dinero: { $sum: "$monto" } } }
]);

// PROCESO 4: Efectivo total recibido

// 10. Total de dinero recibido por todas las rentas
db.rentas.aggregate([
  { $group: { _id: null, total_efectivo: { $sum: "$monto" } } }
]);

// PROCESO 6: Extracto mensual

// 11. Rentas del cliente C1 durante octubre de 2026
db.rentas.find({
  id_cliente: "C1",
  fecha_renta: { $gte: new Date("2026-10-01"), $lt: new Date("2026-11-01") }
});

// PROCESO 7: Extracto anual 
// 12. Total gastado por cada cliente en 2026
db.rentas.aggregate([
  { $match: { fecha_renta: { $gte: new Date("2026-01-01"), $lt: new Date("2027-01-01") } } },
  { $group: { _id: "$id_cliente", cantidad_rentas: { $sum: 1 }, total_gastado: { $sum: "$monto" } } }
]);

// EXTRA: unir rentas con datos del cliente

// 13. Rentas activas mostrando el nombre del cliente
db.rentas.aggregate([
  { $match: { estado: "rentada" } },
  { $lookup: { from: "clientes", localField: "id_cliente", foreignField: "_id", as: "cliente" } }
]);
