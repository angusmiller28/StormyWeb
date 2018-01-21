
$(document).ready(function(){
        getLocation(); 
        
        var apikey = "0ebb9731ed62a65ff62287e2dd8eddfd";
        var url = "https://api.darksky.net/forecast/" + apikey + "/" + getLocation();
        
        console.log(url);
});
    
/***************************
********* Listener ********/
function refreshData(){
    playRefreshAnimation();
    getLocation();
    stopRefreshAnimation();
}

function playRefreshAnimation(){
    $("#refreshIcon").addClass("refreshIconAnimation");
}

function stopRefreshAnimation(){
    
    var delayInMilliseconds = 4000; 

    setTimeout(function() {
        $("#refreshIcon").removeClass("refreshIconAnimation");
    }, delayInMilliseconds);

}

/***********************
********* Other *******/
function setTheme(data){
    // colours
    var backgroundColorClear = "#F0CA4D";
    var backgroundColorClearMid = "#D7B134";
    var backgroundColorClearDarken = "#BD971A";
    var textColorClear = "#A47E01";
    var themeAccentClear = "";
    var backgroundColorRain = "#4CE4EF";
    var backgroundColorRainMid = "#33CBD6";
    var backgroundColorRainDarken = "#19B1BC";
    var textColorRain = "#0098A3";
    var themeAccentRain = "";
    var backgroundColorSnow = "#DD4CEF";
    var backgroundColorSnowMid = "#C433D6";
    var backgroundColorSnowDarken = "#AA19BC";
    var textColorSnow = "#9100A3";
    var themeAccentSnow = "";
    var backgroundColorSleet = "#E37B40";
    var backgroundColorMid = "#CA6227";
    var backgroundColorSleetDarken = "#B0480D";
    var textColorSleet = "#972F00";
    var themeAccentSleet = "";
    var backgroundColorWind = "#F53855";
    var backgroundColorWindMid = "#DC1F3C";
    var backgroundColorWindDarken = "#C20522";
    var textColorWind = "#A90009";
    var themeAccentWind = "";
    var backgroundColorFog = "#46B29D";
    var backgroundColorFogMid = "#2D9984";
    var backgroundColorFogDarken = "#137F6A";
    var textColorFog = "#006651";
    var themeAccentFog = "";
    var backgroundColorCloudy = "#534CEF";
    var backgroundColorCloudyMid = "#3A33D6";
    var backgroundColorCloudyDarken = "#2019BC";
    var textColorCloudy = "#0700A3";
    var themeAccentCloudy = "";
    var backgroundColorPartlyCloudy = "#AFEF4C";
    var backgroundColorPartlyCloudyMid = "#96D633";
    var backgroundColorPartlyCloudyDarken = "#7CBC19";
    var textColorPartlyCloudy = "#63A300";
    
    var icon = data.currently.icon;
    
    switch(icon){
        case "clear-day":
            $("body").css("background-color" , backgroundColorClear);
            $("#refreshIcon").css("background-color" , backgroundColorClear);
            $("footer").css("background-color" , backgroundColorClearMid);
            $("footer a").css("color" , textColorClear);
            break;
        case "rain":
            $("body").css("background-color" , backgroundColorRain);
            $("#refreshIcon").css("background-color" , backgroundColorRainDarken);
            $("footer").css("background-color" , backgroundColorRainMid);
            $("footer a").css("color" , textColorRain);
            break;
        case "snow":
            $("body").css("background-color" , backgroundColorSnow);
            $("#refreshIcon").css("background-color" , backgroundColorSnowDarken);
            $("footer").css("background-color" , backgroundColorSnowMid);
            $("footer a").css("color" , textColorSnow);
            break;
        case "sleet":
            $("body").css("background-color" , backgroundColorSleet);
            $("#refreshIcon").css("background-color" , backgroundColorSleetDarken);
            $("footer").css("background-color" , backgroundColorSleetMid);
            $("footer a").css("color" , textColorSleet);
            break;
        case "wind":
            $("body").css("background-color" , backgroundColorWind);
            $("#refreshIcon").css("background-color" , backgroundColorWindDarken);
            $("footer").css("background-color" , backgroundColorWindMid);
            $("footer a").css("color" , textColorWind);
            break;
        case "fog":
            $("body").css("background-color" , backgroundColorFog);
            $("#refreshIcon").css("background-color" , backgroundColorFogDarken);
            $("footer").css("background-color" , backgroundColorFogMid);
            $("footer a").css("color" , textColorFog);
            break;
        case "cloudy":
            $("body").css("background-color" , backgroundColorCloudy);
            $("#refreshIcon").css("background-color" , backgroundColorCloudyDarken);
            $("footer").css("background-color" , backgroundColorCloudyMid);
            $("footer a").css("color" , textColorCloudy);
            break;
        case "partly-cloudy-day":
            $("body").css("background-color" , backgroundColorPartlyCloudy);
            $("#refreshIcon").css("background-color" , backgroundColorPartlyCloudyDarken);
            $("footer").css("background-color" , backgroundColorPartlyCloudyMid);
            $("footer a").css("color" , textColorPartlyCloudy);
            break;
        default:
            $("body").css("background-color" , backgroundColorClear);
            $("#refreshIcon").css("color" , backgroundColorClearDarken);
            $("footer").css("background-color" , backgroundColorClearMid);
            $("footer a").css("color" , textColorClear);
    }
    
}

function getWeather(location){
    $.ajax({
              format: "jsonp",
              dataType: "jsonp",
              url: "https://api.darksky.net/forecast/0ebb9731ed62a65ff62287e2dd8eddfd/"+location,
              success: function(json) {  
                updateUI(json);
                setTheme(json);
              },
              method: "GET"
          });
}
        
function getLocation(){
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    return navigator.geolocation.getCurrentPosition(success, error, options);
}

function success(pos) {
  var crd = pos.coords;
    
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  var locationCrds = crd.latitude + "," + crd.longitude;
    
  getWeather(locationCrds);
  
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};


function updateUI(data){
   
   console.log(data.currently.temperature); 
   $("#cityLabel").text(getCity(data));
   $("#countryLabel").text(getCountry(data));
   $("#timeLabel").text("At " + getFormattedTime(data.currently.time) + " it will be"); $("#temperatureLabel").text(data.currently.temperature);
    $("#humidityData").text(data.currently.humidity); $("#precipData").text(data.currently.precipProbability);

    $("#summaryLabel").text(data.currently.summary);
}

function getCountry(data){
    var d = data.timezone
    d = d.split("/");
    var country = d[0].replace("_", " ");
    return country;
}

function getCity(data){
    var d = data.timezone
    d = d.split("/");
    var city = d[1].replace("_", " ");
    return city;
}

function getFormattedTime(time){

    var now = new Date();
    now.setMilliseconds(time);


    let options = {  
        hour: '2-digit',
        minute: '2-digit'
    };

    now.toLocaleString('en-us', options); 

    return (now.toLocaleString('en-us', options));

}