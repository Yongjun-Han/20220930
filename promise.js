let myPromise = new Promise((resolve, reject) => {
  setTimeout( ()=> {
    resolve("resolved ok!")
  },2000)
}).then(data => console.log('data',data));