import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContaCrudComponent } from './views/conta-crud/conta-crud.component';
import { ContaCreateComponent } from './components/conta/conta-create/conta-create.component';
import { ContaReadComponent } from './components/conta/conta-read/conta-read.component';
import { ContaDeleteComponent } from './components/conta/conta-delete/conta-delete.component';
import { ContaUpdateComponent } from './components/conta/conta-update/conta-update.component';

const routes: Routes = [{
  path:"home",
  component: HomeComponent
},
{
  path: "contas",
  component: ContaCrudComponent
},

{
  path: "contas/create",
  component: ContaCreateComponent
},
{
  path: "contas/read",
  component: ContaReadComponent
},
{
  path:"contas/delete/:id",
  component: ContaDeleteComponent
},
{
  path:"contas/update/:id",
  component: ContaUpdateComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
