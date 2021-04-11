var form = document.querySelector('form');
form.addEventListener('submit', function(e){
	e.preventDefault();
	var inpValue = e.target.querySelector('input').value;
	fetchDataAPI(inpValue)
})

async function fetchDataAPI(inpValue){
	app_id = 'd8feb9b1';
    app_key = 'cd9cb2390f98fe12e951f5df71d0b41e';
    baseURl = `https://api.edamam.com/search?q=${inpValue}&app_id=${app_id}&app_key=${app_key}&to=4`;
	result = await fetch(baseURl)
	data = await result.json();
	console.log(data)
	genreateHTML(data.hits)
}

function genreateHTML(results){
	showINHTML = '';
	results.map(result => {
		showINHTML +=
		`<div class="col-md-3 mb-3">
				<div class="card">
					<img src="${result.recipe.image}" alt="" class='img-fluid'>
		                <h6 class=' text-center my-2 text-truncate'>${result.recipe.label}</h6>
		                <div class="d-flex justify-content-between align-items-center">
		                    <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
		                    <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
		                </div>
		            </div>
				</div>
			</div>`
			document.querySelector('#showRecipe').innerHTML = showINHTML;
	})
}