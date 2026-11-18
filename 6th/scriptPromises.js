import fs from "fs/promises"

let a = await fs.readFile("affan2.txt")
let b = await fs.writeFile("affan2.txt", "\n\nAffan is also a good boy and he is a good programmer")
console.log(a.toString(), b)
