import { ApplicationConfig } from '@angular/core';
import { RouterLink, provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { DatePipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withHashLocation()
      ),
    provideHttpClient(),
    RouterLink,
    DatePipe,
  ]
};
