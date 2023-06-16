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

  const isValidateURL = (url) => {
    try {
      const http = new XMLHttpRequest();
      http.open("HEAD", url, false);
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
    if (
      /^https?:\/\/.+\/.+\.([jJ][pP][eE]?[gG]|[pP][nN][gG]|[gG][iI][fF]|[bB][mM][pP])$/.test(
        rec.thumbnail[0].url
      )
    ) {
      if (isValidateURL(rec.thumbnail[0].url)) {
        return true;
      } else {
        rec.error = "Thumbnail url invalid";
        recordError(rec);
        return settings.type[rec.origin].showWithoutImg;
      }
    }
    rec.error = "Thumbnail file url/type not supported";
    recordError(rec);
    return settings.type[rec.origin].showWithoutImg;
  };
  return noEmptyFields() && isValidateURL(rec.url) && isValidThumbnailType();
}
