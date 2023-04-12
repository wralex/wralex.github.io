const $showData = $('#show-data');
const $raw = $('pre');

function BeginQuiz(datafile, amount){
    $.getJSON(datafile, (data) =>
    {
        const markup = data
        .map(item => `<li>${item.question}</li>`)
        .join('');

        const list = $('<ul />').html(markup);
  
        $showData.html(list);
  
        $raw.text(JSON.stringify(data, undefined, 2));
      });
}