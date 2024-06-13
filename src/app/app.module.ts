import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FormsModule } from '@angular/forms';
import { MypieComponent } from './components/mypie/mypie.component';
import { CubePipe } from './shared/custompipe/cube.pipe';
import { SquarePipe } from './shared/custompipe/square.pipe';
import { AreaofsquarePipe } from './shared/custompipe/areaofsquare.pipe';
import { EmpcomponentComponent } from './components/empcomponent/empcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    MypieComponent,
    CubePipe,
    SquarePipe,
    AreaofsquarePipe,
    EmpcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
