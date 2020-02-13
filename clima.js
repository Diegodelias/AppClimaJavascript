class Clima {
    constructor(ciudad,pais) {
        this.apikey ='dfbae92f7b2a50d9053bd20bd9778d11';
        this.ciudad = ciudad;
        this.pais = pais;
        this.idioma = 'sp' ;


    }

    async obtenerclima(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.pais}&lang=${this.idioma}&appid=${this.apikey}&units=metric`)
        const responseData = await  response.json();

        return responseData;
    }

    cambiarLugar(ciudad,pais){
        this.ciudad = ciudad;
        this.pais = pais

    }

}