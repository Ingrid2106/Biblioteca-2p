export class Autor {
    private nombre:string= "";
    private nacionalidad:string="";
    private fecha_nac:number=0;

    constructor(nombre:string, nacionalidad:string, fecha_nac:number){
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.fecha_nac = fecha_nac;
    }

    public get_nombre(): string {
        return this.nombre;
    }

    public get_nacionalidad(): string {
        return this.nacionalidad;
    }

    public get_fecha_nac(): number {
        return this.fecha_nac;
    }

    public set_nombre(nombre:string){
        this.nombre = nombre;
    }

    public set_nacionalidad(nacionalidad:string){
        this.nacionalidad = nacionalidad;
    }

    public set_fecha_nac(fecha_nac:number){
        this.fecha_nac = fecha_nac;
    }
    
}