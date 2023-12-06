// Code your solutions in this file

function writeCards( gifterNames, event ) {
    let thanksMessage = []
    for ( let i = 0; i < gifterNames.length; i++ ) {
      thanksMessage.push( `Thank you, ${gifterNames[i]}, for the wonderful ${event} gift!` )
    }
    return thanksMessage
  }

  function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
