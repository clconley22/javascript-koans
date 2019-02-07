describe("3. About Objects", () => {

  describe("Properties", () => {
    let megalomaniac;

    beforeEach(() => {
      megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", () => {
      expect(megalomaniac.mastermind).toBe("Joker");
    });

    it("should confirm that properties are case sensitive", () => {
      expect(megalomaniac.henchwoman).toBe("Harley");
      expect(megalomaniac.henchWoman).toBe(undefined);
    });
  });


  it("should know properties that are functions act like methods", () => {
    const megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    const battleCry = megalomaniac.battleCry(4);

    expect("They are Pinky and the Brain Brain Brain Brain").toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", () => {
    const currentDate = new Date();
    const currentYear = (currentDate.getFullYear());
    const megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function() {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2019);
    expect(megalomaniac.calculateAge()).toBe(49);
  });

  it("should know that properties can be added and deleted", () => {
    const megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect(megalomaniac["secretary"]).toBe(undefined);

    megalomaniac.secretary = "Agent Smith";
    expect(megalomaniac["secretary"]).toBe("Agent Smith");

    delete megalomaniac.henchman;
    expect(megalomaniac["henchman"]).toBe(undefined);
  });


  it("should use prototype to add to all objects", () => {
    function Circle(radius){
      this.radius = radius;
    }

    const simpleCircle = new Circle(10);
    let colouredCircle = new Circle(5);
    colouredCircle.colour = "red";

    expect(simpleCircle.colour).toBe(undefined);
    expect(colouredCircle.colour).toBe("red");

    Circle.prototype.describe = function() {
      return "This circle has a radius of: " + this.radius;
    };



    expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
    expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
  });

  it("should create your own simple object", () => {
    const myNewObject = { prop1 : "a property!", prop2: [4, 3, 2], prop3: () => {return "a property that is a method!"} };

    expect(myNewObject.prop1).toEqual("a property!");
    expect(myNewObject.prop2).toEqual([4,3,2]);
    expect(myNewObject.prop3()).toEqual("a property that is a method!");
  });

  it("should create your own prototype", () => {
    function MyPrototype(argument) {
      return FILL_ME_IN;
    }
    const myNewObject = new MyPrototype("initial value");

    expect(myNewObject.prop1).toEqual({simple: "object"});
    expect(myNewObject.prop2).toEqual("initial value");
  });
});
