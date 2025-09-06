let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log('ciclos--------------------------------')
console.log('for----------------------------')
for (let index=0;index<numeros.length;index++){
    const mod = numeros[index] % 2
    if (mod == 0){
        console.log(numeros[index],'par')
    }else{
        console.log(numeros[index],'impar')
    }
}
console.log('for in----------------------------')
for (let index in numeros){
    const mod = numeros[index] % 2
    if (mod == 0){
        console.log(numeros[index],'par')
    }else{
        console.log(numeros[index],'impar')
    }
}
console.log('for of----------------------------')
for (let numero of numeros){
    const mod = numero % 2
    if (mod == 0){
        console.log(numero,'par')
    }else{
        console.log(numero,'impar')
    }
}