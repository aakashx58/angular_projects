import { Component, OnInit } from '@angular/core';
import { Usercard } from '../usercard/usercard';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-users',
  imports: [CommonModule, Usercard],
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
})
export class Users implements OnInit {
  constructor(public userService: UserService) {

  }
  ngOnInit(){
    this.userService.fetchUsers().subscribe({
      next: () => {
        console.log('Users fetched successfully:' );
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  onDeleteUser(userID: number) {
    this.userService.deleteUser(userID);
  }

  onAddUser(newUser: Partial<User>) {
    this.userService.addUser(newUser);
  }

  onUpdateUser(updatedUser: User) {
      this.userService.editUserbyId(updatedUser.id, updatedUser);
}
}
