const title = document.getElementById('principal-title')
title.textContent='Hello desde js'

const form = document.forms['sumarForm']
form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    const num1 = Number(form['num1'].value)
    const num2 = Number(form['num2'].value)
    const modal = document.getElementById('error-msg')
    if (num1>0 && num2>0){

        //alert(num1+num2)
        modal.classList.remove('show')
        realizarsuma(num1,num2)
        form.reset()
    }else{
        modal.classList.add('show')
    }
})

const realizarsuma = (num1, num2)=>{
    const result = num1 + num2

    const historial = document.getElementById('historial')

    const div= document.createElement('div')

    div.textContent = `${num1} + ${num2}`

    const strong = document.createElement('strong')
    strong.textContent = result

    div.appendChild(strong)
    historial.appendChild(div)

}