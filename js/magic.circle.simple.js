$(function() {
    var deg;
    $('.ring').lettering();
    
    $('.ring').each(function(){
        var count = $('#' + this.id + ' > span').length;
        deg = 360/count;
        $('#'+ this.id + ' > span').each(function(index){
            var currentdeg = deg * index;
    
            $(this).css({'webkitTransform' : 'rotate(' + currentdeg + 'deg)',
                            'MozTransform' : 'rotate(' + currentdeg + 'deg)',
                             'msTransform' : 'rotate(' + currentdeg + 'deg)',
                              'OTransform' : 'rotate(' + currentdeg + 'deg)',
                               'transform' : 'rotate(' + currentdeg + 'deg)'});
        });
    });
});
