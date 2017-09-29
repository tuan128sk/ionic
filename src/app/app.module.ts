import { createPageComponent } from './../pages/template/template.createPageComponent';
import { TemplatePageModule } from './../pages/template/template.module';
import { TemplatePage } from './../pages/template/template';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { widgetTestComponent } from './app.widget';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TemplatePage,
    widgetTestComponent,
    createPageComponent
  ],
  imports: [
    BrowserModule,
    //TemplatePageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TemplatePage
    //createPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
