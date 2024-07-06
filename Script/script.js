const formulario=document.querySelector('#cadastro')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
const nome=document.querySelector('#inputname').value 
alert(nome)
})