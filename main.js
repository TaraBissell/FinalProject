document.getElementById('getData').addEventListener('click', getTheData)

const apiURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

function getTheData() {
    console.log('This button was pressed..here is your data')
    fetch(apiURL)
    .then(function (response) {
        console.log(response.json());
    })
    .then(function(data) {
        document.getElementById('myRecipe').innerHTML = recipe 
        let foodImage = data.meals[0].strMealThumb
        document.getElementById('theImage').scr = foodImage
    })
}