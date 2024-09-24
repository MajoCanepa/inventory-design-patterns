
interface Observador  {
    actualizar(equipo: Equipo): void;
}

export class Soporte implements Observador {
   
    actualizar(equipo: Equipo): void {
        console.log(`Soporte notificado: El equipo ${equipo.nombre} cambió su estado a: ${equipo.estado}`);
    }
}

export class Equipo {

    private observadores: Observador[] = [];

    constructor(public nombre: string, public tipo: string, public estado: string) {}

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
    notificarObservadores(): void {
        this.observadores.forEach(observador => observador.actualizar(this));
    }

}



