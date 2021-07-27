let array = process.argv.slice(2);

const timer1 = function (array) {
  // console.log(sortedArray);
  const compare = function(a, b) {
    return a - b;
  }
  
  let sortedArray = array.sort(compare).filter(num => num > 0);

  for (let time of sortedArray) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * time)
  }
}; 

timer1(array);
