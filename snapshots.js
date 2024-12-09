//API that fetches current user location 
$.getJSON('https://geolocation-db.com/json/')
 .done (function(location) {
    coords.lat = location.latitude;
    coords.lng = location.longitude;
    coords.city = location.city;
 });

 <div class="vb-card-service col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
 <div class="icons">
     <i class="fa fa-check"></i>
 </div>
 <h5 class="service-name-desc">
     <div class="service-title">Sunday</div>
     <div class="service-desc">
         <span class="five-day-update"><i class="fa fa-sun"></i> <span id="sun-temperature">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="sun-humidity">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="sun-cloudy">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-rain"></i> <span id="sun-wind">0</span></span>
     </div>
 </h5>
</div>
<div class="vb-card-service col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
 <div class="icons">
     <i class="fa fa-check"></i>
 </div>
 <h5 class="service-name-desc">
     <div class="service-title">Monday</div>
     <div class="service-desc">
         <span class="five-day-update"><i class="fa fa-sun"></i> <span id="mon-temperature">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="mon-humidity">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="mon-cloudy">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-rain"></i> <span id="mon-wind">0</span></span>
     </div>
 </h5>
</div>
<div class="vb-card-service col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
 <div class="icons">
     <i class="fa fa-check"></i>
 </div>
 <h5 class="service-name-desc">
     <div class="service-title">Tuesday</div>
     <div class="service-desc">
         <span class="five-day-update"><i class="fa fa-sun"></i> <span id="tue-temperature">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="tue-humidity">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="tue-cloudy">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-rain"></i> <span id="tue-wind">0</span></span>
     </div>
 </h5>
</div>
<div class="vb-card-service col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
 <div class="icons">
     <i class="fa fa-check"></i>
 </div>
 <h5 class="service-name-desc">
     <div class="service-title">Wednesday</div>
     <div class="service-desc">
         <span class="five-day-update"><i class="fa fa-sun"></i> <span id="wed-temperature">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="wed-humidity">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="wed-cloudy">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-rain"></i> <span id="wed-wind">0</span></span>
     </div>
 </h5>
</div>
<div class="vb-card-service col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
 <div class="icons">
     <i class="fa fa-check"></i>
 </div>
 <h5 class="service-name-desc">
     <div class="service-title">Thursday</div>
     <div class="service-desc">
         <span class="five-day-update"><i class="fa fa-sun"></i> <span id="thur-temperature">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="thur-humidity">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="thur-cloudy">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-rain"></i> <span id="thur-wind">0</span></span>
     </div>
 </h5>
</div>
<div class="vb-card-service col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
 <div class="icons">
     <i class="fa fa-check"></i>
 </div>
 <h5 class="service-name-desc">
     <div class="service-title">Friday</div>
     <div class="service-desc">
         <span class="five-day-update"><i class="fa fa-sun"></i> <span id="fri-temperature">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="fri-humidity">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-sun"></i> <span id="fri-cloudy">0</span></span>
         <span class="five-day-update"><i class="fa fa-cloud-rain"></i> <span id="fri-wind">0</span></span>
     </div>
 </h5>
</div>