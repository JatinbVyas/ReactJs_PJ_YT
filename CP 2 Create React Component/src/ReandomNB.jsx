function Random(){
  let randomNumber = Math.random() * 100;

  return <h4 style={{'background-color': '#567890'}}>
    Current Random number is :: {Math.round(randomNumber)}
  </h4>
}

export default Random;