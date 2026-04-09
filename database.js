let cart = {};

// Esta función se ejecuta sola cuando la página abre
window.onload = () => {
    renderProductos();
};

function renderProductos() {
    const cont = document.getElementById('contenedor');
    if (!cont) return;
    cont.innerHTML = "";
    
    productosData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openModal(p.id);
        card.innerHTML = `
            <img src="${imgUrlBase}">
            <h3 style="font-size:13px;">${p.n}</h3>
            <div style="font-weight:bold; color:var(--azul); margin-bottom:10px;">S/ ${p.p}.00</div>
            <div class="card-buttons">
                <button class="btn-ver" onclick="event.stopPropagation(); openModal(${p.id})">Ver más</button>
                <button class="btn-add" onclick="event.stopPropagation(); addToCart('${p.n}', ${p.p}, event)">Añadir</button>
            </div>
        `;
        cont.appendChild(card);
    });
}

function openModal(id) {
    const p = productosData.find(x => x.id === id);
    document.getElementById('modalBody').innerHTML = `
        <img src="${imgUrlBase}" style="width:100%; border-radius:15px;">
        <h2>${p.n}</h2>
        <p><b>OEM:</b> ${p.oem || 'N/A'}</p>
        <p><b>Compatibilidad:</b> ${p.compatibilidad || 'Consultar'}</p>
        <button class="btn-add" style="width:100%; padding:15px; font-size:16px;" onclick="addToCart('${p.n}', ${p.p}, event)">Añadir al pedido</button>
    `;
    document.getElementById('productModal').style.display = 'flex';
}

function addToCart(name, price, e) {
    if (cart[name]) cart[name].qty++; else cart[name] = { price, qty: 1 };
    
    // Efecto Vuelo
    const btnCart = document.getElementById('btnCart');
    const rect = btnCart.getBoundingClientRect();
    const flyer = document.createElement('div');
    flyer.className = 'flying-item';
    flyer.style.left = (e.clientX - 20) + 'px';
    flyer.style.top = (e.clientY - 20) + 'px';
    document.body.appendChild(flyer);

    setTimeout(() => {
        flyer.style.left = rect.left + 'px';
        flyer.style.top = rect.top + 'px';
        flyer.style.transform = 'scale(0.1)';
        flyer.style.opacity = '0';
    }, 50);
    
    setTimeout(() => { flyer.remove(); }, 750);
    
    const totalQty = Object.values(cart).reduce((a, b) => a + b.qty, 0);
    document.getElementById('cartBadge').innerText = totalQty;
}

function ejecutarFiltro() {
    const q = document.getElementById('bus').value.toLowerCase();
    const filtrados = productosData.filter(p => p.n.toLowerCase().includes(q));
    // Aquí puedes llamar a una versión de render que acepte datos filtrados
    const cont = document.getElementById('contenedor');
    cont.innerHTML = "";
    // ... lógica de render filtrado ...
}
