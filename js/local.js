//Variables
const form = document.forms['multiplicarform']
const showLog = document.getElementById('showLog')
const rst = document.getElementById('resultado')
localStorage.setItem('nameAPP', 'Ejemplo de almacenamiento')
console.log(localStorage.getItem('nameAPP'))
sessionStorage.setItem('sesion','Prueba')


//Metodos
const multiplicarform = (factor1, factor2)=>{
    return factor1*factor2
}
const showResult = (num)=>{
    rst.textContent= `El resultado es ${num}`
}

const saveLog = (data)=>{
    const log = {
        fecha: new Date(),
        operacion: data
    }
    const num = localStorage.length
    const key = `operacion_${num}`
    localStorage.setItem(key,JSON.stringify(log))
}
const createtable = ()=>{document.createElement('table')}

//Eventos
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const factorA = form['factor1'].value
    const factorB = form['factor2'].value
    const res =multiplicarform(Number(factorA), Number(factorB))
    showResult(res)
    const data ={
        factorA,factorB,rst: res
    }
    saveLog(data)
    form.reset()
})

showLog.addEventListener('click', (generatetable)=>{
    generatetable.preventDefault()
    
})