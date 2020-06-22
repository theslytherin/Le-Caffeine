$(function() {
                
    var welcomeSection = $('.welcome-section'),
        enterButton = welcomeSection.find('.enter-button');
    
    setTimeout(function() {
        welcomeSection.removeClass('content-hidden');
    }, 8500);
    
    enterButton.on('click', function(e) {
        e.preventDefault();
        welcomeSection.addClass('content-hidden').fadeOut();
    });
    setTimeout(function() {
        $('two').fadeOut('fast');
    }, 10000);
    
})();
