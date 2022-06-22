const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json)
.then(data => {
    data.map(e => e.name())
}).catch (e=>{
    console.log('error')
})