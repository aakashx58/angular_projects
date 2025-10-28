import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  tasks: string[] = [];
  newTask: string='';

  addTask() {
    if (this.newTask.trim() === '') {
      return;
    }
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
