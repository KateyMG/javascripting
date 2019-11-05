var resolved = Promise.resolve('SUCCESS!');
var rejected = Promise.reject(new Error('ERROR'));

resolved
  .then(console.log);

rejected
  .catch((err) => console.log(err.message));