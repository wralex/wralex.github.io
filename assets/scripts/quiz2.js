const arrGood = ["text-white", "border", "bg-success", "border-success"];
const arrBad = ["text-white", "border", "bg-danger", "border-danger"];

let _amount = 10;
let _file = "";
let indexNumber = 0;
let totalAttempt = 0;
let correctAttempt = 0;
let wrongAttempt = 0;
let shuffledQuestions = [];

function BeginQuiz(datafile, amount) {
  _file = datafile;
  _amount = amount;
  StartQuiz();
}

function MdToHtml(mdText){
  if(mdText == undefined || mdText == null || mdText.trim() == "") {
    return "";
  }
  var reader = new commonmark.Parser();
  var writer = new commonmark.HtmlRenderer();
  var parsed = reader.parse(mdText);
  var result = writer.render(parsed)
  return result;
}

function StartQuiz() {
  indexNumber = 0;
  totalAttempt = 0;
  correctAttempt = 0;
  wrongAttempt = 0;
  shuffledQuestions = [];
  
  $.getJSON(_file, (data) =>
  {

    while (shuffledQuestions.length < _amount) {
      var indx = Math.floor(Math.random() * data.length);
      var random = data[indx];
      shuffledQuestions.push(random);
      data.splice(indx, 1);
    }

    for (var i = 0; i < shuffledQuestions.length; i++) {
      for (var j = 0; j < shuffledQuestions[i].answers.length; j++) {
        if(shuffledQuestions[i].answers[j].isCorrect == true){totalAttempt++;}        
      }
    }

    SetQuestion(shuffledQuestions[indexNumber++]);
    DisplayStats();
  });
}

function DisplayStats(){
  $("#all-answers").html(totalAttempt);
  $("#wrong-answers").html(wrongAttempt);
  $("#right-answers").html(correctAttempt);
  $("#grade-percentage").html(Math.floor(correctAttempt*100/totalAttempt));
  $("#question-count").html((indexNumber));
  $("#correct-responses").html(correctAttempt);
  $("#totalpoints").html(totalAttempt);
}

function SetQuestion(item){
  $("#question").html(MdToHtml(item.question));

  var letters = ["A", "B", "C", "D", "E", "F"];

  var options = [];
  for (var i = 0; i < item.answers.length; i++) {
    options.push({
      text: MdToHtml(item.answers[i].answer),
      isCorrect: item.answers[i].isCorrect
    });
  }
  console.log(options);
  var finalLen = options.length;

  var shuffAnswers = [];
  while (shuffAnswers.length < finalLen) {
    var i = Math.floor(Math.random() * options.length);
    var random = options[i];
    shuffAnswers.push(random);
    options.splice(i, 1);
  }

  for (var i = 0; i < letters.length; i++) {
    if (shuffAnswers.length > i) {
      $("#option" + letters[i] +"-text").html(shuffAnswers[i].text);
      $("#option" + letters[i] +"-isRight").val(shuffAnswers[i].isCorrect);
      $("#option" + letters[i] +"-div").show();
    } else {
      $("#option" + letters[i] +"-text").html("");
      $("#option" + letters[i] +"-isRight").val(false);
      $("#option" + letters[i] +"-div").hide();
    }
  }
}

function handleNextQuestion() {

  $("#next-button").attr('disabled', 'disabled');
  
  checkForAnswer();
  
  if (indexNumber < _amount) {
    indexNumber++;
    setTimeout(
      function () {
        unCheckRadioButtons();
        DisplayStats();
        SetQuestion(shuffledQuestions[indexNumber]);
        $("#next-button").removeAttr('disabled');
      }, 2000
    );
  } else {
    handleEndGame();
  }
}

function handleEndGame(){
  $("#staticBackdrop").show();
}

function checkForAnswer() {
  var options = $('[name="options"]');
  for(var i = 0; i < options.length;i++) {
    var elemId = "#" + options[i].id;
    var option = $(elemId)[0];
    var isright = $(elemId + "-isRight")[0];
    var text = $(elemId + "-text")[0];
    if(text !== undefined && text !== null && text.innerText != "") {
      if(isright.value == 'true') {
        $('#'+text.id).toggleClass(arrGood, true);
      }
      if (option.checked) {
        if(isright.value == 'true') {
          correctAttempt++
        } else {
          wrongAttempt++
          $('#'+text.id).toggleClass(arrBad, true);
        }
      }  
    }
  }
}

function unCheckRadioButtons() {
  var arrAll = arrGood.concat(arrBad);
  var options = $('[name="options"]');
  for(var i = 0; i < options.length; i++) {
    var elemId = "#" + options[i].id;
    $(elemId + "-text").removeClass(arrAll);
    options[i].checked = false;
  }
}