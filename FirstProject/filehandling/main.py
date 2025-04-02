#Open the file
file = open("filehandling/file.txt", "r")

#using file I can read through loop
'''
for line in file:
    print(line)'''

print(file.read())