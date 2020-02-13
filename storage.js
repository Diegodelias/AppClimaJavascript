class Storage {
    constructor(){
        this.ciudad;
        this.pais;
        this.defaultCiudad = 'Buenos Aires';
        this.defaultPais = 'AR';
     }
    obtenerInfoUbicacion(){
        if(localStorage.getItem('ciudad') === null) {
            this.ciudad = this.defaultCiudad;

        } else{
            this.ciudad = localStorage.getItem('ciudad');
        }

        if(localStorage.getItem('pais') === null) {
            this.pais = this.pais;

        } else{
            this.pais = localStorage.getItem('pais');
        }

        return {

            ciudad: this.ciudad,
            pais: this.pais
        }
    }

    setInfoUbicacion(ciudad,pais){
        localStorage.setItem('ciudad', ciudad);
        localStorage.setItem('pais',pais);

    }
}