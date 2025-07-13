import { AppState } from "../AppState.js";
import { wildDigimonsService } from "../services/WildDigimonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class WildDigimonsController {
  constructor() {
    console.log('wildDigimon')
    AppState.on('wildDigimons', this.drawWildDigimon)

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
    const digimon = AppState.digimons

  }

}