// use strict
const { Directions, Commands } = require("./constants");

const VALID_DIRECTIONS = [
  Directions.NORTH,
  Directions.SOUTH,
  Directions.EAST,
  Directions.WEST
];

const VALID_COMMANDS = [Commands.LEFT, Commands.RIGHT, Commands.MOVE];

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
   * @name position
   * @returns the current position as a string in the format
   * "0 1 N" where 0 is the X position 1 is the Y position and N
   * is the current direction (North)
   */
  get position() {
    return `${this.X} ${this.Y} ${this.direction}`;
  }

  /**
   *@name isValidCommandSequence
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
   * @name processCommandSequence
   * takes a series of move commands as input @see move
   * example "LLLLLMMMRRRLMRLMR"
   * @param {string} cmdSequence
   */
  processCommandSequence(cmdSequence) {
    if (!Rover.isValidCommandSequence(cmdSequence)) {
      throw new Error("Command sequence contains invalid characters");
    }
    const commands = cmdSequence.split("");
    commands.forEach(c => this.move(c));
  }

  /**
   * @name move
   * takes a single move command as input. Valid move commands are:
   * "L" turns the rover left 90 degrees.
   * "R" turns the rover right 90 degrees
   * "M" moves the rover 1 unit in the current direction.
   * @param {string} moveCmd
   */
  move(moveCmd) {
    switch (moveCmd) {
      case Commands.LEFT:
        this.turnCounterClockWise();
        break;
      case Commands.RIGHT:
        this.turnClockWise();
        break;
      case Commands.MOVE:
        this.changePosition();
        break;
      default:
        throw new Error(
          `Invalid move command: Valid moves are ${Commands.LEFT},${Commands.RIGHT},${Commands.MOVE}`
        );
    }
  }

  /**
   * @name turnCounterClockWise
   * makes the rover turn 90 degrees counter clockwise based
   * on the current direction
   */
  turnCounterClockWise() {
    switch (this.direction) {
      case Directions.NORTH:
        this.direction = Directions.WEST;
        break;
      case Directions.EAST:
        this.direction = Directions.NORTH;
        break;
      case Directions.SOUTH:
        this.direction = Directions.EAST;
        break;
      case Directions.WEST:
        this.direction = Directions.SOUTH;
        break;
    }
  }

  /**
   * @name turnClockWise
   * makes the rover turn 90 degrees clockwise based on the
   * current direction
   */
  turnClockWise() {
    switch (this.direction) {
      case Directions.NORTH:
        this.direction = Directions.EAST;
        break;
      case Directions.EAST:
        this.direction = Directions.SOUTH;
        break;
      case Directions.SOUTH:
        this.direction = Directions.WEST;
        break;
      case Directions.WEST:
        this.direction = Directions.NORTH;
        break;
    }
  }

  /**
   * @name changePosition
   * Moves the rover 1 unit in the current direction
   */
  changePosition() {
    switch (this.direction) {
      case Directions.NORTH:
        this.Y = this.Y + 1;
        break;
      case Directions.EAST:
        this.X = this.X + 1;
        break;
      case Directions.SOUTH:
        this.Y = this.Y - 1;
        break;
      case Directions.WEST:
        this.X = this.X - 1;
        break;
    }
  }
}

module.exports = Rover;
