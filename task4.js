const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    data.forEach(e => console.log(e.name))
    
   //console.log(data[0].name)
}).catch (e=>{
    console.log('error')
})