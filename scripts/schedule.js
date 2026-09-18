//import jsson data from sessions.mjs
import { sessions } from "../data/sessions.mjs";
//console.log(sessions);
const destination = document.querySelector('#schedule-here')

sessions.forEach(item => {
    //console.log(item)
    console.log(item.startTime)
    console.log(item.endTime)
    console.log(item.title)
    console.log(item.description)
    //console.log(item.featuredSpeaker.name)
    //console.log(item.featuredSpeaker.title)
    //console.log(item.featuredSpeaker.photo_url)

    const row = document.createElement('tr')

    //first collumn
    const time = document.createElement('td') 
    time.innerHTML = `<p class="time">${item.startTime} - ${item.endTime}</p>`

    //second collumn
    const topic = document.createElement('td')
    topic.innerHTML = `<p class="title"> ${item.title}</p> <p> ${item.description}</p>`

    //third collumn
    const speaker = document.createElement('td')
    if(item.featuredSpeaker === null){
        console.log("no speaker")
    } else{
        speaker.innerHTML = `<p class = "name"> ${item.featuredSpeaker}</p>
        <img src="images/${item.image}">
        <p class = "desc"> ${item.title}</p>`
    }

    row.appendChild(time);
    row.appendChild(topic);
    row.appendChild(speaker);
    destination.appendChild(row);
}
)
    
