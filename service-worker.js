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
window.addEventListener("load",()=>{

if(!navigator.geolocation){

alert("Tu dispositivo no soporta GPS")

return

}

navigator.geolocation.getCurrentPosition(

(pos)=>{

const lat=pos.coords.latitude
const lon=pos.coords.longitude

document.getElementById("latitud").value=lat
document.getElementById("longitud").value=lon

console.log("GPS obtenido:",lat,lon)

},

(err)=>{

alert("No se pudo obtener GPS: "+err.message)

},

{
enableHighAccuracy:true,
timeout:15000,
maximumAge:0
}

)

})
