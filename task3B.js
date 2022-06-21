

const cekHariKerja = (names)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const namePassed= ["Abigail", "Alexandra", "Alison",
            "Amanda", "Angela", "Bella",
            "Carol", "Caroline", "Carolyn",
            "Deirdre", "Diana", "Elizabeth",
            "Ella", "faith", "Olivia", "penelope"]
            let cek = namePassed.find((item)=>{
                return item === names
            })
            if (cek){
                resolve(cek)
            }else{
                reject(new Error('anda tidak terdaftar'))
            }
        },3000)
    })
}
async function realCekNama(){
    try{
        const nameA = await cekHariKerja
        console.log(`anda terdaftar`)
    }catch{
        console.log(`anda tidak terdaftar`)
    }
}
realCekNama('Ella')