import { Routes } from '@angular/router';
import { Inicio } from './consulta/inicio/inicio';
import { Detalhes } from './consulta/detalhes/detalhes';

export const routes: Routes = [
    {
        path: "inicio",
        component: Inicio,
    },
    {
        path: "id/:id",
        component: Detalhes,
    },
    {
        path: "",
        redirectTo: "/inicio",
        pathMatch: 'full'
    },
    {
        path: "**",
        redirectTo: "/inicio"
    }
];
