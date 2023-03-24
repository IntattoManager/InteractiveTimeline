$(document).ready(function() {
    function updateBlockPositions() {
        $('.block').each(function() {
            var blockId = $(this).attr('id');
            var position = $(this
            .data('position');
            var scale = parseInt($('#scale').val());
            $(this).css('left', position * scale + 'px');
        });
    }

    function enableDragging() {
        $('.block').draggable({
            axis: 'x',
            containment: 'parent',
            stop: function() {
                var position = parseInt($(this).css('left'));
                var scale = parseInt($('#scale').val());
                $(this).data('position', Math.round(position / scale));
                updateBlockPositions();
            }
        });
    }

    $('#scale').on('change', function() {
        updateBlockPositions();
    });

    $('.block').on('dblclick', function() {
        var newName = prompt('Inserisci il nuovo nome del blocco:');
        if (newName) {
            $(this).find('.block-label').text(newName);
        }
    });

    updateBlockPositions();
    enableDragging();
});
