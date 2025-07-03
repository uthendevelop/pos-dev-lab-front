import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface OrderItem {
  name: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  orderItems: OrderItem[] = [];
  //   { name: 'เอสเปรสโซ่', qty: 1, price: 60 },
  //   { name: 'ชาเขียวเย็น', qty: 2, price: 60 }
  // ];
  // total = this.orderItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  paymentType: 'cash' | 'transfer' = 'cash';
  cashOptions = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
  received = 0;
  change: number | null = null;
  selectedCash: { [key: number]: number } = {};
  showReceiptBtn = false;
  showReceiptModal = false;
  total: number = 0; // รับค่าจาก query params

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.orderItems = params['cart'] ? JSON.parse(params['cart']) : [];
      console.debug('Order Items:', this.orderItems);
      this.total = this.orderItems.reduce((sum, item) => sum + item.qty * item.price, 0);
    });
  }

  addCash(note: number) {
    this.selectedCash[note] = (this.selectedCash[note] || 0) + 1;
    this.received += note;
  }

  getCashStyle(note: number) {
    const colors: Record<number, string> = {
      1000: '#e0e0e0',
      500: '#b3e5fc',
      100: '#ffe082',
      50: '#ffd54f',
      20: '#aed581',
      10: '#ffab91',
      5: '#ce93d8',
      2: '#90caf9',
      1: '#bcaaa4'
    };
    return {
      background: colors[note],
      border: this.selectedCash[note] ? '2px solid #2196f3' : 'none'
    };
  }

  calculateChange() {
    if (this.received >= this.total) {
      this.change = this.received - this.total;
      this.showReceiptBtn = true;
    } else {
      this.change = null;
      alert('รับเงินไม่ครบ');
    }
  }

  openReceiptModal() {
    this.showReceiptModal = true;
  }

  closeReceiptModal() {
    this.showReceiptModal = false;
    this.showReceiptBtn = false;
    this.received = 0;
    this.change = null;
    this.selectedCash = {};
  }

  confirmTransfer() {
    this.openReceiptModal();
  }

  startNewOrder() {
    this.closeReceiptModal();
    // สามารถเพิ่ม logic reset order หรือ redirect ไปหน้า order ได้
    window.location.href = '/order';
  }
}
