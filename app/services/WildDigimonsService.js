import { AppState } from "../AppState.js"
import { Digimon } from "../models/Digimon.js"



// @ts-ignore
export const digiApi = new axios.create({
  baseURL: "https://digi-api.com/",
  timeout: 8000,
})

class WildDigimonsService {


  async getWildDigimon() {
    const response = await digiApi.get('api/v1/digimon')
    console.log('wild digimon', response.data)
    const digimons = response.data.content.map(digiData => new Digimon(digiData))
    AppState.wildDigimons = digimons

  }



}

export const wildDigimonsService = new WildDigimonsService()