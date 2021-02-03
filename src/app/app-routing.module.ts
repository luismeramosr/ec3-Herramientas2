import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'consulta',
    loadChildren: () => import('./pages/mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule)
  },
  {
    path: 'consulta/:id',
    loadChildren: () => import('./pages/mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule)
  },
  {
    path: 'consulta/papeletas/:id',
    loadChildren: () => import('./pages/papeletas/papeletas.module').then(m => m.PapeletasModule)
  },
  {
    path: '',
    redirectTo: 'consulta',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
