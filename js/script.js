$(document).ready(function () {
    // Accordion functionality
    $('.accordion .label').click(function () {
        var parentAccordion = $(this).closest('.accordion');
        parentAccordion.find('.content').slideUp();
        $(this).next('.content').slideDown();
    });

    // Tabs functionality
    $('.tab-label').click(function () {
        $('.tab-label').removeClass('active');
        $(this).addClass('active');
        var tabToShow = $(this).data('tab');
        $('.tab-content').hide();
        $('#' + tabToShow).show();
    });

    // By default, showing the first tab content
    $('.tab-label').first().trigger('click');
});
