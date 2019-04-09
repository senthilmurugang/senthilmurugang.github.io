class Utilities {
  constructor() { }
  toTransport(inputObject) {
    let processResult = inputObject;
    if (typeof inputObject === "object")
      processResult = JSON.stringify(inputObject);
    return encodeURIComponent(processResult);
  }
}

if (typeof module !== 'undefined' && module.exports)
  exports = module.exports = Utilities;