import { ExampleController } from './controllers/ExampleController.js';
import { SandboxDigimonsController } from './controllers/SandboxDigimonsController.js';
import { WildDigimonsController } from './controllers/WildDigimonsController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  wildDigimonsController = new WildDigimonsController()
  sandboxDigimonsController = new SandboxDigimonsController()
}

window['app'] = new App()


