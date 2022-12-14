function stretch(timeLeft) {
  //!!ADD
  // // refactor your code from phase 1
  //!!END_ADD
  //!!START
  return new Promise((resolve, reject) => {
    if (timeLeft < 1000) {

      // if we dont have enough time to complete the action
      // reject the promise with the reason
      reject('you dont have enough time to stretch');

    } else {

      // decrement timeLeft by time it takes to stretch
      timeLeft - 1000;

      setTimeout(() => {
        console.log('done stretching');

        // promise resolves with updated amount of time left
        resolve(timeLeft);
      }, 1000);
    }
  });
  //!!END
}


function runOnTreadmill(timeLeft) {
  //!!ADD
  // // refactor your code from phase 1
  //!!END_ADD
  //!!START
  return new Promise((resolve, reject) => {
    if (timeLeft < 500) {
      reject('you dont have enough time to run on treadmill');
    } else {
      timeLeft - 500;

      setTimeout(() => {
        console.log('done running on treadmill');
        resolve(timeLeft);
      }, 500);
    }

  });
  //!!END
}


function liftWeights(timeLeft) {
  //!!ADD
  // // refactor your code from phase 1
  //!!END_ADD
  //!!START
  return new Promise((resolve, reject) => {
    if (timeLeft < 2000) {
      reject('you dont have enough time to lift weights');
    } else {
      timeLeft - 2000

      setTimeout(() => {
        console.log('done lifting weights');
        resolve(timeLeft);
      }, 2000);
    }
  });
  //!!END
}


function workout(totalTime) {
  //!!ADD
  // // refactor your code from phase 1
  //!!END_ADD
  //!!START
  stretch(totalTime)
    .then(timeLeftAfterStretching => runOnTreadmill(timeLeftAfterStretching))
    .then(timeLeftAfterRunning => liftWeights(timeLeftAfterRunning))
    .then(res => console.log(`done working out with ${res/1000} seconds left`))
    .catch(err => console.log('Error: ', err));
  //!!END
}
