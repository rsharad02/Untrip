// mapSource =
//     'https://maps.googleapis.com/maps/api/staticmap?center=20.826618,85.159091&scale=4&maptype=satellite&zoom=15&size=350x300&markers=color:red|size:mid|label:A|20.830927,85.160243&markers=color:red|size:mid|label:P|20.826618,85.159091&markers=color:red|size:mid|label:R|20.820808,85.156645&markers=color:red|size:mid|label:B|20.830091,85.151420&key=AIzaSyAiJYvVftcMNWubKRKsDDVu8avXuUQgEg8'
// map dimensions
var mapDimen = "350x300"
// static NALCO Lat & Lon's
var a = '20.830927,85.160243';
var b = '20.829605,85.151966';
var p = '20.826618,85.159091';
var r = '20.821617,85.157167';
var c = '20.826618,85.159091';

// NALCO
var mapSource_NALCO = 'https://maps.googleapis.com/maps/api/staticmap?center=' + c +
    '&scale=4&maptype=satellite&zoom=15&size=' + mapDimen + '&markers=color:red|size:mid|label:P|' + p +
    '&markers=color:red|size:mid|label:A|' + a + '&markers=color:red|size:mid|label:R|' + r +
    '&markers=color:red|size:mid|label:B|' + b;
// SLIS
var mapSource_SLIS = 'https://maps.googleapis.com/maps/api/staticmap?center=' + cs +
    '&scale=4&maptype=satellite&zoom=17&size=' + mapDimen + '&markers=color:red|size:mid|label:P|' + ps +
    '&markers=color:red|size:mid|label:A|' + as + '&markers=color:red|size:mid|label:R|' + rs +
    '&markers=color:red|size:mid|label:B|' + bs;

// Untrip
var mapSource = 'https://maps.googleapis.com/maps/api/staticmap?center=';

// static SLIS Lat & Lon's
var as = '12.959119, 80.058016';
var bs = '12.958894,80.056652';
var ps = "12.958295, 80.057305";
var rs = '12.957068, 80.056898';
var cs = '12.958281,80.057508';

var mapAPIKey = "&key=AIzaSyAiJYvVftcMNWubKRKsDDVu8avXuUQgEg8"
// var cs = '12.959229,80.057353';
mapSource = mapSource_NALCO + mapAPIKey;
document.getElementById("mapID").src = mapSource