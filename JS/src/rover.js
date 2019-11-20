//use strict
const { Directions, Commands } = require("./constants");

const VALID_DIRECTIONS = [
  Directions.NORTH,
  Directions.SOUTH,
  Directions.EAST,
  Directions.WEST
];

const VALID_COMMANDS = [Commands.LEFT, Commands.RIGHT, Commands.move];

class Rover {
  constructor(x, y, direction) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("One of your co-ordinates is not a number");
    }

    if (!direction) {
      throw new Error("Direction is required");
    }

    if (!VALID_DIRECTIONS.includes(direction)) {
      throw new Error("Bad co-ordinates");
    }
    this.X = x;
    this.Y = y;
    this.direction = direction;
  }
  /**
   * @returns the current position as a string in the format
   * "0 1 N" where 0 is the X position 1 is the Y position and N
   * is the current direction (North)
   */
  get position() {
    return `${this.X} ${this.Y} ${this.direction}`;
  }
  /**
   *
   * utility function that checks to see if a
   * command sequence string is valid.
   * If the string contains any invalid characters i.e
   * any characters other than 'L', 'M', 'R' then return
   * @returns true if the string is a valid command sequence
   * false otherwise.
   * @param {string} cmdSequence - The command sequence to check
   */
  static isValidCommandSequence(cmdSequence) {
    if (!cmdSequence) return false;
    const invalidChars = cmdSequence
      .split("")
      .filter(s => !VALID_COMMANDS.includes(s));
    if (invalidChars.length > 0) return false;
    return true;
  }
  /**
   * takes a series of move commands as input @see move
   * example "LLLLLMMMRRRLMRLMR"
   * @param {string} cmdSequence
   */
  processCommandSequence(cmdSequence) {
    if (!isValidCommandSequence(cmdSequence))
      throw new Error("Command sequence contains invalid characters");
  }
  /**
   * takes a single move command as input. Valid move commands are:
   * "L" turns the rover left 90 degrees.
   * "R" turns the rover right 90 degrees
   * "M" moves the rover 1 unit in the current direction.
   * @param {string} moveCmd
   */
  move(moveCmd) {}
}

module.exports = Rover;
