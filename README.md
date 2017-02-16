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
git clone https://github.com/monoapps/radio.git $BASE
``````

### Import

``````ts
import { Radio, Id } from '@monoapps/radio';

...
  const listener = () => [{}];
  this.radio.subscribe(Id, listener);
...
  this.radio.dispatch(Id, ['message']);
 ...

``````
