import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeebcakComponent} from './feebcak/feebcak.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: FeebcakComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
