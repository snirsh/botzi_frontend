import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpOrganizationComponent } from './components/sign-up-organization/sign-up-organization.component';
import { SignUpVolunteerComponent } from './components/sign-up-volunteer/sign-up-volunteer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignUpComponent,
    SignUpOrganizationComponent,
    SignUpVolunteerComponent
  ],
  exports: [
    SignUpComponent,
    RouterModule
  ]
})
export class SignUpModule { }
