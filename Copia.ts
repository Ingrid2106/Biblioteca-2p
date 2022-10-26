import { Libro } from './Libro';
import { Lector } from './Lector';
export class Copia {
    private fecha : string;
    private id:number=0;
    private estado:string="";
    private copias:any[]=[];

    constructor(id:number, estado:string, Libro:Libro){
        this.id=id;
        this.estado=estado;
    }

    public get_id():number {
        return this.id;
    }

    public get_estado():string {
        return this.estado;
    }

    public set_id(id:number){
        this.id = id;
    }

    public set_estado(estado:string){
        this.estado = estado;
    }

    public agregarcopias (NoCopia:number,Libro:Libro,Lector:Lector){
        this.id++;
        let Resgistro={
            Resgistro:this.id,
            Lector:Lector,
            NoCopia:NoCopia,
            Estado:"En proceso",
            Libro:Libro,
        };
        this.copias.push(Resgistro);
    }
    public listacopias():void{
        console.log(this.copias);
    }
    
}