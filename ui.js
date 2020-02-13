class UI {
    constructor() {
        this.ubicacion = document.getElementById('w-ubicacion');
        this.descripcion = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humedad = document.getElementById('humedad');
        this.feelslike = document.getElementById('w-feels-like');
        this.viento = document.getElementById('w-viento');
        this.visibilidad = document.getElementById('visibilidad');
        this.presion = document.getElementById('presion');
    }

    paint(clima){
        this.icon.textContent ='';
        var image = document.createElement("img");
        var imageParent = this.icon;
        image.src = `http://openweathermap.org/img/w/${clima.weather[0].icon}.png`
        imageParent.appendChild(image);

        this.ubicacion.textContent = clima.name + ' ' + ',' + ' ' + clima.sys.country;
        this.descripcion.textContent = clima.weather[0].description;
        this.string.textContent = clima.main.temp + ' ' + 'C';
        this.humedad.textContent = `Humedad: ${clima.main.humidity} % `;
        this.feelslike.textContent = `Sensación térmica: ${clima.main.feels_like} C`; 
        this.visibilidad.textContent = `Visibilidad: ${clima.visibility} mts`;
        this.viento.textContent = `Viento: ${clima.wind.speed} km/h`;
        this.presion.textContent = `Presión atmosférica: ${clima.main.pressure} hPa`;
        // this.icon.textContent = clima.weather[0].icon + ".png";
        // this.icon.textContent =`http://openweathermap.org/img/w/${clima.weather[0].icon}.png`
      



    }
    }

