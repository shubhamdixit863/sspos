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
import { FormsModule } from '../../node_modules/@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
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
    AboutComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StorageServiceModule,
    FormsModule,
    NgxPayPalModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
