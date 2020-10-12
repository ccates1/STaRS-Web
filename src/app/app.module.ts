import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinalReportComponent } from './final-report/final-report.component';
import { PosterListComponent } from './poster-list/poster-list.component';
import { JudgeListComponent } from './judge-list/judge-list.component';
import { PosterComponent } from './poster/poster.component';
import { JudgeComponent } from './judge/judge.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HomeComponent,
    DashboardComponent,
    FinalReportComponent,
    PosterListComponent,
    JudgeListComponent,
    PosterComponent,
    JudgeComponent,
    LogoutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
