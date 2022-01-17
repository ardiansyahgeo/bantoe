var wms_layers = [];


        var lyr_HYBRID_0 = new ol.layer.Tile({
            'title': 'HYBRID',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_Produktivitas_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Produktivitas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Produktivitas_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11969774.898100, -757623.483562, 12014174.898100, -692162.691807]
                            })
                        });
var format_DAERAHIRIGASI_2 = new ol.format.GeoJSON();
var features_DAERAHIRIGASI_2 = format_DAERAHIRIGASI_2.readFeatures(json_DAERAHIRIGASI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAERAHIRIGASI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAERAHIRIGASI_2.addFeatures(features_DAERAHIRIGASI_2);
var lyr_DAERAHIRIGASI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DAERAHIRIGASI_2, 
                style: style_DAERAHIRIGASI_2,
                interactive: true,
                title: '<img src="styles/legend/DAERAHIRIGASI_2.png" /> DAERAH IRIGASI'
            });
var lyr_STATUSTANAH_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "STATUS TANAH",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/STATUSTANAH_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11992435.581741, -705850.105894, 12000868.255808, -700793.218182]
                            })
                        });

lyr_HYBRID_0.setVisible(true);lyr_Produktivitas_1.setVisible(false);lyr_DAERAHIRIGASI_2.setVisible(false);lyr_STATUSTANAH_3.setVisible(false);
var layersList = [lyr_HYBRID_0,lyr_Produktivitas_1,lyr_DAERAHIRIGASI_2,lyr_STATUSTANAH_3];
lyr_DAERAHIRIGASI_2.set('fieldAliases', {'Nama_DI': 'Nama_DI', 'Status': 'Status', 'Kewenangan': 'Kewenangan', 'Luas_CEA': 'Luas_CEA', 'Kabupaten': 'Kabupaten', });
lyr_DAERAHIRIGASI_2.set('fieldImages', {'Nama_DI': 'TextEdit', 'Status': 'TextEdit', 'Kewenangan': 'TextEdit', 'Luas_CEA': 'TextEdit', 'Kabupaten': 'TextEdit', });
lyr_DAERAHIRIGASI_2.set('fieldLabels', {'Nama_DI': 'inline label', 'Status': 'inline label', 'Kewenangan': 'inline label', 'Luas_CEA': 'inline label', 'Kabupaten': 'inline label', });
lyr_DAERAHIRIGASI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});