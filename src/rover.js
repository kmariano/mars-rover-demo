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
      throw new Error("dire");
    }
    this.X = x;
    this.Y = y;
    this.direction = direction;
  }
  get position() {
    return `${this.X} ${this.Y} ${this.direction}`;
  }

  static isValidCommandSequence(cmdSequence) {
      if(!cmdSequence) return false; 
      const invalidChars = cmdSequence.split("").filter(s => return !VALID_COMMANDS.includes(s))
      if(invalidChars.length > 0) return false; 
      return true; 
  }

  processCommandSequence(cmdSequence) {
      if(!isValidCommandSequence(cmdSequence)) throw new Error("Command sequence contains invalid characters"); 
      
      
  }
}
