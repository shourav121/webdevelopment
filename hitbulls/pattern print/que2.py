def print_number_pyramid(rows):
    for i in range(1, rows + 1):
        
        for j in range(rows - i):
            print(" ", end="")
        
        for j in range(2 * i - 1):
            print(j + 1, end="")
    
        print()


num_rows = 5
print_number_pyramid(num_rows)
