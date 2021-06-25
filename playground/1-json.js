const fs = require('fs')

const dataJSON = fs.readFileSync('1-json.json').toString()
const data = JSON.parse(dataJSON)
data.name = "nihal"
const updatedDataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',updatedDataJSON)



/* Block to write file */
// const book = {
//     title: "Hooked",
//     author: "Nir Eyal"
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

/* Block to read file */
// const dataBuffer = fs.readFileSync('1-json.json')
// const data = dataBuffer.toString()
// console.log(JSON.parse(data).author)

