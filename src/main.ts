import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn:
    'https://72aed61473934ca8970bc93f8f76d3c5@o576615.ingest.sentry.io/5730413',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['localhost', 'https://www.dennagrey.com'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
