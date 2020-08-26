import { one, two, myModule } from './main.js';
import say from './main.js';
//import myModule from './main.js';


//const myModuleInstance = new myModule();

// myModuleInstance.hello();
// myModuleInstance.goodbye();

console.log(`${one} and ${two}`);
//myModule();

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

say();


