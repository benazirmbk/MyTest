const URL = 'https://restcountries.com/v2/all'
fetch(URL)
	.then(res => res.json())
	.then(data => renderData(data))

function renderData(dataArray) {
	dataArray.forEach(country => {
		let prod = `<a href=${country.flag} class="country-frame">
					<p class="country-title">${country.name}</p>
					<img
						src=${country.flag}
						alt="country"
					/>
					
				</a>`
		document.querySelector('.countries').innerHTML += prod
	})
}
