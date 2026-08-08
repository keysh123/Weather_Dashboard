export function getWeatherIcon(code: number) {
  switch (code) {
    case 0:
      return "☀️";

    case 1:
    case 2:
    case 3:
      return "⛅";

    case 45:
    case 48:
      return "🌫️";

    case 51:
    case 53:
    case 55:
      return "🌦️";

    case 61:
    case 63:
    case 65:
      return "🌧️";

    case 71:
    case 73:
    case 75:
      return "❄️";

    case 95:
    case 96:
    case 99:
      return "⛈️";

    default:
      return "🌡️";
  }
}

export function getWeatherDescription(code: number) {
  switch (code) {
    case 0:
      return "Clear sky";

    case 1:
      return "Mainly clear";

    case 2:
      return "Partly cloudy";

    case 3:
      return "Overcast";

    case 45:
    case 48:
      return "Fog";

    case 51:
    case 53:
    case 55:
      return "Drizzle";

    case 61:
    case 63:
    case 65:
      return "Rain";

    case 71:
    case 73:
    case 75:
      return "Snow";

    case 95:
      return "Thunderstorm";

    default:
      return "Unknown";
  }
}