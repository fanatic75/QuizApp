(function() {
  var questions = [{
    question: "Who is a main Bitcoin Developer / Contributor?",
    choices: ["Gavin Anderson","Harry Potter","John Williams","Peter Heart"],
    correctAnswer: 0
  }, {
    question: "Who are the CypherPunks?",
    choices: ["A 90's Electro Pop Band who sung a song about Bitcoin","A splinter group of anonymous","The Hacker group who broke into Mt Gox","A group of people who believe privacy is necessary in the electronic age"],
    correctAnswer: 3
  }, {
    question: "What is a Satoshi?",
    choices: ["A denomination in Bitcoin like pence and pounds","A comment from Satoshi Nakomoto on BitcoinTalk","100 Bitcoin","A transaction send to the Bitcoin Foundation"],
    correctAnswer: 0
  }, {
    question: "How do Bitcoin Miners make money?",
    choices: ["Through transaction fees and the block reward","Transaction Fees only","The block reward only","They go to work at the local time"],
    correctAnswer: 0
  }, {
    question: "Where can I buy Bitcoin from?",
    choices: ["Middle Earth","A Bank, the Post Office or any public services building","An online exchange, off friends or at a Bitcoin ATM","You can't as it doesn't exist"],
    correctAnswer: 2
  }, {
	  question: "What is Cryptography?",
	  choices: ["A way of sending information securely over an insecure environment",
	  "A way of sending information to multiple people at the same time",
	  "Charting the number of transactions per second on the Bitcoin network",
	  "Using the Crypt Protocol to analyse the security of the Bitcoin Network"],
	  correctAnswer:0
  },{
	  question: "What is the Bitcoin block reward in 2015?",
	  choices: [50,30,25,20],
  correctAnswer: 2 
  },{
	  question: " Which is the most popular Crypto Currency?",
	  choices: ["Dash","Nano","Dogecoin","Ethereum","Bitcoin"],
  correctAnswer: 4 
  },{
	  question: " Who invented Bitcoin??",
	  choices: ["Satoshi Nakomoto","Donald Trump","Craig S Wright","The CIA","Mark Anderson"],
  correctAnswer: 0 },{
	  question: " Which Exchange filed for Bankruptcy in February 2014??",
	  choices: ["Bitcoin Global Exchange","Bitcoin Bible","Mt. Gox","Coin'o'Mart"],
  correctAnswer:2 },{
	  question: " What technology is Bitcoin built on?",
	  choices: ["The famous Volkswagon","Javascript","Telephaty","The blockchain"],
  correctAnswer: 3 },{
	  question: " How does the Bitcoin Protocol Work?",
	  choices: ["It is Centralised","It is De-centralized","It is owned by Bitcoin Foundation","Skynet"],
  correctAnswer: 1},{
	  question: " Who ran the Silk Road?",
	  choices: ["Ross Ulbricht","Mark Karpeles","Ron Jeremy","Mike Tyson"],
  correctAnswer: 0},{
	  question: " Which famous boxer owns a Bitcoin ATM Company?",
	  choices: ["Vladimir Klitschko","Vitali Klitschko","David Haye","Mike Tyson"],
  correctAnswer:3 },{
	  question: " When was the Bitcoin software first released?",
	  choices: [2001,2009,2012,2002],
  correctAnswer: 1},{
	  question: " What are the accepted Bitcoin Tickers/currency codes?",
	  choices: ["BTC OR BIT","BIT OR XBT","BCN or LTC","BTC or XBT"],
  correctAnswer: 3},{
	  question: " What is a Mining Pool?",
	  choices: ["A syndicate of miners grouping together to lower the volatility of returns","A syndicate of miners grouping together to increase their returns","A syndicate of miners profits from 1 day of mining Bitcoin","A refreshing place to cool off after a long hard days mining"],
  correctAnswer: 	0},{
	  question: " What can't you pay for with Bitcoin?",
	  choices: ["Property","University Fees","You can buy almost anything","Other crypto currenceis or Assets"],
  correctAnswer: 2	},{
	  question: " How often does the Bitcoin block reward halve?",
	  choices: ["2 Years or 100,000 blocks","Every 210,000 blocks or every four years","It doesn't","Every 6 months or 25,000 blocks"],
  correctAnswer: 1
  },{
	  question: "What was Bitcoin's highest price ?",
	  choices: ["$500","$1200","$6000","$19000"],
  correctAnswer: 3
  },{
	  question: " Which bank is the first to accept Bitcoin for charitable donations?",
	  choices: ["Barclays","HSBC","Royal Bank of Scotland (RBS)","The Bitcoin Bank"],
  correctAnswer: 0
  },{
	  question: " Who was the CEO of Mt Gox?",
	  choices: ["Ross Ulbricht","Jeremy Corbyn","Dorian Nakomoto","Mark Karpeles"],
  correctAnswer: 3
  },{
	  question: " What is a Paper Wallet?",
	  choices: ["A piece of paper with your secret/private key on it","A one time use wallet","A false wallet used in the Mt Gox scandal","A way of making Bitcoin intangible"],
  correctAnswer:0 
  },{
	  question: " How do you create Bitcoin?",
	  choices: ["You ask for it","You mine it","You change it","You dig it!"],
  correctAnswer: 1
  },{
	  question: " Is Bitcoin anonymous?",
	  choices: ["Yes its completely anonymous","No its completely non anonymous","Sort of - if people know your address they can see what you've spent","Sort of - if people know your address they know where you live"],
  correctAnswer:2 
  },{
	  question: " Who can contribute to the Bitcoin Protocol?",
	  choices: ["Satoshi Nakomoto","US Government","Anyone can contribute","Gavin Andresen"],
  correctAnswer: 2
  },{
	  question: " How many Bitcoins will there ever be?",
	  choices: ["21 million","10 million","14 million","15 million"],
  correctAnswer: 0
  },{
	  question: " How can you accept Bitcoin as a Merchant?",
	  choices: ["Install Apple pay on your iPhone","Open a wallet or integrate a Bitcoin payment service provider such as Bitpay","Make a QR code of your Private Key and give it to your customers","Put a sign in your shop saying we accept Bitcoin"],
  correctAnswer:1 
  },{
	  question: " What is a Bitcoin Hardware Wallet?",
	  choices: ["A wallet on your mobile phone","A bearer certificate that you have in your possession","A dedicated piece of hardware with high levels of security for storing your Bitcoins","A household safe with Bitcoins in it that cannot be broken into"],
  correctAnswer: 2 
  },{
	  question: " What is Hashing?",
	  choices: ["A way of selling drugs on the darknet","Donald Trumps's mental process","A one way conversion of a string to another string","Coding in Bitcoin using C#"],
  correctAnswer: 2 
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var maxQuestions=localStorage.getItem("slider_value");

  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < maxQuestions){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
		  $('#start').show();
        } else if(questionCounter === 0){
          $('#start').hide();
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect+= 5	;
      }
    }
    
    score.append('Your score is '+numCorrect);
    return score;
  }
})();