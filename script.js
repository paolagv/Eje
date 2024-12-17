
let map = L.map('map').setView([19.365, -99.589], 14); // Coordenadas


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


map.on('click', function (e) {
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;

  
    let form = document.getElementById('addPinForm');
    form.style.display = 'block';

    
    document.getElementById('addPinForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let category = document.getElementById('category').value;
        let comment = document.getElementById('comment').value;
        let image = document.getElementById('image').files[0];

     
        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`
                <b>Categoría:</b> ${category}<br>
                <b>Comentario:</b> ${comment}<br>
                <b>Imagen:</b><br>
                <img src="${URL.createObjectURL(image)}" width="100"><br>
            `);

       
        form.style.display = 'none';
    });
});
