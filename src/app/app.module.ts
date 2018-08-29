import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { DataService } from '../common/services/data/data.service';
import { AppHeaderComponent } from '../common/components/app-header/app-header.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BooksComponent } from './books/books.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'books', component: BooksComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AboutComponent,
    ProjectsComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
