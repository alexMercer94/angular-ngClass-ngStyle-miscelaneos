import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { DetailUserComponent } from 'src/components/usuario/detail-user.component';
import { EditUserComponent } from 'src/components/usuario/edit-user.component';
import { NewUserComponent } from 'src/components/usuario/new-user.component';
import { UsuarioComponent } from 'src/components/usuario/usuario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:id',
    component: UsuarioComponent,
    children: [
      { path: 'new', component: NewUserComponent },
      { path: 'edit', component: EditUserComponent },
      { path: 'detail', component: DetailUserComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'new' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
