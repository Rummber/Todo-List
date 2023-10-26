list_items = []  

while True:
    item = input("Enter an item (or press Enter to exit): ")

  
    if not item:
        break

    list_items.append(item) 


print(" ".join(list_items))