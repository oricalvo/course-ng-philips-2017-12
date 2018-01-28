import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DeleteComponent} from './delete/delete.component';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "delete/:id", component: DeleteComponent},
  {path: "admin", loadChildren: "app/admin/admin.module#AdminModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
