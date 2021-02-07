import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTaskComponent } from './components/main-task/main-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldErrorsComponent } from './components/form-field-errors/form-field-errors.component';
import { SpaceComponent } from './components/space/space.component';
import { WsfComponent } from './components/wsf/wsf.component';
import { InfoPageComponent } from './components/info-page/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTaskComponent,
    FormFieldErrorsComponent,
    SpaceComponent,
    WsfComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
