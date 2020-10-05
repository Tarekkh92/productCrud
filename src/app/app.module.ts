import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import "rxjs/Rx";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { productsService } from './shared/service/products.service';
import { ProductListComponent } from './ProductList/product-list.component';
import { SaveComponent } from './save/save.component';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule, MatFormField } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './edit/edit.component';
import { MatInputModule, MatButtonModule, MatCheckboxModule,MatTableModule } from "@angular/material";
import { DeleteComponent } from './delete/delete.component';
import { bookFilterPipe } from './ProductList/book-filter.pipe';
import { bookTitlePipe } from './ProductList/book-Title.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    SaveComponent,
    EditComponent,
    DeleteComponent,
    bookFilterPipe,
    bookTitlePipe,
    PageNotFoundComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
    
    

    
  ],
  providers: [productsService],
  entryComponents: [SaveComponent,EditComponent,DeleteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
