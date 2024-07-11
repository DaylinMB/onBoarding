import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { StepsService } from './app/steps.service';
import { provideAnimations } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: AppComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([]),
    provideAnimations(),
    provideRouter(routes),
    StepsService
  ]
});
