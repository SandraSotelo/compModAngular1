import { Routes } from '@angular/router';
import { Ejemplo1Component } from './componentes/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './componentes/ejemplo2/ejemplo2.component';

export const routes: Routes = [
   //Creo un objeto dentro del array (listas) de rutas, dentro de rutas se ha puesto un nuevo objeto
   //El path esta con la ruta vacia porque es la ruta por defecto.
   //Luego va component que es que componente se va a montar cuando yo me diriha a esa ruta vacia
    {
        path: '',
        component: Ejemplo1Component 

    },

    {
        path: '2',
        component: Ejemplo2Component 

    }
];
