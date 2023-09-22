from flask import Flask, request, jsonify
import pandas as pd
import random
from twilio.rest import Client
app = Flask(__name__)

# Your Twilio Account SID and Auth Token
account_sid = 'AC1c5e3c2951e24c54d3c0892302297bd5'
auth_token = '0c31c9785dc2a2410841f75478ba8aa3'

# Create a Twilio client
client = Client(account_sid, auth_token)

df = pd.read_csv("user_data.csv")
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
#############################################################
with open("a.txt", 'r') as file:
    index = file.read()

index = int(index)
#############################################################
if __name__ == "__main__":
    phone_number = "+91"+str(df['Mobile Number'].loc[df.index[index]]) # Replace with the recipient's phone number
    generated_otp = generate_otp()

    if send_otp(phone_number, generated_otp):
        print(f"OTP sent to {phone_number} successfully.")

        user_input = input("Enter the OTP you received: ")

        if verify_otp(user_input, generated_otp):
            print("OTP verified successfully.")
        else:
            print("OTP verification failed.")
    else:
        print("Failed to send OTP.")
############################################################
index = str(index+1)
with open("a.txt", 'w') as file:
    file.write(index)