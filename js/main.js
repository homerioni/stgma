'use strict'

$(document).ready(function () {

    // tabs for table
    $('.tabs-table__tab').click(function () {
        $(this).parent().find('.tabs-table__tab').removeClass('active');
        $(this).addClass('active');
    });

    $('.tabs-table__tab-content input').change(function () {
        $(this).parents('.tabs-table').find('.tabs-table__tab-content').removeClass('active');
        $(this).parent().addClass('active');
    });

    // feedback inputs focus
    $('.feedback__input').focusin(function () {
        $(this).parent().addClass('focus');
    }).focusout(function () {
        $(this).parent().removeClass('focus');
    });

    // favorite btn for table
    $('.table__favorite-btn').click(function () {
        $(this).toggleClass('active');
    });

});