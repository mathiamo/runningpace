import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PaceComponent } from './pace/pace.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PaceCalcComponent } from './pace/pace-calc/pace-calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StravaService } from './strava.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { StravaStatsComponent } from './strava-stats/strava-stats.component';
import { ChartsModule } from 'ng4-charts/ng4-charts';

@NgModule({
  declarations: [
    AppComponent,
    PaceComponent,
    HeaderComponent,
    HomeComponent,
    PaceCalcComponent,
    StravaStatsComponent
],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    ChartsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [StravaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
