

export class Digimon {
  constructor(data) {
    this.image = data.image
    this.name = data.name
    this.attribute = undefined
  }



  get wildDigimonList() {
    return `
    <div onclick="app.wildDigimonsController.getActiveDigimon('${this.name}')" class="btn text-start w-100" role="button"> 
    <span class="fw-bold fs-2 border shadow border-4 border-success mb-2">~ ${this.name}</span></div>
    
    `
  }

  get sandboxTemplate() {
    return `
    <div onclick="app.sandboxDigimonsController.saveActiveDigimon()" class="btn text-start w-100" role="button"> 
    <span class="fw-bold fs-2 border shadow border-4 border-success mb-2">~ ${this.name}</span></div>
    
    `
  }

}

export class SandboxDigimons extends Digimon {
  super() {

  }
}