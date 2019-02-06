exports.upperCaseLink = name => {
  const nameLength = name.split("").length;
  const linkName =
    name.split("")[0].toUpperCase() +
    name
      .split("")
      .splice(1, nameLength)
      .join("");
  return linkName;
};
