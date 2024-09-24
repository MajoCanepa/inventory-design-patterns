
export class Inventario {
    private static instancia: Inventario;    
    private equipos: { nombre: string, tipo: string, estado: string }[] = [];  

    private constructor() {}   

    public static obtenerInstancia(): Inventario {    
        if (!Inventario.instancia) {                 
            Inventario.instancia = new Inventario(); 
        }
        return Inventario.instancia;              
    }

    public agregarEquipo(equipos: { nombre: string, tipo: string, estado: string }): void { 
        this.equipos.push(equipos); 
    }


    public listarEquipos(): { nombre: string, tipo: string, estado: string }[] { 
        return this.equipos; 
    } 
    
}

