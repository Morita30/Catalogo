// URL base para las imágenes
const imgUrlBase = "https://miniture.b-cdn.net/wp-content/uploads/2023/10/kids_toys_02_1.jpeg";

// Lista de productos: c=categoría, m=marca, n=nombre, p=precio
const productosData = [
    { c: "pastilla", m: "toyota", n: "Pastilla Hilux Revo", p: 120 },
    { c: "disco", m: "nissan", n: "Disco Frontier Del", p: 180 },
    { c: "amortiguador", m: "toyota", n: "Amortiguador Hilux", p: 250 },
    { c: "radiador", m: "hyundai", n: "Radiador Accent", p: 420 },
    { c: "zapata", m: "toyota", n: "Zapata Hilux", p: 130 },
    { c: "embrague", m: "nissan", n: "Kit Embrague NP300", p: 850 }
];

// Relleno automático para pruebas (hasta 20 items)
while(productosData.length < 20) {
    let base = productosData[Math.floor(Math.random() * productosData.length)];
    productosData.push({...base, n: base.n + " " + productosData.length});
}
