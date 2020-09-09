import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainsComponent } from './trains/trains.component';
import { TrainItemComponent } from './trains/train-item/train-item.component';
import { SightsComponent } from './sights/sights.component';
import { SightItemComponent } from './sights/sight-item/sight-item.component';

import { SightEditComponent } from './sights/sight-edit/sight-edit.component';
import { TrainEditComponent } from './trains/train-edit/train-edit.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { LoggedInComponent } from './logged-in/logged-in.component';

import { House, PencilSquare, Binoculars, Trash, Plus, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { LoadingComponent } from './loading/loading.component';
import { InlineEditComponent } from './shared/inline-edit/inline-edit.component';

import { AccommodationsComponent } from './accommodations/accommodations.component';
import { AccommodationEditComponent } from './accommodations/accommodation-edit/accommodation-edit.component';
import { AccommodationItemComponent } from './accommodations/accommodation-item/accommodation-item.component';
import { WentWrongComponent } from './shared/went-wrong/went-wrong.component';
import { EmptyComponent } from './shared/empty/empty.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SuccessComponent } from './shared/success/success.component';
const icons= {
  Binoculars,
  House,
  PencilSquare,
  Plus,
  Trash,
}

@NgModule({
  declarations: [
    AppComponent,
    TrainsComponent,
    TrainItemComponent,
    SightsComponent,
    SightItemComponent,
    SightEditComponent,
    TrainEditComponent,
    HeaderComponent,
    LoginComponent,
    LoggedInComponent,
    LoadingComponent,
    InlineEditComponent,
    AccommodationsComponent,
    AccommodationEditComponent,
    AccommodationItemComponent,
    WentWrongComponent,
    EmptyComponent,
    NotFoundComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxBootstrapIconsModule.pick(icons),
    NgxSpinnerModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
