import { Notebook, Desktop, Servidor, Equipo } from './equipment';

export class Tienda {

    public crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
        if(tipo === 'Notebook') {
            return new Notebook(nombre, ram, procesador);
        } else if(tipo === 'Desktop') {
            return new Desktop(nombre, ram, procesador);
        } else if(tipo === 'Servidor') {
            return new Servidor(nombre, ram, procesador);
        } else {
            throw new Error('Equipo no válido');
        }
    }
}