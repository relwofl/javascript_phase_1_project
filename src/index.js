const locationForm = document.getElementById("location_form")
const weatherInput = document.getElementById("location")
KEY = "**************"

locationForm.addEventListener('submit',(e) => {
    e.preventDefault()
 
zip_code = weatherInput.value || "10010"
console.log(zip_code)
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},us&appid=${KEY}&units=imperial`
    
fetch(BASE_URL)
    .then(res => res.json())
    .then(weather => {
        debugger
        // console.log(weather)
        let weatherARray = weather
        renderWeather(weather)
    })
    weatherInput.value = ''
})

function renderWeather(weather) {
    const displayWeather = document.getElementById("location_list")
    const liTag = document.createElement('li')
    let btn = document.createElement('button')
    let btn1 = document.createElement('button')

    btn.addEventListener('click', () => {
        liTag.remove()
    })

    btn1.addEventListener('click', () => { 
        const pTag3 = document.createElement('p')
        pTag3.innerText = weather.wind.speed + " MPH"
        if(liTag.childElementCount >=6){
            liTag.tagName.innerHTML = ''
        } else {
            liTag.appendChild(pTag3)
        }
        // liTag.appendChild(pTag3)
        console.log(pTag3)
    })
   
    btn.textContent = 'Remove'
    btn1.textContent = 'Add Wind'
    const pTag = document.createElement('p')
    pTag.innerText = weather.name

    const pTag1 = document.createElement('p')
    pTag1.innerText = weather.main.temp + " °F"

    const pTag2 = document.createElement('p')
    pTag2.innerText = weather.weather[0].description

    liTag.append(pTag, pTag1, pTag2, btn, btn1 )
    displayWeather.appendChild(liTag)
}


// add li button to replace li with forecast or add wind speed
