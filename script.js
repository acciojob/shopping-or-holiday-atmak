//your code here
<!DOCTYPE html>
<html>
<head>
	<title>Shopping or Holiday</title>
</head>
<body>
    <h1>Shopping or Holiday</h1>
    <h2>Things I want to buy:</h2>
    <ol id="shoppingList">
        <li data-ns-test="shoppingList">Item 1</li>
        <li data-ns-test="shoppingList">Item 2</li>
        <li data-ns-test="shoppingList">Item 3</li>
    </ol>
    <button onclick="addItem()">Add Item</button>

    <h2>Holiday Destinations:</h2>
    <ul>
        <li data-ns-test="holidayList">Place 1</li>
        <li data-ns-test="holidayList">Place 2</li>
        <li data-ns-test="holidayList">Place 3</li>
    </ul>
    <script>
        function addItem() {
            var list = document.getElementById('shoppingList');
            var newItem = document.createElement('li');
            newItem.setAttribute('data-ns-test', 'shoppingList');
            newItem.textContent = 'New Item';
            list.appendChild(newItem);
        }
    </script>
</body>
</html>






