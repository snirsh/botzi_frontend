import { ContactComponentComponent } from './contact-component/contact-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';



import { NgModule } from '@angular/core';

import { HomeSlidesModule } from './home-slides/home-slides.module';
import { SignUpModule } from './sign-up/sign-up.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';


import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { DisplayMatchesComponent } from './display-matches/display-matches.component';
import { AvailableMatchComponent } from './available-match/available-match.component';
const appRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavMenuComponent,
    ContactComponentComponent,
    DisplayMatchesComponent,
    AvailableMatchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HomeSlidesModule,
    SignUpModule,
    RouterModule
  ],
  providers: [
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: [DisplayMatchesComponent, AvailableMatchComponent]
})
export class AppModule { }
