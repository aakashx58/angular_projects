import { Component, signal } from '@angular/core';
import { Userform } from "./components/userform/userform";
import { Users } from './components/users/users';
import { Usercard } from "./components/usercard/usercard";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [Users, Userform, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
