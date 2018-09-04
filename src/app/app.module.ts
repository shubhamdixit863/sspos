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
import { ShopComponent } from './shop/shop.component';
import {  CanDeactivateGuard } from './payment.guard';
import { PaymentfailComponent } from './paymentfail/paymentfail.component';
import { BlogComponent } from './blog/blog.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SampleComponent } from './sample/sample.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RefreshComponent } from './refresh/refresh.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path: 'cart', component: CartComponent ,data: { title: 'Cart' }},
  { path: 'about', component: AboutComponent,data: { title: 'ABOUT' } },
  { path: '', component: CombinedComponent ,data: { title: 'SSPOS-HOME' }},

  { path: 'payment', component: PaymentComponent,canActivate:[AuthGuard],canDeactivate:[CanDeactivateGuard],data: { title: 'Payment' }},
  { path: 'orderstatus', component: FinalstatusComponent,canActivate:[AuthGuard],data: { title: 'OrderStatus' } },
  { path: 'paymentfail', component: PaymentfailComponent,canActivate:[AuthGuard] ,data: { title: 'PaymentFailed' }},
  { path: 'contact', component: ContactComponent ,data: { title: 'Contact' }},
  { path: 'shop', component: ShopComponent ,data: { title: 'Shop' }},
  { path: 'blog', component: BlogComponent,data: { title: 'Blog' } },
  { path: 'faqs', component: FaqsComponent ,data: { title: 'FAQS' }},
  { path: 'sample', component: SampleComponent },
  { path: 'termscondition', component: TermsconditionComponent,data: { title: 'Terms And Conditions' } },
  { path: 'refundpolicy', component: RefundPolicyComponent, data: { title: 'Refunds Policy' }},
  {path: 'refresh',component:RefreshComponent},
  {path: 'productdetails',component: ProductDetailsComponent}

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
    ShopComponent,
    PaymentfailComponent,
  
    BlogComponent,
    FaqsComponent,
    SampleComponent,
    TermsconditionComponent,
    RefundPolicyComponent,
    RefreshComponent,
    ProductDetailsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StorageServiceModule,
    FormsModule,
    NgxPayPalModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    NgxSpinnerModule,
    

  ],
  providers: [AuthGuard,CanDeactivateGuard,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
