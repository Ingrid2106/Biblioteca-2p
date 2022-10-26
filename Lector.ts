export class Lector {
    private nombre:string="";
    private no_socio:number=0;
    private telefono:number=0;
    private direccion:string="";
    private t_c:number=0;

    constructor(nombre:string, no_socio:number, telefono:number, direccion:string, t_c:number){
        this.nombre=nombre;
        this.no_socio=no_socio;
        this.telefono=telefono;
        this.direccion=direccion;
        this.t_c=t_c;
    }
    
    public get_nombre():string{
        return this.nombre;
    }

    public get_no_socio():number{
        return this.no_socio;
    }

    public get_telefono():number{
        return this.telefono;
    }

    public get_direcion():string{
        return this.direccion;
    }

    public get_t_c():number{
        return this.t_c;
    }

    public set_nombre(nombre:string){
        this.nombre=nombre;
    }

    public set_no_socio(no_socio:number){
        this.no_socio=no_socio;
    }

    public set_telefono(telefono:number){
        this.telefono=telefono;
    }

    public set_direccion(direccion:string){
        this.direccion=direccion;
    }

    public set_t_c(t_c:number){
        this.t_c=t_c;
    }
}