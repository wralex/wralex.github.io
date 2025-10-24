$(() => {
    console.log(getSiteURL());
    if (!storageAvailable('localStorage')) {
        console.warn("localStorage is not supported in this browser.");
        return;
    }

    const preStorName = 'checkbox_';
    $('input[type="checkbox"]').each((_, c) => {
        const box = $(c);
        let id = box.attr('id');
        box.prop('checked', (localStorage.getItem(preStorName + id) === 'true'));
        box.on('change', () => localStorage.setItem(preStorName + id, box.is(':checked')));
    });

    $('pre').each((_, c) => {
        const block = $(c);

        block.addClass('position-relative');

        const button =
            $('<button>', {
                text: 'Copy',
                class: 'btn btn-sm btn-outline-info position-absolute top-0 end-0'
            }).on('click', () => {
                const code = block.find('code').text().trim();
                window.navigator.clipboard.writeText(code);
                alert.call(this, 'Code copied to clipboard!');
            });

        block.append(button);
    });

    if (getSiteURL() === 'https://gray-island-0ecb5780f.3.azurestaticapps.net') {
        (async () => {
            const userInfo = await getUserInfo();
            if (userInfo) {
                $('#userName').text(`Hello, ${userInfo.userDetails}! `);
                $('#loginButton').hide();
                $('#logoutButton').show();
            } else {
                $('#userName').text('');
                $('#loginButton').show();
                $('#logoutButton').hide();
            }
            console.log(await getUserInfo());
        })();

    } else {
        $('#loginButton').hide();
    }
});

function storageAvailable(type) {
    try {
        let storage = window[type]
            , testKey = '__storage_test__';

        storage.setItem(testKey, testKey);
        storage.removeItem(testKey);
        return true;
    } catch {
        return false;
    }
}

async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
}

function getSiteURL() {
    try {
        if (window.location.origin) {
            return window.location.origin;
        } else {
            return `${window.location.protocol}//${window.location.hostname}${window.location.port ? ":" + window.location.port : ""}`;
        }
    } catch (error) {
        console.error("Unable to get site URL:", error);
        return null;
    }
}