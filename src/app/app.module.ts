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
<<<<<<< HEAD
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '../../node_modules/@angular/forms';
=======
import { NgxPayPalModule } from 'ngx-paypal';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
>>>>>>> 77fd9d494d60324e041a232f2ce8074c8f4e62b0
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: CombinedComponent },
<<<<<<< HEAD
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
=======

>>>>>>> 77fd9d494d60324e041a232f2ce8074c8f4e62b0
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
<<<<<<< HEAD
=======
    AboutComponent,
>>>>>>> 77fd9d494d60324e041a232f2ce8074c8f4e62b0
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StorageServiceModule,
<<<<<<< HEAD
    FormsModule
=======
    NgxPayPalModule,
    HttpClientModule
>>>>>>> 77fd9d494d60324e041a232f2ce8074c8f4e62b0
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
