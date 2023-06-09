function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        for (let i = 1; i <= 100; i++) {
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount === 5) {
                resolve(`It took ${i} tries to flip five "heads"`);
            }
        }
        reject("After 100 flips, 5 heads in a row was not reached");
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");
