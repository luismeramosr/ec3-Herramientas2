import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { forwardRef, NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './core/api/api.module';

// export const API_INTERCEPTOR_PROVIDER: Provider = {
//   provide: HTTP_INTERCEPTORS,
//   useExisting: forwardRef(() => ApiInterceptor),
//   multi: true
// };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: "http://localhost:5000"})
  ],
  providers: [
    // ApiInterceptor,
    // API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
