let shuffledQuestions = [];
let _amount = 10;
let _file = "";
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;
let arrGood = ["text-white", "border", "bg-success", "border-success"];
let arrBad = ["text-white", "border", "bg-danger", "border-danger"];

function BeginQuiz(datafile, amount) {
  _file = datafile;
  _amount = amount;
  StartQuiz();
}

function StartQuiz() {
  questionNumber = 0;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];

  $.getJSON(_file, (data) =>
  {
    while (shuffledQuestions.length < _amount) {
      var indx = Math.floor(Math.random() * data.length);
      var random = data[indx];
      if (!shuffledQuestions.includes(random)){
        shuffledQuestions.push(random);
        data.splice(indx, 1);
      }
    }
    
    SetQuestion(shuffledQuestions[indexNumber]);
  });
}

function SetQuestion(item){
  questionNumber++;

  $("#question").html(item.question.replaceAll('\\n','</br />'));

  var orig = [
    {ans: item.optionA.replaceAll('\\n','</br />'), isRight: item.correctOption == 'optionA'},
    {ans: item.optionB.replaceAll('\\n','</br />'), isRight: item.correctOption == 'optionB'},
    {ans: item.optionC.replaceAll('\\n','</br />'), isRight: item.correctOption == 'optionC'},
    {ans: item.optionD.replaceAll('\\n','</br />'), isRight: item.correctOption == 'optionD'}
  ];
  
  var shuffAns = [];
  while (shuffAns.length < 4) {
    var indx = Math.floor(Math.random() * orig.length);
    var random = orig[indx];
    shuffAns.push(random);
    orig.splice(indx, 1);
  }

  $("#textA").html(shuffAns[0].ans);
  $("#isRightA").val(shuffAns[0].isRight);
  $("#textB").html(shuffAns[1].ans);
  $("#isRightB").val(shuffAns[1].isRight);
  $("#textC").html(shuffAns[2].ans);
  $("#isRightC").val(shuffAns[2].isRight);
  $("#textD").html(shuffAns[3].ans);
  $("#isRightD").val(shuffAns[3].isRight);

}

function handleNextQuestion() {
  checkForAnswer();
  if (indexNumber < _amount) {
    setTimeout(function () {
      unCheckRadioButtons()
      SetQuestion(shuffledQuestions[++indexNumber]);
    }, 2000);    
  } else {
    handleEndGame();
  }
}

function handleEndGame(){

}

function checkForAnswer() {
  var arrOptions = [
    { option: $("#optionA")[0], isRight: $("#isRightA")[0], text: $("#textA")[0] },
    { option: $("#optionB")[0], isRight: $("#isRightB")[0], text: $("#textB")[0] },
    { option: $("#optionC")[0], isRight: $("#isRightC")[0], text: $("#textC")[0] },
    { option: $("#optionD")[0], isRight: $("#isRightD")[0], text: $("#textD")[0] }
  ];
  
  for (let i = 0; i < arrOptions.length; i++) {
    var isright = arrOptions[i].isRight;
    var text = arrOptions[i].text;  
    var option = arrOptions[i].option;
    
    if (option.checked) {
      if(isright.value == 'true') {
        playerScore++
      } else {
        wrongAttempt++
        $('#'+text.id).toggleClass(arrBad, true);
      }
    }

    if(isright.value == 'true') {
      $('#'+text.id).toggleClass(arrGood, true);
    }
  }
}

function unCheckRadioButtons() {
  var arrAll = arrGood.concat(arrBad);
  $("#textA").removeClass(arrAll);
  $("#textB").removeClass(arrAll);
  $("#textC").removeClass(arrAll);
  $("#textD").removeClass(arrAll);
  
  const options = document.getElementsByName("options");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}