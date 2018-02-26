// dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');

//create connection information for the sql database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon'
});

//connect to mysql server and sql database
connection.connect(function(err){
	if(err) throw err;
});

//function to display all products at the start- ids, names, and prices
var start = function() {
	connection.query("SELECT * FROM products", function(err, results){
		if(err) throw err;
		console.log("--------------- ITEMS FOR SALE ---------------");
		console.log("----------------------------------------------")
		for(var i = 0; i < results.length; i++){
		console.log(" Item id: " + results[i].item_id + 
					"  || Product: " + results[i].product_name +
					"  || Price : " + results[i].price);
		}	
	//prompt user to input item id and # of units being ordered
	inquirer
		.prompt([
	   		{
	   		   name: "itemId",
	   		   type: "input",
	   		   message: "What is the id of the product you would like to buy?",
	   		   validate: function(value) {
          			if (isNaN(value) === false) {
            			return true;
          			}
          			return false;
        			}
	   		}, {
	   			name: "units",
	   			type: "input",
	   			message: "How many units would you like to buy?",
	   			validate: function(value) {
		          	if (isNaN(value) === false) {
		            	return true;
		          	}
		          		return false;
		        	}
	   		}
	   	])
	
	//determine if enough units are available for the order
		.then(function(answer){
	   		var chosenItem = answer.itemId - 1;
	   		var chosenItemId = results[chosenItem]
	   		var chosenUnit = answer.units;
	   		// console.log(chosenItemId);

	   		//if quantity chosen is more than what is in stock
	   		if (chosenItemId.stock_quantity < chosenUnit){
	   			console.log("    ");
	   			console.log("Insufficient quantity! There are only " + 
	   				chosenItemId.stock_quantity + " units left.");
	   			console.log("Please make a new selection.");
	   			console.log("   ");
	   			//start over
	   			start();
	   		}
	   		// else if(answer.itemId == undefined){
	   		// 	console.log("Invalid Item id.")
	   		// 	connection.end();
	   		// }

	   		//if transaction goes through- updates stock quantity and total
	   		else {
	   			if(chosenItemId.stock_quantity >= chosenUnit){
	   				var newStock = parseInt(chosenItemId.stock_quantity) - parseInt(chosenUnit);
	   				var total = parseInt(chosenItemId.price) * parseInt(chosenUnit);
	   				connection.query('UPDATE products SET ? WHERE ?', [{stock_quantity: newStock}, {item_id: answer.itemId}],
	   				function (err, result){
	   					if (err) throw err;
	   					console.log("Success! The new quantity is: " + newStock);
	   					console.log("Your total is: $" + total);
	   				} 
	   			)}
	   		}
		});
	})
}

start();