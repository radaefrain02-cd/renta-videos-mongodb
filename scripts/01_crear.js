// Crear la base de datos y las colecciones

// Seleccionamos (o creamos) la base de datos
db = db.getSiblingDB("renta_videos");

// Creamos las 3 colecciones
db.createCollection("clientes");   
db.createCollection("videos");     
db.createCollection("rentas");     

// Mostramos las colecciones creadas
db.getCollectionNames();
