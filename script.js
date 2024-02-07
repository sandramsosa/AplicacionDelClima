let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '22f75829bbb7d77d37844ed8738014a0'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', ()=> {
  const ciudad = document.getElementById('ciudadEntrada').value
  if(ciudad){
    fetchDatosClima(ciudad)
  }
})

function fetchDatosClima(ciudad){
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
  const divDatosClima = document.getElementById('datosClima')
  divDatosClima.innerHTML=''

  const ciudadNombre = data.name
  const paisNombre = data.sys.country
  const temperatura = data.main.temp
  const sensacion = data.main.feels_like
  const humedad = data.main.humidity
  const icono = data.weather[0].icon

  const ciudadTitulo = document.createElement('h2')
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

  const temperaturaInfo = document.createElement('p')
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

  const sensacionInfo = document.createElement('p')
  sensacionInfo.textContent = `La sensacion termica es: ${Math.floor(sensacion-difKelvin)}°C`

  const humedadInfo = document.createElement('p')
  humedadInfo.textContent = `La humedad es: ${humedad}%`

  const iconoInfo = document.createElement('img')
  iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`
  
  divDatosClima.appendChild(ciudadTitulo)
  divDatosClima.appendChild(temperaturaInfo)
  divDatosClima.appendChild(sensacionInfo)
  divDatosClima.appendChild(humedadInfo)
  divDatosClima.appendChild(iconoInfo)
  
}



