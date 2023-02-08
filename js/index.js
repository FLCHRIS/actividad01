const button = document.querySelector('.card-button');
const advice = document.querySelector('.card-advice');

button.addEventListener('click', async ()=>{
    
    try{
        document.querySelector('.card-title').classList.remove('animate__fadeInDown');
        advice.classList.remove('animate__zoomIn');
        let request = await fetch('https://api.adviceslip.com/advice');
        if(request.ok){

            let data = await request.json();
            document.querySelector('.card-title').classList.add('animate__fadeInDown');
            advice.classList.add('animate__zoomIn');

            document.getElementById('number').innerHTML = `#${data.slip.id}`;
            advice.innerHTML = `"${data.slip.advice}"`;
        }
    }catch(error){
        console.log(error);
    }
});