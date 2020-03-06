const person = () => {
  let saveName = "Name";

  return {
    getName: () => {
      return saveName;
    },
    setName: (newName) => {
      saveName = newName;
    },
  };
};

const newPerson = person();
console.log("Person name:::: ", newPerson.getName());
newPerson.setName("Nathaly");
console.log("Person name:::: ", newPerson.getName());
