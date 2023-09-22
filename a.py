import random

file_name = "a.txt"

i = 0

arr=[0]*20
while(i<20):
    j = str(i)
    try:
        with open(file_name, 'w') as file:
            file.write(j)
    except IOError:
        print("An error occurred while writing to the file.")
    else:
        print(f"Data has been written to {file_name} and the file is closed.")

    with open(file_name, 'r') as file:
        file_contents = file.read()
    i=i+1
    arr[int(file_contents)]=random.choice(range(1,100))

print(arr)