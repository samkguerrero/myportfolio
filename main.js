$(document).ready(function () {
    $('.showcase').hide();
    $('#scvoiceassistant').hide();
    $('#scexplodingninja').hide();
    $('#scleafletflickr').hide();
    $('#scdataviz').hide();
    $('#sclovecraft').hide();
    $('#scaddzoom').hide();
    $('#scmixology').hide();
});

$(document).ready(function () {
    $('.projtile').click(function(e) {
        console.log(e.target.id)
        $('#projects').slideUp('slow');
        $('.showcase').fadeIn('slow');
        if (e.target.id === 'voiceassistant') 
        {
            $('#scvoiceassistant').show();
        }
        if (e.target.id === 'explodingninja') 
        {
            $('#scexplodingninja').show();
        }
        if (e.target.id === 'leafletflickr') 
        {
            $('#scleafletflickr').show();
        }
        if (e.target.id === 'dataviz') 
        {
            $('#scdataviz').show();
        }
        if (e.target.id === 'lovecraft') 
        {
            $('#sclovecraft').show();
        }
        if (e.target.id === 'addzoom') 
        {
            $('#scaddzoom').show();
        }
        if (e.target.id === 'mixology') 
        {
            $('#scmixology').show();
        }
    })
});

$(document).ready(function () {
    $('.projtitle').click(function(e) {
        console.log(e.target.id)
        $('#projects').slideUp('slow');
        $('.showcase').fadeIn('slow');
        if (e.target.id === 'voiceassistant') 
        {
            $('#scvoiceassistant').show();
        }
        if (e.target.id === 'explodingninja') 
        {
            $('#scexplodingninja').show();
        }
        if (e.target.id === 'leafletflickr') 
        {
            $('#scleafletflickr').show();
        }
        if (e.target.id === 'dataviz') 
        {
            $('#scdataviz').show();
        }
        if (e.target.id === 'lovecraft') 
        {
            $('#sclovecraft').show();
        }
        if (e.target.id === 'addzoom') 
        {
            $('#scaddzoom').show();
        }
        if (e.target.id === 'mixology') 
        {
            $('#scmixology').show();
        }
    })
});

$(document).ready(function () {
    $('#backbutton').click(function() {
        $('#projects').show();
        $('.showcase').hide();
        $('#scvoiceassistant').hide();
        $('#scexplodingninja').hide();
        $('#scleafletflickr').hide();
        $('#scdataviz').hide();
        $('#sclovecraft').hide();
        $('#scaddzoom').hide();
        $('#scmixology').hide();
    })
});