import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//components
import { RoutinesComponent } from './routines.component';

const routes: Routes = [
  {
    path: '',
    component: RoutinesComponent,
  },
];

@NgModule({
  declarations: [
    RoutinesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutinesModule { }
