import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PaceComponent } from './pace/pace.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PaceCalcComponent } from './pace/pace-calc/pace-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    PaceComponent,
    HeaderComponent,
    HomeComponent,
    PaceCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
