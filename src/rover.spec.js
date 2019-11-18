const Rover = require("./rover");

describe("", () => {
  test("If I initialize with bad co-ordinates I get errors", () => {
    try {
      const rover = new Rover("D", "V", "N");
    } catch (ex) {
      expect(ex).toBeDefined();
      expect(ex.message).toEqual("One of your co-ordinates is not a number");
    }
  });
  test("If I initialize with bad direction I get errors", () => {
    try {
      const rover = new Rover(0, 1, "G");
    } catch (ex) {
      expect(ex).toBeDefined();
      expect(ex.message).toEqual("Bad co-ordinates");
    }
  });
  test("If I initialize a Rover with Good Inputs, I get a Rover object back", () => {
    const rover = new Rover(0, 1, "N");
    expect(rover).toBeDefined();
    expect(rover.position).toEqual("0 1 N");
  });
  test.todo("Left command turns the rover the right way");
});
