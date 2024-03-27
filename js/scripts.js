$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the link element
    var downloadLink = document.querySelector('.download-link');

    // Add click event listener to the link
    downloadLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        downloadPDFs();
    });

    function downloadPDFs() {
        // Array of PDF file URLs
        var pdfUrls = [
            'Qualifications/scan0202.pdf',
            // 'Qualifications/Portuguese translation of the Secondadry School Certificate.pdf',
            'path_to_pdf_3.pdf'
            // Add more PDF URLs as needed
        ];

        // Iterate through the array and trigger download for each PDF file
        pdfUrls.forEach(function(url) {
            var link = document.createElement('a');
            link.href = url;
            link.download = url.split('/').pop(); // Set the file name for download
            link.click();
        });
    }
});

