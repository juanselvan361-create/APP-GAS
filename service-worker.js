function convertirFotoBase64(file){

return new Promise((resolve,reject)=>{

const reader=new FileReader()

reader.readAsDataURL(file)

reader.onload=()=>resolve(reader.result)

reader.onerror=error=>reject(error)

})

}
const CACHE_NAME = "eventos-app-v1"

const urlsToCache = [
"/",
"/index.html"
]

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {
return cache.addAll(urlsToCache)
})

)

})


self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)
.then(response => {

return response || fetch(event.request)

})

)

})
