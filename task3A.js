
// const cekHariKerja = (day)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
//             let cek = dataDay.find((item)=>{
//                 return item === day
//             })
//             if (cek){
//                 resolve(cek)
//             }else{
//                 reject(new Error('Hari ini bukan hari kerja'))
//             }
//         },3000)
//     })
// }

function seleksiNilai(dataArray){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //let temp = 0
        // dataArray.forEach(myFunction)
        // function myFunction(item) {
        //     return(temp += item)
        // }
        let sum = 0;
        //const numbers = [65, 44, 12, 4];
        dataArray.forEach(myFunction);
        function myFunction(item) {
                return(sum += item);}
        let rataRata = sum/dataArray.length 
        console.log(sum)
        console.log(rataRata)
        // let cek = ((sum)>=kkm)
        const kkm = 76
            let cek = kkm<=rataRata
                
            
            //find((item)=>{
              //  return item === day
            //})
        if (cek){
            resolve(cek)
        }else{
            reject(new Error('belum memenuhi kkm'))}
        },3000)
    })
}
async function cekKkmLulus(){
    try{
        const nilai = await seleksiNilai
        console.log(`lulus kkm`)
    }catch{
        console.log(`belum memenuhi kkm`)
    }
}
//cekKkmLulus(50, [75, 80, 90, 88, 77, 80, 86])
cekKkmLulus([2, 25, 4, 14, 17, 30, 8])




// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   (sum += item);
// }
// console.log(sum)