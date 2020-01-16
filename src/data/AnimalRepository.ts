import Animal from "../models/Animal";

export default class AnimalRepository {
  constructor() {}
  async findAllAnimals() {
    return await Animal.query();
  }
  async findAnimalsByOwner(ownerId: number) {
    return await Animal.query().where("ownerId", ownerId);
  }
  async findAnimalsBySpecies(species: string) {
    return await Animal.query().modify("searchBySpecies", name);
  }
  async findAnimalsByName(name: string) {
    return await Animal.query().modify("searchByName", name);
  }
  async addAnimal(animal: Animal) {
    return await Animal.query().insert(animal);
  }
  async editAnimal(animal: Animal, animalID: number) {
    return await Animal.query().patchAndFetchById(animalID, animal);
  }
  async deleteAnimal(animalID: number) {
    return await Animal.query().deleteById(animalID);
  }
}
