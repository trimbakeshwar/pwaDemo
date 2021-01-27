export default function swdev(){
    let swurl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swurl).then((response)=>{
        console.warn("response",response)
    })
}