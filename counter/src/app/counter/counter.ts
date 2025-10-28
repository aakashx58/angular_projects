import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  Counter: number = 5;

  increment() {
    this.Counter++;
  }

  decrement() {
    this.Counter--;
  }


  reset() {
    this.Counter = 0;
  }

  getCounterStatus(): string {
    if (this.Counter > 0) {
      return 'positive';
    } else if (this.Counter === 0) {
      return 'neutral';
    } else {
      return 'negative';
    }
  }

}
