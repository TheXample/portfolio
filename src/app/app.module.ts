import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SlidepanelComponent } from './pages/home/slidepanel/slidepanel.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { PersonalHomeComponent } from './pages/home/personal-home/personal-home.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ContactFormHomeComponent } from './pages/home/contact-form-home/contact-form-home.component';
import { LsmComponent } from './pages/lsm/lsm.component';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NextcloudComponent } from './pages/nextcloud/nextcloud.component';
import { RPIClockComponent } from './pages/rpiclock/rpiclock.component';
import { ScriptRunnerComponent } from './pages/script-runner/script-runner.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ImpressumPageComponent } from './pages/impressum-page/impressum-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TableComponent } from './shared/components/table/table.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ProgressWheelComponent } from './shared/components/progress-wheel/progress-wheel.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidepanelComponent,
    HomeComponent,
    PersonalHomeComponent,
    ContactFormHomeComponent,
    LsmComponent,
    NavbarComponent,
    NextcloudComponent,
    RPIClockComponent,
    ScriptRunnerComponent,
    AboutMeComponent,
    ImpressumPageComponent,
    FooterComponent,
    TableComponent,
    SpinnerComponent,
    ProgressWheelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatChipsModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
