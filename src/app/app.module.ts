import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {MatFormField} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';


import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './safe.pipe';
import { StorageServiceModule } from 'ngx-webstorage-service';
import {MatGridListModule} from '@angular/material/grid-list';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    NoopAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ChartsModule,
    MatPaginatorModule,
    StorageServiceModule,
    MatGridListModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
