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
        $("#userOptions").hide();
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


function getTableCaptions() {
    const captions = $('table');
    const result = [];
    captions.map((i, e) => {
        const c = $(e);
        const caption = c.find('caption');
        if (caption) {
            result.push({
                id: c.attr('id'),
                caption: caption.html()
            });
        }
    });
    return result;
}

function addCssLink(href) {    
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.type = "text/css";

    // Optional: handle load and error events
    link.onload = () => {
        if (typeof callback === "function") callback(null, href);
    };
    link.onerror = () => {
        console.error(`Failed to load stylesheet: ${href}`);
        if (typeof callback === "function") callback(new Error("Load failed"), href);
    };

    document.head.appendChild(link);
}

// Async function that processes items sequentially
async function processArraySequentially(items) {
    if (!Array.isArray(items)) {
        throw new TypeError("Expected an array of items");
    }

    const results = [];
    for (const item of items) {
        try {
            const result = await loadText(item); // Wait for each item
            if(_.endsWith(item.toLowerCase(), 'mmd')){results.push(`<div class="mermaid">${result}</div>\n`)}
            else {results.push(result)}
        } catch (err) {
            console.error(`Error processing ${item}:`, err);
            results.push(null);
        }
    }
    return results;
}

function csvToJson(csv, delimiter = ',') {
    if (typeof csv !== 'string' || !csv.trim()) {
        throw new Error("Invalid CSV input");
    }

    const rows = [];
    let currentRow = [];
    let currentValue = '';
    let insideQuotes = false;

    for (let i = 0; i < csv.length; i++) {
        const char = csv[i];
        const nextChar = csv[i + 1];

        if (char === '"') {
            if (insideQuotes && nextChar === '"') {
                // Escaped quote
                currentValue += '"';
                i++;
            } else {
                // Toggle quote state
                insideQuotes = !insideQuotes;
            }
        } else if (char === delimiter && !insideQuotes) {
            // End of field
            currentRow.push(currentValue);
            currentValue = '';
        } else if ((char === '\n' || char === '\r') && !insideQuotes) {
            // End of row
            if (currentValue || currentRow.length > 0) {
                currentRow.push(currentValue);
                rows.push(currentRow);
                currentRow = [];
                currentValue = '';
            }
            // Handle \r\n (Windows newlines)
            if (char === '\r' && nextChar === '\n') i++;
        } else {
            currentValue += char;
        }
    }

    // Push last value if exists
    if (currentValue || currentRow.length > 0) {
        currentRow.push(currentValue);
        rows.push(currentRow);
    }

    if (rows.length < 2) {
        throw new Error("CSV must have at least a header and one row");
    }

    // Convert to JSON objects using header row
    const headers = rows[0];
    return rows.slice(1).map(row => {
        const obj = {};
        headers.forEach((header, idx) => {
            obj[header.trim()] = row[idx] !== undefined ? row[idx] : '';
        });
        return obj;
    });
}

function parseFixedWidthFile(content, columnWidths, headers) {

    const jsonArray = [];

    const lines = content.split(/\r?\n/).filter(line => line.trim() !== '');

    for (const line of lines) {
        let start = 0;

        if (headers) {
            const row = {};
            
            columnWidths.forEach((width, index) => {
                const value = line.substr(start, width).trim();
                row[headers[index]] = value;
                start += width;
            });

            jsonArray.push(row);
        } else {
            headers = [];
            
            columnWidths.forEach((width) => {
                headers.push(line.substr(start, width).trim());
                start += width;
            });
        }
    }
    return jsonArray;
}

async function processDataFiles(metadata) {
    let results = metadata;
    if(metadata.localData){
        for (const item of metadata.localData) {
            try {
                switch(item.type){
                    case('YAML'):
                        const yData = await loadYmlAsJSON(item.path);
                        results[item.propName] = yData;
                        break;
                    case('CSV'):
                        const cData = await loadText(item.path);
                        results[item.propName] = csvToJson(cData, (item.delimiter ?? ','));
                        break;
                    case('SPACE'):
                    case('TEXT'):
                        const tData = await loadText(item.path);
                        results[item.propName] = parseFixedWidthFile(tData, item.columnWidths, (item.headers ?? null));
                    default:
                        const jData = await loadJSON(item.path);
                        results[item.propName] = jData;
                        break;
                }
            } catch (err) {
                console.error(`Error processing ${item}:`, err);
                results.push(null);
            }
        }
    }
    return results;
}

/**
* Changes all <img> elements to use a new base path.
* Keeps the original filename but replaces the folder path.
*/
function changeAllImages(newBasePath) {
    const baseUrl = window.location.origin;
    const images = $("img");
    images.map((i, img) => {
        try {
            // Extract filename from current src
            const fileName = img.src.substring(baseUrl.length);
            img.src = newBasePath + fileName;
        } catch (error) {
            console.error("Error updating image:", error);
        }
    });
}

function processMdChildren(jqChildren) {
    jqChildren.each((i, c) => {
        const e = $(c);
        const k = e.children();
        if (k.length > 0)
            processMdChildren(k);

        const t = e.html() || "";
        e.html(md.render(t));
    });
}

async function loadJSON(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

async function loadText(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        return text;
    } catch (error) {
        console.error("Error loading File Text:", error);
    }
}

async function loadYmlAsJSON(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        const json = jsyaml.load(text, { json: true });
        return json;
    } catch (error) {
        console.error("Error loading File Text:", error);
    }
}

async function PostData(url, body, queryArgs, headers) {
    let _url = url;
    let _headers = { 'Content-Type': 'application/json' };
    if (headers) _headers = JSON.parse(headers);
    if (queryArgs) {
        const params = new URLSearchParams();
        const args = JSON.parse(queryArgs)
        Object.keys(args).forEach(k => params(k, args[k]));
        _url = _url + `?${params}`
    }

    try {
        const response = await fetch(_url, {
            method: 'POST',
            headers: _headers,
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    catch (error) {
        console.error("Error posting data:", error);
    }
}

async function GetData(url, queryArgs, headers) {
    let _url = url;
    let _headers = {};
    if (headers) _headers = JSON.parse(headers);
    if (queryArgs) {
        const params = new URLSearchParams();
        const args = JSON.parse(queryArgs)
        Object.keys(args).forEach(k => params(k, args[k]));
        _url = _url + `?${params}`
    }
    try {
        const response = await fetch(_url, {
            method: 'GET',
            headers: _headers
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        return responseData;
    }
    catch (error) {
        console.error("Error posting data:", error);
    }
}
