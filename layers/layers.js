var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGraylight_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_EUTwinLinkConnection_2 = new ol.format.GeoJSON();
var features_EUTwinLinkConnection_2 = format_EUTwinLinkConnection_2.readFeatures(json_EUTwinLinkConnection_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUTwinLinkConnection_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUTwinLinkConnection_2.addFeatures(features_EUTwinLinkConnection_2);
var lyr_EUTwinLinkConnection_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUTwinLinkConnection_2, 
                style: style_EUTwinLinkConnection_2,
                popuplayertitle: 'EUTwinLink Connection',
                interactive: false,
    title: 'EUTwinLink Connection<br />\
    <img src="styles/legend/EUTwinLinkConnection_2_0.png" /> Supporting Connection<br />\
    <img src="styles/legend/EUTwinLinkConnection_2_1.png" /> Pilot Connection<br />' });
var format_EUTwinLinkPartners_3 = new ol.format.GeoJSON();
var features_EUTwinLinkPartners_3 = format_EUTwinLinkPartners_3.readFeatures(json_EUTwinLinkPartners_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUTwinLinkPartners_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUTwinLinkPartners_3.addFeatures(features_EUTwinLinkPartners_3);
var lyr_EUTwinLinkPartners_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUTwinLinkPartners_3, 
                style: style_EUTwinLinkPartners_3,
                popuplayertitle: 'EUTwinLink Partners',
                interactive: true,
    title: 'EUTwinLink Partners<br />\
    <img src="styles/legend/EUTwinLinkPartners_3_0.png" /> Public Organisation<br />\
    <img src="styles/legend/EUTwinLinkPartners_3_1.png" /> Research Organisation<br />\
    <img src="styles/legend/EUTwinLinkPartners_3_2.png" /> SME<br />' });
var format_MunicipalConnection_4 = new ol.format.GeoJSON();
var features_MunicipalConnection_4 = format_MunicipalConnection_4.readFeatures(json_MunicipalConnection_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalConnection_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalConnection_4.addFeatures(features_MunicipalConnection_4);
var lyr_MunicipalConnection_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalConnection_4, 
                style: style_MunicipalConnection_4,
                popuplayertitle: 'Municipal Connection',
                interactive: false,
                title: '<img src="styles/legend/MunicipalConnection_4.png" /> Municipal Connection'
            });
var format_MunicipalPartners_5 = new ol.format.GeoJSON();
var features_MunicipalPartners_5 = format_MunicipalPartners_5.readFeatures(json_MunicipalPartners_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalPartners_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalPartners_5.addFeatures(features_MunicipalPartners_5);
var lyr_MunicipalPartners_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalPartners_5, 
                style: style_MunicipalPartners_5,
                popuplayertitle: 'Municipal Partners',
                interactive: true,
    title: 'Municipal Partners<br />\
    <img src="styles/legend/MunicipalPartners_5_0.png" /> Public Organisation<br />\
    <img src="styles/legend/MunicipalPartners_5_1.png" /> Research Organisation<br />\
    <img src="styles/legend/MunicipalPartners_5_2.png" /> SME<br />' });
var format_AquaGuardTwinConnection_6 = new ol.format.GeoJSON();
var features_AquaGuardTwinConnection_6 = format_AquaGuardTwinConnection_6.readFeatures(json_AquaGuardTwinConnection_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AquaGuardTwinConnection_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AquaGuardTwinConnection_6.addFeatures(features_AquaGuardTwinConnection_6);
var lyr_AquaGuardTwinConnection_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AquaGuardTwinConnection_6, 
                style: style_AquaGuardTwinConnection_6,
                popuplayertitle: 'AquaGuardTwin Connection',
                interactive: false,
                title: '<img src="styles/legend/AquaGuardTwinConnection_6.png" /> AquaGuardTwin Connection'
            });
var format_AquaGuardTwinPartners_7 = new ol.format.GeoJSON();
var features_AquaGuardTwinPartners_7 = format_AquaGuardTwinPartners_7.readFeatures(json_AquaGuardTwinPartners_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AquaGuardTwinPartners_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AquaGuardTwinPartners_7.addFeatures(features_AquaGuardTwinPartners_7);
var lyr_AquaGuardTwinPartners_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AquaGuardTwinPartners_7, 
                style: style_AquaGuardTwinPartners_7,
                popuplayertitle: 'AquaGuardTwin Partners',
                interactive: true,
    title: 'AquaGuardTwin Partners<br />\
    <img src="styles/legend/AquaGuardTwinPartners_7_0.png" /> Public Organisation<br />\
    <img src="styles/legend/AquaGuardTwinPartners_7_1.png" /> Research Organisation<br />\
    <img src="styles/legend/AquaGuardTwinPartners_7_2.png" /> SME<br />\
    <img src="styles/legend/AquaGuardTwinPartners_7_3.png" /> NGO<br />' });
var format_GeoTwinELBGConnection_8 = new ol.format.GeoJSON();
var features_GeoTwinELBGConnection_8 = format_GeoTwinELBGConnection_8.readFeatures(json_GeoTwinELBGConnection_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoTwinELBGConnection_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoTwinELBGConnection_8.addFeatures(features_GeoTwinELBGConnection_8);
var lyr_GeoTwinELBGConnection_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeoTwinELBGConnection_8, 
                style: style_GeoTwinELBGConnection_8,
                popuplayertitle: 'GeoTwin-ELBG Connection',
                interactive: true,
                title: '<img src="styles/legend/GeoTwinELBGConnection_8.png" /> GeoTwin-ELBG Connection'
            });
var format_GeoTwinELBGPartners_9 = new ol.format.GeoJSON();
var features_GeoTwinELBGPartners_9 = format_GeoTwinELBGPartners_9.readFeatures(json_GeoTwinELBGPartners_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoTwinELBGPartners_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoTwinELBGPartners_9.addFeatures(features_GeoTwinELBGPartners_9);
var lyr_GeoTwinELBGPartners_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeoTwinELBGPartners_9, 
                style: style_GeoTwinELBGPartners_9,
                popuplayertitle: 'GeoTwin-ELBG Partners',
                interactive: true,
    title: 'GeoTwin-ELBG Partners<br />\
    <img src="styles/legend/GeoTwinELBGPartners_9_0.png" /> Public Organisation<br />\
    <img src="styles/legend/GeoTwinELBGPartners_9_1.png" /> Research Organisation<br />\
    <img src="styles/legend/GeoTwinELBGPartners_9_2.png" /> SME<br />\
    <img src="styles/legend/GeoTwinELBGPartners_9_3.png" /> NGO<br />' });
var format_CITYRESConnection_10 = new ol.format.GeoJSON();
var features_CITYRESConnection_10 = format_CITYRESConnection_10.readFeatures(json_CITYRESConnection_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CITYRESConnection_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CITYRESConnection_10.addFeatures(features_CITYRESConnection_10);
var lyr_CITYRESConnection_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CITYRESConnection_10, 
                style: style_CITYRESConnection_10,
                popuplayertitle: 'CITYRES Connection',
                interactive: false,
                title: '<img src="styles/legend/CITYRESConnection_10.png" /> CITYRES Connection'
            });
var format_CITYRESPartners_11 = new ol.format.GeoJSON();
var features_CITYRESPartners_11 = format_CITYRESPartners_11.readFeatures(json_CITYRESPartners_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CITYRESPartners_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CITYRESPartners_11.addFeatures(features_CITYRESPartners_11);
var lyr_CITYRESPartners_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CITYRESPartners_11, 
                style: style_CITYRESPartners_11,
                popuplayertitle: 'CITYRES Partners',
                interactive: true,
    title: 'CITYRES Partners<br />\
    <img src="styles/legend/CITYRESPartners_11_0.png" /> Public Organisation<br />\
    <img src="styles/legend/CITYRESPartners_11_1.png" /> SME<br />' });
var format_PERFORMConnection_12 = new ol.format.GeoJSON();
var features_PERFORMConnection_12 = format_PERFORMConnection_12.readFeatures(json_PERFORMConnection_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERFORMConnection_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERFORMConnection_12.addFeatures(features_PERFORMConnection_12);
var lyr_PERFORMConnection_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERFORMConnection_12, 
                style: style_PERFORMConnection_12,
                popuplayertitle: 'PERFORM Connection',
                interactive: false,
                title: '<img src="styles/legend/PERFORMConnection_12.png" /> PERFORM Connection'
            });
var format_PERFORMPartners_13 = new ol.format.GeoJSON();
var features_PERFORMPartners_13 = format_PERFORMPartners_13.readFeatures(json_PERFORMPartners_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERFORMPartners_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERFORMPartners_13.addFeatures(features_PERFORMPartners_13);
var lyr_PERFORMPartners_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERFORMPartners_13, 
                style: style_PERFORMPartners_13,
                popuplayertitle: 'PERFORM Partners',
                interactive: true,
    title: 'PERFORM Partners<br />\
    <img src="styles/legend/PERFORMPartners_13_0.png" /> Public Organisation<br />\
    <img src="styles/legend/PERFORMPartners_13_1.png" /> Non-Profit<br />\
    <img src="styles/legend/PERFORMPartners_13_2.png" /> Research Organisation<br />\
    <img src="styles/legend/PERFORMPartners_13_3.png" /> SME<br />\
    <img src="styles/legend/PERFORMPartners_13_4.png" /> Large Enterprise<br />' });
var format_CivicTwinLabConnection_14 = new ol.format.GeoJSON();
var features_CivicTwinLabConnection_14 = format_CivicTwinLabConnection_14.readFeatures(json_CivicTwinLabConnection_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CivicTwinLabConnection_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CivicTwinLabConnection_14.addFeatures(features_CivicTwinLabConnection_14);
var lyr_CivicTwinLabConnection_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CivicTwinLabConnection_14, 
                style: style_CivicTwinLabConnection_14,
                popuplayertitle: 'CivicTwinLab Connection',
                interactive: false,
                title: '<img src="styles/legend/CivicTwinLabConnection_14.png" /> CivicTwinLab Connection'
            });
var format_CivicTwinLabPartners_15 = new ol.format.GeoJSON();
var features_CivicTwinLabPartners_15 = format_CivicTwinLabPartners_15.readFeatures(json_CivicTwinLabPartners_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CivicTwinLabPartners_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CivicTwinLabPartners_15.addFeatures(features_CivicTwinLabPartners_15);
var lyr_CivicTwinLabPartners_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CivicTwinLabPartners_15, 
                style: style_CivicTwinLabPartners_15,
                popuplayertitle: 'CivicTwinLab Partners',
                interactive: true,
    title: 'CivicTwinLab Partners<br />\
    <img src="styles/legend/CivicTwinLabPartners_15_0.png" /> Public Organisation<br />\
    <img src="styles/legend/CivicTwinLabPartners_15_1.png" /> SME<br />' });
var format_ALEXConnection_16 = new ol.format.GeoJSON();
var features_ALEXConnection_16 = format_ALEXConnection_16.readFeatures(json_ALEXConnection_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALEXConnection_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALEXConnection_16.addFeatures(features_ALEXConnection_16);
var lyr_ALEXConnection_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALEXConnection_16, 
                style: style_ALEXConnection_16,
                popuplayertitle: 'ALEX Connection',
                interactive: false,
                title: '<img src="styles/legend/ALEXConnection_16.png" /> ALEX Connection'
            });
var format_AlexPartners_17 = new ol.format.GeoJSON();
var features_AlexPartners_17 = format_AlexPartners_17.readFeatures(json_AlexPartners_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlexPartners_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlexPartners_17.addFeatures(features_AlexPartners_17);
var lyr_AlexPartners_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlexPartners_17, 
                style: style_AlexPartners_17,
                popuplayertitle: 'Alex Partners',
                interactive: true,
    title: 'Alex Partners<br />\
    <img src="styles/legend/AlexPartners_17_0.png" /> Public Organisation<br />\
    <img src="styles/legend/AlexPartners_17_1.png" /> Research Organisation<br />\
    <img src="styles/legend/AlexPartners_17_2.png" /> SME<br />' });
var format_UrbanIntelligenceConnection_18 = new ol.format.GeoJSON();
var features_UrbanIntelligenceConnection_18 = format_UrbanIntelligenceConnection_18.readFeatures(json_UrbanIntelligenceConnection_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanIntelligenceConnection_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanIntelligenceConnection_18.addFeatures(features_UrbanIntelligenceConnection_18);
var lyr_UrbanIntelligenceConnection_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanIntelligenceConnection_18, 
                style: style_UrbanIntelligenceConnection_18,
                popuplayertitle: 'UrbanIntelligence Connection ',
                interactive: false,
                title: '<img src="styles/legend/UrbanIntelligenceConnection_18.png" /> UrbanIntelligence Connection '
            });
var format_UrbanIntelligencePartners_19 = new ol.format.GeoJSON();
var features_UrbanIntelligencePartners_19 = format_UrbanIntelligencePartners_19.readFeatures(json_UrbanIntelligencePartners_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanIntelligencePartners_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanIntelligencePartners_19.addFeatures(features_UrbanIntelligencePartners_19);
var lyr_UrbanIntelligencePartners_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanIntelligencePartners_19, 
                style: style_UrbanIntelligencePartners_19,
                popuplayertitle: 'UrbanIntelligence Partners',
                interactive: true,
    title: 'UrbanIntelligence Partners<br />\
    <img src="styles/legend/UrbanIntelligencePartners_19_0.png" /> Public Organisation<br />\
    <img src="styles/legend/UrbanIntelligencePartners_19_1.png" /> SME<br />' });
var format_NeWGConnection_20 = new ol.format.GeoJSON();
var features_NeWGConnection_20 = format_NeWGConnection_20.readFeatures(json_NeWGConnection_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeWGConnection_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeWGConnection_20.addFeatures(features_NeWGConnection_20);
var lyr_NeWGConnection_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeWGConnection_20, 
                style: style_NeWGConnection_20,
                popuplayertitle: 'NeWG+ Connection',
                interactive: false,
                title: '<img src="styles/legend/NeWGConnection_20.png" /> NeWG+ Connection'
            });
var format_NeWGPartners_21 = new ol.format.GeoJSON();
var features_NeWGPartners_21 = format_NeWGPartners_21.readFeatures(json_NeWGPartners_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeWGPartners_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeWGPartners_21.addFeatures(features_NeWGPartners_21);
var lyr_NeWGPartners_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeWGPartners_21, 
                style: style_NeWGPartners_21,
                popuplayertitle: 'NeWG+ Partners',
                interactive: true,
    title: 'NeWG+ Partners<br />\
    <img src="styles/legend/NeWGPartners_21_0.png" /> Public Organisation<br />\
    <img src="styles/legend/NeWGPartners_21_1.png" /> Non-Profit<br />\
    <img src="styles/legend/NeWGPartners_21_2.png" /> Research Organisation<br />\
    <img src="styles/legend/NeWGPartners_21_3.png" /> SME<br />' });
var group_NeWGProject = new ol.layer.Group({
                                layers: [lyr_NeWGConnection_20,lyr_NeWGPartners_21,],
                                fold: 'open',
                                title: 'NeWG+ Project'});
var group_UrbanIntelligenceProject = new ol.layer.Group({
                                layers: [lyr_UrbanIntelligenceConnection_18,lyr_UrbanIntelligencePartners_19,],
                                fold: 'close',
                                title: 'Urban Intelligence Project'});
var group_ALEXProject = new ol.layer.Group({
                                layers: [lyr_ALEXConnection_16,lyr_AlexPartners_17,],
                                fold: 'close',
                                title: 'ALEX Project'});
var group_CivicTwinLabProject = new ol.layer.Group({
                                layers: [lyr_CivicTwinLabConnection_14,lyr_CivicTwinLabPartners_15,],
                                fold: 'close',
                                title: 'CivicTwinLab Project'});
var group_PERFORMProject = new ol.layer.Group({
                                layers: [lyr_PERFORMConnection_12,lyr_PERFORMPartners_13,],
                                fold: 'close',
                                title: 'PERFORM Project'});
var group_CITYRESProject = new ol.layer.Group({
                                layers: [lyr_CITYRESConnection_10,lyr_CITYRESPartners_11,],
                                fold: 'close',
                                title: 'CITYRES Project'});
var group_GeoTwinELBGProject = new ol.layer.Group({
                                layers: [lyr_GeoTwinELBGConnection_8,lyr_GeoTwinELBGPartners_9,],
                                fold: 'open',
                                title: 'GeoTwin-ELBG Project'});
var group_AquaGuardTwinProject = new ol.layer.Group({
                                layers: [lyr_AquaGuardTwinConnection_6,lyr_AquaGuardTwinPartners_7,],
                                fold: 'close',
                                title: 'AquaGuardTwin Project'});
var group_MuncipalProject = new ol.layer.Group({
                                layers: [lyr_MunicipalConnection_4,lyr_MunicipalPartners_5,],
                                fold: 'close',
                                title: 'Muncipal Project'});
var group_EUTwinLinkProject = new ol.layer.Group({
                                layers: [lyr_EUTwinLinkConnection_2,lyr_EUTwinLinkPartners_3,],
                                fold: 'close',
                                title: 'EUTwinLink Project'});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRIGraylight_1,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_GoogleMaps_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_EUTwinLinkConnection_2.setVisible(true);lyr_EUTwinLinkPartners_3.setVisible(true);lyr_MunicipalConnection_4.setVisible(true);lyr_MunicipalPartners_5.setVisible(true);lyr_AquaGuardTwinConnection_6.setVisible(true);lyr_AquaGuardTwinPartners_7.setVisible(true);lyr_GeoTwinELBGConnection_8.setVisible(true);lyr_GeoTwinELBGPartners_9.setVisible(true);lyr_CITYRESConnection_10.setVisible(true);lyr_CITYRESPartners_11.setVisible(true);lyr_PERFORMConnection_12.setVisible(true);lyr_PERFORMPartners_13.setVisible(true);lyr_CivicTwinLabConnection_14.setVisible(true);lyr_CivicTwinLabPartners_15.setVisible(true);lyr_ALEXConnection_16.setVisible(true);lyr_AlexPartners_17.setVisible(true);lyr_UrbanIntelligenceConnection_18.setVisible(true);lyr_UrbanIntelligencePartners_19.setVisible(true);lyr_NeWGConnection_20.setVisible(true);lyr_NeWGPartners_21.setVisible(true);
var layersList = [group_Basemaps,group_EUTwinLinkProject,group_MuncipalProject,group_AquaGuardTwinProject,group_GeoTwinELBGProject,group_CITYRESProject,group_PERFORMProject,group_CivicTwinLabProject,group_ALEXProject,group_UrbanIntelligenceProject,group_NeWGProject];
lyr_EUTwinLinkConnection_2.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Type': 'Type', });
lyr_EUTwinLinkPartners_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'd': 'd', 'Partner': 'Partner', 'WS': 'WS', 'Role': 'Role', 'Call': 'Call', });
lyr_MunicipalConnection_4.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_MunicipalPartners_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Partner': 'Partner', 'd': 'd', 'WS': 'WS', 'Role': 'Role', 'Call': 'Call', });
lyr_AquaGuardTwinConnection_6.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_AquaGuardTwinPartners_7.set('fieldAliases', {'id': 'id', 'Partner': 'Partner', 'Role': 'Role', 'WS': 'WS', 'Call': 'Call', });
lyr_GeoTwinELBGConnection_8.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_GeoTwinELBGPartners_9.set('fieldAliases', {'id': 'id', 'Partner': 'Partner', 'Role': 'Role', 'WS': 'WS', 'Call': 'Call', });
lyr_CITYRESConnection_10.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_CITYRESPartners_11.set('fieldAliases', {'id': 'id', 'Partner': 'Partner', 'Role': 'Role', 'WS': 'WS', 'Call': 'Call', });
lyr_PERFORMConnection_12.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_PERFORMPartners_13.set('fieldAliases', {'id': 'id', 'Partner': 'Partner', 'Role': 'Role', 'WS': 'WS', 'Call': 'Call', });
lyr_CivicTwinLabConnection_14.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_CivicTwinLabPartners_15.set('fieldAliases', {'id': 'id', 'Partner': 'Partner', 'Role': 'Role', 'WS': 'WS', 'Call': 'Call', });
lyr_ALEXConnection_16.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_AlexPartners_17.set('fieldAliases', {'id': 'id', 'Partner': 'Partner', 'Role': 'Role', 'WS': 'WS', 'Call': 'Call', });
lyr_UrbanIntelligenceConnection_18.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_UrbanIntelligencePartners_19.set('fieldAliases', {'id': 'id', 'Partner': 'Partner', 'Role': 'Role', 'WS': 'WS', 'Call': 'Call', });
lyr_NeWGConnection_20.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_NeWGPartners_21.set('fieldAliases', {'id': 'id', 'Partner': 'Partner', 'Role': 'Role', 'WS': 'WS', 'Call': 'Call', });
lyr_EUTwinLinkConnection_2.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Type': 'Range', });
lyr_EUTwinLinkPartners_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'd': 'TextEdit', 'Partner': 'TextEdit', 'WS': 'TextEdit', 'Role': 'TextEdit', 'Call': 'TextEdit', });
lyr_MunicipalConnection_4.set('fieldImages', {'begin': '', 'end': '', });
lyr_MunicipalPartners_5.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Partner': 'TextEdit', 'd': 'TextEdit', 'WS': 'TextEdit', 'Role': 'TextEdit', 'Call': 'TextEdit', });
lyr_AquaGuardTwinConnection_6.set('fieldImages', {'fid': '', 'begin': '', 'end': '', });
lyr_AquaGuardTwinPartners_7.set('fieldImages', {'id': 'TextEdit', 'Partner': 'TextEdit', 'Role': 'TextEdit', 'WS': 'TextEdit', 'Call': 'TextEdit', });
lyr_GeoTwinELBGConnection_8.set('fieldImages', {'fid': '', 'begin': '', 'end': '', });
lyr_GeoTwinELBGPartners_9.set('fieldImages', {'id': '', 'Partner': '', 'Role': '', 'WS': '', 'Call': '', });
lyr_CITYRESConnection_10.set('fieldImages', {'fid': '', 'begin': '', 'end': '', });
lyr_CITYRESPartners_11.set('fieldImages', {'id': 'TextEdit', 'Partner': 'TextEdit', 'Role': 'TextEdit', 'WS': 'TextEdit', 'Call': 'TextEdit', });
lyr_PERFORMConnection_12.set('fieldImages', {'fid': '', 'begin': '', 'end': '', });
lyr_PERFORMPartners_13.set('fieldImages', {'id': 'TextEdit', 'Partner': 'TextEdit', 'Role': 'TextEdit', 'WS': 'TextEdit', 'Call': 'TextEdit', });
lyr_CivicTwinLabConnection_14.set('fieldImages', {'fid': '', 'begin': '', 'end': '', });
lyr_CivicTwinLabPartners_15.set('fieldImages', {'id': '', 'Partner': '', 'Role': '', 'WS': '', 'Call': '', });
lyr_ALEXConnection_16.set('fieldImages', {'fid': '', 'begin': '', 'end': '', });
lyr_AlexPartners_17.set('fieldImages', {'id': 'TextEdit', 'Partner': 'TextEdit', 'Role': 'TextEdit', 'WS': 'TextEdit', 'Call': 'TextEdit', });
lyr_UrbanIntelligenceConnection_18.set('fieldImages', {'fid': '', 'begin': '', 'end': '', });
lyr_UrbanIntelligencePartners_19.set('fieldImages', {'id': 'TextEdit', 'Partner': 'TextEdit', 'Role': 'TextEdit', 'WS': 'TextEdit', 'Call': 'TextEdit', });
lyr_NeWGConnection_20.set('fieldImages', {'fid': '', 'begin': '', 'end': '', });
lyr_NeWGPartners_21.set('fieldImages', {'id': 'TextEdit', 'Partner': 'TextEdit', 'Role': 'TextEdit', 'WS': 'TextEdit', 'Call': 'TextEdit', });
lyr_EUTwinLinkConnection_2.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', 'Type': 'no label', });
lyr_EUTwinLinkPartners_3.set('fieldLabels', {'id': 'hidden field', 'name': 'hidden field', 'd': 'hidden field', 'Partner': 'inline label - visible with data', 'WS': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'Call': 'inline label - always visible', });
lyr_MunicipalConnection_4.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_MunicipalPartners_5.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'Partner': 'inline label - visible with data', 'd': 'hidden field', 'WS': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'Call': 'inline label - visible with data', });
lyr_AquaGuardTwinConnection_6.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_AquaGuardTwinPartners_7.set('fieldLabels', {'id': 'hidden field', 'Partner': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'WS': 'inline label - visible with data', 'Call': 'inline label - visible with data', });
lyr_GeoTwinELBGConnection_8.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_GeoTwinELBGPartners_9.set('fieldLabels', {'id': 'hidden field', 'Partner': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'WS': 'inline label - visible with data', 'Call': 'inline label - visible with data', });
lyr_CITYRESConnection_10.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_CITYRESPartners_11.set('fieldLabels', {'id': 'hidden field', 'Partner': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'WS': 'inline label - visible with data', 'Call': 'inline label - visible with data', });
lyr_PERFORMConnection_12.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_PERFORMPartners_13.set('fieldLabels', {'id': 'hidden field', 'Partner': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'WS': 'inline label - visible with data', 'Call': 'inline label - visible with data', });
lyr_CivicTwinLabConnection_14.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_CivicTwinLabPartners_15.set('fieldLabels', {'id': 'hidden field', 'Partner': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'WS': 'inline label - visible with data', 'Call': 'inline label - visible with data', });
lyr_ALEXConnection_16.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_AlexPartners_17.set('fieldLabels', {'id': 'hidden field', 'Partner': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'WS': 'inline label - visible with data', 'Call': 'inline label - visible with data', });
lyr_UrbanIntelligenceConnection_18.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_UrbanIntelligencePartners_19.set('fieldLabels', {'id': 'hidden field', 'Partner': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'WS': 'inline label - visible with data', 'Call': 'inline label - visible with data', });
lyr_NeWGConnection_20.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_NeWGPartners_21.set('fieldLabels', {'id': 'hidden field', 'Partner': 'inline label - visible with data', 'Role': 'inline label - visible with data', 'WS': 'inline label - visible with data', 'Call': 'inline label - visible with data', });
lyr_NeWGPartners_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});