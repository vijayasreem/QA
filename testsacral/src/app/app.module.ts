import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubConfigurationComponent } from './github-configuration/github-configuration.component';
import { ConfigurationOfGithubComponent } from './configuration-of-github/configuration-of-github.component';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubConfigurationComponent,
    ConfigurationOfGithubComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
