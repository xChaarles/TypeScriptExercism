export function decodedValue(colourArray: Array<string>) {
    const colorAry = [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey',
        'white',
    ];
  const firstNumber = colorAry.indexOf(colourArray[0], 0);
  const secondNumber = colorAry.indexOf(colourArray[1], 0);
  return (firstNumber*10+secondNumber);
}