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
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './auth.guard';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FinalstatusComponent } from './finalstatus/finalstatus.component';
import {  CanDeactivateGuard } from './payment.guard';
import { PaymentfailComponent } from './paymentfail/paymentfail.component';
import { BlogComponent } from './blog/blog.component';
import { FaqsComponent } from './faqs/faqs.component';


const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: CombinedComponent },

  { path: 'payment', component: PaymentComponent,canActivate:[AuthGuard],canDeactivate:[CanDeactivateGuard]},
  { path: 'orderstatus', component: FinalstatusComponent,canActivate:[AuthGuard] },
  { path: 'paymentfail', component: PaymentfailComponent,canActivate:[AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faqs', component: FaqsComponent },

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
    PaymentComponent,
    FinalstatusComponent,
    PaymentfailComponent,
  
    BlogComponent,
    FaqsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StorageServiceModule,
    FormsModule,
    NgxPayPalModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()

  ],
  providers: [AuthGuard,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
