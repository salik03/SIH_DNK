import requests

registration_data = {
    "username": "salik",
    "mobile_number": "1234567829",
    "password": "salik123"
}

response = requests.post("http://localhost:5000/registration", json=registration_data)

# Print the response
print(response.json())
