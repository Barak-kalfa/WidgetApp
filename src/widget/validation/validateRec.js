const failedRecommendations = [];
export function recordError(rec) {
  failedRecommendations.push(rec);
  console.log("ERROR - failed recommendations:", failedRecommendations);
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
    //using regex pattern:
    const validURLpattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (validURLpattern.test(rec.url)) {
      try {
        //if regex passed checking for old browsers:
        const dummyAnchor = document.createElement("a");
        dummyAnchor.href = rec.url;
        if (dummyAnchor.href === "") {
          rec.error = "Invalid URL1";
          recordError(rec);
          return false;
        }
      } catch (error) {
        rec.error = "Invalid URL";
        recordError(rec);
        return false;
      }
    } else {
      rec.error = "Invalid URL";
      recordError(rec);
      return false;
    }
    return true;
  };

  const isValidateImgType = () => {
    if (!/\.(jpeg|jpg|png|gif|svg)\b/i.test(rec.thumbnail[0].url)) {
      rec.error = "Image file not supported";
      recordError(rec);
      return settings.type[rec.origin].showWithoutImg;
    } else {
      return true;
    }
  };
  return (noEmptyFields() && isValidateURL() && isValidateImgType());
}
