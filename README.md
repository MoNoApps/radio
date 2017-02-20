# Radio

Messenger tool for typescript. It is inspired on Redux.

## API
### Radio::subscribe
Registers a listener by id. Many supscriptors are allowed.

### Radio::dispatch
Sends the message to the subscriptions by id.

### uuid
The null uuid value;
### Id 
Generates a new uuid to avoid colisions in the store.

## Usage
On a project generated with angular-cli
### Install

``````bash
BASE=node_modules/@monoapps
mkdir $BASE
git clone https://github.com/monoapps/radio.git $BASE/radio
``````

### Import

Register Radio provider (DI)
``````ts
import { Component, OnInit } from '@angular/core';
import { Radio, Id } from '@monoapps/radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Radio]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private radio: Radio) { }

  ngOnInit() {
    this.radio.subscribe(Id, this.print);
  }

  print(value) {
    console.log(value);
  }
}
``````

Import Radio from the registered module
``````ts
import { Component, OnInit } from '@angular/core';
import { Radio, Id } from '@monoapps/radio';

export class SelectComponent implements OnInit {

  constructor(private radio: Radio) { }

  ngOnInit() {
    this.radio.dispatch(Id, ['message']);
  }
  
}
``````
