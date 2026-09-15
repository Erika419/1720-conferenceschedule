import {schedule} from ".../data/schedule.mjs";
console.log(sessions);
const destination = document.querySelector('#schedule-here')

sessions.forEach(item=>{
    //console.log(item)
    console.log(item.startTime)
    console.log(item.endTime)
    console.log(item.title)
    console.log(item.description)
    //console.log(item.featuredSpeaker.name)
    //console.log(item.featuredSpeaker.title)
    //console.log(item.featuredSpeaker.photo_url)

    const row = document.createElement('tr')

    //create the first collumn
    const time = document.createElement('td')
    time.innerHTML=`<p class="time">${item.start_time}-${item.end_time}</p>`

    //create the second collumn
    const topic = document.createElement('td')
    topic.innerhtml = `<p class = "title">${item.title}</p> <p>${item.description}</p>`

    row.appendChild(time)
        row.appendChild(row)


    destination.appendChild(row)

})