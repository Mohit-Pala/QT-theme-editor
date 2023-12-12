import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ViewerComponent } from './theme-designer/viewer/viewer.component';
import { ChangerComponent } from './theme-designer/changer/changer.component';
import { BottomBarComponent } from './theme-designer/bottom-bar/bottom-bar.component';
import { CombineComponent } from './theme-designer/combine/combine.component';
import { LoadComponent } from './theme-designer/load/load.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// forms module
import { FormsModule } from '@angular/forms';

// material modules
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemeLoadComponent } from './theme-load/theme-load.component';


// http client
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HomePageComponent,
    HelpPageComponent,
    ViewerComponent,
    ChangerComponent,
    BottomBarComponent,
    CombineComponent,
    LoadComponent,
    ThemeLoadComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // forms module
    FormsModule,
    // material modules
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
