function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}


window.addEventListener('load', e => {
	
	setTimeout(init(), 0);
	// setTimeout(findStores(), 0);
	setTimeout(findButton(), 0);
});

function init(){
		document.updateForm.style.display='none';
		document.donutForm.style.display='block';
		let xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					let donuts = JSON.parse(xhr.responseText);
					displayDonuts(donuts);
				}
			};
		};
		
		xhr.open('GET', '/api/donuts');
		
		xhr.send();
};


let findStores = function(){
	let stores;
	let xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'api/stores');
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				stores = JSON.parse(xhr.responseText);
				
				
			} else {
				console.error('GET request failed')
				console.error(xhr.status + ": " + xhr.responseText);
			}
		}
	}	
	
	xhr.send();
};

function submitCB(e){
	e.preventDefault();
	let form = e.target.parentElement;
	let inputPrice = parseFloat(form.price.value).toFixed(2);
	
	let donut = {
		name: form.name.value,
		price: inputPrice,
		calories: form.calories.value,
		enabled: form.enabled.value,
		store: {
			id: form.store.value
		},	
	};

	let xhr = new XMLHttpRequest();
	
	xhr.open('POST', 'api/donuts/')
	
	xhr.setRequestHeader("Content-type", "application/json");
	
	let newDonut = JSON.stringify(donut);
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if(xhr.status === 201 || xhr.status === 200){
				let data = JSON.parse(xhr.responseText);
				form.reset();
				init();
			} else {
				console.error("POST request failed")
				console.error(xhr.status + ": " + xhr.responseText);
			};
		}
	}
	xhr.send(newDonut);
};

function findButton(){
	let submit = document.donutForm.button;
	submit.addEventListener('click', submitCB);
}

function deleteDonut(id){
	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/donuts/' + id)

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status=== 204){
				document.updateForm.style.display = 'none';
				init();
			}
		}
	}

	xhr.send();
}
function updateDonut(fixedDonut){
	
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/donuts/'+ fixedDonut.id)
	
	xhr.setRequestHeader("Content-type", "application/json");
	
	let toUpdate = JSON.stringify(fixedDonut);

	
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if(xhr.status === 201 || xhr.status === 200){
				let data = JSON.parse(xhr.responseText);
				console.log(data)
				init();
			} else {
				console.error("PUT request failed")
				console.error(xhr.status + ": " + xhr.responseText);
			};
		}
	}
	
	xhr.send(toUpdate);
}


let updateCB = function(e){
	e.preventDefault();
	let form = e.target.parentElement;
	let updatedDonut = null;
	updatedDonut = {
		id: form.id.value,
		name: form.name.value,
		price: form.price.value,
		calories: form.calories.value,
		enabled: true,
		store: {
			id: form.store.value
		},
	}
	let buttons = document.getElementById('editing')
	buttons.replaceChildren('')
	form.reset();
	updateDonut(updatedDonut)
	
}

function getDonutById(donutId){
	let tbody = document.getElementById('body');
	
	let xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'api/donuts/'+donutId)
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){}
			let donut = JSON.parse(xhr.responseText);
			getDonutDetail(donut);
		}
	};
	
	xhr.send();
	
	let arrDonut = [];
	
	const getDonutDetail = function(donut){
		let tr = document.createElement('tr');
		
		Object.values(donut).forEach(val => {
			let td = document.createElement('td');
			if(typeof val === 'object'){ // store > id
				td.textContent = val.id;
			} else {
				td.textContent = val;
			}
			arrDonut.push(td);
		})
		
		let form = document.updateForm;
		form.style.display='block';
		
		form.id.value = donut.id;
		form.name.value = donut.name;
		form.price.value = donut.price;
		form.calories.value = donut.calories;
		if(donut.store.id == 1){
			form.store[0].checked = true;
		} else {
			form.store[1].checked = true;
		}
		
		document.donutForm.style.display='none'
		tr.replaceChildren(...arrDonut);
		tbody.replaceChildren(tr);
		
		let buttons = document.getElementById('editing')
		
		
		
		var updateBTN = document.updateForm.button;
		updateBTN.addEventListener('click', updateCB)
		let deleteBTN = document.createElement('button')
		deleteBTN.textContent = 'Delete'
		deleteBTN.addEventListener('click', e=>{
			e.preventDefault();
			deleteDonut(donut.id);
			console.log('delete')
			buttons.replaceChildren('')
			
		})
		let backBTN = document.createElement('button')
		backBTN.textContent = 'Back'
		backBTN.addEventListener('click', e=> {
			document.donutForm.style.display='block'
			init();
			buttons.replaceChildren('')
		})

		buttons.replaceChildren(deleteBTN, backBTN)




	}


	
	



	
};


// donuts.forEach(donut => {
// 	console.log({ donut })
// })



function displayDonuts(donuts){ 

	let table_head = document.getElementById('head');
	let table_row = document.createElement('tr');
	let table_body = document.getElementById('body');
	let count = 0;

	let rows = []
	let headers = []
		
	for(let donut of donuts){
		let tr = document.createElement('tr');
		
		for(let prop in donut){ // table headers
			if(count < 8){
				let thname = document.createElement('th');
				thname.textContent = toTitleCase(prop);
				count++;
				headers.push(thname);
			}
			
			let td = document.createElement('td');
			if(typeof donut[prop] === 'object'){ // store > id
				td.textContent = donut[prop].id;
			} else if (donut[prop] == donut.createdAt){ // date > truncated
				let newDate = new Date(donut[prop]);
				var y = newDate.getFullYear().toString();
			    var m = (newDate.getMonth() + 1).toString();
			    var d = newDate.getDate().toString();
			    (d.length == 1) && (d = '0' + d);
			    (m.length == 1) && (m = '0' + m);
				newDate = `${d}-${m}-${y}`
			    // newDate = d +"-"+ m +"-"+ y;
				td.textContent = newDate;
			} else {
				td.textContent = donut[prop];
			}
			td.addEventListener('click', e=>{
				let donutId = e.target.parentElement.firstElementChild.textContent;
				getDonutById(donutId);
			});
			tr.appendChild(td);
			
		}
		// table_body.appendChild(tr);
		
		rows.push(tr)	
	}

	let editingDiv = document.getElementById('editing');
	let total_amount = 0;
	let total_calories = 0;

	
	for(let i = 0; i < rows.length; i++ ){
		total_amount += parseFloat(rows[i].children[2].textContent);
		total_calories += parseInt(rows[i].children[3].textContent);
	}
	
	let h3 = document.createElement('h3');
	h3.textContent = "Total Amount Spent: " + total_amount
	editingDiv.appendChild(h3)
	let h32 = document.createElement('h3');
	h32.textContent = "Total Calories Consumed: " + total_calories
	editingDiv.appendChild(h32)
	console.log(total_amount)
	console.log(total_calories)




	table_row.replaceChildren(...headers);
	table_head.replaceChildren(table_row);
	table_body.replaceChildren(...rows)
	
};