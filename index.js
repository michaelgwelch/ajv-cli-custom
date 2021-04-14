const process = require("process")
const fs = require("fs")
const path =require("path")


const { keywords, formats } = JSON.parse(fs.readFileSync(path.join(process.cwd(), "customs.json")))


function customKeywords(ajv) {

    if (keywords) {
        keywords.forEach((keyword) => {
            if (typeof(keyword) === 'string') {
                ajv.addKeyword(keyword)
            }
        })
    }

    if (formats)
    {
        formats.forEach((format) => {
            if (typeof(format) === 'string') {
                ajv.addFormat(format, () => true)
            }
        })
    }
}

module.exports = customKeywords