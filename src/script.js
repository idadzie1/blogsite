

const menulists = document.querySelectorAll('.list li')

menulists.forEach(listmenu=> { 
    listmenu.addEventListener('click', ()=>{
        menulists.forEach(item => item.classList.remove('active'))        
        listmenu.classList.add('active')
    })
        
})