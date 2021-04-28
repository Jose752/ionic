import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaContatoPage } from './edita-contato.page';

const routes: Routes = [
  {
    path: '',
    component: EditaContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaContatoPageRoutingModule {}
