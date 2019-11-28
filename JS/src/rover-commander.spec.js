const RoverCommander = require("rover-commander");

describe("Rover Commander", () => {
  test.todo(
    "When initializing a rover commander with no boundary, it should throw an Error"
  );
  test.todo(
    "When initializing a rover commander with a valid boundary, create the rover commander"
  );
  test.todo(
    "When deploying a rover, if it is outside the bounds emit an error"
  );
  test.todo(`When deploying a rover and the command sequence does not move 
    the rover outside the  bounds, add it to the list of rovers
    `);
  test.todo(`Deploying multiple rovers with valid command sequences inside the boundary, 
    they will be added to the list correctly.
    `);
});
