import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor() { }

  addAccount(newServerName: string, serverStatus: string) {
    this.accounts.push({name: newServerName, status: serverStatus});
  }

  updateAccount(id: number, serverStatus: string) {
    this.accounts[id].status = serverStatus;
  }
}
