console.log("connected")

//10159819421940743 access token

//////Assign Variables///////

// const URL = 'https://superheroapi.com/api/10159819421940743/245/powerstats'

// console.log(URL)

///CACHED ELEMENTS/ELEMNTS REFERENCES////

const $name = $('#name')
const $powerstats = $('#powerstats')
const $combat = $('#combat')
const $durability = $('#durability')
const $intelligence = $('#intelligence')
const $power = $('#power')
const $speed = $('#speed')
const $strength = $('#strength')
const $image = $('#target')

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
            //console.log(data)
            $name.text(data.results[0].name)
            console.log(data.results[0].name)
            console.log(data.results[0].powerstats.combat)
            $combat.text(data.results[0].powerstats.combat)
            console.log(data.results[0].powerstats.durability)
            $durability.text(data.results[0].powerstats.durability)
            console.log(data.results[0].powerstats.intelligence)
            $intelligence.text(data.results[0].powerstats.intelligence)
            console.log(data.results[0].powerstats.power)
            $power.text(data.results[0].powerstats.power)
            console.log(data.results[0].powerstats.speed)
            $speed.text(data.results[0].powerstats.speed)
            console.log(data.results[0].powerstats.strength)
            $strength.text(data.results[0].powerstats.strength)
            $image.attr("src", data.results[0].image["url"])
            $input.val('')
        },
        function (error) {
            console.log("broken")
            console.log(error)
        }
    );
    
}

