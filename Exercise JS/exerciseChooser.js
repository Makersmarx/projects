  const name = 'Polly';
  let mins = ''

  const getExcercise = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Hit Exercise';
    } else if (random === 1) {
      return 'Upper Body';
    } else if (random === 2) {
      return 'Lower Body';
    }
  };


  const getExerciseMins = event => {
    if (event === 'Hit Exercise') {
      mins = '30';
    } else if (event === 'Upper Body') {
      mins = '35';
    } else if (event === 'Lower Body') {
      mins = '36';
    } else {
      return 'nada'
    };

    return mins;
  };


  const logEvent = name => {
    console.log(`${name}'s event is: ${event}`);
  };

  const logTime = name => {
    console.log(`${name}'s time to train is: ${mins} minutes today`);
  };



  const event = getExcercise();
  const days = getExerciseMins(event);

  logEvent(name, event);
  logTime(name, mins);