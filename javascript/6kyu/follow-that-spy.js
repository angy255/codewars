/*We are diligently pursuing our elusive operative, Matthew Knight, who also goes by the alias Roy Miller. He employs a nomadic lifestyle to evade detection, constantly moving from one location to another, with each of his journeys following a perplexing and non-standard sequence of itineraries. Our mission is to decipher the routes he will undertake during each of his voyages.

Task
You've been provided with an array of itinerary routes, decipher the precise destinations he will visit in the correct sequence according to his meticulously planned itineraries.

Example
Based on the provided routes:

[ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]
The correct sequence of destinations is:

"USA, BRA, UAE, JPN, PHL"
Note:

You can safely assume that there will be no duplicate locations with distinct routes.
All routes provided will have non-empty itineraries.
There will always be at least one (1) route connecting one waypoint to another.*/

// my solution

/* @param {array} routes - array of routes, each route is an array [from, to]
  @returns {string} - the ordered itinerary as a string
 
example:
 input: [ ["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"] ]
 output: "USA, BRA, UAE, JPN, PHL"
 */

function findRoutes(routes) {
  // step 1: collect all 'from' and 'to' locations
  const fromList = [];
  const toList = [];

  for (let i = 0; i < routes.length; i++) {
    fromList.push(routes[i][0]);
    toList.push(routes[i][1]);
  }

  // step 2: find the starting point — a location in 'fromList' but not in 'toList'
  let start = null;
  for (let i = 0; i < fromList.length; i++) {
    if (!toList.includes(fromList[i])) {
      start = fromList[i];
      break;
    }
  }

// step 3: go through the routes one by one using simple loops
    const result = [start];
    let current = start;

  // continue until we can’t find a next destination
  while (true) {
    let next = null;

    // find a route where current matches the 'from' location
    for (let i = 0; i < routes.length; i++) {
      if (routes[i][0] === current) {
        next = routes[i][1];
        break;
      }
    }

    // if there's no next stop, the route is complete
    if (!next) break;

    // add the next destination to the result
    result.push(next);
    current = next;
  }

  // step 4: join all destinations into a single string
  return result.join(', ');
}