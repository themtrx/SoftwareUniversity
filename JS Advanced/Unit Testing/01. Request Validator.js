function solve (obj) {

    let template = ['method', 'uri', 'version', 'message'];

    template.forEach((key) => {
        if(!Object.keys(obj).includes(key)){
            key = key.substring(0,1).toUpperCase() + key.substring(1);
            if(key.length ===3) {
                key = key.toUpperCase();
            }
            throw new TypeError(`Invalid request header: Invalid ${key}`)
        }
    })
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    if(!methods.includes(obj.method)){
        throw new TypeError('Invalid request header: Invalid Method')
    }
    
    if(obj.uri === '') {
        throw new TypeError(`Invalid request header: Invalid URI`)
    }else if (obj.uri !=='*'){
        let rgx = /^[\w.]+$/gi;

        let matching = rgx.test(obj.uri);

        if(!matching) {
            throw new TypeError(`Invalid request header: Invalid URI`)
        }
    }

    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if(!versions.includes(obj.version)) {
        throw new TypeError(`Invalid request header: Invalid Version`)
    }

    let msgRgx = /^[^\<\>\\\&\'\"]*$/gi;

    if(!msgRgx.test(obj.message)) {
        throw new TypeError(`Invalid request header: Invalid Message`) 
    }

    return obj;
    
}

solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '&copy;'
  })