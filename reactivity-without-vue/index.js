const data = {
    message :  'hello',
    longMessage: 'world'
}

let handler = {
    
    set(target, key, value) {
        if ( key === 'message' )
            target.longMessage = value + 'world'
    }
}

let proxy = new Proxy(data, handler)

console.log(proxy.longMessage)

proxy.message = 'hello!!!'
console.log(proxy.longMessage)

proxy.message = 'new';
console.log(proxy.longMessage)