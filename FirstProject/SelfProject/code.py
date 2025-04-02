import requests # type: ignore

# API endpoint and key
api_key = "your_api_key_here"
city = "New Delhi"
url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"

# Making a request
response = requests.get(url)

# Checking the response
if response.status_code == 200:
    data = response.json()
    print(f"Weather in {city}: {data['weather'][0]['description']}")
    print(f"Temperature: {data['main']['temp']}K")
else:
    print("Failed to fetch weather data")