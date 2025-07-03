import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  period: 'day' | 'month' = 'day';
  salesSummary = [
    { date: '2025-06-28', total: 1000 },
    { date: '2025-06-27', total: 800 }
  ];
}
