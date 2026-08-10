var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_EUTwinLinkConnection_1 = new ol.format.GeoJSON();
var features_EUTwinLinkConnection_1 = format_EUTwinLinkConnection_1.readFeatures(json_EUTwinLinkConnection_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUTwinLinkConnection_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUTwinLinkConnection_1.addFeatures(features_EUTwinLinkConnection_1);
var lyr_EUTwinLinkConnection_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUTwinLinkConnection_1, 
                style: style_EUTwinLinkConnection_1,
                popuplayertitle: 'EUTwinLink Connection',
                interactive: false,
    title: 'EUTwinLink Connection<br />\
    <img src="styles/legend/EUTwinLinkConnection_1_0.png" /> Supporting Connection<br />\
    <img src="styles/legend/EUTwinLinkConnection_1_1.png" /> Pilot Connection<br />' });
var format_EUTwinLinkPartners_2 = new ol.format.GeoJSON();
var features_EUTwinLinkPartners_2 = format_EUTwinLinkPartners_2.readFeatures(json_EUTwinLinkPartners_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUTwinLinkPartners_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUTwinLinkPartners_2.addFeatures(features_EUTwinLinkPartners_2);
var lyr_EUTwinLinkPartners_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUTwinLinkPartners_2, 
                style: style_EUTwinLinkPartners_2,
                popuplayertitle: 'EUTwinLink Partners',
                interactive: true,
    title: 'EUTwinLink Partners<br />\
    <img src="styles/legend/EUTwinLinkPartners_2_0.png" /> Connecting Municipality <br />\
    <img src="styles/legend/EUTwinLinkPartners_2_1.png" /> Assisting Municipality<br />\
    <img src="styles/legend/EUTwinLinkPartners_2_2.png" /> Project Partner<br />\
    <img src="styles/legend/EUTwinLinkPartners_2_3.png" /> <br />' });
var format_MunicipalConnection_3 = new ol.format.GeoJSON();
var features_MunicipalConnection_3 = format_MunicipalConnection_3.readFeatures(json_MunicipalConnection_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalConnection_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalConnection_3.addFeatures(features_MunicipalConnection_3);
var lyr_MunicipalConnection_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalConnection_3, 
                style: style_MunicipalConnection_3,
                popuplayertitle: 'Municipal Connection',
                interactive: false,
                title: '<img src="styles/legend/MunicipalConnection_3.png" /> Municipal Connection'
            });
var format_MunicipalPartners_4 = new ol.format.GeoJSON();
var features_MunicipalPartners_4 = format_MunicipalPartners_4.readFeatures(json_MunicipalPartners_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalPartners_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalPartners_4.addFeatures(features_MunicipalPartners_4);
var lyr_MunicipalPartners_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalPartners_4, 
                style: style_MunicipalPartners_4,
                popuplayertitle: 'Municipal Partners',
                interactive: true,
    title: 'Municipal Partners<br />\
    <img src="styles/legend/MunicipalPartners_4_0.png" /> Connecting Municipality <br />\
    <img src="styles/legend/MunicipalPartners_4_1.png" /> Project Partner<br />\
    <img src="styles/legend/MunicipalPartners_4_2.png" /> <br />' });
var group_MuncipalProject = new ol.layer.Group({
                                layers: [lyr_MunicipalConnection_3,lyr_MunicipalPartners_4,],
                                fold: 'open',
                                title: 'Muncipal Project'});
var group_EUTwinLinkProject = new ol.layer.Group({
                                layers: [lyr_EUTwinLinkConnection_1,lyr_EUTwinLinkPartners_2,],
                                fold: 'open',
                                title: 'EUTwinLink Project'});

lyr_ESRIGraylight_0.setVisible(true);lyr_EUTwinLinkConnection_1.setVisible(true);lyr_EUTwinLinkPartners_2.setVisible(true);lyr_MunicipalConnection_3.setVisible(true);lyr_MunicipalPartners_4.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,group_EUTwinLinkProject,group_MuncipalProject];
lyr_EUTwinLinkConnection_1.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Type': 'Type', });
lyr_EUTwinLinkPartners_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'd': 'd', 'Partner': 'Partner', });
lyr_MunicipalConnection_3.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_MunicipalPartners_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Partner': 'Partner', 'd': 'd', });
lyr_EUTwinLinkConnection_1.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Type': 'Range', });
lyr_EUTwinLinkPartners_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'd': 'TextEdit', 'Partner': 'TextEdit', });
lyr_MunicipalConnection_3.set('fieldImages', {'begin': '', 'end': '', });
lyr_MunicipalPartners_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Partner': 'TextEdit', 'd': 'TextEdit', });
lyr_EUTwinLinkConnection_1.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', 'Type': 'no label', });
lyr_EUTwinLinkPartners_2.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'd': 'hidden field', 'Partner': 'header label - visible with data', });
lyr_MunicipalConnection_3.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_MunicipalPartners_4.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'Partner': 'header label - visible with data', 'd': 'hidden field', });
lyr_MunicipalPartners_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});