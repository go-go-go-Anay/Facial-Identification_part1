webcam.set({
    width:500,
    height:350,
    image_format:'png',
    png_quality:100
});

camera = document.getElementById("camera");
webcam.attach("#camera");