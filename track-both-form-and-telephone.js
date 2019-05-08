<script type="text/javascript">
 
jQuery(document).ready(function($){
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', 'UA-xxxxxxxxxx-x', 'auto'); // change UA-xxxxxxxxx-x to be your tracking UA.
 
  $("#contact form").each(function() {
    var jqForm = $(this);
    var jsForm = this;
    var action = jqForm.attr("action");
 
    jqForm.submit(function(event) {
    event.preventDefault();  // prevent the form from submitting so we can sent the tracking code, then continue with the submission later.
    ga('send', {
    hitType: 'event',
    eventCategory: 'Form Submits', // add any name for the category
    eventAction: 'Form Submitted', // add any name for the action
    hitCallback : function () {
      console.log("event sent ok");
   }
    });
        setTimeout(function() { // now wait 300 milliseconds...
          jsForm.submit(); // ... and continue with the form submission
            },300);
          });
 
        });
 
        $( 'a[href^="tel:"]' ).click(function(event) {
                var href = $(this).attr("href");
                        var target = $(this).attr("target");
                        var text = $(this).text();
                event.preventDefault(); // prevent the form from submitting so we can sent the tracking code, then continue with the submission later.
        ga('send', {
          hitType: 'event',
          eventCategory: 'Phone Number', // add any name for the category
          eventAction: 'Clicked'  // add any name for the action
        });
                setTimeout(function() { // now wait 300 milliseconds...
                        window.open(href,(!target?"_self":target)); // ...and open the link as usual
                                console.log("tel clicked");
                },300);
        });
 
        });
 
        </script>
