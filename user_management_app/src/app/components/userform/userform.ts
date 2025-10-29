import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userform',
  imports: [CommonModule, FormsModule],
  templateUrl: './userform.html',
  styleUrl: './userform.scss',
})
export class Userform {

  newUser: Partial<User> = {};


  constructor(private userService: UserService ) { }

  onSubmit(Userform: NgForm) {
    this.userService.addUser(this.newUser);
    this.newUser = {};
    Userform.resetForm();
  }
}
