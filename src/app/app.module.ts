import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TagsComponent } from './components/tags/tags.component';
import { FilterContentComponent } from './components/filter-content/filter-content.component';
import { CoreBodyComponent } from './components/core-body/core-body.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TagsComponent,
    FilterContentComponent,
    CoreBodyComponent,
    ToolbarComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
