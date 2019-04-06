import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './detail-user.component';
import { EditUserComponent } from './edit-user.component';
import { NewUserComponent } from './new-user.component';

const routes: Routes = [
  { path: 'new', component: NewUserComponent },
  { path: 'edit', component: EditUserComponent },
  { path: 'detail', component: DetailUserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'new' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
