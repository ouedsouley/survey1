import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentitePageRoutingModule } from './identite-routing.module';

import { IdentitePage } from './identite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdentitePageRoutingModule
  ],
  declarations: [IdentitePage]
})
export class IdentitePageModule {}
