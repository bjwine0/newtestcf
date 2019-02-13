

function carFun(){
  var carsOwned = ['nissan 300zx', 'chevrolet suburban', 'honda accord'];
  var carCounter = 6;
  while(carCounter > 0) {
    var carType = prompt('What make and model car have I owned before? You have ' + carCounter + ' attempt\(\s\) left.');
    if (carsOwned.includes(carType.toLowerCase())) {
      alert(userName.toUpperCase([0]) + ', great guess!');
      alert('I have owned a ' + carsOwned[0] + ', ' + carsOwned[1] + ', and ' + carsOwned[2] + '.');
      console.log(carType);
      correctCount++;
      break;
    } else if (!carType.includes(carsOwned)) {
      alert('Nope, didn\'t own one of those. Guess again.');
      carCounter--;
      console.log(carCounter);
    }
  } if (carCounter === 6); {
    alert('Yeah I know, who cares what I\'ve owned!? BUT, I loved driving my ' + carsOwned[0] + ', ' + carsOwned[1] + ', and ' + carsOwned[2] + '.');
  }
}
carFun();
