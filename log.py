import requests

# Replace with the actual login credentials
login_data = {
    "username": "salik",
    "password": "salik123"
}

# Make a POST request to the login route
response = requests.post("http://localhost:5000/login", json=login_data)

# Check the response status code and print the message
if response.status_code == 200:
    print("Login successful!")
else:
    print("Login failed. Error message:", response.json()["message"])
