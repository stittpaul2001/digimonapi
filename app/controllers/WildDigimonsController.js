import { AppState } from "../AppState.js";
import { Digimon } from "../models/Digimon.js";
import { wildDigimonsService } from "../services/WildDigimonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class WildDigimonsController {
  constructor() {
    console.log('wildDigimon')
    AppState.on('wildDigimons', this.drawWildDigimon)
    AppState.on('activeDigimon', this.drawActiveDigimon)

    this.getWildDigimon()

  }

  async getWildDigimon() {
    try {
      await wildDigimonsService.getWildDigimon()
    } catch (error) {
      console.error('cant get wild digimon', error)
      Pop.error(error, 'cant get wild digimon!')
    }
  }

  drawWildDigimon() {
    const digimons = AppState.wildDigimons
    let listContent = ''
    digimons.forEach(wildDigimon => listContent += wildDigimon.wildDigimonList)
    const wildElem = document.getElementById('wildDigimonList')
    wildElem.innerHTML = listContent
  }


  
  drawActiveDigimon() {
    let wildDigimon = AppState.activeDigimon
    const digimon = AppState.activeDigimon
    const activeElem = document.getElementById('ActiveTemplate')
    activeElem.innerHTML = digimon.actveTemplate
  }

  async getActiveDigimon(name) {
    try {
      console.log('getting active digimon!')
      await wildDigimonsService.getActiveDigimon(name)
    } catch (error) {
      Pop.error(error, 'Cant get active digimon')
      console.error(error, 'could not get active digimon!')
    }
  }

}