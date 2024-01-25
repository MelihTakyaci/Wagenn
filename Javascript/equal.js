window.onload = function() {
    const or = document.getElementById('bilgiler');
    const orw = or.clientWidth; // Genişliği almak için clientWidth kullanın
    const orh = or.clientHeight; // Yüksekliği almak için clientHeight kullanın
    console.log(orw);
    console.log(orh);
  
    const suc = document.getElementById('sucsessful');
    suc.style.width = orw + 'px'; // Genişlik
    suc.style.height = orh + 'px'; // Yükseklik
  };
  