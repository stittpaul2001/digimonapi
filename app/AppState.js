import { Digimon, SandboxDigimons } from './models/Digimon.js'
import { IndepthDigimon } from './models/IndepthDigimon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  /**@type {SandboxDigimons []} */
  sandboxDigimons = []

  /**@type {IndepthDigimon} */
  activeDigimon = null

  /**@type {Digimon[]} */
  wildDigimons = []

}

export const AppState = createObservableProxy(new ObservableAppState())