import { AppState } from "../AppState.js"
import { sandboxDigimonsService } from "../services/SandboxDigimonsService.js"
import { Pop } from "../utils/Pop.js"


export class SandboxDigimonsController {

  constructor() {
    console.log('SandboxDigimons')
    AppState.on('identity', this.getSavedDigimon)
    AppState.on('sandboxDigimons', this.drawSandboxDigimon)
    AppState.on('sandboxDigimons', this.drawSandboxCount)

  }

  async saveActiveDigimon() {
    try {
      await sandboxDigimonsService.saveActiveDigimon()
    } catch (error) {
      Pop.error('could not get saved digimon')
      console.error(error)
    }
  }

  async getSavedDigimon() {
    try {
      await sandboxDigimonsService.getSavedDigimon()
    } catch (error) {
      Pop.error(error, 'can not get saved digimons')
      console.error('failed to get saved digimon', error)
    }
  }

  drawSandboxDigimon() {
    const digimons = AppState.sandboxDigimons
    let sandboxContent = ''
    digimons.forEach(sandboxDigimon => sandboxContent += sandboxDigimon.sandboxTemplate)
    const sandboxElem = document.getElementById('sandboxDigimonList')
    sandboxElem.innerHTML = sandboxContent



  }

  setActiveDigimon(digimonName) {
    sandboxDigimonsService.setActiveDigimon(digimonName)
  }

  drawSandboxCount() {
    const digimons = AppState.sandboxDigimons
    const sandboxDigimons = digimons.filter(digimon => digimon.sandboxTemplate)
    const savedCount = document.getElementById('savedDigimonCount')
    savedCount.innerHTML = `Saved Digimon: ${sandboxDigimons.length}/${digimons.length}`
  }

  async removeDigimon(digimonName) {
    try {
      const confirm = await Pop.confirm('Do you want to set this Digimon free?')
      if (confirm == false) return

      await sandboxDigimonsService.removeDigimon(digimonName)
    } catch (error) {
      Pop.toast('could not remove digimon')
      console.error(error)
    }
  }

}