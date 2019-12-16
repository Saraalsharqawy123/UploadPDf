import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PdfViewerModule, PdfViewerComponent } from 'ng2-pdf-viewer';
import { HomePage } from './home.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      
    ])
  ],
  entryComponents:[],
  declarations: [HomePage]
})
export class HomePageModule {}
