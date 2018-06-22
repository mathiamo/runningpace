import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaceComponent } from './pace/pace.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'pace',
    component: PaceComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
