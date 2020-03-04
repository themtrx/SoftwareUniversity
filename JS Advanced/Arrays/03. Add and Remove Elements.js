function solve (commands) {
    const n = [];
    let numHolder =0;
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        
        if(command === 'add') {
            n.push(numHolder+1);
            numHolder = n[n.length-1];
        }else  {
            n.pop();
            numHolder++
        }
    }

    if(n.length>0) {
        console.log(n.join('\n'));
    }else {
        console.log('Empty');
    }
}

solve(['remove', 
'remove', 
'remove']);