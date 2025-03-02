var audio = new Audio("http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3");

$('#play-pause-button').on("щелчок",функция(){
  если($(это).имеет класс('fa-play'))
   {
     $(это).удалить класс('fa-play');
     $(это).addClass('fa-pause');
     Аудио.воспроизвести();
   }
  ещё
   {
     $(это).удалить класс('fa-pause');
     $(this).addClass('fa-play');
     Аудио.пауза();
   }
});

audio.onended = функция() {
     $("#play-pause-button").removeClass('fa-pause');
     $("#play-pause-button").addClass('fa-play');
};
