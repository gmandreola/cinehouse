const call = () => console.log("hello")

function dizHello(callback : any) {
    callback ()
}

dizHello(call)
