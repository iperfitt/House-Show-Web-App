import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './components/event-list/event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EventCreationFormComponent } from './components/forms/event-creation-form/event-creation-form.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    EventCreationFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbmhPp8vxHPCaB4nubu2M4EDqEZ2A-2vk',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
