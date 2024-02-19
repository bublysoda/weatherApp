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
    }
    catch(err){
        alert("Could not find a city matching the typed input.  Try to check your spelling, or input another city!")
    }
}




//API Key is fb76a252d96e4c9286f205151241302