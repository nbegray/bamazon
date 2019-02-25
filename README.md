 ## Node.js & MySQL

## Overview

In this activity, I created an Amazon-like storefront called Bamazon, with the Node.js and MySQL skills learned in this unit. The app will take in orders from customers and deplete stock from the store's inventory. 


### Functionality of Bamazon

1. Bamazon will search the mySQL database for inventory

2. Bamazon will compare the user input vs stock in quantity and alert the user if their order may be completed, or if they should restart their order. 

3. Bamazon will calculate the final order based on the items added to the cart and supply the user with a total for that item. 

The application is run out of BASH command-line platform application from a javascript code base. 

### Running Bamazon application in BASH Command-Line:
When running Bamazon, Node.js commands for each section should be entered in this way to allow the application to run successfully:

1. To start the application on BASH enter Node and type in the name of the file  - example: <node bamazoncustomer.js>. This will start the application code, prompting the user to begin their shopping at the storefront. At this point the user must confirm Y/n to continue shopping. If Y, the user will be prompted to continue shopping and select an item from a list. 
![Image](https://github.com/nbegray/liri-node/blob/master/images/spotify-this.png)


2. Upon selecting the item from the list, the user will be asked how many units of the item they wish to purchase and must enter a number. This will cause the application code to compare the number of items in the mySQL database to the user input and will either return a console.log response stating that the order may be placed, or prompting the user to select a different item.  
![Image](https://github.com/nbegray/liri-node/blob/master/images/concert-this.png)


3. The final portion of the application functionality, once the user has confirmed how many items they wish to purchase and alerted that there is sufficient stock to continue the purchase is a checkout total detailing the item, department, price and quantity selected by the user. The user is asked once again to confirm their purchase before the checkout process is completed. Once complete, the user is alerted that the "Transaction completed. Thank you." and also "Thank you for coming. Goodbye!". After the final console.log the application restarts to allow the user to potentially purchase more items. 
![Image](https://github.com/nbegray/liri-node/blob/master/images/movie-this.png)
