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
    for (var i = 0; i < shuffledQuestions.length; i++){
      for (var j = 0; j < shuffledQuestions[i].correctOption.length; j++){
        totalAttempt++;
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

  var options = [
    {text: item.optionA, letter: "A"},
    {text: item.optionB, letter: "B"},
    {text: item.optionC, letter: "C"},
    {text: item.optionD, letter: "D"},
    {text: item.optionE, letter: "E"},
    {text: item.optionF, letter: "F"}
  ];

  var orig = [];

  for (var i = 0; i < options.length; i++) {
    var textVal = options[i].text ?? "";
    if (textVal !== "") {
      orig.push(
        {
          ans: (textVal.indexOf("\n") >= 0) ? MdToHtml(textVal) : textVal,
          isRight: item.correctOption.includes(options[i].letter) ?? false
        });
    }
  }
  
  var finalLen = orig.length;
  var shuffAnswers = [];
  while (shuffAnswers.length < finalLen) {
    var i = Math.floor(Math.random() * orig.length);
    var random = orig[i];
    shuffAnswers.push(random);
    orig.splice(i, 1);
  }

  for (var i=0; i<options.length; i++) {
    var answer = shuffAnswers[i]?.ans ?? "";
    var isCorrect = shuffAnswers[i]?.isRight ?? false;

    $("#option" + options[i].letter +"-text").html(answer);
    $("#option" + options[i].letter +"-isRight").val(isCorrect);

    if (answer == ""){
      $("#option" + options[i].letter +"-div").hide();
    } else {
      $("#option" + options[i].letter +"-div").show();
    }
  }
}

function handleNextQuestion() {
  $("#next-button").attr('disabled', 'disabled');
  checkForAnswer();
  if (indexNumber < _amount) {
    setTimeout(function () {
      unCheckRadioButtons()
      DisplayStats();
      SetQuestion(shuffledQuestions[indexNumber++]);
      $("#next-button").removeAttr('disabled');
    }, 2000);
  } else {
    handleEndGame();
  }
}

function handleEndGame(){
}

function checkForAnswer() {
  var options = $('[name="options"]');
  for(var i = 0; i < options.length;i++){
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
  for(var i = 0; i < options.length;i++){
    var elemId = "#" + options[i].id;
    $(elemId + "-text").removeClass(arrAll);
    options[i].checked = false;
  }
}