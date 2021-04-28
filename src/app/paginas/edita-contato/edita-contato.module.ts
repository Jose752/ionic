import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaContatoPageRoutingModule } from './edita-contato-routing.module';

import { EditaContatoPage } from './edita-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaContatoPageRoutingModule
  ],
  declarations: [EditaContatoPage]
})
export class EditaContatoPageModule {}
