const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const location = e.target["pick-a-location"].value;
    console.log(location);
    const url = `https://wttr.in/${location}?format=j1`;

    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        const currentPlace = document.querySelector(".weather-of-current-place");
        currentPlace.textContent = "";
        currentPlace.innerHTML = `<div id="display-location">
                            <h2>${location}</h2>
                        </div>
                        <div id="display-text">
                            <div id="display-area">Area: ${data.nearest_area[0].areaName[0].value}</div>
                            <div id="display-region">Region: ${data.nearest_area[0].region[0].value}</div>
                            <div id="display-country">Country: ${data.nearest_area[0].country[0].value}</div>
                            <div id="display-currently">Currently: ${data.current_condition[0].FeelsLikeF}F degrees </div>
                        </div>
                        `;
              const today = document.querySelector("#today");
              const avgTemp = data.weather[0].avgtempF;
              const min = data.weather[0].mintempF;
              const max=  data.weather[0].maxtempF;
            //   today.textContent = "";
              today.innerHTML = `<h3>Today<h3>
              <div id="Average-Temp">AverageTemp:${avgTemp} F degrees</div>
              <div id=" Min-Temp">MinTemp:${min} F degrees </div>
              <div id="Max-Temp">MaxTemp:${max} F degrees </div>
              `;
              const tomorrow = document.querySelector("#tomorrow");
              const avgTemp1 = data.weather[1].avgtempF;
              const min1 = data.weather[1].mintempF;
              const max1 =  data.weather[1].maxtempF;
            //   tomorrow.textContent = "";
              tomorrow.innerHTML = `<h3>Tomorrow<h3>
              <div id="Average-Temp">AverageTemp:${avgTemp1} F degrees</div>
              <div id=" Min-Temp">MinTemp:${min1} F degrees </div>
              <div id="Max-Temp">MaxTemp:${max1} F degrees </div>
              `;
              const dayAfter = document.querySelector("#dayAfter");
              const avgTemp2 = data.weather[2].avgtempF;
              const min2 = data.weather[2].mintempF;
              const max2 =  data.weather[2].maxtempF;
            //   tomorrow.textContent = "";
              dayAfter.innerHTML = `<h3>Day After Tomorrow<h3>
              <div id="Average-Temp">AverageTemp:${avgTemp2} F degrees</div>
              <div id=" Min-Temp">MinTemp:${min2} F degrees </div>
              <div id="Max-Temp">MaxTemp:${max2} F degrees </div>
              `;
              const showHistory =document.querySelector(".history");
              showHistory.innerHTML +=`<a id="display-area"href="#">${location}</a>
              <div id="display-currently"> ${data.current_condition[0].FeelsLikeF}F </div>
              `
              showHistory.addEventListener("click", (e)=>{
                  e.preventDefault();
                  const location = e.target.textContent;
                  console.log(location);
                  const url = `https://wttr.in/${location}?format=j1`;
              
                  fetch(url)
                  .then((response)=>{
                      return response.json();
                  })
                  .then((data) =>{
                    console.log(data);
                    const currentPlace = document.querySelector(".weather-of-current-place");
                    currentPlace.textContent = "";
                    currentPlace.innerHTML = `<div id="display-location">
                                        <h2>${location}</h2>
                                    </div>
                                    <div id="display-text">
                                        <div id="display-area">Area: ${data.nearest_area[0].areaName[0].value}</div>
                                        <div id="display-region">Region: ${data.nearest_area[0].region[0].value}</div>
                                        <div id="display-country">Country: ${data.nearest_area[0].country[0].value}</div>
                                        <div id="display-currently">Currently: ${data.current_condition[0].FeelsLikeF}F degrees </div>
                                    </div>
                                    `;
                          const today = document.querySelector("#today");
                          const avgTemp = data.weather[0].avgtempF;
                          const min = data.weather[0].mintempF;
                          const max=  data.weather[0].maxtempF;
                        //   today.textContent = "";
                          today.innerHTML = `<h3>Today<h3>
                          <div id="Average-Temp">AverageTemp:${avgTemp} F degrees</div>
                          <div id=" Min-Temp">MinTemp:${min} F degrees </div>
                          <div id="Max-Temp">MaxTemp:${max} F degrees </div>
                          `;
                          const tomorrow = document.querySelector("#tomorrow");
                          const avgTemp1 = data.weather[1].avgtempF;
                          const min1 = data.weather[1].mintempF;
                          const max1 =  data.weather[1].maxtempF;
                        //   tomorrow.textContent = "";
                          tomorrow.innerHTML = `<h3>Tomorrow<h3>
                          <div id="Average-Temp">AverageTemp:${avgTemp1} F degrees</div>
                          <div id=" Min-Temp">MinTemp:${min1} F degrees </div>
                          <div id="Max-Temp">MaxTemp:${max1} F degrees </div>
                          `;
                          const dayAfter = document.querySelector("#dayAfter");
                          const avgTemp2 = data.weather[2].avgtempF;
                          const min2 = data.weather[2].mintempF;
                          const max2 =  data.weather[2].maxtempF;
                        //   tomorrow.textContent = "";
                          dayAfter.innerHTML = `<h3>Day After Tomorrow<h3>
                          <div id="Average-Temp">AverageTemp:${avgTemp2} F degrees</div>
                          <div id=" Min-Temp">MinTemp:${min2} F degrees </div>
                          <div id="Max-Temp">MaxTemp:${max2} F degrees </div>
                          `;
              
                  })


     })

  
})

})


