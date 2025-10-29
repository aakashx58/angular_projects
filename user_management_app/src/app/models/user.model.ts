export class User {
    id: number =0;
    name: string ='';
    username: string ='';
    email: string ='';
    phone: string ='';
    website: string ='';

    constructor(userData: Partial<User>) {
        Object.assign(this, userData);
    }
}