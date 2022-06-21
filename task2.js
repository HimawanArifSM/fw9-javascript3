const getMonth = (callback)=>{
    setTimeout(()=>{
        let error = false
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

function showMonth(mth){
    getMonth(()=>{
        console.log(month.map())
    })
}
getMonth('January')