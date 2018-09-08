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
import { Cashdrawer24Component } from './cashdrawer24/cashdrawer24.component';
import { MagstripeComponent } from './magstripe/magstripe.component';
import { Ssr250Component } from './ssr250/ssr250.component';
import { Vfd890Component } from './vfd890/vfd890.component';
import { Ssr300Component } from './ssr300/ssr300.component';
import { Ssr3000Component } from './ssr3000/ssr3000.component';
import { Ssr86eComponent } from './ssr86e/ssr86e.component';
import { Ssr86e2017Component } from './ssr86e2017/ssr86e2017.component';
import { SsrC86HComponent } from './ssr-c86-h/ssr-c86-h.component';
import { SsrC86H2017Component } from './ssr-c86-h2017/ssr-c86-h2017.component';
import { EpsondotmatrixComponent } from './epsondotmatrix/epsondotmatrix.component';
import { Cd24Component } from './cd24/cd24.component';
import { Ssr352Component } from './ssr352/ssr352.component';
import { PortdataterminalComponent } from './portdataterminal/portdataterminal.component';


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
  {path: 'productdetails',component: ProductDetailsComponent},
  {path: 'cashdrawer24',component:    Cashdrawer24Component},
  {path: 'magstripe',component:    MagstripeComponent},
  {path: 'ssr250',component:    Ssr250Component},
  {path: 'vfd890',component:       Vfd890Component},
  {path: 'ssr300',component:       Ssr300Component},
  {path: 'ssr3000',component:       Ssr3000Component},
  {path: 'ssr86e',component:       Ssr86eComponent},
  {path: 'ssr86e2017',component:       Ssr86e2017Component},
  {path: 'ssrc86h',component:    SsrC86HComponent},
  {path: 'ssrc86h2017',component:    SsrC86H2017Component},
  {path: 'epsondotmatrix',component:     EpsondotmatrixComponent},
  {path: 'cd24',component:     Cd24Component},
  {path: 'ssr352',component:      Ssr352Component},
  {path: 'portdataterminal',component:    PortdataterminalComponent},
  {path: 'shopnow',component:          BestsellersComponent}


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
    Cashdrawer24Component,
    MagstripeComponent,
    Ssr250Component,
    Vfd890Component,
    Ssr300Component,
    Ssr3000Component,
    Ssr86eComponent,
    Ssr86e2017Component,
    SsrC86HComponent,
    SsrC86H2017Component,
    EpsondotmatrixComponent,
    Cd24Component,
    Ssr352Component,
    PortdataterminalComponent,

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
