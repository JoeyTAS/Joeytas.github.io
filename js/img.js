window.addEventListener('load', function() {
    var sliderImages = document.querySelectorAll('.slider img');
    var currentImage = 0;
  
    // Mostrar la primera imagen
    sliderImages[currentImage].classList.add('active');
  
    // Cambiar la imagen cada 3 segundos
    setInterval(function() {
      // Ocultar la imagen actual
      sliderImages[currentImage].classList.remove('active');
  
      // Incrementar el índice de la imagen
      currentImage++;
  
      // Si alcanza el final del array, volver al inicio
      if (currentImage >= sliderImages.length) {
        currentImage = 0;
      }
  
      // Mostrar la siguiente imagen
      sliderImages[currentImage].classList.add('active');
    }, 3000);
  });
  

 
  
