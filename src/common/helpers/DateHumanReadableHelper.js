const timeSince = (date1, date2) => {

  var seconds = Math.floor((date2 - date1) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
      return interval + " y";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
      return interval + " m";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
      return interval + " d";
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
      return interval + " hour ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
      return interval + " min ago";
  }
  return Math.floor(seconds) + " second";
}

export  { timeSince }