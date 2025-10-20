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
