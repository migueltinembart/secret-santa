import _, { create } from "lodash";

interface Person {
  id: Number;
  name: String;
  mail: String;
  active: boolean;
  dont?: number;
}

// Returns new shuffled array
export function shufflePeople(personList: Person[]): Person[] {
  const shuffleArray: Person[] = [];

  _.shuffle(_.range(1, personList.length + 1)).map((number) => {
    const [person] = personList.filter((persona) => persona.id === number);
    shuffleArray.push(person);
  });

  return shuffleArray;
}

export function createPersonGraph(
  personList: Person[]
): Map<Person, Array<Person>> {
  let obj = new Map<Person, Array<Person>>();
  personList.map((person, index, array) => {
    const adjacents = array.filter(
      (otherPerson) =>
        otherPerson.id != person.dont && otherPerson.id != person.id
    );
    obj.set(person, adjacents);
  });
  return obj;
}

// push node to list if it is not already inside of array, if it
export function SecretSanta<T>(map: Map<T, Array<T>>): Map<T, T> | undefined {
  if (typeof map === undefined) return undefined;
  const list = new Map<T, T>();
  const first: T = map.values().next().value;
  const array: T[] = [];
  map.forEach((value, key, copy) => {
    array.push(key);
    let next = _.sample(_.difference(array, value)) || first;
    list.set(key, next);
  });
  return list;
}
