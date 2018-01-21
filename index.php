<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"> 
    <style defer src="/css/fontawesome-all.min.css"></style>
    <link rel="stylesheet" type="text/css" href="css/layout.css"/>
    <link rel="stylesheet" type="text/css" href="css/main.css"/>
    <link rel="stylesheet" type="text/css" href="css/components.css"/>
    <script defer src="fontawesome-all.js"></script>
    <script defer src="js/main.js"></script>
</head>
<body>
   <nav id="navSection">
       <ul>
         <li><div class="btnCircleSmall"><i class="fas fa-map-marker"></i></div></li> 
          <li><div class="btnCircleSmall"><i class="fas fa-ellipsis-h"></i></div></li> 
       </ul>
   </nav>
   <div>
       <ul>
           <li></li>
       </ul>
   </div>
   <div id="outerWrapper">
   <div class="wrapper">
    <div id="refreshIcon" onclick="refreshData()">
        <div><i class="fas fa-sync-alt"></i></div>
    </div>
    <h1 id="title">Stormy</h1>
    
    <ul id="locationSection">
        <li><h3 id="cityLabel">-</h3></li>
        <li><h3 id="countryLabel">-</h3></li>
        <li id="timeLabel">-</li>
    </ul>
    
    
    <h1 id="temperatureLabel">-</h1>
    
    
    <ul id="detailsSection">
        <ul id="humiditySection">
             <li id="humidityLabel">HUMIDITY</li>
             <li id="humidityData">-</li>
        </ul>
        <ul id="precipSection">
            <li id="precipLabel">RAIN/SNOW</li>
            <li id="precipData">-</li>
        </ul>
    </ul> 
    
    <p id="summaryLabel">-</p>
</div>
   
   <footer>
       <ul id="footerSection">
           <li><a href="https://darksky.net/forecast/40.7127,-74.0059/us12/en">Powered by Dark Sky</a></li>
            <li>Made with <i class="fas fa-heart"></i> by Angus Miller <?php echo date("Y"); ?></li>
        </ul> 
    </footer>
    </div>
    
    
</body>

</html>


