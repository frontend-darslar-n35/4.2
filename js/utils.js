function sum(){
    let summ = 0
    for(let i=0; i < arguments.length; i++)summ+=arguments[i]
    return summ
}

function multiply(){
    let summ = 1
    for(let i=0; i < arguments.length; i++)summ*=arguments[i]
    return summ
}
