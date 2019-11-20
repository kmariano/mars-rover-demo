const Rover = require("./rover");
const { Directions } = require("./constants");
describe("Rover", () => {
  test("If I initialize with bad co-ordinates I get errors", () => {
    try {
      const rover = new Rover("D", "V", "N");
      rover.turnClockWise();
    } catch (ex) {
      expect(ex).toBeDefined();
      expect(ex.message).toEqual("One of your co-ordinates is not a number");
    }
  });
  test("If I initialize with bad direction I get errors", () => {
    try {
      const rover = new Rover(0, 1, "G");
      rover.turnCounterClockWise();
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
  describe("->move", () => {
    test("Turn left turns the rover 90 degrees counter clockwise", () => {
      const rover = new Rover(3, 3, "N");
      rover.move("L");
      expect(rover.direction).toEqual(Directions.WEST);
    });
    test("Turn right turns the rover 90 degrees clockwise", () => {
      const rover = new Rover(3, 3, "N");
      rover.move("R");
      expect(rover.direction).toEqual(Directions.EAST);
    });
    test("Move command moves the rover 1 unit in the X or Y direction depending on the direction", () => {
      const rover = new Rover(3, 3, "N");
      rover.move("M");
      expect(rover.Y).toEqual(4);
    });
    test("Passing an invalid move command throws an error", () => {
      const rover = new Rover(0, 0, "E");
      try {
        rover.move("Y");
      } catch (ex) {
        expect(ex).toBeDefined();
        expect(ex.message).toEqual(
          "Invalid move command: Valid moves are L,R,M"
        );
      }
    });
  });
  describe("processCommandSequence()", () => {
    test("Giving an invalid command sequence throws an error", () => {
      try {
        const rover = new Rover(0, 0, "N");
        rover.processCommandSequence("LMYRYYYYN ");
      } catch (ex) {
        expect(ex).toBeDefined();
        expect(ex.message).toEqual(
          "Command sequence contains invalid characters"
        );
      }
    });
    test("Giving a valid command sequence moves the rover", () => {
      const rover = new Rover(0, 0, "N");
      rover.processCommandSequence("LLLLMMMMRRRR");
      expect(rover.position).toEqual("0 4 N");
    });
  });
});
