// This program valdates certain music and image file names.

String.prototype.isAudio= function(){
  if ((/\s/g).test(this)) return false
  return ((/\D.(mp3|flac|alac|aac)/).test(this))
};
String.prototype.isImage= function(){
  if ((/\s/g).test(this)) return false
  return ((/\D.(jpg|jpeg|png|bmp|gif)/).test(this))
};
