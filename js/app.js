// API gratuita: Open-Meteo (https://open-meteo.com) — no requiere clave ni registro.
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";
const REQUEST_TIMEOUT_MS = 10000;
const FORECAST_DAYS = 5;

const COUNTRIES = [
  {
    name: "México",
    // Los 32 estados, cada uno con su capital (y otras ciudades importantes).
    states: [
      {
        name: "Aguascalientes",
        cities: [
          { name: "Aguascalientes", latitude: 21.8818, longitude: -102.2916 }
        ]
      },
      {
        name: "Baja California",
        cities: [
          { name: "Mexicali", latitude: 32.6245, longitude: -115.4523 },
          { name: "Tijuana", latitude: 32.5149, longitude: -117.0382 },
          { name: "Ensenada", latitude: 31.8667, longitude: -116.5964 }
        ]
      },
      {
        name: "Baja California Sur",
        cities: [
          { name: "La Paz", latitude: 24.1426, longitude: -110.3128 },
          { name: "Los Cabos", latitude: 22.8905, longitude: -109.9167 }
        ]
      },
      {
        name: "Campeche",
        cities: [
          { name: "Campeche", latitude: 19.8301, longitude: -90.5349 },
          { name: "Ciudad del Carmen", latitude: 18.6456, longitude: -91.829 }
        ]
      },
      {
        name: "Chiapas",
        cities: [
          { name: "Tuxtla Gutiérrez", latitude: 16.7516, longitude: -93.1029 },
          { name: "San Cristóbal de las Casas", latitude: 16.737, longitude: -92.6376 },
          { name: "Tapachula", latitude: 14.9039, longitude: -92.2575 }
        ]
      },
      {
        name: "Chihuahua",
        cities: [
          { name: "Chihuahua", latitude: 28.632, longitude: -106.0691 },
          { name: "Ciudad Juárez", latitude: 31.6904, longitude: -106.4245 }
        ]
      },
      {
        name: "Ciudad de México",
        cities: [
          { name: "Ciudad de México", latitude: 19.4326, longitude: -99.1332 }
        ]
      },
      {
        name: "Coahuila",
        cities: [
          { name: "Saltillo", latitude: 25.4232, longitude: -101.0053 },
          { name: "Torreón", latitude: 25.5428, longitude: -103.4068 }
        ]
      },
      {
        name: "Colima",
        cities: [
          { name: "Colima", latitude: 19.2433, longitude: -103.725 },
          { name: "Manzanillo", latitude: 19.1138, longitude: -104.3385 }
        ]
      },
      {
        name: "Durango",
        cities: [
          { name: "Durango", latitude: 24.0277, longitude: -104.6532 }
        ]
      },
      {
        name: "Estado de México",
        cities: [
          { name: "Toluca", latitude: 19.2826, longitude: -99.6557 },
          { name: "Ecatepec", latitude: 19.6018, longitude: -99.0507 }
        ]
      },
      {
        name: "Guanajuato",
        cities: [
          { name: "Guanajuato", latitude: 21.019, longitude: -101.2574 },
          { name: "León", latitude: 21.125, longitude: -101.686 },
          { name: "San Miguel de Allende", latitude: 20.9153, longitude: -100.7439 }
        ]
      },
      {
        name: "Guerrero",
        cities: [
          { name: "Chilpancingo", latitude: 17.5515, longitude: -99.5006 },
          { name: "Acapulco", latitude: 16.8531, longitude: -99.8237 }
        ]
      },
      {
        name: "Hidalgo",
        cities: [
          { name: "Pachuca", latitude: 20.1011, longitude: -98.7591 }
        ]
      },
      {
        name: "Jalisco",
        cities: [
          { name: "Guadalajara", latitude: 20.6597, longitude: -103.3496 },
          { name: "Puerto Vallarta", latitude: 20.6534, longitude: -105.2253 }
        ]
      },
      {
        name: "Michoacán",
        cities: [
          { name: "Morelia", latitude: 19.706, longitude: -101.195 },
          { name: "Uruapan", latitude: 19.4136, longitude: -102.0624 },
          { name: "Pátzcuaro", latitude: 19.5164, longitude: -101.6097 }
        ]
      },
      {
        name: "Morelos",
        cities: [
          { name: "Cuernavaca", latitude: 18.9242, longitude: -99.2216 }
        ]
      },
      {
        name: "Nayarit",
        cities: [
          { name: "Tepic", latitude: 21.5042, longitude: -104.8946 }
        ]
      },
      {
        name: "Nuevo León",
        cities: [
          { name: "Monterrey", latitude: 25.6866, longitude: -100.3161 }
        ]
      },
      {
        name: "Oaxaca",
        cities: [
          { name: "Oaxaca de Juárez", latitude: 17.0732, longitude: -96.7266 },
          { name: "Puerto Escondido", latitude: 15.872, longitude: -97.0767 }
        ]
      },
      {
        name: "Puebla",
        cities: [
          { name: "Puebla", latitude: 19.0414, longitude: -98.2063 }
        ]
      },
      {
        name: "Querétaro",
        cities: [
          { name: "Querétaro", latitude: 20.5888, longitude: -100.3899 }
        ]
      },
      {
        name: "Quintana Roo",
        cities: [
          { name: "Chetumal", latitude: 18.5001, longitude: -88.2961 },
          { name: "Cancún", latitude: 21.1619, longitude: -86.8515 },
          { name: "Playa del Carmen", latitude: 20.6296, longitude: -87.0739 }
        ]
      },
      {
        name: "San Luis Potosí",
        cities: [
          { name: "San Luis Potosí", latitude: 22.1565, longitude: -100.9855 }
        ]
      },
      {
        name: "Sinaloa",
        cities: [
          { name: "Culiacán", latitude: 24.8091, longitude: -107.394 },
          { name: "Mazatlán", latitude: 23.2494, longitude: -106.4111 }
        ]
      },
      {
        name: "Sonora",
        cities: [
          { name: "Hermosillo", latitude: 29.0729, longitude: -110.9559 },
          { name: "Ciudad Obregón", latitude: 27.4828, longitude: -109.9304 }
        ]
      },
      {
        name: "Tabasco",
        cities: [
          { name: "Villahermosa", latitude: 17.9892, longitude: -92.9475 }
        ]
      },
      {
        name: "Tamaulipas",
        cities: [
          { name: "Ciudad Victoria", latitude: 23.7369, longitude: -99.1411 },
          { name: "Tampico", latitude: 22.2331, longitude: -97.8611 },
          { name: "Reynosa", latitude: 26.0508, longitude: -98.2979 }
        ]
      },
      {
        name: "Tlaxcala",
        cities: [
          { name: "Tlaxcala", latitude: 19.3139, longitude: -98.2404 }
        ]
      },
      {
        name: "Veracruz",
        cities: [
          { name: "Xalapa", latitude: 19.5438, longitude: -96.9102 },
          { name: "Veracruz", latitude: 19.1738, longitude: -96.1342 }
        ]
      },
      {
        name: "Yucatán",
        cities: [
          { name: "Mérida", latitude: 20.9674, longitude: -89.5926 }
        ]
      },
      {
        name: "Zacatecas",
        cities: [
          { name: "Zacatecas", latitude: 22.7709, longitude: -102.5832 }
        ]
      }
    ]
  },
  {
    name: "Argentina",
    cities: [
      { name: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
      { name: "Córdoba", latitude: -31.4201, longitude: -64.1888 },
      { name: "Mendoza", latitude: -32.8895, longitude: -68.8458 },
      { name: "Ushuaia", latitude: -54.8019, longitude: -68.303 }
    ]
  },
  {
    name: "Chile",
    cities: [
      { name: "Santiago", latitude: -33.4489, longitude: -70.6693 },
      { name: "Valparaíso", latitude: -33.0472, longitude: -71.6127 },
      { name: "Antofagasta", latitude: -23.6509, longitude: -70.3975 }
    ]
  },
  {
    name: "Colombia",
    cities: [
      { name: "Bogotá", latitude: 4.711, longitude: -74.0721 },
      { name: "Medellín", latitude: 6.2442, longitude: -75.5812 },
      { name: "Cartagena", latitude: 10.391, longitude: -75.4794 },
      { name: "Cali", latitude: 3.4516, longitude: -76.532 }
    ]
  },
  {
    name: "España",
    cities: [
      { name: "Madrid", latitude: 40.4168, longitude: -3.7038 },
      { name: "Barcelona", latitude: 41.3874, longitude: 2.1686 },
      { name: "Sevilla", latitude: 37.3891, longitude: -5.9845 },
      { name: "Valencia", latitude: 39.4699, longitude: -0.3763 }
    ]
  },
  {
    name: "Estados Unidos",
    cities: [
      { name: "Nueva York", latitude: 40.7128, longitude: -74.006 },
      { name: "Los Ángeles", latitude: 34.0522, longitude: -118.2437 },
      { name: "Chicago", latitude: 41.8781, longitude: -87.6298 },
      { name: "Miami", latitude: 25.7617, longitude: -80.1918 }
    ]
  },
  {
    name: "Perú",
    cities: [
      { name: "Lima", latitude: -12.0464, longitude: -77.0428 },
      { name: "Cusco", latitude: -13.532, longitude: -71.9675 },
      { name: "Arequipa", latitude: -16.409, longitude: -71.5375 }
    ]
  },
  {
    name: "Francia",
    cities: [
      { name: "París", latitude: 48.8566, longitude: 2.3522 },
      { name: "Marsella", latitude: 43.2965, longitude: 5.3698 },
      { name: "Lyon", latitude: 45.764, longitude: 4.8357 }
    ]
  },
  {
    name: "Japón",
    cities: [
      { name: "Tokio", latitude: 35.6762, longitude: 139.6503 },
      { name: "Osaka", latitude: 34.6937, longitude: 135.5023 },
      { name: "Sapporo", latitude: 43.0618, longitude: 141.3545 }
    ]
  },
  {
    name: "Reino Unido",
    cities: [
      { name: "Londres", latitude: 51.5074, longitude: -0.1278 },
      { name: "Edimburgo", latitude: 55.9533, longitude: -3.1883 },
      { name: "Mánchester", latitude: 53.4808, longitude: -2.2426 }
    ]
  }
];

const DEFAULT_COUNTRY = "México";
const DEFAULT_CITY = "Michoacán|Morelia";

// Códigos meteorológicos WMO que devuelve Open-Meteo.
const WEATHER_CODES = {
  0: { text: "Despejado", icon: "clear" },
  1: { text: "Mayormente despejado", icon: "clear" },
  2: { text: "Parcialmente nublado", icon: "partly" },
  3: { text: "Nublado", icon: "cloud" },
  45: { text: "Niebla", icon: "fog" },
  48: { text: "Niebla con escarcha", icon: "fog" },
  51: { text: "Llovizna ligera", icon: "rain" },
  53: { text: "Llovizna", icon: "rain" },
  55: { text: "Llovizna intensa", icon: "rain" },
  56: { text: "Llovizna helada", icon: "rain" },
  57: { text: "Llovizna helada intensa", icon: "rain" },
  61: { text: "Lluvia ligera", icon: "rain" },
  63: { text: "Lluvia", icon: "rain" },
  65: { text: "Lluvia intensa", icon: "rain" },
  66: { text: "Lluvia helada", icon: "rain" },
  67: { text: "Lluvia helada intensa", icon: "rain" },
  71: { text: "Nevada ligera", icon: "snow" },
  73: { text: "Nevada", icon: "snow" },
  75: { text: "Nevada intensa", icon: "snow" },
  77: { text: "Granos de nieve", icon: "snow" },
  80: { text: "Chubascos ligeros", icon: "rain" },
  81: { text: "Chubascos", icon: "rain" },
  82: { text: "Chubascos fuertes", icon: "rain" },
  85: { text: "Chubascos de nieve", icon: "snow" },
  86: { text: "Chubascos de nieve fuertes", icon: "snow" },
  95: { text: "Tormenta eléctrica", icon: "storm" },
  96: { text: "Tormenta con granizo", icon: "storm" },
  99: { text: "Tormenta con granizo fuerte", icon: "storm" }
};

const CLOUD_PATH = "M19 46h28a10 10 0 0 0 1-20 15 15 0 0 0-28-3 12 12 0 0 0-1 23z";

const ICONS = {
  sun: `
    <circle cx="32" cy="32" r="11" fill="#ffd60a"/>
    <g stroke="#ffd60a" stroke-width="3" stroke-linecap="round">
      <path d="M32 8v6M32 50v6M8 32h6M50 32h6M15 15l4 4M45 45l4 4M15 49l4-4M45 19l4-4"/>
    </g>`,
  moon: `<path d="M40 12a20 20 0 1 0 12 30A16 16 0 0 1 40 12z" fill="#f5f5f7"/>`,
  cloud: `<path d="${CLOUD_PATH}" fill="#b0b0b5"/>`,
  partlyDay: `
    <circle cx="24" cy="22" r="9" fill="#ffd60a"/>
    <g stroke="#ffd60a" stroke-width="2.5" stroke-linecap="round">
      <path d="M24 6v4M8 22h4M12.5 10.5l3 3M35.5 10.5l-3 3"/>
    </g>
    <path d="${CLOUD_PATH}" fill="#b0b0b5" transform="translate(4 4)"/>`,
  partlyNight: `
    <path d="M28 8a14 14 0 1 0 8 21A11 11 0 0 1 28 8z" fill="#f5f5f7"/>
    <path d="${CLOUD_PATH}" fill="#b0b0b5" transform="translate(4 4)"/>`,
  fog: `
    <g stroke="#b0b0b5" stroke-width="4" stroke-linecap="round">
      <path d="M12 24h40M8 34h40M16 44h36"/>
    </g>`,
  rain: `
    <path d="${CLOUD_PATH}" fill="#b0b0b5" transform="translate(0 -8)"/>
    <g stroke="#4da3ff" stroke-width="3" stroke-linecap="round">
      <path d="M22 46l-3 8M32 46l-3 8M42 46l-3 8"/>
    </g>`,
  snow: `
    <path d="${CLOUD_PATH}" fill="#b0b0b5" transform="translate(0 -8)"/>
    <g fill="#f5f5f7">
      <circle cx="21" cy="48" r="2.5"/><circle cx="32" cy="52" r="2.5"/><circle cx="43" cy="48" r="2.5"/>
    </g>`,
  storm: `
    <path d="${CLOUD_PATH}" fill="#b0b0b5" transform="translate(0 -8)"/>
    <path d="M34 40l-8 12h6l-3 9 10-13h-6l3-8z" fill="#ffd60a"/>`
};

const countrySelect = document.getElementById("country-select");
const citySelect = document.getElementById("city-select");
const searchForm = document.getElementById("search-form");
const searchButton = document.getElementById("search-button");
const statusMessage = document.getElementById("status-message");
const currentWeatherCard = document.getElementById("current-weather");
const weatherStats = document.getElementById("weather-stats");
const forecastEmpty = document.getElementById("forecast-empty");
const forecastList = document.getElementById("forecast-list");

// ===== Selectores =====

function fillCountrySelect() {
  COUNTRIES.forEach((country) => {
    countrySelect.add(new Option(country.name, country.name));
  });
  countrySelect.value = DEFAULT_COUNTRY;
}

function fillCitySelect(countryName) {
  const country = findCountry(countryName);
  citySelect.innerHTML = "";

  if (country.states) {
    country.states.forEach((state) => {
      const stateGroup = document.createElement("optgroup");
      stateGroup.label = state.name;
      state.cities.forEach((city) => {
        stateGroup.append(new Option(city.name, createCityValue(state.name, city.name)));
      });
      citySelect.append(stateGroup);
    });
    return;
  }

  country.cities.forEach((city) => {
    citySelect.add(new Option(city.name, createCityValue("", city.name)));
  });
}

// El valor de cada opción incluye el estado para distinguir ciudades con el mismo nombre.
function createCityValue(stateName, cityName) {
  return `${stateName}|${cityName}`;
}

function findCountry(countryName) {
  return COUNTRIES.find((country) => country.name === countryName);
}

function getCountryCities(country) {
  if (!country.states) {
    return country.cities.map((city) => ({ ...city, state: "" }));
  }
  return country.states.flatMap((state) =>
    state.cities.map((city) => ({ ...city, state: state.name }))
  );
}

function findCity(countryName, cityValue) {
  const [stateName, cityName] = cityValue.split("|");
  return getCountryCities(findCountry(countryName)).find(
    (city) => city.state === stateName && city.name === cityName
  );
}

function formatLocation(city, countryName) {
  const parts = [city.name];
  if (city.state && city.state !== city.name) parts.push(city.state);
  parts.push(countryName);
  return parts.join(", ");
}

// ===== API =====

function buildWeatherUrl(city) {
  const params = new URLSearchParams({
    latitude: city.latitude,
    longitude: city.longitude,
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "auto",
    forecast_days: FORECAST_DAYS
  });
  return `${WEATHER_API_URL}?${params}`;
}

async function fetchWeather(city) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(buildWeatherUrl(city), { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`El servicio respondió con el código ${response.status}.`);
    }
    const data = await response.json();
    if (!data.current || !data.daily) {
      throw new Error("La respuesta no contiene datos del clima para esta ciudad.");
    }
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("El servicio tardó demasiado en responder.");
    }
    if (error instanceof TypeError) {
      throw new Error("No hay conexión con el servicio del clima. Revisa tu conexión a internet.");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

// ===== Interfaz =====

function getWeatherInfo(code) {
  return WEATHER_CODES[code] || { text: "Condición desconocida", icon: "cloud" };
}

function getIconSvg(iconType, isDay) {
  const iconNames = {
    clear: isDay ? "sun" : "moon",
    partly: isDay ? "partlyDay" : "partlyNight"
  };
  const iconName = iconNames[iconType] || iconType;
  return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">${ICONS[iconName]}</svg>`;
}

function formatTemperature(value) {
  return `${Math.round(value)}°`;
}

function formatDayName(dateText, index) {
  if (index === 0) return "Hoy";
  if (index === 1) return "Mañana";
  const date = new Date(`${dateText}T12:00:00`);
  return date.toLocaleDateString("es-MX", { weekday: "long" });
}

function formatLocalTime(dateTimeText) {
  const [, time] = dateTimeText.split("T");
  return time;
}

function showStatus(message, type = "info") {
  statusMessage.textContent = message;
  statusMessage.className = `status status--${type}`;
  statusMessage.hidden = false;
}

function setLoading(isLoading) {
  searchButton.disabled = isLoading;
  searchButton.textContent = isLoading ? "Consultando…" : "Consultar clima";
}

function hideResults() {
  currentWeatherCard.hidden = true;
  weatherStats.hidden = true;
  forecastList.hidden = true;
  forecastEmpty.hidden = false;
}

function renderCurrentWeather(data, locationText) {
  const current = data.current;
  const weatherInfo = getWeatherInfo(current.weather_code);

  document.getElementById("current-location").textContent = locationText;
  document.getElementById("current-temperature").textContent = formatTemperature(current.temperature_2m);
  document.getElementById("current-condition").textContent = weatherInfo.text;
  document.getElementById("current-updated").textContent =
    `Hora local de la medición: ${formatLocalTime(current.time)}`;
  document.getElementById("current-icon").innerHTML = getIconSvg(weatherInfo.icon, current.is_day === 1);

  document.getElementById("stat-feels-like").textContent = formatTemperature(current.apparent_temperature);
  document.getElementById("stat-humidity").innerHTML =
    `${Math.round(current.relative_humidity_2m)}<span class="stat__unit">%</span>`;
  document.getElementById("stat-wind").innerHTML =
    `${Math.round(current.wind_speed_10m)}<span class="stat__unit">km/h</span>`;

  statusMessage.hidden = true;
  currentWeatherCard.hidden = false;
  weatherStats.hidden = false;
}

function createForecastItem(daily, index) {
  const weatherInfo = getWeatherInfo(daily.weather_code[index]);
  const rainChance = daily.precipitation_probability_max?.[index] ?? 0;
  const rainText = `<span class="day__rain">${rainChance > 0 ? `Lluvia ${rainChance}%` : "Sin lluvia"}</span>`;

  const item = document.createElement("li");
  item.className = "day";
  item.innerHTML = `
    <p class="day__name">${formatDayName(daily.time[index], index)}${rainText}</p>
    <div class="day__icon" role="img" aria-label="${weatherInfo.text}">${getIconSvg(weatherInfo.icon, true)}</div>
    <p class="day__temps">
      ${formatTemperature(daily.temperature_2m_max[index])}
      <span class="day__min">${formatTemperature(daily.temperature_2m_min[index])}</span>
    </p>`;
  return item;
}

function renderForecast(daily) {
  forecastList.innerHTML = "";
  daily.time.forEach((_, index) => {
    forecastList.append(createForecastItem(daily, index));
  });
  forecastEmpty.hidden = true;
  forecastList.hidden = false;
}

// ===== Eventos =====

async function handleSearch(event) {
  event.preventDefault();

  const countryName = countrySelect.value;
  const city = findCity(countryName, citySelect.value);
  const cityName = city.name;

  hideResults();
  showStatus(`Consultando el clima de ${cityName}…`, "loading");
  setLoading(true);

  try {
    const data = await fetchWeather(city);
    renderCurrentWeather(data, formatLocation(city, countryName));
    renderForecast(data.daily);
  } catch (error) {
    showStatus(`No se pudo obtener el clima de ${cityName}. ${error.message} Inténtalo de nuevo.`, "error");
  } finally {
    setLoading(false);
  }
}

function init() {
  fillCountrySelect();
  fillCitySelect(DEFAULT_COUNTRY);
  citySelect.value = DEFAULT_CITY;

  countrySelect.addEventListener("change", () => fillCitySelect(countrySelect.value));
  searchForm.addEventListener("submit", handleSearch);
}

init();