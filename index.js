//henter de libaries som vi har installeret
const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const { NEWDATE } = require('mysql/lib/protocol/constants/types');

//kalder npm for at få dens funktioner ud i app
const app = express()

const url = "https://www.ok.dk/privat/produkter/benzinkort/benzinpriser";

//axios henter alt html fra en kilde
// axios(url)
//     //promise
//     .then(response => {
//         //ligger responsen i variable
//         const html = response.data;
//         //loader den i cheerio variable
//         const $ = cheerio.load(html)
//         //jQuery for hvert table row
//         $('.flex-table__row', html).each(function () {
//             //find navn og pris i det table rov og console log
//             const whichName = $(this).find('div:first-of-type').text();
//             const whichPrice = $(this).find('div:nth-of-type(2)').text();
//             console.log(whichName.replaceAll(" ", "") + whichPrice.replaceAll(" ", ""))
//         })
//     })

//express checker nu for ændringer på port 8000 og kalder en callback funktion
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

let date_ob = new Date();
console.log(`${date_ob.getFullYear()}-${date_ob.getMonth()}-${date_ob.getDay()}`)




//json server --watch db.js