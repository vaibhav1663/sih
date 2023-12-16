// short random string for ids - not guaranteed to be unique
const randomId = function(length = 8) {
    return Math.random().toString(36).substring(2, length+2);
  };
  const checkId = function(id, existing = []) {
    let match = existing.find(function(item) {
      return item === id;
    });
    return match ? false : true;
  };
// generate a unique id
const getId = function({ length=8, existing = [] }) {
    const limit = 100; // max tries to create unique id
    let attempts = 0; // how many attempts
    let id = false;
    while(!id && attempts < limit) {
      id = randomId(length); // create id
      if(!checkId(id, existing)) { // check unique
        id = false; // reset id
        attempts++; // record failed attempt
      }
    }
    return id; // the id or false if did not get unique after max attempts
  };
module.exports =  {randomId, checkId, getId};