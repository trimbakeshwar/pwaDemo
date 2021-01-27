console.warn("ws file")
let CacheData="apppwa";
this.addEventListener("install",(event)=>{
    event.waitUntill(caches.open(CacheData).then((cache)=>{
        cache.addAll([
            "/static/js/main.chunk.js",
            "/static/js/0.chunk.js",
            "/static/js/bundle.js",
            "/index.html",
           "/getall"
        ])
    })
    )
})
this.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp)
            {
                return resp
            }
        })
    )
})