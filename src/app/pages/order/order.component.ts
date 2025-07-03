import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  products: Product[] = [
    { id: 1, name: 'เอสเปรสโซ่', price: 60, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=256&h=256&sat=100&blend=000&sat=0' },
    { id: 2, name: 'อเมริกาโน่', price: 65, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&h=256' },
    { id: 3, name: 'คาปูชิโน่', price: 70, image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=facearea&w=256&h=256' },
    { id: 4, name: 'ลาเต้', price: 70, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=facearea&w=256&h=256' },
    { id: 5, name: 'มอคค่า', price: 75, image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=facearea&w=256&h=256' },
    { id: 6, name: 'โกโก้เย็น', price: 65, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&h=256' },
    { id: 7, name: 'ชาเขียวเย็น', price: 60, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=facearea&w=256&h=256' },
    { id: 8, name: 'ชาไทยเย็น', price: 60, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=256&h=256' },
    { id: 9, name: 'นมสดเย็น', price: 55, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&h=256&sat=100&blend=fff&sat=0' },
    { id: 10, name: 'คาราเมลมัคคิอาโต้', price: 80, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=256&h=256' },
    { id: 11, name: 'อเมริกาโน่เย็น', price: 65, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&h=256' },
    { id: 12, name: 'ลาเต้เย็น', price: 75, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=facearea&w=256&h=256' },
    { id: 13, name: 'โกโก้ร้อน', price: 60, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&h=256' },
    { id: 14, name: 'ชาเขียวร้อน', price: 60, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=facearea&w=256&h=256' },
    { id: 15, name: 'นมสดร้อน', price: 55, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&h=256&sat=100&blend=fff&sat=0' }
  ];

  cart: CartItem[] = [];

  constructor(private router: Router) {}

  get cartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  addToCart(product: Product) {
    const found = this.cart.find(item => item.id === product.id);
    if (found) {
      found.qty++;
    } else {
      this.cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
    }
  }

  goToCheckout() {
    console.debug('Navigating to checkout with total:', this.cart);
    this.router.navigate(['/checkout'], { queryParams: { cart: JSON.stringify(this.cart) } });
  }
}
