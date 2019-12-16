import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { PdfViewerModule, PdfViewerComponent } from 'ng2-pdf-viewer';
import { Base64 } from '@ionic-native/base64/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [PdfViewerComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,PdfViewerModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileChooser,
    File,
    FileOpener,
    FileTransfer,
    FilePath,
    DocumentViewer,
    Base64
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
