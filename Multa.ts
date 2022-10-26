export class Multa {
    private fecha_inicio:string= "";
    private fecha_fin:string="";

    constructor(fecha_inicio:string, fecha_fin:string){
        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;
    }

    public get_fecha_inicio():string {
        return this.fecha_inicio;
    }

    public get_fecha_fin():string {
        return this.fecha_fin;
    }

    public set_fecha_inicio(fecha_inicio:string){
        this.fecha_inicio = fecha_inicio;
    }

    public set_fecha_fin(fecha_fin:string){
        this.fecha_fin = fecha_fin;
    }
}