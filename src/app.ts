
//! Ejercicio N° 1 - Singleton
// import { Inventario } from "./01-singleton/inventory";

// const inventario = Inventario.obtenerInstancia();
// inventario.agregarEquipo({ nombre: "Celular Samsung-A23", tipo: "Movil", estado: "disponible" });
// console.log(inventario.listarEquipos());


//! Ejercicio N° 2 - Factory
// import { Tienda } from "./02-factory/tienda";

// const tienda = new Tienda();

// const notebook = tienda.crearEquipo("Notebook", 'Lenovo', "16GB", "i5");
// console.log(notebook.detalles());


//! Ejercicio N° 3 - Observer
// import { Soporte, Equipo } from "./03-observer/equipment-observer";

// const soporte = new Soporte()
// const equipo = new Equipo('Laptop Lenovo', 'Portatil', 'disponible');
// equipo.agregarObservador(soporte);
// equipo.cambiarEstado('en uso');

//! Ejercicio N° 4 - Adapter
// import { InventarioViejo, AdaptadorInventario } from './04-adapter/inventory-adapter';

// const inventarioViejo = new InventarioViejo()
// const adaptador = new AdaptadorInventario(inventarioViejo)
// adaptador.agregarEquipo('Lenovo', 'Notebook', 'disponible')
// console.log(adaptador.listarEquipos())