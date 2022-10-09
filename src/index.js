import "./styles.css";
console.clear();

const myPromise1 = new Promise((resolve, reject)=>{
  resolve("my promise 1 resolved")
})

// working ok
/*
myPromise1
.then(resolveData=>console.log(resolveData))
.catch(rejectData => console.log(rejectData))
*/

const myPromise2 = new Promise((resolve, reject)=>{
  reject("my promise 2 rejected")
})

// working ok
/*
myPromise2
.then(resolveData=>console.log(resolveData))
.catch(rejectData => console.log(rejectData))
*/


const myPromise3 = async()=>{
  return 'my promise 3 resolve'
}

// working ok
// myPromise3().then(resolveData => console.log(resolveData));


const myPromise4 = async()=>{
  return 'my promise 4 resolve'
}

const getData = async()=>{
  const data = await myPromise4()
  console.log(data)
};

// getData();
// console.log(myPromise4())


const myPromise5 = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("promise 5 resolved")}, 3000)
  })
}

const myPromise6 = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("promise 6 resolved")}, 5000)
  })
}


const getData1 = async()=>{
  
  console.log('waiting promise 5 ...')
  const data = await myPromise5();
  console.log(data);
  
  
  
  console.log('waiting promise 6 ...')
  const data2 = await myPromise6();
  console.log(data2)
  
  
};

getData1()