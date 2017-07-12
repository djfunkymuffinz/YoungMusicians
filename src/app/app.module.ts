import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdToolbarModule,
  MdCardModule,
  MdTabsModule,
  MdMenuModule,
  MdSidenavModule,
  MdButtonModule,
  MdListModule,
  MdIconModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    MdToolbarModule,
    MdCardModule,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
