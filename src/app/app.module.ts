import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BoucleComponentComponent } from './boucle-component/boucle-component.component';
import { TemplateComponent} from './template/template.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations:[
    AppComponent,
    BoucleComponentComponent,
TemplateComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
