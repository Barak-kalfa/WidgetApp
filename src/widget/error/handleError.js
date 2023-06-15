export const failedRecommendations = [];

export function recordError(rec) {
  failedRecommendations.push(rec);
  console.log("ERROR - failed recommendations:", failedRecommendations);
  // would add a post request for logging errors somewhere
}

