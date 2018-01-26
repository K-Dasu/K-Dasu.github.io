//Variable to track whats currently active
var activeOptions = {};

//Age Groups for Row, Column, Cell
function initialzeAge(ageGroupArray){
	var sections = ["row", "col", "cell"];

	sections.forEach(function(section){
		ageGroupArray.forEach(function(ageGroup, i){
			if(section.includes("cell")){
				//initalize dropdown to arbitrary age group
				controller["Age Groups"] = "40-49"; 
				activeOptions['age-cell'] = 4;
			}else{
				//initialize checkboxes to be false
				var objectLabel = ageGroup + "-" + section;
				controller[objectLabel] = false;
			}
		});
	});
}

//Sex Groups for Row, Column, Cell
function initializeSex(){
	var sections = ["row", "col", "cell"];

	sections.forEach(function(section){
		var objectLabel = "sex-" + section;
		controller[objectLabel] = "Female";
		activeOptions[objectLabel] = ['f'];
	});
}

//Categories for Row, Column, Cell
function intializeCategories(categoryArray, limit){
	var sections = ["row", "col", "cell"];
	var subsetOfCategories = categoryArray.slice(0,limit);

	sections.forEach(function(section){
		subsetOfCategories.forEach(function(category, i){
			if(section.includes("cell")){
				//initalize dropdown to arbitrary category
				controller["Category"] = "Infectious and parasitic diseases"; 
				activeOptions['category-cell'] = 0;
			}else{
				//initialize checkboxes to be false
				var prefix = "Diseases of ";
				var repeatStr = category.indexOf(prefix);
				var objectLabel = (repeatStr > -1) ? category.slice(prefix.length) + "-" + section : category.slice(0,4) + "-" + section;
				controller[objectLabel] = false;
			}
		});
	});
}

function intializeFolderValues(){
	controller["Row Options"] = "Sex";
	controller["Column Options"] = "Age Groups";
	controller["Cell Options"] = "Categories";
}

function initialState(){
	controller["Row Options"] = "Sex";
	controller["Column Options"] = "Age Groups";
	controller["Cell Options"] = "Categories";

	controller["60-69-col"] = true;
	controller["70-79-col"] = true;
	controller["80-89-col"] = true;

	activeOptions["age-col"] = ['6','7','8'];
	activeOptions['age-row'] = [];

	activeOptions['category-col'] = [];
	activeOptions['category-row'] = [];

}

//Initializing the controller
initialzeAge(ageGroups);
initializeSex();
intializeCategories(categories, 9);
initialState();


//Individual controllers for each option
var ageControllerCol = [],
	ageControllerRow = [],
	ageControllerCell = null,
	categoryControllerCol = [],
	categoryControllerRow = [],
	categoryControllerCell = null,
	sexControllerCol = null,
	sexControllerRow = null,
	sexControllerCell = null;

//Creating GUI object
var gui = new dat.gui.GUI({name: 'My GUI'});
gui.remember(controller);
gui.close();

//Creating + Initializing the Main 3 folders
var rowFolder = gui.addFolder('Row'),
 	colFolder = gui.addFolder('Column'),
 	cellFolder = gui.addFolder('Commonality');

var rowOptions, columnOptions, cellOptions;

rowOptions = rowFolder.add(controller, "Row Options", ["Sex", "Age Groups", "Categories"]).listen();
columnOptions = colFolder.add(controller, "Column Options", ["Sex", "Age Groups", "Categories"]).listen();
cellOptions = cellFolder.add(controller, "Cell Options", ["Sex", "Age Groups", "Categories"]).listen();

intializeFolderValues();
updateSex([updateRowVal], 0, "both", rowFolder); //row is initially sex
updateAge([updateRowVal, updateColVal], 1, colFolder);
updateCategories([updateRowVal, updateColVal, updateCellVal ], 2, cellFolder); //initally disease

$('.close-button').click(function(d){
	toggleHighlight('.dg.main .close-button', false);
});

function updateSex(updateFunctions, type, value, folder){
	var canvasExist = (document.getElementById('canvas') === null) ? false : true;
	if(type === 0){
		if(!sexControllerRow){
			sexControllerRow = folder.add(controller, 'sex-row', ["Female", "Male", "Both"]).name("Sex").listen();
			if(activeOptions['sex-row'] && canvasExist){updateFunctions[type](activeOptions['sex-row']);}
			//When sex is selected do something....
			sexControllerRow.onFinishChange(function(value) {
				var active = value;
				// Fires when a controller loses focus. fires after selection for sex
				lowerCaseSex = value.charAt(0).toLowerCase();
				active = (lowerCaseSex.includes("b")) ? ['m','f'] : [lowerCaseSex];
				updateFunctions[type](active);
				activeOptions['sex-row'] = active;
			});
		}
	}else if(type === 1){
		if(!sexControllerCol){
			sexControllerCol = folder.add(controller, 'sex-col', ["Female", "Male", "Both"]).name("Sex").listen();
			if(activeOptions['sex-col']  && canvasExist){updateFunctions[type](activeOptions['sex-col']);}
			//When sex is selected do something....
			sexControllerCol.onFinishChange(function(value) {
				var active = value;
				// Fires when a controller loses focus. fires after selection for sex
				lowerCaseSex = value.charAt(0).toLowerCase();
				active = (lowerCaseSex.includes("b")) ? ['m','f'] : [lowerCaseSex];
				updateFunctions[type](active);
				activeOptions['sex-col'] = active;
			});
		}
	}else if(type === 2){
		if(!sexControllerCell){
			sexControllerCell = folder.add(controller, 'sex-cell', ["Female", "Male"]).name("Sex").listen();
			if(activeOptions['sex-cell']  && canvasExist){updateFunctions[type](activeOptions['sex-cell']);}
			//When sex is selected do something....
			sexControllerCell.onFinishChange(function(value) {
				var active = value;
				// Fires when a controller loses focus. fires after selection for sex
				lowerCaseSex = value.charAt(0).toLowerCase();
				active = (lowerCaseSex.includes("b")) ? ['m','f'] : [lowerCaseSex];
				updateFunctions[type](active);
				activeOptions['sex-cell'] = active;
			});
		}
	}
}

function updateAge(updateFunctions, type, folder){
	var canvasExist = (document.getElementById('canvas') === null) ? false : true;
	if(type === 0){
		ageGroups.forEach(function(d){
			var label = d + "-row";
			var tempController = folder.add(controller, label).name(d).listen();
			ageControllerRow.push(tempController);
		});

		if(activeOptions['age-row'] && canvasExist){updateFunctions[type](activeOptions['age-row']);}
 		//When an age group is selected do something...
 		ageControllerRow.forEach(function(d){
 			d.onFinishChange(function(value) {
			  // Fires when a controller loses focus. fires after selection for category
			  if (value){
			  	//add to active
			  	var ageStr = this.property;
			  	var index = ageGroups.indexOf(ageStr.substring(0,ageStr.indexOf("-row")));
			  	if (index !== -1) {
			  		activeOptions['age-row'].push(index.toString());
			  	}
			  }else{
			  	//remove from active
			  	var ageStr = this.property;
			  	var index = ageGroups.indexOf(ageStr.substring(0,ageStr.indexOf("-row")));
			  	remove(activeOptions['age-row'], index.toString());
			  }

			  updateFunctions[type](activeOptions['age-row']);
			});
 		});
	}
	else if(type === 1){
		ageGroups.forEach(function(d){
			var label = d + "-col";
			var tempController = folder.add(controller, label).name(d).listen();
			ageControllerCol.push(tempController);
		});

		if(activeOptions['age-col']  && canvasExist){updateFunctions[type](activeOptions['age-col']);}
 		//When an age group is selected do something...
 		ageControllerCol.forEach(function(d){
 			d.onFinishChange(function(value) {
			  // Fires when a controller loses focus. fires after selection for category
			  if (value){
			  	//add to active
			  	var ageStr = this.property;
			  	var index = ageGroups.indexOf(ageStr.substring(0,ageStr.indexOf("-col")));

			  	if (index !== -1) {
			  		activeOptions['age-col'].push(index.toString());
			  	}
			  }else{
			  	//remove from active
			  	var ageStr = this.property;
			  	var index = ageGroups.indexOf(ageStr.substring(0,ageStr.indexOf("-col")));
			  	activeOptions['age-col'] = remove(activeOptions['age-col'], index.toString());
			  }

			  updateFunctions[type](activeOptions['age-col']);
			});
 		});
	}
	else if(type === 2){
		if(!ageControllerCell){
			ageControllerCell = folder.add(controller, 'Age Groups', ageGroups).name('Age Groups').listen();
			//When a category is selected update
			if(activeOptions['age-cell'] && canvasExist){updateFunctions[type](activeOptions['age-cell']);}
			ageControllerCell.onFinishChange(function(value) {
			  // Fires when a controller loses focus. fires after selection for category
			  var index = ageGroups.indexOf(value.slice(0,5));
			  activeOptions['age-cell'] = index;
			  updateFunctions[type](index);
			});
		}	
	}
}

function updateCategories(updateFunctions, type, folder){
	var prefix = "Diseases of ";
	var canvasExist = (document.getElementById('canvas') === null) ? false : true;
	if(type === 0){
		categories.slice(0,9).forEach(function(category){
			var repeatStr = category.indexOf(prefix);
			var objectLabel = (repeatStr > -1) ? category.slice(prefix.length) + "-row" : category.slice(0,4) + "-row";
			var tempController = folder.add(controller, objectLabel).name(category).listen();
			categoryControllerRow.push(tempController);
		});

		if(activeOptions['category-row'] && canvasExist){updateFunctions[type](activeOptions['category-row']);}
		//When an age group is selected do something...
 		categoryControllerRow.forEach(function(d){
 			d.onFinishChange(function(value) {
			  	// Fires when a controller loses focus. fires after selection for category
			  	var index = -1;
			  	categories.slice(0,9).forEach(function(d, i){
			  		if(d.includes(this.property)){ index = i;}
			  	});

			  	if (value){
				  	//add to active
				  	if (index !== -1) {
				  		activeOptions['category-col'].push(index.toString());
				  	}
			  	}else{
			  		//remove from active
			  		activeOptions['category-col'] = remove(activeOptions['category-col'], index.toString());
			  	}

			  	updateFunctions[type](activeOptions['category-col']);
			  });
 		});
	}
	else if(type === 1){
		categories.slice(0,9).forEach(function(category){
			var repeatStr = category.indexOf(prefix);
			var objectLabel = (repeatStr > -1) ? category.slice(prefix.length) + "-col" : category.slice(0,4) + "-col";
			var tempController = folder.add(controller, objectLabel).name(category).listen();
			categoryControllerCol.push(tempController);
		});

		if(activeOptions['category-col']  && canvasExist){updateFunctions[type](activeOptions['category-col']);}
		//When an age group is selected do something...
 		categoryControllerCol.forEach(function(d){
 			d.onFinishChange(function(value) {
			  	// Fires when a controller loses focus. fires after selection for category
			  	var index = -1;
			  	var disease = this.property;
			  	categories.slice(0,9).forEach(function(d, i){
			  		if(d.includes(disease.substring(0,disease.indexOf("-")))){ index = i;}
			  	});
			  	
			  	if (value){
				  	//add to active
				  	if (index !== -1) {
				  		activeOptions['category-col'].push(index.toString());
				  	}
			  	}else{
			  		//remove from active
			  		activeOptions['category-col'] = remove(activeOptions['category-col'], index.toString());
			  	}

			  	updateFunctions[type](activeOptions['category-col']);
			  });
 		});
	}
	else if(type === 2){
		if(!categoryControllerCell){
 			categoryControllerCell = folder.add(controller, 'Category', categories.slice(0,9)).name('Category').listen();

 			if(activeOptions['category-cell']  && canvasExist){updateFunctions[type](activeOptions['category-cell']);}
			//When a category is selected update
			categoryControllerCell.onFinishChange(function(value) {
			  // Fires when a controller loses focus. fires after selection for category
			  var index = categories.indexOf(value);
			  activeOptions['category-cell'] = index;
			  updateFunctions[type](index);
			});
		}
	}
}

function removeSexFromFolder(folder, type){
	if(type === 0  && sexControllerRow ){
		sexControllerRow.remove();
		sexControllerRow = null;
	}
	else if(type === 1 && sexControllerCol ){
		sexControllerCol.remove();
		sexControllerCol = null;
	}
	else if(type === 2 && sexControllerCell){
		sexControllerCell.remove();
		sexControllerCell = null;
	}
}

function removeAgeFromFolder(folder, type){
	if(type === 0 && ageControllerRow){
		ageControllerRow.forEach(function(d){ d.remove(); });
		ageControllerRow = [];
	}
	else if(type === 1 && ageControllerCol){
		ageControllerCol.forEach(function(d){ d.remove(); });
		ageControllerCol = [];
	}
	else if(type === 2 && ageControllerCell){
		ageControllerCell.remove();
		ageControllerCell = null;
	}
}

function removeCategoryFromFolder(folder , type){
	if(type === 0 && categoryControllerRow){
		categoryControllerRow.forEach(function(d){ d.remove(); });
		categoryControllerRow = [];
	}
	else if(type === 1 && categoryControllerCol){
		categoryControllerCol.forEach(function(d){ d.remove(); });
		categoryControllerCol = [];
	}
	else if(type === 2 && categoryControllerCell){
		categoryControllerCell.remove();
		categoryControllerCell = null;
	}
}

function addOrRemoveFolder(value, folder, type){
	var updateFunctions = [updateRowVal, updateColVal, updateCellVal ];

	if (value.includes("Sex")){ updateSex(updateFunctions, type, value, folder);}
	else { removeSexFromFolder(folder, type);}

	if(value.includes("Age")){ updateAge(updateFunctions, type, folder);}
	else{ removeAgeFromFolder(folder, type);}

	if(value.includes("Cat")){ updateCategories(updateFunctions, type, folder);}
	else{ removeCategoryFromFolder(folder , type); }
}

//Error Checks...
rowOptions.onFinishChange(function(value){
	updateAllocation(value, 'row')
	addOrRemoveFolder(value, rowFolder, 0);
});

columnOptions.onFinishChange(function(value){
	updateAllocation(value, 'col')
	addOrRemoveFolder(value, colFolder, 1);
});

cellOptions.onFinishChange(function(value){
	updateAllocation(value, 'cell')
	addOrRemoveFolder(value, cellFolder, 2);
});

function remove(array, element) {
	const index = array.indexOf(element);

	if (index !== -1) {
		array.splice(index, 1);
	}

	return array;
}