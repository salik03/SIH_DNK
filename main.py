import pandas as pd
import csv
import random
import string

# Initialize a dictionary to store user data
user_data = {}


# Function to generate a random alphanumeric ID
def generate_random_id(length=8):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))


# Function to register a new user
def register_user():
    print("Registration:")
    username = input("Enter username: ")
    mobile_number = input("Enter mobile number: ")
    password = input("Enter password: ")

    # Generate a random alphanumeric ID
    user_id = generate_random_id()

    # Store user data in the dictionary
    user_data[username] = {
        "id": user_id,
        "mobile_number": mobile_number,
        "password": password
    }
    print("Registration successful!")


# Function to check if a user can log in
def login():
    print("Login:")
    username = input("Enter username: ")
    password = input("Enter password: ")

    # Check if the username exists in user_data and if the password matches
    if username in user_data and user_data[username]["password"] == password:
        print("Successful login!")
    else:
        print("Login failed. Please check your username and password.")


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


# Main program
load_user_data()

while True:
    print("\n1. Register")
    print("2. Login")
    print("3. Quit")

    choice = input("Enter your choice (1/2/3): ")

    if choice == "1":
        register_user()
        save_user_data()  # Save data after registration
    elif choice == "2":
        login()
    elif choice == "3":
        break
    else:
        print("Invalid choice. Please choose 1, 2, or 3.")

