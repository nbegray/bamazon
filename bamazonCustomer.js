const mysql = require("mysql")
const inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    startPrompt();
});
//========================Inquirer Introduction==================//

function startPrompt() {

    inquirer.prompt([{

        type: "confirm",
        name: "confirm",
        message: "Welcome to Bamazon! Would you like to view our inventory?",
        default: true

    }]).then(function(user) {
        if (user.confirm === true) {

            startInventory();
            
        } else {
            console.log("Thank you! Come back soon!");
            startPrompt();
            
        
        }
    });
}

//============================Inventory Prompt=======================//
function startInventory() {
    connection.query("SELECT * FROM products", function (err, result) {
        
        console.table(result);

        selectionPrompt();
       
    });
}
//=============================User Selects # of products==========//

function selectionPrompt() {

    inquirer.prompt([{

            type: "input",
            name: "inputId",
            message: "Please enter the ID number of the item you would like to purchase.",
        },
        {
            type: "input",
            name: "inputNumber",
            message: "How many units of this item would you like to purchase?",

        }
    ]).then(function(userPurchase) {
        
        connection.query("SELECT * FROM products WHERE id=?", userPurchase.inputId, function(err, res) {
        for (var i = 0; i < res.length; i++) {

            if (userPurchase.inputNumber > res[i].stock_quantity) {

                console.log("===================================================");
                console.log("Sorry! Not enough in stock. Please try again later.");
                console.log("===================================================");

                selectionPrompt();

            } else {
                //list item information for user for confirm prompt
                console.log("===================================");
                console.log("Your order can be placed.");
                console.log("===================================");
                console.log("You've selected:");
                console.log("----------------");
                console.log("Item: " + res[i].product_name);
                console.log("Department: " + res[i].department_name);
                console.log("Price: " + res[i].price);
                console.log("Quantity: " + userPurchase.inputNumber);
                console.log("----------------");
                console.log("Total: " + res[i].price * userPurchase.inputNumber);
                console.log("===================================");

                var newStockamt = (res[i].stock_quantity - userPurchase.inputNumber);
                var purchaseId = (userPurchase.inputId);
                
                confirmPrompt(newStockamt, purchaseId);
                
                
            }
        }
    });
    
});

}

function confirmPrompt(newStockamt, purchaseId) {

    inquirer.prompt([{

        type: "confirm",
        name: "confirmPurchase",
        message: "Are you sure you would like to purchase this item and quantity?",
        default: true

    }]).then(function(userConfirm) {
        if (userConfirm.confirmPurchase === true) {

            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: newStockamt
            }, {
                item_id: purchaseId
            }], function(err, res) {});

            console.log("=================================");
            console.log("Transaction completed. Thank you.");
            console.log("=================================");
            console.log("Thank you for coming. Goodbye!");
            startPrompt();
        } else {
            console.log("=================================");
            console.log("Are you sure? Ok, maybe next time. Have a nice day!");
            console.log("=================================");
            console.log("Thank you for coming. Goodbye!");
            startPrompt();
        }
    });
}


        
    

   
