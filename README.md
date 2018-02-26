# Bamazon

This app uses node.js and mysql using dependencies mysql and inquirer.

Create a connection to mysql database: 'bamazon'.

Using terminal and node.js to run the app, terminal displays available products.

Terminal prompts user to input product id and number of units using integers.

Then, a function will take the user's answer as a parameter.

Using an if statement, if the user inputs a chosen number of units more than is available in stock_quantity, console.logs insufficient quantity and restarts the app.

Using and else statement, if the stock_quantity has enough units available, connection.query is made to update stock_quantity in the database.

Else statement will also console.log updated stock_quantity as newStock and will console.log user's total based on the chosen item's price and number of units chosen.