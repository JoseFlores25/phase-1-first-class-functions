function receivesAFunction(callback) {
  let myCallback = "love is the move";
  callback(myCallback);
}

function callback() {
  console.log(callback);
}

function returnsANamedFunction() {
  return function hello() {
    return 9;
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    5 + 5;
  };
}
