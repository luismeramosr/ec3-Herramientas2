import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapeletasComponent } from './papeletas.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    component: PapeletasComponent
  }
]

@NgModule({
  declarations: [PapeletasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PapeletasModule { }
