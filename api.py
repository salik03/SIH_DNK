import csv
import random
import string
from twilio.rest import Client
from flask import Flask, request, jsonify

app = Flask(__name__)

# Initialize a dictionary to store user data
user_data = {}


# Function to generate a random alphanumeric ID
def generate_random_id(length=8):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))


# Function to save user data to a CSV file
def save_user_data():
    with open("user_data.csv", "w", newline="") as csvfile:
        fieldnames = ["Username", "ID", "Mobile Number", "Password"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()
        for username, data in user_data.items():
            writer.writerow({
                "Username": username,
                "ID": data["id"],
                "Mobile Number": data["mobile_number"],
                "Password": data["password"]
            })


# Function to load user data from a CSV file
def load_user_data():
    try:
        with open("user_data.csv", mode="r") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                username = row["Username"]
                user_data[username] = {
                    "id": row["ID"],
                    "mobile_number": row["Mobile Number"],
                    "password": row["Password"]
                }
    except FileNotFoundError:
        # Handle the case where the CSV file doesn't exist
        pass


# Route for user registration
@app.route('/registration', methods=['POST'])
def register_user_api():
    data = request.json
    username = data.get("username")
    mobile_number = data.get("mobile_number")
    password = data.get("password")

    # Generate a random alphanumeric ID
    user_id = generate_random_id()

    # Store user data in the dictionary
    user_data[username] = {
        "id": user_id,
        "mobile_number": mobile_number,
        "password": password
    }

    # Save user data to CSV
    save_user_data()

    return jsonify({"message": "Registration successful!"})


# Route for user login
@app.route('/login', methods=['POST'])
def login_api():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    # Check if the username exists in user_data and if the password matches
    if username in user_data and user_data[username]["password"] == password:
        return jsonify({"message": "Successful login!"})
    else:
        return jsonify({"message": "Login failed. Please check your username and password."}), 401


# Your Twilio Account SID and Auth Token
account_sid = 'AC1c5e3c2951e24c54d3c0892302297bd5'
auth_token = '0c31c9785dc2a2410841f75478ba8aa3'

# Create a Twilio client
client = Client(account_sid, auth_token)


# Function to generate a random 6-digit OTP
def generate_otp():
    return str(random.randint(100000, 999999))


# Function to send OTP via SMS
def send_otp(phone_nuber, otp):
    try:
        message = client.messages.create(
            body=f"Your OTP is: {otp}",
            from_=('+18329004029'),
            to=phone_number
        )
        return True
    except Exception as e:
        print(f"Error sending OTP: {str(e)}")
        return False


# Function to verify the OTP
def verify_otp(user_input, generated_otp):
    return user_input == generated_otp


@app.route('/send-otp', methods=['POST'])
def send_otp_route():
    data = request.get_json()
    phone_number = data.get('phone_number')

    if not phone_number:
        return jsonify({"error": "Phone number is required"}), 400

    generated_otp = generate_otp()

    if send_otp(phone_number, generated_otp):
        return jsonify({"message": f"OTP sent to {phone_number} successfully."}), 200
    else:
        return jsonify({"error": "Failed to send OTP."}), 500

# Example usage
if __name__ == "__main__":
    load_user_data()
    app.run(debug=True)
   # phone_number = "+919305407007" # Replace with the recipient's phone number
   # generated_otp = generate_otp()

   # if send_otp(phone_number, generated_otp):
    #    print(f"OTP sent to {phone_number} successfully.")

    #    user_input = input("Enter the OTP you received: ")

   #     if verify_otp(user_input, generated_otp):
   #         print("OTP verified successfully.")
   #     else:
   #         print("OTP verification failed.")
    #else:
   #     print("Failed to send OTP.")





