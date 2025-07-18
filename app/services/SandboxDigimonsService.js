import { AppState } from "../AppState.js"
import { SandboxDigimons } from "../models/Digimon.js"
import { api } from "../utils/Axios.js"
import { Pop } from "../utils/Pop.js"



class SandboxDigimonsService {


  setActiveDigimon(digimonName) {
    const digimon = AppState.sandboxDigimons.find(digimon => digimon.name == digimonName)

  }



  async removeDigimon(digimonName) {
    const response = await api.delete(`api/pokemon/${digimonName}`)
    console.log(response.data)
    const digimonToRemove = AppState.sandboxDigimons.find(digimon => digimon.name == digimonName)
    const indexToRemove = AppState.sandboxDigimons.indexOf(digimonToRemove)
    AppState.sandboxDigimons.splice(indexToRemove, 1)
    Pop.toast(`${digimonToRemove.name} was removed`)
  }



  async getSavedDigimon() {
    const response = await api.get('api/pokemon')
    console.log('got saved Digimon', response.data.name)
    const digimons = response.data.map(pojo => new SandboxDigimons(pojo))
    AppState.sandboxDigimons = digimons
  }

  async saveActiveDigimon() {
    console.log('saved Digimon')
    const sandboxDigimons = AppState.activeDigimon
    const response = await api.post('api/pokemon', sandboxDigimons)
    console.log(response.data)
    const activeDigimon = new SandboxDigimons(response.data)
    AppState.sandboxDigimons.push(activeDigimon)
  }




}
export const sandboxDigimonsService = new SandboxDigimonsService()