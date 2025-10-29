import { Component, signal } from '@angular/core';
import { Userform } from "./components/userform/userform";
import { Users } from './components/users/users';
import { Usercard } from "./components/usercard/usercard";

@Component({
  selector: 'app-root',
  imports: [Users, Userform, Usercard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
