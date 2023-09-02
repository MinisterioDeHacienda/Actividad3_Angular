import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { DeleteClienteComponent } from './components/cliente/delete-cliente/delete-cliente.component';
import { UpdClienteComponent } from './components/cliente/upd-cliente/upd-cliente.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: ShowClienteComponent
  },
  {
    path: "clientes/add",
    component: AddClienteComponent
  },
  {
    path: "clientes/del",
    component: DeleteClienteComponent
  },
  {
    path: "clientes/update",
    component: UpdClienteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
