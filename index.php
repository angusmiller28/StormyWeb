<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body >
    <h1>Stormy</h1>
    <p>A weather app for the real</p>
    <h3 id="locationLabel">Alcatraz Calfornia, CA</h3>
    
    <p id="timeLabel">At 7:15 AM it will be</p>
    
    <h1 id="temperatureLabel">46</h1>
    
    <p id="humidityLabel">HUMIDITY</p>
    <p id="humidityData">0.93</p>
    
    
    <p id="percentageLabel">HUMIDITY</p>
    <p id="percentageData">0.93</p>
    
    <p id="summaryLabel">Mostly Cloudy</p>
    
</body>
<script type="application/javascript">
    $(document).ready(function(){
        getWeather();
        var location = getLocation();
        var apikey = "0ebb9731ed62a65ff62287e2dd8eddfd";
        var url = "https://api.darksky.net/forecast/" + apikey + "/" + getLocation();
        
        console.log(url);
        
        function getWeather(){
          $.ajax({
              format: "jsonp",
              dataType: "jsonp",
              url: "https://api.darksky.net/forecast/0ebb9731ed62a65ff62287e2dd8eddfd/37.8267,-122.4233",
              success: function(json) {  
                updateUI(json);
              },
              method: "GET"
          });
        }
        
        function getLocation(){
            $.ajax({
                format: "jsonp",
                dataType: "jsonp",
                url: "http://ip-api.com/json",
                success: function(data) {
                    var location = (data.lat + "," + data.lon);
                    return location;
                },
                method: "GET"
            });
            return location;
        }
        
        function updateUI(data){
            console.log(data.longitude);
        }
        
    });
    

    
</script>
</html>


