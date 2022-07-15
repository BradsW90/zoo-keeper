const fs = require("fs");
const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require("../lib/zookeepers");
const { zookeepers } = require("../data/zookeepers");

jest.mock("fs");

test("filter by query", () => {
  const filteredResults = [
    {
      id: "1",
      name: "Raksha",
      age: 31,
      favoriteAnimal: "penguin",
    },
    {
      id: "2",
      name: "Isabella",
      age: 67,
      favoriteAnimal: "bear",
    },
  ];

  const updatedZookeepers = filterByQuery(
    { favoriteAnimal: "penguin" },
    filteredResults
  );

  expect(updatedZookeepers.length).toEqual(1);
});

test("find by id", () => {
  const filteredResults = [
    {
      id: "1",
      name: "Raksha",
      age: 31,
      favoriteAnimal: "penguin",
    },
    {
      id: "2",
      name: "Isabella",
      age: 67,
      favoriteAnimal: "bear",
    },
  ];

  const idResult = findById("2", filteredResults);

  expect(idResult.name).toEqual("Isabella");
});

test("create new zookeeper", () => {
  const newKeeper = createNewZookeeper(
    { name: "Scott", id: "asdf" },
    zookeepers
  );

  expect(newKeeper.name).toEqual("Scott");
  expect(newKeeper.id).toEqual("asdf");
});

test("validate zookeeper", () => {
  const keeper = {
    id: "1",
    name: "Raksha",
    age: 31,
    favoriteAnimal: "penguin",
  };

  console.log(keeper);

  const invalidKeeper = {
    id: "1",
    name: "Raksha",
    age: 31,
  };

  const result = validateZookeeper(keeper);
  const result2 = validateZookeeper(invalidKeeper);

  expect(result).toEqual(true);
  expect(result2).toEqual(false);
});
