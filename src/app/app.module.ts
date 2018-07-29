import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';
import { BodyComponent } from './body/body.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { FooterComponent } from './footer/footer.component';
import { BenefitComponent } from './benefit/benefit.component';
import { CombinedComponent } from './combined/combined.component';
import { CartComponent } from './cart/cart.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '../../node_modules/@angular/forms';
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: '', component: CombinedComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    BodyComponent,
    BestsellersComponent,
    FooterComponent,
    BenefitComponent,
    CombinedComponent,
    CartComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StorageServiceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
