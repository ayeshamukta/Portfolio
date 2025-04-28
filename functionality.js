

// const workBtn = document.getElementById('workButton'); 
// const cvBtn = document.getElementById('cvButton'); 

// function viewWork() {
//     // window.location.href='#projects'
    
//     document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });

    
    
// }

// cvBtn.addEventListener('click',()=>
// {
//     cvBtn.classList.add('active');
//     workBtn.classList.remove('active')
// })
// workBtn.addEventListener('click',()=>
// {
//     cvBtn.classList.remove('active');
//     workBtn.classList.add('active')
// })


const navbars = document.querySelectorAll('header ul li a');

console.log(navbars);

navbars.forEach(link=>
{
    link.addEventListener('click',()=>
    {

        navbars.forEach(l=>l.classList.remove('nav-active'))


        link.classList.add('nav-active')
    })
})

