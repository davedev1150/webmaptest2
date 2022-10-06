var wms_layers = [];


        var lyr_GoogleSetellite_0 = new ol.layer.Tile({
            'title': 'Google Setellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_db_INSupdate_2 = new ol.format.GeoJSON();
var features_db_INSupdate_2 = format_db_INSupdate_2.readFeatures(json_db_INSupdate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_db_INSupdate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_db_INSupdate_2.addFeatures(features_db_INSupdate_2);
var lyr_db_INSupdate_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_db_INSupdate_2, 
                style: style_db_INSupdate_2,
                interactive: true,
                title: '<img src="styles/legend/db_INSupdate_2.png" /> db_INS update'
            });

lyr_GoogleSetellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_db_INSupdate_2.setVisible(true);
var layersList = [lyr_GoogleSetellite_0,lyr_GoogleMaps_1,lyr_db_INSupdate_2];
lyr_db_INSupdate_2.set('fieldAliases', {'Name': 'Name', 'LAT': 'LAT', 'LONG': 'LONG', 'lat_degree': 'lat_degree', 'lat_minute': 'lat_minute', 'lat_second': 'lat_second', 'long_degree': 'long_degree', 'long_minute': 'long_minute', 'long_second': 'long_second', 'E': 'E', 'N': 'N', 'ZONE': 'ZONE', 'STA': 'STA', 'OFFSET': 'OFFSET', 'U/S or D/S': 'U/S or D/S', 'INS_Sensor_EL': 'INS_Sensor_EL', 'Ground_OG': 'Ground_OG', 'LAT_install': 'LAT_install', 'LONG_install': 'LONG_install', 'E_install': 'E_install', 'N_install': 'N_install', 'STA_install': 'STA_install', 'OFFSET_install': 'OFFSET_install', 'U/S or D/S_install': 'U/S or D/S_install', 'PROJ_ID': 'PROJ_ID', 'RID_NUM': 'RID_NUM', 'YEAR': 'YEAR', 'INS_type': 'INS_type', 'install_type': 'install_type', 'Description': 'Description', 'คอลัมน์1': 'คอลัมน์1', 'field_32': 'field_32', 'field_33': 'field_33', 'field_34': 'field_34', 'field_35': 'field_35', 'field_36': 'field_36', 'field_37': 'field_37', 'field_38': 'field_38', 'field_39': 'field_39', 'field_40': 'field_40', 'field_41': 'field_41', 'field_42': 'field_42', 'field_43': 'field_43', 'field_44': 'field_44', });
lyr_db_INSupdate_2.set('fieldImages', {'Name': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'lat_degree': 'Range', 'lat_minute': 'Range', 'lat_second': 'TextEdit', 'long_degree': 'Range', 'long_minute': 'Range', 'long_second': 'TextEdit', 'E': 'TextEdit', 'N': 'TextEdit', 'ZONE': 'Range', 'STA': 'TextEdit', 'OFFSET': 'TextEdit', 'U/S or D/S': 'TextEdit', 'INS_Sensor_EL': 'TextEdit', 'Ground_OG': 'TextEdit', 'LAT_install': 'TextEdit', 'LONG_install': 'TextEdit', 'E_install': 'TextEdit', 'N_install': 'TextEdit', 'STA_install': 'TextEdit', 'OFFSET_install': 'TextEdit', 'U/S or D/S_install': 'TextEdit', 'PROJ_ID': 'TextEdit', 'RID_NUM': 'Range', 'YEAR': 'Range', 'INS_type': 'TextEdit', 'install_type': 'TextEdit', 'Description': 'TextEdit', 'คอลัมน์1': 'TextEdit', 'field_32': 'TextEdit', 'field_33': 'TextEdit', 'field_34': 'TextEdit', 'field_35': 'TextEdit', 'field_36': 'TextEdit', 'field_37': 'TextEdit', 'field_38': 'TextEdit', 'field_39': 'TextEdit', 'field_40': 'TextEdit', 'field_41': 'TextEdit', 'field_42': 'TextEdit', 'field_43': 'TextEdit', 'field_44': 'TextEdit', });
lyr_db_INSupdate_2.set('fieldLabels', {'Name': 'inline label', 'LAT': 'inline label', 'LONG': 'inline label', 'lat_degree': 'inline label', 'lat_minute': 'inline label', 'lat_second': 'inline label', 'long_degree': 'inline label', 'long_minute': 'inline label', 'long_second': 'inline label', 'E': 'inline label', 'N': 'inline label', 'ZONE': 'inline label', 'STA': 'inline label', 'OFFSET': 'inline label', 'U/S or D/S': 'inline label', 'INS_Sensor_EL': 'inline label', 'Ground_OG': 'inline label', 'LAT_install': 'inline label', 'LONG_install': 'inline label', 'E_install': 'inline label', 'N_install': 'inline label', 'STA_install': 'inline label', 'OFFSET_install': 'inline label', 'U/S or D/S_install': 'inline label', 'PROJ_ID': 'inline label', 'RID_NUM': 'inline label', 'YEAR': 'inline label', 'INS_type': 'inline label', 'install_type': 'inline label', 'Description': 'inline label', 'คอลัมน์1': 'no label', 'field_32': 'no label', 'field_33': 'no label', 'field_34': 'no label', 'field_35': 'no label', 'field_36': 'no label', 'field_37': 'no label', 'field_38': 'no label', 'field_39': 'no label', 'field_40': 'no label', 'field_41': 'no label', 'field_42': 'no label', 'field_43': 'no label', 'field_44': 'no label', });
lyr_db_INSupdate_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});