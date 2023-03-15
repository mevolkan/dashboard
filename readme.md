
# Dashboard

This is a weather dashboard for my house
fetches real time data from an ESP32 in the house network and other APIs
Design separately inspired by

- [Weather App Dashboard Design](https://dribbble.com/shots/16833006-Weather-App-Dashboard-Design )
- [Pinter Life Smart Home App](https://dribbble.com/shots/15592686-Pinter-Life-Smart-Home-App)

Goal is to improve my skills

using Tailwind CLI
./tailwindcss -i css/input.css -o css/styles.css --watch
./tailwindcss -i css/input.css -o css/styles.css --minify

## Features

- Light/dark mode toggle
- Live previews
- <https://chrisdevcode.hashnode.dev/creating-a-weather-search-app-in-vanilla-javascript>
- websocket from esp32
- Fullscreen mode
- Cross platform
- Intergrate websockets
- Use browser storage
- Write to database via an api
- Fetch from both esp32, APIs and local database
- send updates via whatsapp [https://www.twilio.com/docs/whatsapp]
- whatsapp api has been released, worth lookit at

## Project Structure

- proarduino code, minimal front end, backend

## Configs

Create an apikeys.js to hide your api keys
Should be a Javascript object in the format

var keys={
'xRapidapiKey':'key'
}
