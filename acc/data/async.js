
async function fetchs(url){
    return fetch(url)
    .then(res=>res.json())
    .then(result =>{
        let Datae = result.data
        // console.log(Datae);
        return Datae
    })    
}
export default fetchs
// export async function request (url) {
//     return fetch(url).then(res => {
//     return res.json()
//     }).then(data => data)
// }