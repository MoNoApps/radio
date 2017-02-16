import { Injectable } from '@angular/core';

@Injectable()
export class Radio {

  _stores = {};

  get stores() {
    return this._stores;
  }

  subscribe(id: string, next: Function) {
    const store = this.findOrCreateStore(id);
    store.push(next);

    return () => this._stores[id] = store.filter(n => n !== next);
  }

  dispatch(id: string, event: Array<any>) {
    const store = this.findOrCreateStore(id);
    store.map(next => next(event));
  }

  private findOrCreateStore(id: string) {
    if (!this._stores[id]) {
      this._stores[id] = [];
    }

    return this._stores[id];
  }

}

export const uuid = '00000000-0000-0000-0000-000000000000';
export const Id = uuid.replace(/0/g, () => '0123456789abcdef'[Math.floor(Math.random() * (16))]);
