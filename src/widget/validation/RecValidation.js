
const failedRecommendations = [];
export function recordError(rec) {
  failedRecommendations.push(rec);
  console.log("ERROR - failed recommendations:", failedRecommendations);
  // would add a post request for logging errors somewhere
}

export function validateRecommendation(rec, settings){
  for (const field in rec) {
    if (rec[field] === "") {
      rec.error = "Empty field"
      recordError(rec);
      return false;
    }
  }
    if (!/\.(jpeg|jpg|png|gif|svg)\b/i.test(rec.thumbnail[0].url)) {
      rec.error = "Image file not supported"
      recordError(rec);
      return settings.type[rec.origin].showWithoutImg;
    }
  return true;
}

