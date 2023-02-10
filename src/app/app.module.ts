import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './home/home.component';
import { DrawComponent } from './draw/draw.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './grid/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HomeComponent,
    DrawComponent,
    GridComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
