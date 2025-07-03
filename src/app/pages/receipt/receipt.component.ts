import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OrderItem {
  product: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  orderItems: OrderItem[] = [
    // ตัวอย่างข้อมูล สามารถเชื่อมต่อกับ service ได้ในอนาคต
    { product: 'ตัวอย่าง', quantity: 1, price: 100 }
  ];
  total = this.orderItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  received: number = 200;
  change: number = 100;
}
