import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadersCssModule } from 'angular2-loaders-css';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { DragndropComponent } from './components/dragndrop/dragndrop.component';
import { MapsearchComponent } from './components/mapsearch/mapsearch.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SortMPGPipe } from './sort-mpg.pipe';
import { MapComponent } from './components/map/map.component';
import { ManageComponent } from './components/manage/manage.component';
import { GarbageEditComponent } from './components/garbage-edit/garbage-edit.component';
import { GarbageDeleteComponent } from './components/garbage-delete/garbage-delete.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: DragndropComponent},
  { path: 'fuelEco', component: MapsearchComponent},
  { path: 'map', component: MapComponent},
  { path: 'manage', component: ManageComponent},
  { path: 'add', 					component: GarbageEditComponent },
  { path: 'edit/:id', 		component: GarbageEditComponent },
  { path: 'delete/:id', 		component: GarbageDeleteComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DragndropComponent,
    MapsearchComponent,
    SortMPGPipe,
    MapComponent,
    ManageComponent,
    GarbageEditComponent,
    GarbageDeleteComponent
  ],
  imports: [
    LoadersCssModule,
    BrowserModule,
    AlertModule,
    ButtonsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DragndropComponent, ManageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
