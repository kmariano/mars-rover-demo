const Rover = require("./rover");
const EventEmitter = require("events");
/**
 * The Rover Commander will
 * initialize and deploy a collection of Rovers
 * with move command sequences for each one.
 */
class RoverCommander extends EventEmitter {
  constructor(mapBoundary) {
    super();
    if (!mapBoundary) throw new Error("Missing map boundary");
    const { x, y } = mapBoundary;
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error(
        "X and Y coordinates of the map boundary needs to be a number"
      );
    }
    this.rovers = new Array();
  }
  /**
   * @name deployRover
   * @param {*} initialPosition
   * @param {*} commandSequence
   */
  deployRover(initialPosition, commandSequence) {
    try {
    } catch (ex) {}
  }
  /**
   * @name getRoverPositions
   * will output all the rover positions that the
   * commander controls
   */
  getRoverPositions() {}
}
