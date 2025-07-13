import { ExampleController } from './controllers/ExampleController.js';
import { WildDigimonsController } from './controllers/WildDigimonsController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  wildDigimonsController = new WildDigimonsController()

}

window['app'] = new App()


