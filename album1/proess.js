// Function to load images into the grid
function loadImages() {
    var imageRow = document.getElementById('imageRow');
    imageRow.innerHTML = ''; // Clear previous images

    // Add your image paths here
    var imagePaths = ["image1.jpeg", "image2.jpeg", "image3.jpeg","image4.jpeg", "image5.jpeg", "image6.jpeg"];

    // Loop through each image path and create image elements
    imagePaths.forEach(function(path) {
      var imageContainer = document.createElement('div');
      imageContainer.className = 'col-md-4 image-container';

      var img = document.createElement('img');
      img.src = path;
      img.className = 'img-fluid';
      img.alt = 'Kpop Idol';
      
      imageContainer.appendChild(img);
      imageRow.appendChild(imageContainer);
    });
  }

  // Call loadImages function when the page loads
  window.onload = function() {
    loadImages();
  }

  // Function to make an image reddish

  function makeReddish() {
    var img = document.querySelector('#imageContainer img');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = img.width;
    var height = img.height;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);

    var imageData = ctx.getImageData(0, 0, width, height);
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) {
        pixels[i] += 50;
    }

    // Put the modified image data back to the canvas
    ctx.putImageData(imageData, 0, 0);

    // Replace the original image with the modified one
    var modifiedImg = new Image();
    modifiedImg.src = canvas.toDataURL();
    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('imageContainer').appendChild(modifiedImg);
}



  // Function to make an image blueish
  function makeBlueish() {
    var images = document.querySelectorAll('.img-fluid');
    images.forEach(function(img) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;

      for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];

        if (b <= r + g) {
          data[i] = 0;
          data[i + 1] = 0;
          data[i + 2] = r + g;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      img.src = canvas.toDataURL();
    });
  }

  // Function to make an image greenish
  function makeGreenish() {
    var images = document.querySelectorAll('.img-fluid');
    images.forEach(function(img) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;

      for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];

        if (g <= r + b) {
          data[i] = 0;
          data[i + 1] = r + b;
          data[i + 2] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      img.src = canvas.toDataURL();
    });
  }

  // Function to duplicate an image
  function duplicateImage() {
    var images = document.querySelectorAll('.img-fluid');
    images.forEach(function(img) {
      var duplicate = img.cloneNode(true);
      duplicate.alt = 'Duplicate Kpop Idol';
      img.parentNode.appendChild(duplicate);
    });
  }

  // Function to increase brightness of an image
  function increaseBrightness() {
    var images = document.querySelectorAll('.img-fluid');
    images.forEach(function(img) {
      Caman(img, function () {
        this.brightness(20).render();
      });
    });
  }

  // Function to reduce resolution of an image
  function reduceResolution() {
    var images = document.querySelectorAll('.img-fluid');
    images.forEach(function(img) {
      Caman(img, function () {
        this.resize({ width: img.width / 2, height: img.height / 2 }).render();
      });
    });
  }

  // Function to create an avatar from an image
  function createAvatar() {
    var images = document.querySelectorAll('.img-fluid');
    images.forEach(function(img) {
      var canvas = document.createElement('canvas');
      canvas.width = 100; // Avatar width
      canvas.height = 100; // Avatar height
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      img.src = canvas.toDataURL();
    });
  }

  // Function to convert an image to grayscale
  function convertToGray() {
    var images = document.querySelectorAll('.img-fluid');
    images.forEach(function(img) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;

      for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
      }

      ctx.putImageData(imageData, 0, 0);
      img.src = canvas.toDataURL();
    });
  }

  // Function to generate QR code from an image
  function generateQRCode() {
    var images = document.querySelectorAll('.img-fluid');
    images.forEach(function(img) {
      var url = img.src;
      var qrCode = new QRCode(document.createElement("div"), {
        text: url,
        width: 200,
        height: 200,
      });
      var imgQR = qrCode._el.firstChild;
      img.parentNode.appendChild(imgQR);
    });
  }