const failedRecommendations = [];
export function recordError(rec) {
  failedRecommendations.push(rec);
  console.log("ERROR - failed recommendation:", rec);
  // would add a post request for logging errors somewhere
}

export function validateRecommendation(rec, settings) {
  const noEmptyFields = () => {
    for (const field in rec) {
      if (rec[field].length === 0) {
        rec.error = "Empty Field or Array";
        recordError(rec);
        return false;
      }
    }
    return true;
  };

  const isValidateURL = () => {
    try {
      const http = new XMLHttpRequest();
      http.open("HEAD", rec.url, false);
      http.send();
      if (http.status != 404) {
        return true;
      } else {
        rec.error = "page not found";
        recordError(rec);
        return false;
      }
    } catch (e) {
      rec.error = "invalid URL";
      recordError(rec);
      return false;
    }
  };

  const isValidThumbnailType = () => {
    if (!/\.(jpeg|jpg|png|gif|svg|mp4)\b/i.test(rec.thumbnail[0].url)) {
      rec.error = "Thumbnail file type not supported";
      recordError(rec);
      return settings.type[rec.origin].showWithoutImg;
    } else {
      return true;
    }
  };
  return noEmptyFields() && isValidateURL() && isValidThumbnailType();
}
