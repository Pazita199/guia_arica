// Aquí se configuran las fotos reales de la página.
// 1) Pon tus fotos dentro de la carpeta "fotos" del repositorio (al lado de index.html).
// 2) Escribe el nombre del archivo y el texto que quieres mostrar, igual que en los ejemplos.
// Los nombres de archivo van sin espacios ni tildes, por ejemplo: morro-atardecer.jpg
// Cada línea de la lista (menos la última) termina con coma.
// Para activar un ejemplo, borra las dos barras // del comienzo de la línea.
//
// ¿De dónde sacar fotos? Lo mejor son fotos propias del grupo. Si usas fotos de internet,
// usa las que permiten reutilizarse (por ejemplo, Wikimedia Commons) y escribe el autor en "credito".
// Consejo: achica las fotos a unos 1600 px de ancho antes de subirlas para que la página cargue rápido.

// La página ya trae fotos de Wikimedia Commons. Lo que pongas aquí se suma a esas fotos.
//
// Foto propia para la portada: aparece como la primera foto. Déjalo en null para usar solo las que ya trae.
window.PORTADA = null;
// window.PORTADA = { archivo: "portada-morro.jpg", texto: "El Morro de Arica visto desde la playa", credito: "Foto: Nombre del autor" };

// Fotos propias para la galería. Aparecen primero, antes de las que ya trae la página.
window.FOTOS = [
  // { archivo: "morro-atardecer.jpg", texto: "El Morro al atardecer", credito: "Nombre del autor" },
  // { archivo: "playa-chinchorro.jpg", texto: "Playa Chinchorro" },
  // { archivo: "lago-chungara.jpg", texto: "Lago Chungará y volcán Parinacota" },
];
