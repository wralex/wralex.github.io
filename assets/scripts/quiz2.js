let shuffledQuestions = [];
let _amount = 10;
let _file = "";
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;
let arrGood = ["border", "text-success-emphasis","bg-success-subtle", "border-success-subtle"];
let arrBad = ["border", "text-danger-emphasis","bg-danger-subtle", "border-danger-subtle"];
let arrOptions = [
  { option: $("#optionA")[0], isRight: $("#isRightA")[0], text: $("#textA")[0] },
  { option: $("#optionB")[0], isRight: $("#isRightB")[0], text: $("#textB")[0] },
  { option: $("#optionC")[0], isRight: $("#isRightC")[0], text: $("#textC")[0] },
  { option: $("#optionD")[0], isRight: $("#isRightD")[0], text: $("#textD")[0] }
];

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
      var random = data[Math.floor(Math.random() * data.length)];
      if (!shuffledQuestions.includes(random))
      shuffledQuestions.push(random);
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
    var random = orig[Math.floor(Math.random() * orig.length)];
    if (!shuffAns.includes(random))
      shuffAns.push(random);
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
  checkForAnswer()
  setTimeout(() => {
    if (indexNumber < _amount) {
      SetQuestion(shuffledQuestions[++indexNumber]);
    }
    else {
        handleEndGame()
    }
  }, 1000);
}

function handleEndGame(){

}

function checkForAnswer() {
  for (let i = 0; i < arrOptions.length; i++) {
    if (arrOptions[i].option.checked) {
      if(arrOptions[i].isRight.value == 'true') {
        $('#'+arrOptions[i].text.id).toggleClass(arrGood, true);
        playerScore++
      } else {
        $('#'+arrOptions[i].text.id).toggleClass(arrBad, true);
        wrongAttempt++
      }
    }
  }
  setTimeout(() => {
  }, 5000);
  questionNumber++;
  unCheckRadioButtons();
}

function unCheckRadioButtons() {
  $("#textA").removeClass(arrGood.concat(arrBad));
  $("#textB").removeClass(arrGood.concat(arrBad));
  $("#textC").removeClass(arrGood.concat(arrBad));
  $("#textD").removeClass(arrGood.concat(arrBad));
  
  const options = document.getElementsByName("options");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}