import { AppState } from "../AppState.js"


export class IndepthDigimon {
  constructor(data) {
    this.name = data.name
    this.id = data.id
    this.images = data.images
    this.img = data.images[0]?.href
    this.skills = data.skills
    this.skill1 = data.skills[0]?.skill
    this.skill2 = data.skills[1]?.skill
    this.skill3 = data.skills[2]?.skill
    this.skill4 = data.skills[3]?.skill
    this.skill5 = data.skills[4]?.skill


    this.levels = data.levels[0]?.id
    this.nextEvolutions = data.nextEvolutions[0]?.digimon
    this.priorEvolutions = data.priorEvolutions[0]?.digimon
    this.types = data.types[0]?.type
    this.descriptions = data.descriptions[0]
    this.releaseDate = data.releaseDate
    this.attributes = data.attributes[0]?.attribute
    this.fields = data.fields
  }

  get actveTemplate() {
    return `
    <div class="border border-1 border-teal p2 d-flex flex-column justify-content-between">
      <div class=" border border-1 border-success rounded-pill px-3 py-1 d-flex justify-content-between text-capitalize mt-1">
        <h1 class="fw-bold fs-1 px-3">${this.name} (${this.releaseDate})</h1>
          <span class="text-end fs-1 px-3 fw-bold">${this.id}</span>
      </div>
      <div class="text-center fs-4">Level: ${this.levels}<span>-${this.types}</span></div>
      <div class="d-flex justify-content-center">
        <div class="p-5">
          <span class="btn btn-danger rounded-pill fw-bold text-black text-center">Prior Evolution: ${this.priorEvolutions}</span>
        </div>
          <img class="rounded border border-1 border-danger mt-2" alt="${this.name}" src="${this.img}">
        <div class="p-5">
          <span class="btn btn-danger rounded-pill fw-bold text-black text-center">Next Evolution: ${this.nextEvolutions}</span>
        </div>
      </div>
      <div class="text-center fs-4">Attribute: ${this.attributes}</div>
      <div class="d-flex mx-2 rounded-pill border border-3 border-danger px-2 mb-1">
        <h3 class="text-center text-danger">Skills:</h3>
        <div class="text-white space-evenly px-2 mx-2"</div>
          <span class="fs-4 px-1">${this.skill1}</span>,
          <span class="fs-4 px-1">${this.skill2}</span>,
          <span class="fs-4 px-1">${this.skill3}</span>,
          <span class="fs-4 px-1">${this.skill4}</span>,
          <span class="fs-4 px-1">${this.skill5}</span>  
        </div>
    </div>
    <div class="text-center mt-1 mb-1">
      <button onclick="app.sandboxDigimonsController.saveActiveDigimon()" class="btn btn-outline-yellow rounded-pill fs-1 fw-bold">Catch Digimon</button>
      </div>
    `
  }



}