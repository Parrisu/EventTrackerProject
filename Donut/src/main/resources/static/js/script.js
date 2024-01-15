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
	setTimeout(findStores(), 0);
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
				} else {
					console.log('failed')
				}
			};
		};
		
		xhr.open('GET', '/api/donuts');
		
		xhr.send();
};

const getDonutDetails = (donutId) => donutId ? getDonutById(donutId) : console.error('no donut id')
// <------


function findStores(){
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

let submitCB = function(e){
	e.preventDefault();
	let form = submit.parentElement;
	
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

	console.log({ // <----
		donut,
		form,
	});
	
	let xhr = new XMLHttpRequest();
	
	xhr.open('POST', 'api/donuts/')
	
	xhr.setRequestHeader("Content-type", "application/json");
	
	let newDonut = JSON.stringify(donut);
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if(xhr.status === 201 || xhr.status === 200){
				let data = JSON.parse(xhr.responseText);
				init();
			} else {
				console.error("POST request failed")
				console.error(xhr.status + ": " + xhr.responseText);
			};
		}
	}
	
	xhr.send(newDonut);
};

function deleteDonut(id){
	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/donuts/' + id)

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status=== 204){
				document.updateForm.style.display = 'none';
				xhr = null;
				init();
			}
		}
	}

	xhr.send();
}
function updateDonut(id, fixedDonut){
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/donuts/'+ id)
	
	xhr.setRequestHeader("Content-type", "application/json");
	
	let toUpdate = JSON.stringify(fixedDonut);
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if(xhr.status === 201 || xhr.status === 200){
				let data = JSON.parse(xhr.responseText);
				init();
			} else {
				console.error("PUT request failed")
				console.error(xhr.status + ": " + xhr.responseText);
			};
		}
	}
	
	xhr.send(toUpdate);
}

function findButton(){
	let submit = document.donutForm.button;

	submit.addEventListener('click', submitCB)
}

function getDonutById(donutId){
	let tbody = document.getElementById('body');
	// let thead = document.getElementById('head');
	// thead.replaceChildren("");
	
	
	
	
	
	let xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'api/donuts/'+donutId)
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){}
			let donut = JSON.parse(xhr.responseText);
			getDonutDetail(donut);
			xhr = null;
		} else {
			console.log('Donut not found')
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
		console.log(donut.name)

		form.id.vlaue = donut.id;
		form.name.value = donut.name;
		form.price.value = donut.price;
		form.calories.value = donut.calories;
		if(donut.store.id == 1){
			form.store[0].checked = true;
		} else {
			form.store[1].checked = true;
		}
		
		document.donutForm.style.display='none'
		console.log(arrDonut)
		tr.replaceChildren(...arrDonut);
		tbody.replaceChildren(tr);

		let buttons = document.getElementById('editing')


		let updateBTN = document.updateForm.button;
		updateBTN.addEventListener('click', e=> {
			e.preventDefault();
			updatedDonut = {
				name: form.name.value,
				price: form.price.value,
				calories: form.calories.value,
				enabled: true,
				store: {
					id: form.store.value
				},
			}
			updateDonut(donutId, updatedDonut)
			console.log(updatedDonut)

		})
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



function displayDonuts(donuts){  //2

	let table_head = document.getElementById('head');
	let table_row = document.createElement('tr');
	
	let table_body = document.getElementById('body');
	let count = 0;

	

	const donutIds = donuts.map(donut => {
		return {
			id: donut.id
		}
	})
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
				console.log(donutId)
				getDonutDetails(donutId);
			});
			tr.appendChild(td);
			
		}
		// table_body.appendChild(tr);
		
		rows.push(tr)	
	}
	table_row.replaceChildren(...headers);
	table_head.replaceChildren(table_row);
	table_body.replaceChildren(...rows)
	
};