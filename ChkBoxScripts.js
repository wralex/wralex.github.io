$(document).ready(
    function () {
        
        $("input.box[type=checkbox]").each(
            function () {
                let id = $(this).attr('id');
                if ($.cookie(id) && $.cookie(id) == "true") {
                    $(this).prop('checked', $.cookie(id));
                }
            }
        );
        
        $("i.fa-clipboard").on(
            "click",
            function () {
                let text = '';
                let clipelem = $(this).attr('clip-elem');
                if (clipelem) {
                    text = $('#' + clipelem)[0].innerText;
                } else {
                    text = $(this).attr('clip-text');
                }
                navigator.clipboard.writeText(text)
                .then(() => {})
                .catch(err => {
                    alert('Error in copying text: ', err);
                });
            }
        );
    }
);

$("input.box[type=checkbox]").change(
    function () {
        let id = $(this).attr("id");
        $.cookie(id, $(this).prop('checked'), {
            path: '/',
            expires: 365 * 30
        });
    }
);