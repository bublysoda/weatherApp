async function citySearch(){try{
    const searchBox = document.getElementById("search").value
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fb76a252d96e4c9286f205151241302&q=${searchBox}&aqi=no`, {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData)

    //Fahrenheit Current
    let varTempF = weatherData.current.temp_f
    const grabF = document.getElementById("currentTempF")
    grabF.textContent = `${varTempF}° Fahrenheit`
    //Celsius Current
    let varTempC = weatherData.current.temp_c
    const grabC = document.getElementById("currentTempC")
    grabC.textContent = `${varTempC}° Celsius`
    //Feels Like F 
    let varFeelF = weatherData.current.feelslike_f
    const grabFeelF = document.getElementById("feelsLikeF")
    grabFeelF.textContent = `Feels like ${varFeelF}° Fahrenheit`
    //Feels like C
    let varFeelC = weatherData.current.feelslike_c
    const grabFeelC = document.getElementById("feelslikeC")
    grabFeelC.textContent = `Feels like ${varFeelC}° Celsius`
    displayTempsCSS() //adds CSS, hooray!

    //Wind MPH
    let varWindUS = weatherData.current.gust_mph 
    const grabMPH = document.getElementById("windUS")
    grabMPH.textContent = `${varWindUS} miles per hour winds`
    //Wind KPH
    let varWindEU = weatherData.current.wind_kph
    const grabKPH = document.getElementById("windEU")
    grabKPH.textContent = `${varWindEU} kilometers per hour winds`
    //Wind Cardinal Direction
    let varWindDir = weatherData.current.wind_dir
    const grabDir = document.getElementById("windDIR")
    grabDir.textContent = `Wind is coming from the ${varWindDir}`
    //Rain US
    let varRainUS = weatherData.current.precip_in
    const grabRainUS = document.getElementById("rainIN")
    grabRainUS.textContent = `${varRainUS} inches of precipitation`
    //Rain EU
    let varRainEU = weatherData.current.precip_mm
    const grabRainEU = document.getElementById("rainMM")
    grabRainEU.textContent = `${varRainEU} millimeters of precipitation`
    windAndRainCSS() //adds CSS, hooray!

    //Country
    let varCountry = weatherData.location.country
    const grabCountry = document.getElementById("country")
    grabCountry.textContent = `${varCountry}`
    //Region/state
    let varState = weatherData.location.region
    const grabState = document.getElementById("region")
    grabState.textContent = `${varState}`
    //City
    let varCity = weatherData.location.name
    const grabCity = document.getElementById("city")
    grabCity.textContent = `${varCity}`
    //Timezone
    let varTimezone = weatherData.location.tz_id
    const grabTZ = document.getElementById("time")
    grabTZ.textContent = `The timezone is ${varTimezone}`
    locationCSS() //adds CSS, hooray!

    }

    catch(err){
        alert("Could not find a city matching the typed input.  Try to check your spelling, or input another city!")
    }
}

//Adds CSS on click to prevent weird formatting when text is added to existing CSS
function displayTempsCSS(){
    const boxOne = document.querySelector('.displayTemps')
    boxOne.setAttribute('style', 'border-style: solid;')
}
function windAndRainCSS(){
    const boxThree = document.querySelector('.windAndRain')
    boxThree.setAttribute('style', 'border-style: solid;')
}
function locationCSS(){
    const boxThree = document.querySelector('.locationInfo')
    boxThree.setAttribute('style', 'border-style: solid;')
}
//API Key is fb76a252d96e4c9286f205151241302