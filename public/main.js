let latitude = 42.35
let longitude = -71.07
let mainDiv = document.getElementById('main');

fetch(`/api/v1/forecast/${latitude},${longitude}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(json => {
    mainDiv.innerHTML += `${json.currently.summary}. `;
    mainDiv.innerHTML += ` The temperature is ${json.currently.temperature}.`;
    mainDiv.innerHTML += `<canvas id="skycon" width="128" height="128"></canvas>`;
    let skycon = new Skycons({"color": "purple"});
    skycon.add(document.getElementById("skycon"), json.currently.icon);
    skycon.play();
  })
  .catch((error) => {
    console.error(`Error in fetch: ${error.message}`);
  })
