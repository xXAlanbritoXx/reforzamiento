const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 2000);

});

myPromise
    .then((myMoney) => {
        console.log("Tengo " + myMoney);
    })
    .catch((reason) => console.warn(reason))
    .finally(() => console.log("Finally"));




