

// var liste = document.querySelector('ul');

// var student = [max, perrine, alice];
//
// for (var i = 0; i < student.length; i++) {
//   //on crée la balise li
//   var currentLi = document.createElement('li');
//   var texte =
//   student[i].prenom +
//   ' a ' + student[i].age +
//   ' ans et des chaussures ' + student[i].couleurChaussures
//   + ' et aime ' + student[i].platPrefs;
//   currentLi.textContent = texte;
//   //ajoute un enfant au ul
//   liste.appendChild(currentLi);
// }


fetch('https://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {

		var stations = data.network.stations;
		var tableauStations = document.querySelector('table');
		var currentTbody = document.createElement('tbody');

    for (var i = 0; i < stations.length; i++) {
      console.log(stations[i].name + ' // ' + stations[i].empty_slots + ' // ' + stations[i].free_bikes);


			var tr = document.createElement('tr');



			  var td1 = document.createElement("td");
				var td2 = document.createElement("td");
				var td3 = document.createElement("td");
				var txt_name = document.createTextNode(stations[i].name);
				var txt_empty = document.createTextNode(stations[i].empty_slots);
				var txt_free = document.createTextNode(stations[i].free_bikes);


				td1.appendChild(txt_name);
				td2.appendChild(txt_empty);
				td3.appendChild(txt_free);

				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);

			currentTbody.appendChild(tr);

			tableauStations.appendChild(tr);

			var totVelo = stations[i].free_bikes + stations[i].empty_slots;

			if (totVelo === stations[i].free_bikes && stations[i].free_bikes !== stations[i].empty_slots) {
					var classFull = document.createAttribute('class');
					classFull.value = "full";
					td3.setAttributeNode(classFull);


			}
			else if (stations[i].free_bikes >= totVelo / 2) {
					var classMore = document.createAttribute('class');
					classMore.value = "moreHalf";
					td3.setAttributeNode(classMore);
			}

			else if (stations[i].free_bikes < totVelo / 2 && stations[i].empty_slots !== totVelo) {
					var classLess = document.createAttribute("class");
					classLess.value = "lessHalf";
					td3.setAttributeNode(classLess);
			}

			else if (stations[i].empty_slots === totVelo) {
				var classEmpty = document.createAttribute('class');
				classEmpty.value = "empty";
				td3.setAttributeNode(classEmpty);
			}
    };
	});
});
