import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { HomeSlidesModule } from './home-slides/home-slides.module';
import { SignUpModule } from './sign-up/sign-up.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SignUpComponent } from './sign-up/components/sign-up/sign-up.component';
import { SignUpOrganizationComponent } from './sign-up/components/sign-up-organization/sign-up-organization.component';
import { SignUpVolunteerComponent } from './sign-up/components/sign-up-volunteer/sign-up-volunteer.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-up-organization', component: SignUpOrganizationComponent},
  {path: 'sign-up-volunteer', component: SignUpVolunteerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HomeSlidesModule,
    SignUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
