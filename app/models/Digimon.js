

export class Digimon {
  constructor(data) {
    this.id = data.id
    this.images = data.images
    this.name = data.name
    this.skills = data.skills
    this.levels = data.levels
    this.nextEvolutions = data.nextEvolutions
    this.priorEvolutions = data.priorEvolutions
    this.types = data.types
    this.descriptions = data.descriptions
    this.releaseDate = data.releaseDate
    this.attributes = data.attributes
  }


  get wildDigimonList() {
    return `
    <section class="row align-items-center">
      <div class="col-md-3">
        <div onclick="app.wildDigimonsController.getWildDigimon('${this.name}')" class="btn text-start" role="button"> ${this.name}</div>
      </div>
    </section>
    `
  }

}