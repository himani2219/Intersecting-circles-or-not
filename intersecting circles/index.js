const circleCord = []
document.addEventListener('click',(event)=>{
    let total = document.querySelectorAll('.circle') 
    if(total.length===2){
        total.forEach((circle)=>{
            document.body.removeChild(circle)
            circleCord.pop()
        })
    }
    const x = event.clientX;
    const y = event.clientY;
    console.log(circleCord);
    const radius = Math.floor(Math.random()*(150-10+1)+10)
    circleCord.push({x,y,radius});
    createCircle(x,y,radius)
    if(document.querySelectorAll('.circle').length===2){
        let {x:x1, y:y1, radius:r1} = circleCord[0]
        let {x:x2, y:y2, radius:r2} = circleCord[1]
        console.log(Math.pow((x2-x1),2))
        console.log(Math.pow((y2-y1),2))
        let distance = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
        console.log(`r1 - r2 ${r1-r2}`)
        console.log(`r1 + r2 ${r1+r2}`)
        console.log(`distance ${distance}`)
        if(distance<= r1+r2 && distance >= Math.abs(r1-r2)){
            console.log(`The circles are intersecting...`)
        }
        else{
            console.log(`The circles are not intersecting`)
        }
    }
    
})

function createCircle(x, y, radius){
    const circle = document.createElement('div');
    circle.classList.add('circle');
    let circlecss = circle.style
    circlecss.top = y + 'px'
    circlecss.left = x + 'px'
    circlecss.width = radius*2 + 'px'
    circlecss.height = radius*2 + 'px'
    document.body.appendChild(circle)
}