$(() => {
    if (!storageAvailable('localStorage')) {
        console.warn("localStorage is not supported in this browser.");
        return;
    }

    $('input[type="checkbox"]').each(function () {
        let id = $(this).attr('id');
        if (localStorage.getItem('checkbox_' + id) === 'true') {
            $(this).prop('checked', true);
        }
    });

    $('input[type="checkbox"]').on('change', function () {
        let id = $(this).attr('id');
        localStorage.setItem('checkbox_' + id, $(this).is(':checked'));
    });

    $('pre').each((_, codeBlock) => {
        $(codeBlock).addClass('position-relative');

        const copyButton = $('<button>', {
            text: 'Copy',
            class: 'btn btn-sm btn-outline-info position-absolute top-0 end-0'
        })
        .on('click', () => {
            $(this).css({"opacity": "0.5"})
            const code = $(codeBlock).find('code').text().trim();
            window.navigator.clipboard.writeText(code);
            alert.call(this, 'Code copied to clipboard!');
        });
        $(codeBlock).append(copyButton);
    });
});

function storageAvailable(type) {
    try {
        let storage = window[type]
        , testKey = '__storage_test__';
        
        storage.setItem(testKey, testKey);
        storage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}
