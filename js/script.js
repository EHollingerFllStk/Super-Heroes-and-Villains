console.log("connected")

//10159819421940743 access token

//////Assign Variables///////

// const URL = 'https://superheroapi.com/api/10159819421940743/245/powerstats'

// console.log(URL)

///CACHED ELEMENTS/ELEMNTS REFERENCES////

const $name = $('#name')
const $powerStats = $('#powerstats')
const $form = $('form')
const $input = $('input[type="text"]')

// ////EVENT LISTENERS////

$form.on('submit', handleGetData)

// ////FUNCTIONS////

function handleGetData(event) {
    event.preventDefault()
    console.log("clicked")
    userInput = $input.val()
    //if (userInput === '') return;

    $.ajax(`https://superheroapi.com/api.php/10159819421940743/search/${userInput}`).then(
        function (data) {
            console.log("the eagle has landed");
            console.log('stats', data.results)
            $name.text(data.results[0].name)
            console.log(data.results[0].name)
            // $powerstats.text(data.stats[0].powerstats)
            // console.log(data.stats[0].powerstats)
            // //$powerStats.text = $('data.powerstats')

            
               },
        function (error) {
            console.log("broken")
            console.log(error)
        }
    );
}

