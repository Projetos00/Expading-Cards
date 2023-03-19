const paineis = document.querySelectorAll('.painel')

paineis.forEach((painel,index)=>{
    painel.addEventListener('click',()=>{
        limparClasse()
        painel.classList.add('ativo')
        console.log(index)
        switch(index){
            case 0:
                document.body.style.backgroundColor = '#5EC8F2'
                break
            case 1:
                document.body.style.backgroundColor = '#A66D03'
                break
            case 2: 
                document.body.style.backgroundColor = '#8AA6BF'
                break
            case 3:
                document.body.style.backgroundColor = '#594012'
                break
            case 4:
                document.body.style.backgroundColor = ' #F29057'
                break
            case 5:
                document.body.style.backgroundColor = ' #ACC3F2'
                break
            case 6:
                document.body.style.backgroundColor = ' #BF8417'
                break
            default:
                break
        }
    })
})

function limparClasse(){
    paineis.forEach(painel=>{
        painel.classList.remove('ativo')
    })
}