import { Autor } from './Autor';
export class Libro extends Autor {
    private titulo:string="";
    private tipo:string="";
    private editoral:string="";
    private year:number=0;

    constructor(nombre:string, nacionalidad:string, fecha_nac:number, titulo:string, tipo:string,editorial:string, year:number,){
        super(nombre,nacionalidad,fecha_nac)
        this.titulo = titulo;
        this.tipo = tipo;
        this.editoral = editorial;
        this.year = year;0
        
    }

    public get_titulo():string {
        return this.titulo;
    }

    public get_tipo():string{
        return this.tipo;
    }

    public get_editorial():string {
        return this.editoral;
    }

    public get_year():number {
        return this.year;
    }

    public set_titulo(titulo:string){
        this.titulo = titulo
    }

    public set_tipo(tipo:string){
        this.tipo = tipo;
    }

    public set_editorial(editorial:string){
        this.editoral = editorial;
    }

    public set_year(year:number){
        this.year = year
    }
}
