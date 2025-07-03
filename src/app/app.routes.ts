import { Routes } from '@angular/router';
import { OrderComponent } from './pages/order/order.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'receipt', component: ReceiptComponent },
  { path: 'report', component: ReportComponent },
  { path: '**', redirectTo: 'order' }
];
