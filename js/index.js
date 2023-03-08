class Profesores{

    constructor(){
        this.Cuil,
        this.NombreyApellido,
        this.HorasCatedra
    }

    getProfes(){
        return `${this.Cuil}, ${this.NombreyApellido}, (${this.HorasCatedra}) `;
    }
}

let Lista=[];
let lista= JSON.parse(localStorage.getItem("lsProfesores")) || [];

function Agregar ()
{

    const cuil= document.getElementById("txtCuil")
    const nombreyapellido= document.getElementById("txtNombreyApellido")
    const horascatedra= document.getElementById("txtHoras Catedra")

    let objProfesores = new (Profesores);

    objProfesores.Cuil= cuil.value; 
    objProfesores.NombreyApellido= nombreyapellido.value;
    objProfesores.HorasCatedra= horascatedra.value;

    lista.push(objProfesores);

    localStorage.removeItem("lsProfesores");
    localStorage.setItem("lsProfesores" , JSON.stringify(lista))

    cuil.value="";
    nombreyapellido.value="";
    horascatedra.value="";

}

function Estadisticas()
{
    let CantidadTotaldeProfesores=0;
    let acumTotalHorasCatedra=0;
    let PromedioHorasCatedra=0;
    let ProfesormenHorascat= parseInt(lista[0].HorasCatedra) / parseInt(lista[0].NombreyApellido);
    
    let menhoras=9999;  
    var PorfesorMenosHoras = "";

    for(let obj of lista)
    {
        CantidadTotaldeProfesores++;

        let o = new Profesores();
        Object.assign(o,obj);
        if(o.HorasCatedra != "" || o.HorasCatedra != null){
            acumTotalHorasCatedra +=parseInt(o.HorasCatedra);
        }
        if(o.HorasCatedra < menhoras){
            menhoras = o.HorasCatedra;
            PorfesorMenosHoras = o.NombreyApellido;

        }  
        
    }

    PromedioHorasCatedra = acumTotalHorasCatedra / CantidadTotaldeProfesores;

    document.getElementById("lblTotaldeProfesores").innerHTML = CantidadTotaldeProfesores;
    document.getElementById("lblTotalHorasCatedra").innerHTML = acumTotalHorasCatedra;
    document.getElementById("lblPromedioHorasCatedra").innerHTML = PromedioHorasCatedra;
    document.getElementById("lblProfesorMenosHoras").innerText = PorfesorMenosHoras;

}

function Salir()
{
    localStorage.removeItem("lsProfesores");

    document.getElementById("lblTotaldeProfesores").innerHTML = 0;
    document.getElementById("lblTotalHorasCatedra").innerHTML = 0;
    document.getElementById("lblPromedioHorasCatedra").innerHTML = 0;
    document.getElementById("lblProfesorMenosHoras").innerText = 0;
}
