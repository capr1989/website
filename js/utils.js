exports.activeClass = (a, b, otherClass = "") => {
  if (a === b) return "cust__active " + otherClass;
  return otherClass;
};
