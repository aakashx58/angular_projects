import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, Observer } from "rxjs";
import { User } from "../models/user.model";

const APT_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: User[] = [];
  getUsers: () => User[] = () => this._users;
    
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(APT_URL).pipe(
        map((rawUsers) => {
        this._users = rawUsers.map((user) => new User(user));
        return this._users;
    })
   );
  }

  get users(): User[] {
    return this._users;
  }


addUser(newUser: Partial<User>): void {
    const userID = Math.max(0, ...this._users.map(user => user.id)) + 1;

    const userInstance = new User({ ...newUser, id: userID });
    this._users.push(userInstance);
}


deleteUser(userID: number): void {
    this._users = this._users.filter(user => user.id !== userID);
}

findUserById(userID: number): User | undefined {
    return this._users.find(user => user.id === userID);
}


editUserbyId(userID: number, updatedData: Partial<User>): User | undefined {
    const user = this.findUserById(userID);
    if (!user) {
        throw new Error(`User with ID ${userID} not found.`);
    }
    Object.assign(user, updatedData);
    return user;   
}
}