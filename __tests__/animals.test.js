const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal,
} = require("../lib/animals");
const { animals } = require("../data/animals");

jest.mock("fs");

test("Creates an animal object", () => {
  const animal = createNewAnimal({ name: "Darlene", id: "jhgja3ng2" }, animals);

  expect(animal.name).toEqual("Darlene");
  expect(animal.id).toEqual("jhgja3ng2");
});

test("finds by id", () => {
  const startingAnimals = [
    {
      id: "3",
      name: "Erica",
      species: "gorilla",
      diet: "omnivore",
      personality: ["impish", "sassy", "brave"],
    },
    {
      id: "4",
      name: "Noel",
      species: "bear",
      diet: "carnivore",
      personalityTraits: ["quirky", "rash"],
    },
  ];

  const result = findById("3", startingAnimals);

  expect(result.name).toEqual("Erica");
});

test("filters by query", () => {
  const startingAnimals = [
    {
      id: "3",
      name: "Erica",
      species: "gorilla",
      diet: "omnivore",
      personality: ["impish", "sassy", "brave"],
    },
    {
      id: "4",
      name: "Noel",
      species: "bear",
      diet: "carnivore",
      personalityTraits: ["quirky", "rash"],
    },
  ];

  const updatedAnimals = filterByQuery({ species: "gorilla" }, startingAnimals);

  expect(updatedAnimals.length).toEqual(1);
});

test("validates personality traits", () => {
  const animal = {
    id: "3",
    name: "Erica",
    species: "gorilla",
    diet: "omnivore",
    personalityTraits: ["quirky", "rash"],
  };

  const invalidAnimal = {
    id: "3",
    name: "Erica",
    species: "gorilla",
    diet: "omnivore",
  };

  const result = validateAnimal(animal);
  const result2 = validateAnimal(invalidAnimal);

  expect(result).toEqual(true);
  expect(result2).toEqual(false);
});
