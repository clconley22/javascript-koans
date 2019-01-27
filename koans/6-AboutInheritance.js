function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = () =>{
    return "Everything's cool!";
  };
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;

  this.cook = () => {
    return "Mmmm soup!";
  };
}

SwedishChef.prototype = new Muppet();

describe("6. About inheritance", () => {
  beforeEach(() =>{
    this.muppet = new Muppet(2, "coding");
    this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("should be able to call a method on the derived object", () => {
    expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
  });


  it("should be able to call a method on the base object", () => {
    expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
  });

  it("should set constructor parameters on the base object", () => {
    expect(this.swedishChef.age).toEqual(2);
    expect(this.swedishChef.hobby).toEqual("cooking");
  });

  it("should set constructor parameters on the derived object", () => {
    expect(this.swedishChef.mood).toEqual("chillin");
  });
});
