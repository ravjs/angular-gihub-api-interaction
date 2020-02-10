import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GitSearchService } from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent,
    data: {
      title: 'Home page'
    }
  },
  { path: 'about',
    component: AboutComponent,
    data: {
      title: 'Git Search'
    }
  },

  { path: 'search',
    redirectTo: '/search/ravjs',
    pathMatch: 'full' // The pathMatch attribute controls how the matching occurs
  },
  {
    path: 'search/:query',
    component: GitSearchComponent,
    data: { title: 'Git Search' }
  },

  {
    path: 'products',
    component: ProductsComponent,
    data: {
      title: 'Git Search'
    }
  },
  { path: 'categories',
    component: CategoriesComponent,
    data: {
      title: 'Git Search'
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [ // Greeat place for components of your application
    AppComponent,
    GitSearchComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    CategoriesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GitSearchService], // Great place for services
  bootstrap: [AppComponent] // Component to be render
})
export class AppModule { }
