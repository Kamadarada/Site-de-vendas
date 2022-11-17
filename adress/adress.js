const card_cartao = document.querySelector('#card_cartao')
const card_pix = document.querySelector('#card_pix')
const btn_cor = document.querySelector('.btn_cor')


document.querySelector('#card_cartao')
    .addEventListener('click',() =>{
        btn_cor.style.left = "0px"
        
}  )

document.querySelector('#card_pix')
    .addEventListener('click', () => {
        btn_cor.style.left = "105px"
        
            
        
       
    })


    const formcartao = document.getElementById('cartao')
    const formpix = document.getElementById('pix')

    formcartao.style.display = null
    formpix.style.display = 'none'

    function activeTab(tabname){
        if(tabname==='cartao'){
            formpix.style.display = 'none'
            formcartao.style.display = null
        }
        else if(tabname==='pix'){
            formcartao.style.display = 'none'
            formpix.style.display = null
        }
    }

