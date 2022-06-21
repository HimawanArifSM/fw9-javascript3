const cekHariKerja = (day)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if (cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

//then catch 
cekHariKerja('minggu').then((param1)=>console.log(`hari ${param1} adalah hari kerja`))
.catch(()=>console.log('Hari ini bukan hari kerja'))
//digunakan untuk menjalankan promise kita memerlukan then catch untuk chaining.
//then akan dijalankan ketika callback yang berjalan di resolve,
//sedangkan catch akan berjalan jika callback yang dijalankan reject
//then catch akan selalu ada jika ada sebuah data bertipe promise.

//try catch
async function realCekHariKerja(){
    try{
        const hari = await cekHariKerja
        console.log(`hari ini adalah hari kerja`)
    }catch{
        console.log(`hari ini bukan hari kerja`)
    }
}
realCekHariKerja('senin')

//digunakan untuk error handling yang terjadi pada async/await yang
//berada pada data bertipe promise
//try biasa berisikan kode javascript yang mungkin terjadi error
//catch berfungsi untuk menangkap error yang terjadi pada blok try,
//jika error tidak terjadi maka blok catch tidak akan dijalankan