const getMonth = (callback)=>{
    setTimeout(()=>{
        let error = true
        let month = ['January', 'February', 'March', 'April', 'May',
                    'June', 'Jully', 'August', 'September', 'October', 
                    'November','December']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry data not found', []))
        }
    },000)
}

mapMonth=(n, month)=>{
    if (n==null){
            month.map(e=>{console.log(e)})
        }
        else{
            return console.log(n)
        }
}

getMonth(mapMonth)