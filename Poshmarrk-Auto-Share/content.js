// Array.from(document.getElementsByClassName('icon share-gray-large'))
//   .forEach(async (x, xi) => {
//     //x.click()
//     await setTimeout(async function () {
//       console.log('waited! index: ', xi)
//     }, 1000)
//   })


function autoLoad() {
  let interval = setInterval(() => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      waiter(Array.from(document.getElementsByClassName('icon share-gray-large')))
      clearInterval(interval)
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }, 4000);
}
autoLoad();



async function waiter(obj, index = 0) {
  let share;
  obj[index].click()
  setTimeout(() => {
    console.log(obj[index])
    console.log('index: ', index)
    share = document.getElementsByClassName('share-wrapper-container')
    // share[index].click();
    share[0].click();
    // if (index < obj.length - 1) {
    //   waiter(obj, index + 1)
    // }
  }, 200);
  setTimeout(() => {
    if (index < obj.length - 1) {
      waiter(obj, index + 1)
    }
  }, 1000);
  return
}

// waiter(Array.from(document.getElementsByClassName('icon share-gray-large')))
