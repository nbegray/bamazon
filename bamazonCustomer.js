var mysql = require("mysql")
var inquirer = require("inquirer");
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

connection.connect(function(err) {
  if (err) throw err;
  start();
});


function start(){
    connection.query("SELECT * FROM products", function(err, result){
      
        console.table(result);

        // prompt the user via inquire
        // from the propmt we need the id and quantity of the product
        inquirer
    .prompt([
        {
      name: "id",
      type: "input",
      message: "What id?"
    },
    {
        name: "quantity",
        type: "input",
        message: "how many?"
      },
    ]).then(function(ans){
        console.log(ans)
    })
    })
    
}
function checkQuant(){
    connection.query("SELECT * FROM products", function(err, result){
      
        console.table(result);

        //prints stock quantity from table. 
        // from the propmt we need the id and quantity of the product
        inquirer
    .prompt([
        {
      name: "id",
      type: "input",
      message: "What id?"
    },
    {
        name: "quantity",
        type: "input",
        message: "how many?"
      },
    ]).then(function(ans){
        console.log(ans)
    })
    })
}


// // function that compares quantities
//function that checks the user out and adds up totals
//in .then statements call those functions
