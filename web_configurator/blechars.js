//
//
//  !!! THIS FILE IS AUTOMATICALLY GENERATED, DO NOT EDIT DIRECTLY !!!
//
//  Modify settings.csv and execute buildsettings.py to generate this source file
//

let radioService;
let gattServer;
let commandCharacteristic;
let Rll_Min_promise;
let Rll_Min_value;
let Rll_Max_promise;
let Rll_Max_value;
let Rll_Cnt_promise;
let Rll_Cnt_value;
let Rll_Gain_promise;
let Rll_Gain_value;
let Tlt_Min_promise;
let Tlt_Min_value;
let Tlt_Max_promise;
let Tlt_Max_value;
let Tlt_Cnt_promise;
let Tlt_Cnt_value;
let Tlt_Gain_promise;
let Tlt_Gain_value;
let Pan_Min_promise;
let Pan_Min_value;
let Pan_Max_promise;
let Pan_Max_value;
let Pan_Cnt_promise;
let Pan_Cnt_value;
let Pan_Gain_promise;
let Pan_Gain_value;
let TltCh_promise;
let TltCh_value;
let RllCh_promise;
let RllCh_value;
let PanCh_promise;
let PanCh_value;
let AlertCh_promise;
let AlertCh_value;
let Pwm0_promise;
let Pwm0_value;
let Pwm1_promise;
let Pwm1_value;
let Pwm2_promise;
let Pwm2_value;
let Pwm3_promise;
let Pwm3_value;
let An0Ch_promise;
let An0Ch_value;
let An1Ch_promise;
let An1Ch_value;
let An2Ch_promise;
let An2Ch_value;
let An3Ch_promise;
let An3Ch_value;
let Aux0Ch_promise;
let Aux0Ch_value;
let Aux1Ch_promise;
let Aux1Ch_value;
let Aux2Ch_promise;
let Aux2Ch_value;
let An0Gain_promise;
let An0Gain_value;
let An1Gain_promise;
let An1Gain_value;
let An2Gain_promise;
let An2Gain_value;
let An3Gain_promise;
let An3Gain_value;
let An0Off_promise;
let An0Off_value;
let An1Off_promise;
let An1Off_value;
let An2Off_promise;
let An2Off_value;
let An3Off_promise;
let An3Off_value;
let DisMag_promise;
let DisMag_value;

function updateFields()
{
  $("#inp_Rll_Min").val(Rll_Min_value);
  $("#inp_Rll_Max").val(Rll_Max_value);
  $("#inp_Rll_Cnt").val(Rll_Cnt_value);
  $("#inp_Rll_Gain").val(Rll_Gain_value);
  $("#inp_Tlt_Min").val(Tlt_Min_value);
  $("#inp_Tlt_Max").val(Tlt_Max_value);
  $("#inp_Tlt_Cnt").val(Tlt_Cnt_value);
  $("#inp_Tlt_Gain").val(Tlt_Gain_value);
  $("#inp_Pan_Min").val(Pan_Min_value);
  $("#inp_Pan_Max").val(Pan_Max_value);
  $("#inp_Pan_Cnt").val(Pan_Cnt_value);
  $("#inp_Pan_Gain").val(Pan_Gain_value);
  $("#inp_TltCh").val(TltCh_value);
  $("#inp_RllCh").val(RllCh_value);
  $("#inp_PanCh").val(PanCh_value);
  $("#inp_AlertCh").val(AlertCh_value);
  $("#inp_Pwm0").val(Pwm0_value);
  $("#inp_Pwm1").val(Pwm1_value);
  $("#inp_Pwm2").val(Pwm2_value);
  $("#inp_Pwm3").val(Pwm3_value);
  $("#inp_An0Ch").val(An0Ch_value);
  $("#inp_An1Ch").val(An1Ch_value);
  $("#inp_An2Ch").val(An2Ch_value);
  $("#inp_An3Ch").val(An3Ch_value);
  $("#inp_Aux0Ch").val(Aux0Ch_value);
  $("#inp_Aux1Ch").val(Aux1Ch_value);
  $("#inp_Aux2Ch").val(Aux2Ch_value);
  $("#inp_An0Gain").val(An0Gain_value);
  $("#inp_An1Gain").val(An1Gain_value);
  $("#inp_An2Gain").val(An2Gain_value);
  $("#inp_An3Gain").val(An3Gain_value);
  $("#inp_An0Off").val(An0Off_value);
  $("#inp_An1Off").val(An1Off_value);
  $("#inp_An2Off").val(An2Off_value);
  $("#inp_An3Off").val(An3Off_value);
  $("#inp_DisMag").val(DisMag_value);
}

$('#inp_Rll_Min').on('change', function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setUint16(0, $('#inp_Rll_Min').val(), true)
  Rll_Min_promise.writeValue(buffer);
  updateParameter('Rll_Min',$('#inp_Rll_Min').val())
});
$('#inp_Rll_Max').on('change', function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setUint16(0, $('#inp_Rll_Max').val(), true)
  Rll_Max_promise.writeValue(buffer);
  updateParameter('Rll_Max',$('#inp_Rll_Max').val())
});
$('#inp_Rll_Cnt').on('change', function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setUint16(0, $('#inp_Rll_Cnt').val(), true)
  Rll_Cnt_promise.writeValue(buffer);
  updateParameter('Rll_Cnt',$('#inp_Rll_Cnt').val())
});
$('#inp_Rll_Gain').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_Rll_Gain').val(), true)
  Rll_Gain_promise.writeValue(buffer);
  updateParameter('Rll_Gain',$('#inp_Rll_Gain').val())
});
$('#inp_Tlt_Min').on('change', function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setUint16(0, $('#inp_Tlt_Min').val(), true)
  Tlt_Min_promise.writeValue(buffer);
  updateParameter('Tlt_Min',$('#inp_Tlt_Min').val())
});
$('#inp_Tlt_Max').on('change', function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setUint16(0, $('#inp_Tlt_Max').val(), true)
  Tlt_Max_promise.writeValue(buffer);
  updateParameter('Tlt_Max',$('#inp_Tlt_Max').val())
});
$('#inp_Tlt_Cnt').on('change', function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setUint16(0, $('#inp_Tlt_Cnt').val(), true)
  Tlt_Cnt_promise.writeValue(buffer);
  updateParameter('Tlt_Cnt',$('#inp_Tlt_Cnt').val())
});
$('#inp_Tlt_Gain').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_Tlt_Gain').val(), true)
  Tlt_Gain_promise.writeValue(buffer);
  updateParameter('Tlt_Gain',$('#inp_Tlt_Gain').val())
});
$('#inp_Pan_Min').on('change', function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setUint16(0, $('#inp_Pan_Min').val(), true)
  Pan_Min_promise.writeValue(buffer);
  updateParameter('Pan_Min',$('#inp_Pan_Min').val())
});
$('#inp_Pan_Max').on('change', function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setUint16(0, $('#inp_Pan_Max').val(), true)
  Pan_Max_promise.writeValue(buffer);
  updateParameter('Pan_Max',$('#inp_Pan_Max').val())
});
$('#inp_Pan_Cnt').on('change', function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setUint16(0, $('#inp_Pan_Cnt').val(), true)
  Pan_Cnt_promise.writeValue(buffer);
  updateParameter('Pan_Cnt',$('#inp_Pan_Cnt').val())
});
$('#inp_Pan_Gain').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_Pan_Gain').val(), true)
  Pan_Gain_promise.writeValue(buffer);
  updateParameter('Pan_Gain',$('#inp_Pan_Gain').val())
});
$('#inp_TltCh').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_TltCh').val(), true)
  TltCh_promise.writeValue(buffer);
  updateParameter('TltCh',$('#inp_TltCh').val())
});
$('#inp_RllCh').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_RllCh').val(), true)
  RllCh_promise.writeValue(buffer);
  updateParameter('RllCh',$('#inp_RllCh').val())
});
$('#inp_PanCh').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_PanCh').val(), true)
  PanCh_promise.writeValue(buffer);
  updateParameter('PanCh',$('#inp_PanCh').val())
});
$('#inp_AlertCh').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_AlertCh').val(), true)
  AlertCh_promise.writeValue(buffer);
  updateParameter('AlertCh',$('#inp_AlertCh').val())
});
$('#inp_Pwm0').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_Pwm0').val(), true)
  Pwm0_promise.writeValue(buffer);
  updateParameter('Pwm0',$('#inp_Pwm0').val())
});
$('#inp_Pwm1').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_Pwm1').val(), true)
  Pwm1_promise.writeValue(buffer);
  updateParameter('Pwm1',$('#inp_Pwm1').val())
});
$('#inp_Pwm2').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_Pwm2').val(), true)
  Pwm2_promise.writeValue(buffer);
  updateParameter('Pwm2',$('#inp_Pwm2').val())
});
$('#inp_Pwm3').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_Pwm3').val(), true)
  Pwm3_promise.writeValue(buffer);
  updateParameter('Pwm3',$('#inp_Pwm3').val())
});
$('#inp_An0Ch').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_An0Ch').val(), true)
  An0Ch_promise.writeValue(buffer);
  updateParameter('An0Ch',$('#inp_An0Ch').val())
});
$('#inp_An1Ch').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_An1Ch').val(), true)
  An1Ch_promise.writeValue(buffer);
  updateParameter('An1Ch',$('#inp_An1Ch').val())
});
$('#inp_An2Ch').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_An2Ch').val(), true)
  An2Ch_promise.writeValue(buffer);
  updateParameter('An2Ch',$('#inp_An2Ch').val())
});
$('#inp_An3Ch').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_An3Ch').val(), true)
  An3Ch_promise.writeValue(buffer);
  updateParameter('An3Ch',$('#inp_An3Ch').val())
});
$('#inp_Aux0Ch').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_Aux0Ch').val(), true)
  Aux0Ch_promise.writeValue(buffer);
  updateParameter('Aux0Ch',$('#inp_Aux0Ch').val())
});
$('#inp_Aux1Ch').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_Aux1Ch').val(), true)
  Aux1Ch_promise.writeValue(buffer);
  updateParameter('Aux1Ch',$('#inp_Aux1Ch').val())
});
$('#inp_Aux2Ch').on('change', function() {
  const buffer = new ArrayBuffer(1);
  new DataView(buffer).setInt8(0, $('#inp_Aux2Ch').val(), true)
  Aux2Ch_promise.writeValue(buffer);
  updateParameter('Aux2Ch',$('#inp_Aux2Ch').val())
});
$('#inp_An0Gain').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_An0Gain').val(), true)
  An0Gain_promise.writeValue(buffer);
  updateParameter('An0Gain',$('#inp_An0Gain').val())
});
$('#inp_An1Gain').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_An1Gain').val(), true)
  An1Gain_promise.writeValue(buffer);
  updateParameter('An1Gain',$('#inp_An1Gain').val())
});
$('#inp_An2Gain').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_An2Gain').val(), true)
  An2Gain_promise.writeValue(buffer);
  updateParameter('An2Gain',$('#inp_An2Gain').val())
});
$('#inp_An3Gain').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_An3Gain').val(), true)
  An3Gain_promise.writeValue(buffer);
  updateParameter('An3Gain',$('#inp_An3Gain').val())
});
$('#inp_An0Off').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_An0Off').val(), true)
  An0Off_promise.writeValue(buffer);
  updateParameter('An0Off',$('#inp_An0Off').val())
});
$('#inp_An1Off').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_An1Off').val(), true)
  An1Off_promise.writeValue(buffer);
  updateParameter('An1Off',$('#inp_An1Off').val())
});
$('#inp_An2Off').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_An2Off').val(), true)
  An2Off_promise.writeValue(buffer);
  updateParameter('An2Off',$('#inp_An2Off').val())
});
$('#inp_An3Off').on('change', function() {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, $('#inp_An3Off').val(), true)
  An3Off_promise.writeValue(buffer);
  updateParameter('An3Off',$('#inp_An3Off').val())
});
$('#inp_DisMag').on('change', function() {
  const buffer = new ArrayBuffer(None);
  new DataView(buffer).setNone(0, $('#inp_DisMag').val(), true)
  DisMag_promise.writeValue(buffer);
  updateParameter('DisMag',$('#inp_DisMag').val())
});


function connectToHT() {
  if (radioService == null) {
    navigator.bluetooth.requestDevice({
      filters: [{
        services: [0xFFFA]  // Headtracker Bluetooth Configuration Service
      }]
    })
    .then(device => {
      btConnectionStatus('Connecting to HeadTracker...');
      showLoader();
      return device.gatt.connect();
    })
    .then(server => {
      gattServer = server;
      return gattServer.getPrimaryService(0xFFFA);
    })
    .then(service => {
      radioService = service;
      return radioService.getCharacteristic(0xFF00); // Get command characteristic
    })
    .then(characteristic => {
      commandCharacteristic = characteristic;
      btConnectionStatus('Got the Command Characteristic');
      readValues(btConnectionStatus, connectionEstablished);
    })
    .catch(error => {
      console.error(error);
      connectionFault(error);
    })
  }
}

function readValues(messageFunc, onCompleted) {
  if(gattServer == null) {
    console.log("No Gatt Server");
    return;
  }

  if(gattServer.connected == false) {
    console.log("Gatt Server not Connected");
    return;
  }

  radioService.getCharacteristic(0xF000)  .then(characteristic => {
    Rll_Min_promise = characteristic;
    return Rll_Min_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Rll_Min');
    Rll_Min_value = value.getUint16(0, true);
    return radioService.getCharacteristic(0xF001); // Get Rll_Max characteristic
  })
  .then(characteristic => {
    Rll_Max_promise = characteristic;
    return Rll_Max_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Rll_Max');
    Rll_Max_value = value.getUint16(0, true);
    return radioService.getCharacteristic(0xF002); // Get Rll_Cnt characteristic
  })
  .then(characteristic => {
    Rll_Cnt_promise = characteristic;
    return Rll_Cnt_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Rll_Cnt');
    Rll_Cnt_value = value.getUint16(0, true);
    return radioService.getCharacteristic(0xF003); // Get Rll_Gain characteristic
  })
  .then(characteristic => {
    Rll_Gain_promise = characteristic;
    return Rll_Gain_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Rll_Gain');
    Rll_Gain_value = value.getFloat32(0, true).toFixed(2);
    return radioService.getCharacteristic(0xF004); // Get Tlt_Min characteristic
  })
  .then(characteristic => {
    Tlt_Min_promise = characteristic;
    return Tlt_Min_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Tlt_Min');
    Tlt_Min_value = value.getUint16(0, true);
    return radioService.getCharacteristic(0xF005); // Get Tlt_Max characteristic
  })
  .then(characteristic => {
    Tlt_Max_promise = characteristic;
    return Tlt_Max_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Tlt_Max');
    Tlt_Max_value = value.getUint16(0, true);
    return radioService.getCharacteristic(0xF006); // Get Tlt_Cnt characteristic
  })
  .then(characteristic => {
    Tlt_Cnt_promise = characteristic;
    return Tlt_Cnt_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Tlt_Cnt');
    Tlt_Cnt_value = value.getUint16(0, true);
    return radioService.getCharacteristic(0xF007); // Get Tlt_Gain characteristic
  })
  .then(characteristic => {
    Tlt_Gain_promise = characteristic;
    return Tlt_Gain_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Tlt_Gain');
    Tlt_Gain_value = value.getFloat32(0, true).toFixed(2);
    return radioService.getCharacteristic(0xF008); // Get Pan_Min characteristic
  })
  .then(characteristic => {
    Pan_Min_promise = characteristic;
    return Pan_Min_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Pan_Min');
    Pan_Min_value = value.getUint16(0, true);
    return radioService.getCharacteristic(0xF009); // Get Pan_Max characteristic
  })
  .then(characteristic => {
    Pan_Max_promise = characteristic;
    return Pan_Max_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Pan_Max');
    Pan_Max_value = value.getUint16(0, true);
    return radioService.getCharacteristic(0xF010); // Get Pan_Cnt characteristic
  })
  .then(characteristic => {
    Pan_Cnt_promise = characteristic;
    return Pan_Cnt_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Pan_Cnt');
    Pan_Cnt_value = value.getUint16(0, true);
    return radioService.getCharacteristic(0xF011); // Get Pan_Gain characteristic
  })
  .then(characteristic => {
    Pan_Gain_promise = characteristic;
    return Pan_Gain_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Pan_Gain');
    Pan_Gain_value = value.getFloat32(0, true).toFixed(2);
    return radioService.getCharacteristic(0xF100); // Get TltCh characteristic
  })
  .then(characteristic => {
    TltCh_promise = characteristic;
    return TltCh_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got TltCh');
    TltCh_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF101); // Get RllCh characteristic
  })
  .then(characteristic => {
    RllCh_promise = characteristic;
    return RllCh_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got RllCh');
    RllCh_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF102); // Get PanCh characteristic
  })
  .then(characteristic => {
    PanCh_promise = characteristic;
    return PanCh_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got PanCh');
    PanCh_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF103); // Get AlertCh characteristic
  })
  .then(characteristic => {
    AlertCh_promise = characteristic;
    return AlertCh_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got AlertCh');
    AlertCh_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF104); // Get Pwm0 characteristic
  })
  .then(characteristic => {
    Pwm0_promise = characteristic;
    return Pwm0_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Pwm0');
    Pwm0_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF105); // Get Pwm1 characteristic
  })
  .then(characteristic => {
    Pwm1_promise = characteristic;
    return Pwm1_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Pwm1');
    Pwm1_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF106); // Get Pwm2 characteristic
  })
  .then(characteristic => {
    Pwm2_promise = characteristic;
    return Pwm2_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Pwm2');
    Pwm2_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF107); // Get Pwm3 characteristic
  })
  .then(characteristic => {
    Pwm3_promise = characteristic;
    return Pwm3_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Pwm3');
    Pwm3_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF108); // Get An0Ch characteristic
  })
  .then(characteristic => {
    An0Ch_promise = characteristic;
    return An0Ch_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An0Ch');
    An0Ch_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF109); // Get An1Ch characteristic
  })
  .then(characteristic => {
    An1Ch_promise = characteristic;
    return An1Ch_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An1Ch');
    An1Ch_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF10A); // Get An2Ch characteristic
  })
  .then(characteristic => {
    An2Ch_promise = characteristic;
    return An2Ch_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An2Ch');
    An2Ch_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF10B); // Get An3Ch characteristic
  })
  .then(characteristic => {
    An3Ch_promise = characteristic;
    return An3Ch_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An3Ch');
    An3Ch_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF10C); // Get Aux0Ch characteristic
  })
  .then(characteristic => {
    Aux0Ch_promise = characteristic;
    return Aux0Ch_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Aux0Ch');
    Aux0Ch_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF10D); // Get Aux1Ch characteristic
  })
  .then(characteristic => {
    Aux1Ch_promise = characteristic;
    return Aux1Ch_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Aux1Ch');
    Aux1Ch_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF10E); // Get Aux2Ch characteristic
  })
  .then(characteristic => {
    Aux2Ch_promise = characteristic;
    return Aux2Ch_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got Aux2Ch');
    Aux2Ch_value = value.getInt8(0, true);
    return radioService.getCharacteristic(0xF10F); // Get An0Gain characteristic
  })
  .then(characteristic => {
    An0Gain_promise = characteristic;
    return An0Gain_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An0Gain');
    An0Gain_value = value.getFloat32(0, true).toFixed(3);
    return radioService.getCharacteristic(0xF110); // Get An1Gain characteristic
  })
  .then(characteristic => {
    An1Gain_promise = characteristic;
    return An1Gain_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An1Gain');
    An1Gain_value = value.getFloat32(0, true).toFixed(3);
    return radioService.getCharacteristic(0xF111); // Get An2Gain characteristic
  })
  .then(characteristic => {
    An2Gain_promise = characteristic;
    return An2Gain_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An2Gain');
    An2Gain_value = value.getFloat32(0, true).toFixed(3);
    return radioService.getCharacteristic(0xF112); // Get An3Gain characteristic
  })
  .then(characteristic => {
    An3Gain_promise = characteristic;
    return An3Gain_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An3Gain');
    An3Gain_value = value.getFloat32(0, true).toFixed(3);
    return radioService.getCharacteristic(0xF113); // Get An0Off characteristic
  })
  .then(characteristic => {
    An0Off_promise = characteristic;
    return An0Off_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An0Off');
    An0Off_value = value.getFloat32(0, true).toFixed(3);
    return radioService.getCharacteristic(0xF114); // Get An1Off characteristic
  })
  .then(characteristic => {
    An1Off_promise = characteristic;
    return An1Off_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An1Off');
    An1Off_value = value.getFloat32(0, true).toFixed(3);
    return radioService.getCharacteristic(0xF115); // Get An2Off characteristic
  })
  .then(characteristic => {
    An2Off_promise = characteristic;
    return An2Off_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An2Off');
    An2Off_value = value.getFloat32(0, true).toFixed(3);
    return radioService.getCharacteristic(0xF116); // Get An3Off characteristic
  })
  .then(characteristic => {
    An3Off_promise = characteristic;
    return An3Off_promise.readValue();
  })
  .then(value => {
    messageFunc(' Got An3Off');
    An3Off_value = value.getFloat32(0, true).toFixed(3);
    return radioService.getCharacteristic(0xF117); // Get DisMag characteristic
  })
  .then(characteristic => {
    DisMag_promise = characteristic;
    return DisMag_promise.readValue();
  })
    .then(value => {
    DisMag_value = value.getNone(0, true);
    messageFunc("Completed");
    if(onCompleted != null)
      onCompleted()
    updateFields();
  })
  .catch(error => { console.error(error); connectionFault(error); return true;});
}
