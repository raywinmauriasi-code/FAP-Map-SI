var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MSelenCentralSmallNgellasmall_ngella_1 = new ol.format.GeoJSON();
var features_MSelenCentralSmallNgellasmall_ngella_1 = format_MSelenCentralSmallNgellasmall_ngella_1.readFeatures(json_MSelenCentralSmallNgellasmall_ngella_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralSmallNgellasmall_ngella_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralSmallNgellasmall_ngella_1.addFeatures(features_MSelenCentralSmallNgellasmall_ngella_1);
var lyr_MSelenCentralSmallNgellasmall_ngella_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralSmallNgellasmall_ngella_1, 
                style: style_MSelenCentralSmallNgellasmall_ngella_1,
                popuplayertitle: 'M - Selen Central(Small Ngella) — small_ngella',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralSmallNgellasmall_ngella_1.png" /> M - Selen Central(Small Ngella) — small_ngella'
            });
var format_MSelenCentralBigNgellabig_ngella__2 = new ol.format.GeoJSON();
var features_MSelenCentralBigNgellabig_ngella__2 = format_MSelenCentralBigNgellabig_ngella__2.readFeatures(json_MSelenCentralBigNgellabig_ngella__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenCentralBigNgellabig_ngella__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenCentralBigNgellabig_ngella__2.addFeatures(features_MSelenCentralBigNgellabig_ngella__2);
var lyr_MSelenCentralBigNgellabig_ngella__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenCentralBigNgellabig_ngella__2, 
                style: style_MSelenCentralBigNgellabig_ngella__2,
                popuplayertitle: 'M - Selen Central(Big Ngella) — big_ngella_',
                interactive: true,
                title: '<img src="styles/legend/MSelenCentralBigNgellabig_ngella__2.png" /> M - Selen Central(Big Ngella) — big_ngella_'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_MSelenCentralSmallNgellasmall_ngella_1.setVisible(true);lyr_MSelenCentralBigNgellabig_ngella__2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_MSelenCentralSmallNgellasmall_ngella_1,lyr_MSelenCentralBigNgellabig_ngella__2];
lyr_MSelenCentralSmallNgellasmall_ngella_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralBigNgellabig_ngella__2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenCentralSmallNgellasmall_ngella_1.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_MSelenCentralBigNgellabig_ngella__2.set('fieldImages', {'fid': '', 'Name': '', 'Type': '', 'Location': '', 'Province': '', 'Latitude': '', 'Longitude': '', });
lyr_MSelenCentralSmallNgellasmall_ngella_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralBigNgellabig_ngella__2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenCentralBigNgellabig_ngella__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});