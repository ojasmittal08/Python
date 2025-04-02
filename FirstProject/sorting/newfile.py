#Selection sort algorithm
def selection_sort(arr):

   #check the size of the array
   n = len(arr)

   for i in range(n):
     #assume the current element is minimum
     min_index = i #starting from 0

     #Find the smallest elements index to the remaining unsorted part
     for j in range(i + n , n):
       if arr[j] < arr[min_index]:
         min_index = j

     #Swap the found minimum element with the first element
     arr[i], arr[min_index] = arr[min_index],arr[j]

   return arr

arr = [1, -12 , 56 , 74 , 3 , 5]
selection_sort(arr)