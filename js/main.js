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

});