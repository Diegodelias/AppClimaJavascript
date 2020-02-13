//Iniicalizar Storage

const storage = new Storage();

const climaUbicacion = storage.obtenerInfoUbicacion();

//Inicialidar objetto clima

const climaObj = new Clima(climaUbicacion.ciudad,climaUbicacion.pais);

const ui = new UI();


//obterner clima al cargar el DOM

document.addEventListener('DOMContentLoaded', ObtenerClima);

// Cambiar ubicación geografica
document.getElementById('w-change-btn').addEventListener('click',(e) =>{

    const ciudad = document.getElementById('ciudad').value;
    const pais = document.getElementById('pais').value;
    // climaObj.cambiarLugar('madrid','ES');
    climaObj.cambiarLugar(ciudad,pais);

    storage.setInfoUbicacion(ciudad,pais);

    ObtenerClima();
    $('#locModal').modal('hide');

});

// 


function ObtenerClima(){

    climaObj.obtenerclima()
    .then(resultados =>{
            console.log(resultados)
          
            ui.paint(resultados)
    })
    .catch(err => console.log(err))


}

