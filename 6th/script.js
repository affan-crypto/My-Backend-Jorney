const fs = require("fs");
// console.log(fs)

console.log("starting")
// fs.writeFileSync("affan.txt", "Affan is a good boy")
fs.writeFile("affan2.txt", "Affan is a good boy", () => {
    console.log("Done")
    fs.readFile("affan2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("affan2.txt", " and he is a good programmer", (e,d) => {
    console.log("d")
})
console.log("ending")