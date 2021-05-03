var cityList;
var citiesReady = false;

var retryCount = 0, maxRetryCount = 50;

function jsonDataReadyCallback()
{
    if(cityList!=undefined)
    {
        console.log("Cities Loaded!");
        console.log(cityList);
        $( "#citySearchInput" ).autocomplete({
            source: cityList
          });
        return;
    }
    console.log("Looks like the city list is not loaded.");
    if(retryCount >= maxRetryCount)
    {
        console.log("Stopping check ...");
    }
    console.log("Will check back in 1 second ...");
    setTimeout(jsonDataReadyCallback, 1000);
}

$(function() {
    $.getJSON("../JSON/cities_name_list.json", function(json) {
        cityList=json;
    }); 
    jsonDataReadyCallback();
  });

