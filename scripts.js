const completeData = [
    { 
        id : 1,
        image : './images/image1.jpg',
        name : 'Stella',
        occupation : 'Web Designer',
        aboutSection : "Stella, a talented 25-year-old web designer, weaves digital dreams into reality with her creative flair and technical finesse, crafting captivating online experiences that leave a lasting impression."
    },
{
    id:2,
    image : './images/image2.jpg',
    name : 'Emilly',
    occupation : 'Developer Advocate',
    aboutSection : `I'm Emily, a passionate 23-year-old developer advocate, dedicated to bridging the gap between technology and its users.
`
},{
    id:3,
    image : `./images/image3.jpg`,
    name : 'Mike',
    occupation : 'Web 3 developer',
    aboutSection : `I'm Mike, a 28-year-old visionary web 3 developer, crafting decentralized digital experiences that redefine online interactions. I blend cutting-edge technology with creativity to shape the future of the web.
`
},{
    id:4,
    image : `./images/image4.png`,
    name : `Scott`,
    occupation : `Data Analyst`,
    aboutSection : `I'm Scott, a 30-year-old data analyst, proficient in extracting actionable insights from complex datasets, driving informed decisions through meticulous analysis.` 
}
]
const picture = document.querySelector('.image1');
const author = document.querySelector('.name-of-person');
const job = document.querySelector('.occupation-of-person');
const information = document.querySelector('.description-of-person');

let person = 0;

/* load initial item on the screen */
window.addEventListener('DOMContentLoaded',()=>{
    showItems(person);
})

/* interactivity of the nextbutton */
const nextButtonElem =  document.querySelector('.next-button');
nextButtonElem.addEventListener('click', ()=>{
    person++;
    
    
    if(person >= completeData.length){
        person = 0;
    }
    showItems(person);   
})
/* function to render stuff onto the screen */

function showItems(param){
    const item = completeData[param];
    picture.src = item.image
    author.textContent = item.name;
    job.textContent = item.occupation;
    information.textContent = item.aboutSection;

}

/* interactivity of the previousbutton */
const previousButtonElem = document.querySelector('.previous-button');
previousButtonElem.addEventListener('click',()=>{
    person--;
    if(person < 0){
        person = completeData.length -1;

    }
    showItems(person);
})

/* interactivity for the random button */
const randomButtonElem = document.querySelector('.surprise-button');
randomButtonElem.addEventListener('click',()=>{
    const anyIndex = Math.random()*completeData.length;

    console.log(Math.floor(anyIndex))
    showItems(Math.floor(anyIndex));
    
})