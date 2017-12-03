
function start(){
	document.getElementById('test').addEventListener('submit', addItem);
	printItems();
}

function addItem(event){
	var itemNameValue = document.getElementById('itemName').value;
	var items = JSON.parse(localStorage.getItem('items'));

	var item ={
		name : itemNameValue
	}

	if(items === null){
		items = [];
	} 

	items.push(item);

	localStorage.setItem('items', JSON.stringify(items));
	printItems();

}

function printItems(){

	var items = JSON.parse(localStorage.getItem('items'));
	var itemList = document.getElementById('itemList');
	itemList.innerHTML = '';

	for(var i = 0 ; i < items.length; i++){
		itemList.innerHTML += 
		  '<li class="list-group-item">'
		+ 	'<div class="row">'
		+ 		'<div class="col-4 mr-3">' + '<h2>' + items[i].name + '</h2>' + '</div>'
		+ 		'<div>' + '<button class="btn btn-danger" onclick="removeItem(\''+items[i].name+'\')">delete item</button>' + '</div>'
		+ 	'</div>'
		+ '</li>' ;
	}

}

function removeItem(itemName){
	var items = JSON.parse(localStorage.getItem('items'));

	for(var i = 0 ; i < items.length; i++){
		if(items[i].name == itemName){
			items.splice(i, 1);
			break;			
		}
	}

	localStorage.setItem('items', JSON.stringify(items));
	printItems();
}
