// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'
function fetchData(){
    let query= document.querySelector('#queryType').value;
    let  Id= document.querySelector('#itemID').value
}
getFromSWAPI(query,Id);

function getFromSWAPI(queryType,itemID) {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.
function updateInfo(data){
    const keys=object.keys(data);
    document.querySelector('#dataLabel1').innertext=keys[0].replace(/_/g, " ");
    document.querySelector('#dataValue1').innertext=data[keys[0]];
    document.querySelector('#dataLabel2').innertext=keys[5].replace(/_/g," ");
    document.querySelector('#dataValue2').innertext= data[keys[5]];
};