/*
JavaScript JumpStart Online: The Array Hotel

CHALLENGE 1: FIND VACANT ROOMS

In this challenge, we'll be using an array to manage the occupancy of a hotel
called The Array Hotel.

Each room in the hotel will be represented with a "vacant" or "occupied" string
in the array. The index of the string in the array is the room number.

For example, for a hotel with an occupancy array of ["occupied", "vacant",
"occupied", "vacant"], we can determine that Rooms 0 and 2 are occupied and
Rooms 1 and 3 are free.

Your job is to write a function called findVacantRooms to help the owner of the
hotel find which rooms are vacant. This function should return an array of the
room numbers that are vacant.

**Examples**

- INPUT: findVacantRooms(["vacant", "occupied", "occupied", "vacant", "vacant"]);
- OUTPUT: [0,3,4] since those are the vacant rooms
*/

function findVacantRooms(arr) {
  var vacantRooms = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "vacant") {
      vacantRooms.push(i);
    }
  }
  if (vacantRooms.length === 0) {
    return "No Vacancy";
  } else {
    return vacantRooms;
  }
}

findVacantRooms(["vacant", "occupied", "occupied", "vacant", "vacant"]);
findVacantRooms(["occupied", "occupied", "occupied"]);

/*
CHALLENGE 2: FIND THE CHEAPEST VACANT ROOM

Assume now that instead of just "vacant" and "occupied", the occupancy array has
the price of the room listed for the vacant rooms. For example, an example
occupancy array could be as follows: [112, "occupied", 150, 175, "occupied"].

This would mean that Rooms 0, 2 and 3 are available for stay at prices $112,
$150 and $175 for the night.

Make a function to help someone find the cheapest available room in the hotel.
Return the room number and its​ price.

**Examples**

- INPUT: findCheapestVacantRoom([112, "occupied", 150, 175, "occupied"])
- OUTPUT: [0, 112] // since the cheapest vacant room is Room 0 at $112/night.

- INPUT: findCheapestVacantRoom(["occupied", 820, "occupied", 700, 455, 722])
- OUTPUT: [4, 455] // since the cheapest vacant room is Room 4 at $455/night.

*/

function findCheapestVacantRoom(arr) {
  var cheapest,
      cheapestRoom = [];
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] !== "occupied") {
      if (cheapest === undefined || arr[index] < cheapest) {
        cheapest = arr[index];
      }
    }
  }

  if (cheapest) {
    cheapestRoom.push(arr.indexOf(cheapest), cheapest);
    return cheapestRoom;
  } else {
    return cheapestRoom;
  }

}

findCheapestVacantRoom([112, "occupied", 150, 175, "occupied"]);
findCheapestVacantRoom(["occupied", 820, "occupied", 700, 455, 722]);
findCheapestVacantRoom(["occupied", "occupied", "occupied"]);
