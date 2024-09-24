export interface Equipo {   
    detalles(): string; 
}

export class Notebook implements Equipo {

  private nombre: string;  
  private ram: string 
  private procesador: string;  

    constructor(nombre: string, ram: string, procesador: string) {  
        this.nombre = nombre; 
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;  
    }
}

export class Desktop implements Equipo {

  private nombre: string;
  private ram: string
  private procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

export class Servidor implements Equipo {

  private nombre: string;
  private ram: string
  private procesador: string;

    constructor(nombre: string, ram: string, procesador: string) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}
