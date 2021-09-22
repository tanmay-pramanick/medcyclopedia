import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BannerComponent } from './all-components/shared/banner/banner.component';
import { FooterComponent } from './all-components/shared/footer/footer.component';
import { HeaderComponent } from './all-components/shared/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage-angular';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerComponent, FooterComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, 
    IonicStorageModule.forRoot(),
  ],
  providers: [
    FileTransfer,  
    File,
    FileOpener,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
