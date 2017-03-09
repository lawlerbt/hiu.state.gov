
  /*manages Prev and Next buttons on modals */
  var addButtons = function( jpegDisplayNumber, dropdownCount, dropdown, modal) {
      /*console.log('jpegDisplayNumber');
      console.log(jpegDisplayNumber);*/
      if (jpegDisplayNumber == dropdownCount) {
          /*display prev button only*/
          $('.close').after('<button type="button" class="btn btn-default btn-next" style="float: right;margin-right: 5px;">Next Page</button><button type="button" class="btn btn-default btn-prev" style="float: right;margin-right: 5px;">Prev Page</button>');

          $('.modal-footer').prepend('<button type="button" class="btn btn-default btn-prev">Prev Page</button><button type="button" class="btn btn-default btn-next">Next Page</button>');

          $('.btn-next').prop("disabled", true);

          /*adding modal header text, ex. Page 1 of X*/
          $('.modal-header .btn-prev').after('<span class="modal-header-text" style="float: right;margin-right: 8px;margin-top: 8px;">Page '+(jpegDisplayNumber-1)+' of '+(dropdownCount-1)+'</span>');

          /*adding modal header text, ex. Page 1 of X*/
          $('.modal-footer .btn-prev').before('<span class="modal-footer-text" style="margin-right: 8px;margin-top: 8px;">Page '+(jpegDisplayNumber-1)+' of '+(dropdownCount-1)+'</span>');

          $( ".btn-prev" ).on( "click", function() {
                console.log( 'activate prev button only' );
                  console.log( 'jpegDisplayNumber valx1' );
                console.log(jpegDisplayNumber);
                jpegDisplayNumber--;
                  console.log( 'jpegDisplayNumber valx2' );
                console.log(jpegDisplayNumber);
                  console.log( 'dropdown val' );
                console.log($(dropdown).find("li"));
                modal.find('#modal-img').attr("src",$(dropdown).find("li").eq(jpegDisplayNumber-1).find("a").attr("href"));
                $('.btn-prev,.btn-next').remove();
                $('.modal-header-text,.modal-footer-text').remove();
                  
                addButtons( jpegDisplayNumber, dropdownCount, dropdown, modal);
              });
          /*console.log('why would this run');
          jpegDisplayNumber = 2;*/
          return 'final page';
        } else {
            if ((jpegDisplayNumber-1) == 1) {
                /*display next button only*/
                $('.close').after('<button type="button" class="btn btn-default btn-next" style="float: right;margin-right: 5px;">Next Page</button><button type="button" class="btn btn-default btn-prev" style="float: right;margin-right: 5px;">Prev Page</button>');

                $('.modal-footer').prepend('<button type="button" class="btn btn-default btn-prev">Prev Page</button><button type="button" class="btn btn-default btn-next">Next Page</button>');

                $('.btn-prev').prop("disabled", true);

                /*adding modal header text, ex. Page 1 of X*/
                $('.modal-header .btn-prev').after('<span class="modal-header-text" style="float: right;margin-right: 8px;margin-top: 8px;">Page '+(jpegDisplayNumber-1)+' of '+(dropdownCount-1)+'</span>');

                /*adding modal header text, ex. Page 1 of X*/
                $('.modal-footer .btn-prev').before('<span class="modal-footer-text" style="margin-right: 8px;margin-top: 8px;">Page '+(jpegDisplayNumber-1)+' of '+(dropdownCount-1)+'</span>');

                $( ".btn-next" ).on( "click", function() {
                  /*console.log( 'jpegDisplayNumber val' );
                  console.log(jpegDisplayNumber);
                  console.log( 'jpegDisplayNumberConst val' );
                  console.log(jpegDisplayNumber);
                  console.log( $(dropdown).find("li").eq(2).find("a").attr("href"));*/

                  jpegDisplayNumber++;
                  /*however since it you are finding the right length in the array and the array starts at zero
                  you need to subtract 1 again
                  switch out img with next img*/
                  modal.find('#modal-img').attr("src",$(dropdown).find("li").eq(jpegDisplayNumber-1).find("a").attr("href"));
                  $('.btn-prev,.btn-next').remove();
                  $('.modal-header-text,.modal-footer-text').remove();
                  
                  addButtons( jpegDisplayNumber, dropdownCount, dropdown, modal);
                });
                return 'next';
            } else {
                /*display next & prev button*/
                $('.close').after('<button type="button" class="btn btn-default btn-next" style="float: right;margin-right: 5px;">Next Page</button><button type="button" class="btn btn-default btn-prev" style="float: right;margin-right: 5px;">Prev Page</button>');

                $('.modal-footer').prepend('<button type="button" class="btn btn-default btn-prev">Prev Page</button><button type="button" class="btn btn-default btn-next">Next Page</button>');

                /*adding modal header text, ex. Page 1 of X*/
                $('.modal-header .btn-prev').after('<span class="modal-header-text" style="float: right;margin-right: 8px;margin-top: 8px;">Page '+(jpegDisplayNumber-1)+' of '+(dropdownCount-1)+'</span>');

                /*adding modal header text, ex. Page 1 of X*/
                $('.modal-footer .btn-prev').before('<span class="modal-footer-text" style="margin-right: 8px;margin-top: 8px;">Page '+(jpegDisplayNumber-1)+' of '+(dropdownCount-1)+'</span>');

                $( ".btn-prev" ).on( "click", function() {
                  console.log( 'activate prev button only' );
                  jpegDisplayNumber--;
                  modal.find('#modal-img').attr("src",$(dropdown).find("li").eq(jpegDisplayNumber-1).find("a").attr("href"));
                  $('.btn-prev,.btn-next').remove();
                  $('.modal-header-text,.modal-footer-text').remove();

                  addButtons( jpegDisplayNumber, dropdownCount, dropdown, modal);
                });

                /*console.log( 'jpegDisplayNumber val2' );
                console.log(jpegDisplayNumber);*/

                $( ".btn-next" ).on( "click", function() {
                  console.log( 'activate next button only' );
                  jpegDisplayNumber++;
                  modal.find('#modal-img').attr("src",$(dropdown).find("li").eq(jpegDisplayNumber-1).find("a").attr("href"));
                  $('.btn-prev,.btn-next').remove();
                  $('.modal-header-text,.modal-footer-text').remove();
                  /*$('.btn-prev').remove();*/
                  
                  addButtons( jpegDisplayNumber, dropdownCount, dropdown, modal);
                });

                /*jpegDisplayNumber++;*/
                return 'next';
            }
        }
    }


$('#myModal').on('show.bs.modal', function (event) {

  var jpegDisplayNumber = 2;
  var button = $(event.relatedTarget);  /*Button that triggered the modal*/
  var title = button.data('title');  /*Extract info from data-* attributes*/
  /*console.log('title-data: ');
  console.log(title);*/
  var img = button.data('img')  /*Extract info from data-* attributes*/
  /*console.log('img-data: ');
  console.log(img);*/
   /*If necessary, you could initiate an AJAX request here (and then do the updating in a callback).*/

  window.location.hash = button.data('href');

   /*Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.*/
  var modal = $(this)
  modal.find('.modal-title').text(title);
  modal.find('#modal-img').attr("src",img);

  /*need a list of all the pages in a product; actually I do not, just parse based on what is in the download button!
  if list is 2, then just add a next button*/
  /*console.log('display modal parents id');
  console.log(button.closest(".item"));*/
  var item = button.closest(".item")
  var dropdown = item.find(".dropdown");
  /*console.log('display assoc dropdown');
  console.log(dropdown);*/

  /*look through the dropdown menu's items from the item that got clicked to populate*/
  var dropdownMenu = item.find(".dropdown-menu");
  /*console.log('dropdownMenu inner html');
  console.log(dropdownMenu.html());*/

  modal.find('#modal-dropdownfill').html(dropdownMenu.html());

  /*console.log('dropdown li count');
  console.log($(dropdown).find("li").length);*/

  var dropdownCount = $(dropdown).find("li").length


  if (dropdownCount > 2) {
      addButtons( jpegDisplayNumber, dropdownCount, dropdown, modal);
  }

})

$('#myModal').on('hidden.bs.modal', function () {
    /* do something…
    console.log('modal is closing');*/
    $('.btn-prev,.btn-next').remove();
    $('.modal-header-text,.modal-footer-text').remove();
})


    L.TopoJSON = L.GeoJSON.extend({  
      addData: function(jsonData) {    
        if (jsonData.type === "Topology") {
          for (key in jsonData.objects) {
            geojson = topojson.feature(jsonData, jsonData.objects[key]);
            L.GeoJSON.prototype.addData.call(this, geojson);
          }
        }    
        else {
          L.GeoJSON.prototype.addData.call(this, jsonData);
        }
      }  
    });


    jQuery(document).ready(function($){
      var path = window.location.href.split("/").pop();

      /*console.log(path);

      It won't work because all of the products need to load first
      based on link it can look-up region and preload region first*/

    });

    /*Sets a window activeListingID variable, the leaflet-list-markers.src.js script uses
    this to keep a product item selected*/

    window.activeListingID = 'none';

    /*This resets the activeListingID if the home tab is selected*/
    $('#home').click(function() {
      activeListingID = 'none1';
    });

    window.selectedID = 'none';

    window.leftLayer = true;

    /*if you run these commands in the console, it will open the right tab and populate it
    window.clickTab('NEA')
    window.sidebar.open('NEA')*/

    /*commenting out closure for now
    (function(){

    var map = L.map('map').setView([0, 30], 3);

    L.mapbox.accessToken = 'pk.eyJ1IjoiaGl1IiwiYSI6InJWNGZJSzgifQ.xK1ndT3W8XL9lwVZrT6jvQ';

    need to make map a window variable to make it seen in leaflet-list-markers.src.js
    probably because all of this in inside of its own contained function*/
    window.map = L.map('map', {
        attributionControl: {collapsed: true},
        maxBounds:[ [-85, -190], [90, 190] ],
        maxBoundsViscosity: 1.0,
        minZoom: 3
      }).setView([20, 0], 3);

    /*Use styleLayer to add a Mapbox style created in Mapbox Studio*/
    var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/hiu/cit0gm97500012ypfwnzijj6o/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGl1IiwiYSI6InJWNGZJSzgifQ.xK1ndT3W8XL9lwVZrT6jvQ',{
    /*var baseLayer = L.tileLayer('api.mapbox.com/styles/v1/hiu/ciyd2k8k300352sqs2vytdguw/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGl1IiwiYSI6InJWNGZJSzgifQ.xK1ndT3W8XL9lwVZrT6jvQ',{*/
      minZoom: 1,
      maxZoom: 10,
      scrollWheelZoom: true,
      zoomControl: false,
      attribution: 'Names and boundary representation are not necessarily authoritative'
    }).addTo(map);

/*
    var Labels = L.tileLayer('api.mapbox.com/styles/v1/hiu/ciua29cno001p2imv942m1kfv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGl1IiwiYSI6InJWNGZJSzgifQ.xK1ndT3W8XL9lwVZrT6jvQ', {
      pane: 'labels'
    }).addTo(map);
*/

    map.zoomControl.setPosition('topright');

    var topoLayer = new L.TopoJSON()

    $.getJSON('assets/data/bureau_outline_topojson5.json')
      .done(addTopoData);

    /*I'm still using panes, then binging the Labels (which are tooltips) to the pane
    This way the labels will stay below the cluster markers
    leafletjs.com/examples/map-panes/*/
    map.createPane('labels');
    map.getPane('labels').style.zIndex = 550;
    map.getPane('labels').style.pointerEvents = 'none';

    var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    /*using leaflet-ajax to import geojson, github.com/calvinmetcalf/leaflet-ajax
    
    var geojsonLayer = new L.GeoJSON.AJAX("assets/country_labels_large.geojson", {
          pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
          }
        }).addTo(map);
    */


    /*gis.stackexchange.com/questions/59571/how-to-add-text-only-labels-on-leaflet-map-with-no-icon*/
    function onEachFeatureLargeLabels(feature, layer) {
        /*layer.setStyle({'opacity' :'.5'});*/
        if (feature.properties && feature.properties.NAME) {
            if (feature.properties.Italics == "Y") {
              layer.bindTooltip(feature.properties.NAME, {permanent: true, className: "my-large-country-italics-label", offset: [0, 0], direction: 'center', pane: 'labels' });
          } else {
              layer.bindTooltip(feature.properties.NAME, {permanent: true, className: "my-large-country-label", offset: [0, 0], direction: 'center', pane: 'labels' });
          }
        }
    }

    function onEachFeatureMediumLabels(feature, layer) {
        /*layer.setStyle({'opacity' :'.5'});*/
        if (feature.properties && feature.properties.NAME) {
            if (feature.properties.Italics == "Y") {
              layer.bindTooltip(feature.properties.NAME, {permanent: true, className: "my-medium-country-italics-label", offset: [0, 0], direction: 'center', pane: 'labels' });
          } else {
              layer.bindTooltip(feature.properties.NAME, {permanent: true, className: "my-medium-country-label", offset: [0, 0], direction: 'center', pane: 'labels' });
          }
        }
    }

    function onEachFeatureSmallLabels(feature, layer) {
        /*layer.setStyle({'opacity' :'.5'});*/
        if (feature.properties && feature.properties.NAME) {
            /*layer.bindTooltip("my tooltip text").openTooltip();*/
            if (feature.properties.Italics == "Y") {

              if (feature.properties.direction == "right") {
                  layer.bindTooltip(feature.properties.NAME, {permanent: true, className: "my-small-country-italics-label", offset: [0, 0], direction: 'right', pane: 'labels' });
              } else {
                  layer.bindTooltip(feature.properties.NAME, {permanent: true, className: "my-small-country-italics-label", offset: [0, 0], direction: 'center', pane: 'labels' });
              }

          } else {
              
              if (feature.properties.direction == "right") {
                  layer.bindTooltip(feature.properties.NAME, {permanent: true, className: "my-small-country-label", offset: [0, 0], direction: 'right', pane: 'labels' });
              } else {
                  layer.bindTooltip(feature.properties.NAME, {permanent: true, className: "my-small-country-label", offset: [0, 0], direction: 'center', pane: 'labels' });
              }

          }
        }
    }

/*
    function onEachFeatureSmallItalicsLabels(feature, layer) {
        layer.setStyle({'opacity' :'.5'});
        if (feature.properties && feature.properties.NAME) {
            layer.bindTooltip("my tooltip text").openTooltip();
            layer.bindTooltip(feature.properties.NAME, {permanent: true, className: "my-small-country-italics-label", offset: [0, 0], direction: 'center', pane: 'labels' });
        }
    }
*/

    function onEachFeatureRegions(feature, layer) {
        /*layer.setStyle({'opacity' :'.5'});*/
        if (feature.properties && feature.properties.REGION_NA) {
            /*layer.bindTooltip("my tooltip text").openTooltip();*/
            layer.bindTooltip(feature.properties.REGION_NA, {permanent: true, className: "my-region-label", offset: [0, 0], direction: 'center', pane: 'labels' });
        }
    }

    var geojsonMarkerOptions = {
        radius: 2,
        fillColor: "#ff7800",
        weight: 2,
        opacity: 1,
        fillOpacity: 1,
        opacity: 1
    };

    var leadersStyle = {
        color: "rgb(158,157,159)",
        weight: 2,
        opacity: 0.8
    };
/*
    var geojsonLayer = new L.GeoJSON.AJAX("assets/country_labels_large.geojson", {
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);
          },
          onEachFeature: onEachFeature
        }).addTo(map);
*/
    var RegionLabelsLayer = new L.GeoJSON.AJAX("assets/region_labels.geojson", {
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);
          },
          onEachFeature: onEachFeatureRegions
        }).addTo(map);

    var LargeCountryLabelsLayer = new L.GeoJSON.AJAX("assets/country_labels_large.geojson", {
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);
          },
          onEachFeature: onEachFeatureLargeLabels
        });

    var MediumCountryLabelsLayer = new L.GeoJSON.AJAX("assets/country_labels_medium.geojson", {
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);
          },
          onEachFeature: onEachFeatureMediumLabels
        });

    var SmallCountryLabelsLayer = new L.GeoJSON.AJAX("assets/country_labels_small.geojson", {
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);
          },
          onEachFeature: onEachFeatureSmallLabels
        });

    /*leader lines*/
    var LeadersLabelsLayer = new L.GeoJSON.AJAX("assets/leaders.geojson",{style:leadersStyle});


/*
    var SmallCountryLabelsItalicsLayer = new L.GeoJSON.AJAX("assets/country_labels_small_italics.geojson", {
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, geojsonMarkerOptions);
          },
          onEachFeature: onEachFeatureSmallItalicsLabels
        });
*/

    var regionCountryLabelFontSize = 15;
    var largeCountryLabelFontSize = 13;
    var mediumCountryLabelFontSize = 9;
    var smallCountryLabelFontSize = 5;

    map.on('zoomend', function () {
      console.log('zoomend called');
      console.log(map.getZoom());

      var regionZoomLevel = regionCountryLabelFontSize + (map.getZoom() * 2);
      var largeZoomLevel = largeCountryLabelFontSize + map.getZoom();
      var mediumZoomLevel = mediumCountryLabelFontSize + map.getZoom();
      var smallZoomLevel = smallCountryLabelFontSize + map.getZoom();

      console.log('large label zoom level');
      console.log(largeZoomLevel);

      $('.my-region-label').css("font-size", regionZoomLevel + "px");
      $('.my-large-country-label').css("font-size", largeZoomLevel + "px");
      $('.my-medium-country-label').css("font-size", mediumZoomLevel + "px");
      $('.my-small-country-label').css("font-size", smallZoomLevel + "px");
      $('.my-small-country-italics-label').css("font-size", smallZoomLevel + "px");



      if (map.getZoom() < 4 ) {

          map.removeLayer(RegionLabelsLayer);
          $('.my-region-label').css("font-size", "18px");
          RegionLabelsLayer.addTo(map);

          if (map.hasLayer(LargeCountryLabelsLayer)){
              map.removeLayer(LargeCountryLabelsLayer);
          } else {
              console.log("layer already removed");
          }

      }
      if (map.getZoom() >= 4 ) {
          /*map.removeLayer(geojsonLayer);*/
          if (map.hasLayer(LargeCountryLabelsLayer)){
              console.log("layer already added");
          } else {
              LargeCountryLabelsLayer.addTo(map);
              /*map.addLayer(geojsonLayer);*/
          }

      }

      if (map.getZoom() < 5 ) {
        if (map.hasLayer(MediumCountryLabelsLayer)){
              map.removeLayer(MediumCountryLabelsLayer);

              $('.my-region-label').css("color", "rgb(158,157,158)");
              $('.my-large-country-label').css("color", "rgb(158,157,158)");
              $('.my-medium-country-label').css("color", "rgb(158,157,158)");
              $('.my-medium-country-italics-label').css("color", "rgb(158,157,158)");
              $('.my-small-country-label').css("color", "rgb(158,157,158)");
              $('.my-small-country-italics-label').css("color", "rgb(158,157,158)");
          } else {
              console.log("layer already removed");
          }
      }
      if (map.getZoom() >= 5 ) {
        if (map.hasLayer(MediumCountryLabelsLayer)){
              console.log("layer already added");
          } else {
              MediumCountryLabelsLayer.addTo(map);
              $('.my-region-label').css("color", "rgb(145,144,146)");
              $('.my-large-country-label').css("color", "rgb(145,144,146)");
              $('.my-medium-country-label').css("color", "rgb(145,144,146)");
              $('.my-medium-country-italics-label').css("color", "rgb(145,144,146)");
              $('.my-small-country-label').css("color", "rgb(145,144,146)");
              $('.my-small-country-italics-label').css("color", "rgb(145,144,146)");
          }
      }

      if (map.getZoom() < 6 ) {
        if (map.hasLayer(SmallCountryLabelsLayer)){
              map.removeLayer(SmallCountryLabelsLayer);
              map.removeLayer(LeadersLabelsLayer);

              map.removeLayer(RegionLabelsLayer);
              $('.my-region-label').css("font-size", "18px");
              RegionLabelsLayer.addTo(map);
              /*map.removeLayer(SmallCountryLabelsItalicsLayer);*/

              $('.my-region-label').css("color", "rgb(145,144,146)");
              $('.my-large-country-label').css("color", "rgb(145,144,146)");
              $('.my-medium-country-label').css("color", "rgb(145,144,146)");
              $('.my-medium-country-italics-label').css("color", "rgb(145,144,146)");
              $('.my-small-country-label').css("color", "rgb(145,144,146)");
              $('.my-small-country-italics-label').css("color", "rgb(145,144,146)");
          } else {
              console.log("layer already removed");
          }
      }
      if (map.getZoom() >= 6 ) {
        if (map.hasLayer(SmallCountryLabelsLayer)){
              console.log("layer already added");
          } else {
              SmallCountryLabelsLayer.addTo(map);
              LeadersLabelsLayer.addTo(map);
              map.removeLayer(RegionLabelsLayer);
              /*SmallCountryLabelsItalicsLayer.addTo(map);*/

              $('.my-region-label').css("color", "rgb(132,131,133)");
              $('.my-large-country-label').css("color", "rgb(132,131,133)");
              $('.my-medium-country-label').css("color", "rgb(132,131,133)");
              $('.my-medium-country-italics-label').css("color", "rgb(132,131,133)");
              $('.my-small-country-label').css("color", "rgb(132,131,133)");
              $('.my-small-country-italics-label').css("color", "rgb(132,131,133)");
          }
      }

      if (map.getZoom() < 6 ) {
        if (map.hasLayer(topoLayer)){
              /*do nothing*/
          } else {
              topoLayer.addTo(map);
          }
      }
      if (map.getZoom() >= 6 ) {
        if (map.hasLayer(topoLayer)){
              map.removeLayer(topoLayer);
          }
      }

    }); 

    /*var jsonTest = new L.GeoJSON.AJAX(["colleges.geojson","counties.geojson"],{onEachFeature:popUp}).addTo(m);

    var LargeCountryLabelsLayer = L.geoJSON().addTo(map);
    LargeCountryLabelsLayer.addData(geojsonLayer);

    taken from: leafletjs.com/examples/choropleth-example.html
    info box that contains title

    var info = L.control({position: 'bottomright'});*/

    /*window.sidebar = L.control.sidebar('sidebar', {position: 'topleft'}).addTo(map);
    map.addControl(new MyControl2('sidebar', {position: 'topleft'}));*/

    window.sidebar= new leafletSidebar('sidebar');
    map.addControl(sidebar);

    /*var sidebar2 = L.control.sidebar('sidebar', {position: 'topleft'}).addTo(map);
    window.sidebar = $('#sidebar').sidebar();
    var layerControl = L.control.layers({"baseLayer":baseLayer,"Labels":Labels}).addTo(map);
    map.addHash({lc:layerControl});
    map.addHash();*/

    var AFmarkers = new L.MarkerClusterGroup();
    var EAPmarkers = new L.MarkerClusterGroup();
    var EURmarkers = new L.MarkerClusterGroup();
    var NEAmarkers = new L.MarkerClusterGroup();
    var SCAmarkers = new L.MarkerClusterGroup();
    var WHAmarkers = new L.MarkerClusterGroup();

    var markers2 = new L.MarkerClusterGroup();

    var AFcount = 1;
    var EAPcount = 1;
    var EURcount = 1;
    var NEAcount = 1;
    var SCAcount = 1;
    var WHAcount = 1;

    var layerClicked = false;

    window.activeLayer = 'none';

    var firstClick = true;

    /*This enables when a user clicks on part of the map that
    is not part of a layer, it will zoom back into the original extent*/
    map.on('click', function(e) {
        /*The TopoJson layer click function always fires first*/

        /*close all popups*/
        map.closePopup();

        /*clear topo layer before fly to prevent effect of it not rendering on the fly*/
        topoLayer.clearLayers();

        /*map.setView([20, 0], 3, {animation: false});*/
        map.flyTo([20, 0], 3);
        console.log('map clicked');
        console.log(e);

        if(layerClicked !== true){
          /*$('.sidebar').css({ "height": "33%"});*/
          $('.sidebar').removeClass("sidebar-tall");
          activeLayer = 'none';

          sidebar.open('home');
        }

        layerClicked = false;

        $( '.product').remove();

        map.removeLayer(AFmarkers);
        map.removeLayer(EAPmarkers);
        map.removeLayer(EURmarkers);
        map.removeLayer(NEAmarkers);
        map.removeLayer(SCAmarkers);
        map.removeLayer(WHAmarkers);

        $('.hiu-tab').show();

        /*$('.item.active').removeClass('active');
        console.log('testing section');
        console.log($('.item.active'));*/
        
    });

    function addTopoData(topoData){ 
      topoLayer.addData(topoData);
      topoLayer.addTo(map);
      topoLayer.eachLayer(handleLayer);
    }

    function handleLayer(layer){  
        /*var randomValue = Math.random(),
        fillColor = colorScale(randomValue).hex();*/
        var fillColor;

        /*console.log(layer.feature.properties.RegBureau);*/

        switch (layer.feature.properties.RegBureau) {
         case "AF":
            fillColor = "#0A2E52";
            break;
         case "EAP":
            fillColor = "#0A2E52";
            break;
         case "EUR":
            fillColor = "#0A2E52";
            break;
         case "NEA":
            fillColor = "#0A2E52";
            break;
         case "SCA":
            fillColor = "#0A2E52";
            break;
         case "WHA":
            fillColor = "#0A2E52";
            break;
         default:
            fillColor = "#b3b3b3";
        }

        layer.setStyle({
            fillColor : fillColor,
            fillOpacity:0,
            color:fillColor,
            weight:0,
            opacity:0
            });

          layer.on({
            mouseover: enterLayer,
            mouseout: leaveLayer,
            click: clickLayer,
          });
    }

    function enterLayer(){  
        /*for IE, need to make this emulate the correct mousover behavior
        stackoverflow.com/questions/3686132/move-active-element-loses-mouseout-event-in-internet-explorer*/

        if (leftLayer == true) {
          /*console.log('inside function');
          var RegionName = this.feature.properties.RegBureau;
          $tooltip.text(RegionName).show();*/

          this.bringToFront();

          switch (this.feature.properties.RegBureau) {
             case "AF":
                fillColor = "#fc944f";
                break;
             case "EAP":
                fillColor = "#fced8d";
                break;
             case "EUR":
                fillColor = "#eeb3cb";
                break;
             case "NEA":
                fillColor = "#b8d773";
                break;
             case "SCA":
                fillColor = "#b5aed6";
                break;
             case "WHA":
                fillColor = "#a8c8e9";
                break;
             default:
                fillColor = "#b3b3b3";
          }

          this.setStyle({
            fillColor : fillColor,
            fillOpacity:0.5,
            color:fillColor,
            weight:0,
            opacity: 0
          });

          leftLayer = false;

        }
    }

    function leaveLayer(){  
        /*$tooltip.hide();
        console.log('leaveLayer called');*/

        switch (this.feature.properties.RegBureau) {
           case "USA":
              fillColor = "#b3b3b3";
              break;
           default:
              fillColor = "#0A2E52";
        }

        this.bringToBack();

        this.setStyle({
          fillColor : fillColor,
          fillOpacity:0,
          color: fillColor,
          weight:0,
          opacity:0
        });

        leftLayer = true;
    }

     /*Products GeoJSON
     old picture icon 
    var productIcon = L.icon({
        iconUrl: "assets/img/mapgive_blue_pt.png",
        iconSize: [30, 45],
        iconAnchor: [15, 40],
        popupAnchor: [0, 0]
    });
    */

    var productIcon = L.divIcon({
        className: 'product-icon',
        html: '<div class="circleBase type1"></div>'
    });

    function getProducts(region_id,regionCoord,regionZoom) {

      var myLayer = L.featureGroup()

      $.ajax({
        dataType: "json",
        url: "products/products.json",
        success: function(response) {
            var products = L.geoJson(response, {
                zIndex: 100,
                onEachFeature: function(feature, layer) {
                    /*var title = layer.feature.properties.title;*/
                }
            });

            $('.product-listings').empty();

            /*console.log('first click');
            console.log(firstClick);*/

            if(firstClick == true){
              map.addControl( new L.Control.ListMarkers({layer: products}) );
              firstClick = false;
            }

            /*console.log('region id: ');
            console.log(region_id);

            window.map.setView(regionCoord,regionZoom);*/
            if (region_id == 'NEA') {
                console.log('NEA region!');
                map.fitBounds([
                [43.8415, 75.3892],
                [3.7555, -54.728]
                ]);
            } else {
                console.log('flying to');
                window.map.flyTo(regionCoord,regionZoom);
            }

            var enabled = {};
            var featureCollection = products;

            /*console.log('features:');
            console.log(featureCollection._layers);*/

            for (var i in featureCollection._layers) {
                /*console.log('feature:');
                console.log(featureCollection._layers[i].feature);*/

                if (featureCollection._layers[i].feature.properties.region_id === region_id) {

                      var popupContent = '<div class="title">'+featureCollection._layers[i].feature.properties.title+'</div>';

                      var popupOptions = {keepInView: true,maxWidth: 200};

                      var altString = featureCollection._layers[i].feature.properties.title;

                      /*inserting the title in the altString of the marker*/
                      var marker = L.marker(new L.LatLng(featureCollection._layers[i].feature.geometry.coordinates[1],featureCollection._layers[i].feature.geometry.coordinates[0]), {
                                                  icon: productIcon, alt: altString
                                              });

                      marker.bindPopup(popupContent,popupOptions);

                      switch (region_id) {
                          case "AF":
                          if (AFcount == 1) {
                            AFmarkers.addLayer(marker);
                          }
                            break;
                          case "EAP":
                          if (EAPcount == 1) {
                            EAPmarkers.addLayer(marker);
                          }
                            break;
                          case "EUR":
                          if (EURcount == 1) {
                            EURmarkers.addLayer(marker);
                          }
                            break;
                          case "NEA":
                          if (NEAcount == 1) {
                            NEAmarkers.addLayer(marker);
                          }
                            break;
                          case "SCA":
                          if (SCAcount == 1) {
                            SCAmarkers.addLayer(marker);
                          }
                            break;
                          case "WHA":
                          if (WHAcount == 1) {
                            WHAmarkers.addLayer(marker);
                          }
                            break;
                          default:
                      }
                  }
                }

                /*
                console.log("AF length ");
                console.log(AFmarkers.getLayers().length);
                console.log(AFmarkers.getLayers());

                for (var i = 0; i < AFmarkers.getLayers().length; i++) {
                  console.log(AFmarkers.getLayers()[i]);

                }
                */

                AFmarkers.on("click", function (event) {
                    var clickedMarker = event.layer;
                    console.log('AF icon fired on click: ');
                    console.log(event.layer.options.alt);

                    clickedMarkerTitle = event.layer.options.alt;

                    /*remove the active class from all items*/
                    $('.item').removeClass('active');
                    /*add the active class to item that matches title*/
                    $('.item[title="'+clickedMarkerTitle+'"]').addClass('active');

                    /*set selectedID*/
                    selectedID = $('.item[title="'+clickedMarkerTitle+'"]').attr('id');

                    var parentClass = $('.item[id="'+selectedID+'"]').parent().attr('class');

                    $('.'+parentClass).prepend($('.item[title="'+clickedMarkerTitle+'"]'));
                });

                EAPmarkers.on("click", function (event) {
                    var clickedMarker = event.layer;
                    clickedMarkerTitle = event.layer.options.alt;
                    $('.item').removeClass('active');
                    $('.item[title="'+clickedMarkerTitle+'"]').addClass('active');

                    selectedID = $('.item[title="'+clickedMarkerTitle+'"]').attr('id');

                    var parentClass = $('.item[id="'+selectedID+'"]').parent().attr('class');

                    $('.'+parentClass).prepend($('.item[title="'+clickedMarkerTitle+'"]'));
                });

                EURmarkers.on("click", function (event) {
                    var clickedMarker = event.layer;
                    clickedMarkerTitle = event.layer.options.alt;
                    $('.item').removeClass('active');
                    $('.item[title="'+clickedMarkerTitle+'"]').addClass('active');

                    selectedID = $('.item[title="'+clickedMarkerTitle+'"]').attr('id');

                    var parentClass = $('.item[id="'+selectedID+'"]').parent().attr('class');

                    $('.'+parentClass).prepend($('.item[title="'+clickedMarkerTitle+'"]'));
                });

                NEAmarkers.on("click", function (event) {
                    var clickedMarker = event.layer;
                    clickedMarkerTitle = event.layer.options.alt;
                    $('.item').removeClass('active');

                    $('.item[title="'+clickedMarkerTitle+'"]').addClass('active');

                    selectedID = $('.item[title="'+clickedMarkerTitle+'"]').attr('id');

                    var parentClass = $('.item[id="'+selectedID+'"]').parent().attr('class');

                    $('.'+parentClass).prepend($('.item[title="'+clickedMarkerTitle+'"]'));
                });

                SCAmarkers.on("click", function (event) {
                    var clickedMarker = event.layer;
                    clickedMarkerTitle = event.layer.options.alt;
                    $('.item').removeClass('active');
                    $('.item[title="'+clickedMarkerTitle+'"]').addClass('active');

                    selectedID = $('.item[title="'+clickedMarkerTitle+'"]').attr('id');

                    var parentClass = $('.item[id="'+selectedID+'"]').parent().attr('class');

                    $('.'+parentClass).prepend($('.item[title="'+clickedMarkerTitle+'"]'));
                });

                WHAmarkers.on("click", function (event) {
                    var clickedMarker = event.layer;
                    clickedMarkerTitle = event.layer.options.alt;
                    $('.item').removeClass('active');
                    $('.item[title="'+clickedMarkerTitle+'"]').addClass('active');

                    selectedID = $('.item[title="'+clickedMarkerTitle+'"]').attr('id');

                    var parentClass = $('.item[id="'+selectedID+'"]').parent().attr('class');

                    $('.'+parentClass).prepend($('.item[title="'+clickedMarkerTitle+'"]'));
                });


                switch (region_id) {
                    case "AF":
                      map.removeLayer(EAPmarkers);
                      map.removeLayer(EURmarkers);
                      map.removeLayer(NEAmarkers);
                      map.removeLayer(SCAmarkers);
                      map.removeLayer(WHAmarkers);
                      map.addLayer(AFmarkers);
/*
                      $( '.product').remove();

                      $( '#'+ region_id.toLowerCase() +'_label' ).append( "<center><p class='product' >" + AFmarkers.getLayers().length + "&nbspProducts</p></center>" );

increases AFcount from one, to prevent double-counting on repeated clicks*/
                      AFcount++;

                      break;
                    case "EAP":
                      map.removeLayer(AFmarkers);
                      map.removeLayer(EURmarkers);
                      map.removeLayer(NEAmarkers);
                      map.removeLayer(SCAmarkers);
                      map.removeLayer(WHAmarkers);
                      map.addLayer(EAPmarkers);
                      /*
                      $( '.product').remove();
                      $( '#'+ region_id.toLowerCase() +'_label' ).append( "<center><p class='product' >" + EAPmarkers.getLayers().length + "&nbspProducts</p></center>" );
                      */
                      EAPcount++;
                      break;
                    case "EUR":
                      map.removeLayer(AFmarkers);
                      map.removeLayer(EAPmarkers);
                      map.removeLayer(NEAmarkers);
                      map.removeLayer(SCAmarkers);
                      map.removeLayer(WHAmarkers);
                      map.addLayer(EURmarkers);

                      EURcount++;
                      break;
                    case "NEA":
                      map.removeLayer(AFmarkers);
                      map.removeLayer(EAPmarkers);
                      map.removeLayer(EURmarkers);
                      map.removeLayer(SCAmarkers);
                      map.removeLayer(WHAmarkers);
                      map.addLayer(NEAmarkers);

                      NEAcount++;
                      break;
                    case "SCA":
                      map.removeLayer(AFmarkers);
                      map.removeLayer(EAPmarkers);
                      map.removeLayer(EURmarkers);
                      map.removeLayer(NEAmarkers);
                      map.removeLayer(WHAmarkers);
                      map.addLayer(SCAmarkers);

                      SCAcount++;
                      break;
                    case "WHA":
                      map.removeLayer(AFmarkers);
                      map.removeLayer(EAPmarkers);
                      map.removeLayer(EURmarkers);
                      map.removeLayer(NEAmarkers);
                      map.removeLayer(SCAmarkers);
                      map.addLayer(WHAmarkers);

                      WHAcount++;
                      break;

                    default:
                }
        }
      });

    }

    function clickTab(region) {
        console.log('tab was clicked, region is: ');
        console.log(region);

        var regionCoord;
        var regionZoom;

        /*close all popups*/
        map.closePopup();

        map.removeLayer(AFmarkers);
        map.removeLayer(EAPmarkers);
        map.removeLayer(EURmarkers);
        map.removeLayer(NEAmarkers);
        map.removeLayer(SCAmarkers);
        map.removeLayer(WHAmarkers);

        /*map.setView([20, 0], 3, {animation: false});*/

        switch (region) {
          case "AF":
            regionCoord = [-1, -3];
            regionZoom = 4;
            activeLayer = "AF";
            break;
          case "EAP":
            regionCoord = [20, 85];
            regionZoom = 4;
            activeLayer = "EAP";
            break;
          case "EUR":
            regionCoord = [51, 22];
            regionZoom = 4;
            activeLayer = "EUR";
            break;
          case "NEA":
            regionCoord = [28, 10];
            regionZoom = 5;
            activeLayer = "NEA";
            break;
          case "SCA":
            regionCoord = [35, 52.5];
            regionZoom = 4;
            activeLayer = "SCA";
            break;
          case "WHA":
            regionCoord = [-4, -72];
            regionZoom = 4;
            activeLayer = "WHA";
            break;
          case "global":
            regionCoord = [20, 25];
            regionZoom = 3;
            activeLayer = "global";
            break;
          default:
            regionCoord = [14, -20];
            regionZoom = 3;
        }

        /*if (typeof(products) != "undefined") {
          console.log("products are defined");
          products.clearLayers();
        }*/

        getProducts(region,regionCoord,regionZoom);

        $('.sidebar').addClass("sidebar-tall");

        if ( region == 'home' ) {
          $('.sidebar').removeClass("sidebar-tall");
        }

        layerClicked = true;


    }

    /*if a tab is clicked on the sidebar*/
    $('a[role="tab"]').click(function () {
      /*console.log('click event1');
      console.log($(this).attr('id'));*/

      var region = $(this).attr('id');
      clickTab(region);

    })

    function clickLayer(e) {
        /*Assuming the clicked feature is a shape, not a point marker.*/

        console.log('region layer clicked');
        console.log(e);

        var regionCoord;
        var regionZoom;

        /*console.log(this.feature.properties.RegBureau);*/

        switch (this.feature.properties.RegBureau) {
         case "AF":
            regionCoord = [-1, -3];
            regionZoom = 4;
            activeLayer = "AF";
            sidebar.open('AF');
            break;
         case "EAP":
            regionCoord = [15, 80];
            regionZoom = 4;
            activeLayer = "EAP";
            sidebar.open('EAP');
            break;
         case "EUR":
            regionCoord = [51, 22];
            regionZoom = 4;
            activeLayer = "EUR";
            sidebar.open('EUR');
            break;
         case "NEA":
            regionCoord = [28, 10];
            regionZoom = 4;
            activeLayer = "NEA";
            sidebar.open('NEA');
            break;
         case "SCA":
            regionCoord = [35, 52.5];
            regionZoom = 4;
            activeLayer = "SCA";
            sidebar.open('SCA');
            break;
         case "WHA":
            regionCoord = [-4, -72];
            regionZoom = 4;
            activeLayer = "WHA";
            sidebar.open('WHA');
            break;
         default:
            regionCoord = [14, -20];
            regionZoom = 3;
        }
        
        /*map.fitBounds(this.getBounds());
        map.setView(regionCoord,regionZoom);
        window.map.setView([5, 70], 3);*/

        console.log(regionCoord);
        console.log(regionZoom);

        getProducts(this.feature.properties.RegBureau,regionCoord,regionZoom);

        $('.sidebar').addClass("sidebar-tall");

        layerClicked = true;

    }

/*
    topoLayer.on("click", function (event) {
         Assuming the clicked feature is a shape, not a point marker.
        map.fitBounds(event.layer.getBounds());
        console.log(event.layer);
        getProducts(event.layer.feature.properties.RegBureau);
        map.setView(event.latlng, 5);
    });
*/

    /*events*/
    var eventIcon = L.icon({
        iconUrl: "assets/img/mapgive_red_pt.png",
        iconSize: [30, 45],
        iconAnchor: [15, 40],
        popupAnchor: [0, 0]
    });

    $.ajax({
        dataType: "json",
        url: "/events/events.json",
        success: function(response) {
            var events = L.geoJson(response, {
                zIndex: 100,
                onEachFeature: function(feature, layer) {
                    var popupOptions = {maxWidth: 200};
                    layer.setIcon(eventIcon);
                    var popupContent = '<h4><a href="'+feature.properties.url+'">'+feature.properties.title+'</a></h4>';
                    layer.bindPopup(popupContent, popupOptions);
                }
            });

            /*events.addTo(map);
            geojsonLayers.push(events);
            geojsonLayers = sortLayers(geojsonLayers)
            updateRenderOrder(geojsonLayers);
            layerswitcher.append(createLink(map, events, 'Events', events.options.zIndex));*/

            /*map.addControl( new L.Control.ListMarkers({layer: events}) );
            markersLayer is a L.LayerGroup contains listing markers*/
        }
    });

   /*end of closure
   }());*/



    /*enables hashes on tabs*/
    $(document).ready(function() {

        /*probably doesn't work because of propogation being stopped in sidebar!*/
        $( "a" ).on( "click", function() {
            console.log('title clicked');
            var match = $(this).attr('href').match(/#\S+/);
            console.log('url fragment match made: ');
            console.log(match[0]);
            ga('send', 'pageview', location.pathname + match[0]);
        });


        /*come up with unique ids for HIU products
        then store the ids under a new tag called data-product-id

        The pattern for the hash will be: /#regioncode/#data-product-id
        The code will parse the hash, based on the #regioncode, it will
        force a click for the regiontab
        based on the #data-product-id it will call $(link).click(function()

        Javascript to enable link to tab*/
        var hash = document.location.hash;

        /*console.log('hash! ');
        console.log(hash);

        console.log('hash length: ');
        console.log(hash.length);*/

        if (hash) {
          /*$('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');*/
          hash = hash.slice(1).split(',');
          region_hash = hash[0].replace(",", "");
          /*console.log('region_hash! ');
          console.log(region_hash);*/

            if (hash.length == 1) {
              document.getElementById(region_hash).click();
            } else if (hash.length > 1) {
              product_hash = hash[1].replace("#", "");
              /*something like this can work for a product
              $('a[href="#NEA#U1283"').trigger("click");*/
              document.getElementById(region_hash).click();

              setTimeout(function(){ 

                /*triggering modal*/
                document.getElementById('modal#'+region_hash+','+product_hash).click();
                /*this below works manually
                document.getElementById('modal#NEA#U1283').click();

                made the query more specific so it would just call the 
                thumbnail modal and not trigger two modals, thus closing it 
                immediatly after it opened*/
                $('description-image.a[href="#'+region_hash+','+product_hash+'"]').trigger("click");

                document.location.hash = '#' + region_hash + ',' + product_hash

              }, 1500);
              
            }

        }


        /*insert new product labels*/

        function getArray(){
            return $.getJSON('products/products.json');
        }

        getArray().done( function(json) {
            console.log('printing out json: ');
            console.log(json);  /*show the json data in console*/

            var _len = json.length;
            var fixture;

            var d = new Date();

            /*console.log("current date");
            console.log(d);*/

            var curr_date = d.getDate();
            
            var past_60_days = d.setDate(d.getDate()-60);

            console.log("past 60 days");
            console.log(past_60_days);

            /*loop through json and match today's date with match-date*/
            var jsonCount = 0;

            for (var i in json.features) {
                fixture = json.features[i];
                
                /*console.log('json properties');
                console.log(fixture.properties.date_published);*/

                var newDate = new Date(fixture.properties.date_published);

                if ( newDate > past_60_days) {

                    console.log('new date');
                    console.log(newDate);

                    jsonCount++;

                    /*add new to the product*/

                    /*add new to the region tab*/
                    var region_id = fixture.properties.region_id;

                    console.log('new product region id: ');
                    console.log(region_id);
                    console.log('region id length');
                    console.log($('#'+region_id+' .new-product').length);

                    /*stackoverflow.com/questions/7951505/about-jquery-append-and-how-to-check-if-an-element-has-been-appended*/
                    if($('#'+region_id+' .new-product').length <= 0) {
                        $('#'+region_id).append("<div class='new-product'>new</div>");
                    }
                }
            }

          });


    /*mediacause.org/track-anchor-tags-google-analytics-2/*/


    });