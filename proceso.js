

const dataHero = [];
let indexHero = 0;

document.addEventListener("DOMContentLoaded", getData)
next.addEventListener("click",next)
back.addEventListener("click",back)

async function getData(event) {
    const request = await fetch("")
    if (request.status == 200) {
        const data = await request.json()
        if(data.legth >0){
            const firstElement = data[0]
            data.forEach(element => {
                dataHero.push(element)
            });
            //Se colocan las variables html
        }
    }
}

function next(){
    if(indexHero < dataHero.length){
        indexHero++;
    }
    const searchHero = dataHero[indexHero];

}

function back(){
    if(indexHero > 0){
        indexHero--;
    }
    const searchHero = dataHero[indexHero];
}