
// https://hackernoon.com/a-common-misconception-about-async-await-in-javascript-33de224bd5f


const delay = (duration) =>
  new Promise(resolve => setTimeout(resolve, duration))

async function asyncWithAwait(prefix) {
  
  console.log(prefix + ' before await')

  await delay(1000)

  console.log(prefix + ' after await') // This part will be escaped 
}

function asyncWithPromise(prefix) {

  console.log(prefix + ' before promise')

  return delay(1000)
  .then(_ => console.log(prefix + ' after promise'))
}




async function run() {
  let prefix = '(1)'
  console.log(prefix + ' with await')
  
  await asyncWithAwait(prefix)
  
  console.log(prefix + ' with promise')
  
  asyncWithPromise(prefix)
  
  
  console.log(prefix + ' after all')
}


// That means while working with promises in await is used inside the function and using same different function inside await will not work
// as expected because to make the code synchronious we need to use function as await or else code will be asynchronious any way 



/*
async function run() {
  let prefix = '(2)'
  console.log(prefix + ' with await')
  await asyncWithAwait(prefix)
  console.log(prefix + ' with promise')
  asyncWithPromise(prefix).then(_ => console.log(prefix + ' after all'))
}

*/


run()