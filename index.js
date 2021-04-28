// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}


// Write a function min(a,b) which returns the least of two numbers a and b.
  function min(a, b) {
    return Math.min(a, b);
  }

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  function pow(x, n) {
    return x ** n;
  }

console.log('1:', checkAge(18), '\n2:', min(3, -1), '\n3:', pow(3, 3));