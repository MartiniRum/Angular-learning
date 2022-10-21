import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ListComponent } from './components/list/list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {RouterModule, Routes} from "@angular/router";
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const appRoutes:Routes=[
  {path:"", component:ListComponent},
  {path:"new", component:AddTaskComponent},
  {path:"edit/:id", component:EditTaskComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
