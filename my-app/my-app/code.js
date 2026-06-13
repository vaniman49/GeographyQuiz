// Purpose: This program lets a user take a 10 random question test out of 100 questions that we have in this quiz, allows move between questions, review answers, and see a final score summary.

// List of Questions and Answers
var questions = [
  {question: "What is the largest continent by land area?", choices: ["Africa", "Asia", "Europe", "South America"], answer: "b"},
  {question: "Which ocean is the largest?", choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "c"},
  {question: "What is the capital of Canada?", choices: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: "b"},
  {question: "Which desert is the largest hot desert in the world?", choices: ["Gobi", "Sahara", "Arabian", "Kalahari"], answer: "b"},
  {question: "Which river is the longest in the world according to many school geography references?", choices: ["Amazon", "Yangtze", "Nile", "Mississippi"], answer: "c"},
  {question: "Mount Everest lies in which mountain range?", choices: ["Andes", "Rockies", "Alps", "Himalayas"], answer: "d"},
  {question: "Which country has the most population?", choices: ["India", "China", "United States", "Indonesia"], answer: "a"},
  {question: "Which U.S. state is known as the Sunshine State?", choices: ["California", "Texas", "Florida", "Arizona"], answer: "c"},
  {question: "What is the capital of Japan?", choices: ["Kyoto", "Tokyo", "Osaka", "Nagoya"], answer: "b"},
  {question: "Which continent is the driest inhabited continent?", choices: ["Australia", "Africa", "Europe", "South America"], answer: "a"},
  {question: "Which line divides Earth into the Northern and Southern Hemispheres?", choices: ["Prime Meridian", "Tropic of Cancer", "Equator", "International Date Line"], answer: "c"},
  {question: "What is the capital of Brazil?", choices: ["Rio de Janeiro", "Brasilia", "Sao Paulo", "Salvador"], answer: "b"},
  {question: "Which country is famous for the Great Pyramids of Giza?", choices: ["Jordan", "Egypt", "Mexico", "Sudan"], answer: "b"},
  {question: "Which ocean lies between Africa, Asia, and Australia?", choices: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Southern Ocean"], answer: "a"},
  {question: "What is the smallest continent?", choices: ["Europe", "Antarctica", "Australia", "South America"], answer: "c"},
  {question: "Which U.S. state has the Grand Canyon?", choices: ["Nevada", "Arizona", "Utah", "Colorado"], answer: "b"},
  {question: "Which country is both in Europe and Asia?", choices: ["Turkey", "Spain", "France", "Portugal"], answer: "a"},
  {question: "Which city is the capital of France?", choices: ["Rome", "Paris", "Lyon", "Marseille"], answer: "b"},
  {question: "What is the name of the imaginary line at 0 degrees longitude?", choices: ["Equator", "Prime Meridian", "Arctic Circle", "Tropic of Capricorn"], answer: "b"},
  {question: "Which continent contains the Amazon Rainforest?", choices: ["Asia", "South America", "Africa", "Australia"], answer: "b"},
  {question: "What is the capital of Australia?", choices: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "c"},
  {question: "Which country has the shape of a boot?", choices: ["Greece", "Italy", "Chile", "Portugal"], answer: "b"},
  {question: "Which river flows through Egypt?", choices: ["Amazon", "Danube", "Nile", "Ganges"], answer: "c"},
  {question: "What is the capital of Mexico?", choices: ["Guadalajara", "Mexico City", "Monterrey", "Cancun"], answer: "b"},
  {question: "Which mountain range separates Europe and Asia in Russia?", choices: ["Andes", "Urals", "Alps", "Caucasus"], answer: "b"},
  {question: "Which African country has Cape Town as a major city?", choices: ["Kenya", "South Africa", "Nigeria", "Ghana"], answer: "b"},
  {question: "Which country is directly north of the United States?", choices: ["Mexico", "Greenland", "Canada", "Russia"], answer: "c"},
  {question: "Which continent has the most countries?", choices: ["Asia", "Europe", "Africa", "South America"], answer: "c"},
  {question: "Which U.S. state is made up of islands in the Pacific Ocean?", choices: ["Alaska", "California", "Hawaii", "Florida"], answer: "c"},
  {question: "What is the capital of India?", choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "b"},
  {question: "Which sea separates Europe from Africa?", choices: ["Black Sea", "Mediterranean Sea", "Red Sea", "Arabian Sea"], answer: "b"},
  {question: "Which country is known as the Land of the Rising Sun?", choices: ["China", "Thailand", "Japan", "South Korea"], answer: "c"},
  {question: "What is the capital of Germany?", choices: ["Munich", "Frankfurt", "Berlin", "Hamburg"], answer: "c"},
  {question: "Which U.S. state is the largest by area?", choices: ["Texas", "California", "Alaska", "Montana"], answer: "c"},
  {question: "The Andes Mountains are mainly found on which continent?", choices: ["North America", "South America", "Europe", "Asia"], answer: "b"},
  {question: "Which country has the city of Nairobi?", choices: ["Kenya", "Uganda", "Tanzania", "Ethiopia"], answer: "a"},
  {question: "What is the capital of Spain?", choices: ["Barcelona", "Madrid", "Valencia", "Seville"], answer: "b"},
  {question: "Which ocean is on the east coast of the United States?", choices: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"], answer: "c"},
  {question: "Which country contains the city of Istanbul?", choices: ["Turkey", "Greece", "Egypt", "Italy"], answer: "a"},
  {question: "What is the capital of Italy?", choices: ["Milan", "Rome", "Naples", "Venice"], answer: "b"},
  {question: "Which desert is found in northern China and Mongolia?", choices: ["Gobi", "Sahara", "Mojave", "Namib"], answer: "a"},
  {question: "Which country is home to the city of Buenos Aires?", choices: ["Chile", "Peru", "Argentina", "Uruguay"], answer: "c"},
  {question: "What is the capital of South Korea?", choices: ["Busan", "Seoul", "Incheon", "Daegu"], answer: "b"},
  {question: "Which continent is Antarctica closest to?", choices: ["Europe", "South America", "Asia", "North America"], answer: "b"},
  {question: "Which country has the most time zones?", choices: ["Russia", "United States", "France", "China"], answer: "c"},
  {question: "What is the capital of Egypt?", choices: ["Alexandria", "Cairo", "Giza", "Luxor"], answer: "b"},
  {question: "Which major river flows through Baghdad?", choices: ["Jordan", "Tigris", "Euphrates", "Indus"], answer: "b"},
  {question: "Which country is an island nation in the Indian Ocean south of India?", choices: ["Sri Lanka", "Nepal", "Bhutan", "Bangladesh"], answer: "a"},
  {question: "What is the capital of China?", choices: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"], answer: "b"},
  {question: "Which waterfall lies on the border of Zambia and Zimbabwe?", choices: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"], answer: "b"},
  {question: "Which country has the city of Lagos?", choices: ["Nigeria", "Ghana", "South Africa", "Morocco"], answer: "a"},
  {question: "What is the capital of Russia?", choices: ["St. Petersburg", "Moscow", "Kazan", "Sochi"], answer: "b"},
  {question: "Which country has the longest coastline in the world?", choices: ["Australia", "Canada", "Russia", "Indonesia"], answer: "b"},
  {question: "Which U.S. state touches only one other state?", choices: ["Maine", "Florida", "Alaska", "Washington"], answer: "a"},
  {question: "What is the capital of Argentina?", choices: ["Lima", "Santiago", "Buenos Aires", "Cordoba"], answer: "c"},
  {question: "Which country is home to the ancient city of Petra?", choices: ["Jordan", "Lebanon", "Israel", "Syria"], answer: "a"},
  {question: "Which continent contains the country of Peru?", choices: ["Africa", "Asia", "South America", "Europe"], answer: "c"},
  {question: "What is the capital of Nigeria?", choices: ["Lagos", "Abuja", "Kano", "Ibadan"], answer: "b"},
  {question: "Which lake is the largest freshwater lake by surface area?", choices: ["Lake Victoria", "Lake Superior", "Lake Baikal", "Lake Tanganyika"], answer: "b"},
  {question: "Which country has the city of Reykjavik?", choices: ["Norway", "Iceland", "Finland", "Denmark"], answer: "b"},
  {question: "What is the capital of Turkey?", choices: ["Istanbul", "Ankara", "Izmir", "Bursa"], answer: "b"},
  {question: "Which mountain is the tallest in Africa?", choices: ["Mount Kenya", "Kilimanjaro", "Atlas Peak", "Rwenzori"], answer: "b"},
  {question: "Which country has the city of Lima?", choices: ["Chile", "Peru", "Bolivia", "Ecuador"], answer: "b"},
  {question: "What is the capital of Kenya?", choices: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"], answer: "b"},
  {question: "Which U.S. state is known for the city of Las Vegas?", choices: ["Nevada", "Utah", "Arizona", "California"], answer: "a"},
  {question: "Which country contains the island of Greenland?", choices: ["Canada", "Denmark", "Norway", "Iceland"], answer: "b"},
  {question: "What is the capital of Saudi Arabia?", choices: ["Jeddah", "Mecca", "Riyadh", "Medina"], answer: "c"},
  {question: "Which country has the city of Bangkok?", choices: ["Vietnam", "Thailand", "Cambodia", "Laos"], answer: "b"},
  {question: "What is the capital of Thailand?", choices: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"], answer: "a"},
  {question: "Which country has the city of Athens?", choices: ["Italy", "Greece", "Cyprus", "Albania"], answer: "b"},
  {question: "What is the capital of Greece?", choices: ["Athens", "Sparta", "Thessaloniki", "Patras"], answer: "a"},
  {question: "Which South American country is famous for Machu Picchu?", choices: ["Chile", "Peru", "Brazil", "Colombia"], answer: "b"},
  {question: "Which country has the city of Wellington?", choices: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"], answer: "b"},
  {question: "What is the capital of New Zealand?", choices: ["Auckland", "Wellington", "Christchurch", "Hamilton"], answer: "b"},
  {question: "Which country is famous for the fjords of Scandinavia?", choices: ["Norway", "Poland", "Belgium", "Austria"], answer: "a"},
  {question: "What is the capital of Norway?", choices: ["Bergen", "Oslo", "Trondheim", "Stavanger"], answer: "b"},
  {question: "Which country has the city of Lisbon?", choices: ["Portugal", "Spain", "Italy", "France"], answer: "a"},
  {question: "What is the capital of Portugal?", choices: ["Porto", "Lisbon", "Braga", "Coimbra"], answer: "b"},
  {question: "Which country has the city of Amsterdam?", choices: ["Belgium", "Netherlands", "Germany", "Luxembourg"], answer: "b"},
  {question: "What is the capital of the Netherlands?", choices: ["Rotterdam", "Amsterdam", "The Hague", "Utrecht"], answer: "b"},
  {question: "Which country has the city of Bern?", choices: ["Austria", "Switzerland", "Germany", "Sweden"], answer: "b"},
  {question: "What is the capital of Switzerland?", choices: ["Zurich", "Geneva", "Bern", "Basel"], answer: "c"},
  {question: "Which country has the city of Stockholm?", choices: ["Denmark", "Sweden", "Finland", "Norway"], answer: "b"},
  {question: "What is the capital of Sweden?", choices: ["Malmo", "Stockholm", "Gothenburg", "Uppsala"], answer: "b"},
  {question: "Which country has the city of Helsinki?", choices: ["Sweden", "Finland", "Estonia", "Latvia"], answer: "b"},
  {question: "What is the capital of Finland?", choices: ["Turku", "Espoo", "Helsinki", "Tampere"], answer: "c"},
  {question: "Which country has the city of Vienna?", choices: ["Austria", "Hungary", "Germany", "Czech Republic"], answer: "a"},
  {question: "What is the capital of Austria?", choices: ["Vienna", "Salzburg", "Graz", "Linz"], answer: "a"},
  {question: "Which country has the city of Prague?", choices: ["Slovakia", "Poland", "Czech Republic", "Hungary"], answer: "c"},
  {question: "What is the capital of the Czech Republic?", choices: ["Brno", "Prague", "Ostrava", "Plzen"], answer: "b"},
  {question: "Which country has the city of Budapest?", choices: ["Romania", "Hungary", "Serbia", "Croatia"], answer: "b"},
  {question: "What is the capital of Hungary?", choices: ["Budapest", "Debrecen", "Szeged", "Pecs"], answer: "a"},
  {question: "Which country has the city of Warsaw?", choices: ["Poland", "Ukraine", "Belarus", "Lithuania"], answer: "a"},
  {question: "What is the capital of Poland?", choices: ["Krakow", "Warsaw", "Gdansk", "Lodz"], answer: "b"},
  {question: "Which country has the city of Dublin?", choices: ["Scotland", "Ireland", "Wales", "England"], answer: "b"},
  {question: "What is the capital of Ireland?", choices: ["Cork", "Dublin", "Galway", "Limerick"], answer: "b"},
  {question: "Which country has the city of Brussels?", choices: ["Belgium", "France", "Luxembourg", "Netherlands"], answer: "a"},
  {question: "What is the capital of Belgium?", choices: ["Antwerp", "Bruges", "Brussels", "Ghent"], answer: "c"},
  {question: "Which country has the city of Rabat?", choices: ["Morocco", "Algeria", "Tunisia", "Libya"], answer: "a"},
  {question: "What is the capital of Morocco?", choices: ["Casablanca", "Marrakesh", "Rabat", "Fez"], answer: "c"},
  {question: "Which country has the city of Santiago?", choices: ["Argentina", "Chile", "Peru", "Paraguay"], answer: "b"},
  {question: "What is the capital of Chile?", choices: ["Valparaiso", "Santiago", "Lima", "La Paz"], answer: "b"},
  {question: "Which country has the city of Bogota?", choices: ["Colombia", "Venezuela", "Ecuador", "Panama"], answer: "a"},
  {question: "What is the capital of Colombia?", choices: ["Medellin", "Bogota", "Cali", "Cartagena"], answer: "b"},
  {question: "Which country has the city of Caracas?", choices: ["Venezuela", "Colombia", "Brazil", "Guyana"], answer: "a"},
  {question: "What is the capital of Venezuela?", choices: ["Maracaibo", "Caracas", "Valencia", "Merida"], answer: "b"}];

// Variables
var inReviewMode = false;
var currentQuestion = 0;
var userAnswers = [];
var quizQuestions = [];
var  reviewQuestions = [];

/*    Instructions Screen Event details and overall functionality starts here   */

onEvent("startButton", "click", function() {
inReviewMode = false;
showQuizScreen(0); 
 });


//Function
function showQuizScreen(index){
  /*
  When user starts test, it will be 0 from starting qiz 
  When user come to this screen from review index will be the marked question
  */ 
  currentQuestion = index;
 
 /*
 This if conidtion is to do below things  in intial flow to reset values 
 and not to reset when screen loads from REview screen to persis answers 
 till user submits
 */
  if (!inReviewMode) {
    userAnswers = [];
    quizQuestions = [];
    reviewQuestions = [];
    setProperty("quizSubmitButton","hidden", true);
    selectRandomQuestions();
  }
  setScreen("quizScreen");
  showQuestion(index);
}

/*    Instructions Screen Event details and overall functionality ends here   */    


/*    Quiz Screen Event details and overall functionality ends here   */    

// When user clicks button A
onEvent("answerAButton", "click", function() {
  saveAnswer("A", currentQuestion);
});

// When user clicks button B
onEvent("answerBButton", "click", function() {
  saveAnswer("B", currentQuestion);
});

// When user clicks button C
onEvent("answerCButton", "click", function() {
  saveAnswer("C", currentQuestion);
});

// When user clicks button D
onEvent("answerDButton", "click", function() {
  saveAnswer("D", currentQuestion);
});

// When user clicks button Previous 
onEvent("prevButton", "click", function() {
  if (currentQuestion > 0) {
    currentQuestion = currentQuestion - 1;
    showQuestion(currentQuestion);
  }
});

// When user clicks button Next
onEvent("nextButton", "click", function() {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion = currentQuestion + 1;
    showQuestion(currentQuestion);
  } else {
    showReviewScreen();
  }
});

// When user clicks Review/Clear Review button 
onEvent("reviewButton", "click", function( ) {
	 markReviewUnReview(currentQuestion);
});

// When user clicks submit button 
onEvent("quizSubmitButton", "click", function( ) {
	showReviewScreen();
});

// Functions used in Quiz Screen
// This function selects 10 random questions in quizQuestions using for loops
function selectRandomQuestions() {
  var tempList = [];
  var i;
  var tempQNo;
  // adding numbers from 0 to 99 in templist
  for (i = 0; i < questions.length; i++) {
    appendItem(tempList, i);
  }
  // doing random numbers selection 
  for (i = tempList.length - 1; i > 0; i--) {
    var randIndex = randomNumber(0, i);
    tempQNo = tempList[i];
    tempList[i] = tempList[randIndex];
    tempList[randIndex] = tempQNo;
  }
  // Take first 10 questions
  for (i = 0; i < 10; i++) {
    appendItem(quizQuestions, questions[tempList[i]]);
    appendItem(userAnswers, "");
    appendItem(reviewQuestions, 0);
  }
}

// Function to display the question dymanically based on the question index that is pased from QuizQuestion object which will hold 10 random selected questions at the beginning
function showQuestion(index) {
  setText("questionNumberLabel", "Question " + (index + 1) + " of " + quizQuestions.length);
  setText("questionText", quizQuestions[index].question);
  setText("answerAButton", "A - " + quizQuestions[index].choices[0]);
  setText("answerBButton", "B - " + quizQuestions[index].choices[1]);
  setText("answerCButton", "C - " + quizQuestions[index].choices[2]);
  setText("answerDButton", "D - " + quizQuestions[index].choices[3]);
  saveAnswer(userAnswers[index], index);
  if (reviewQuestions[index] == 0) {
    setText("reviewButton", "Mark Review");
    setProperty("reviewButton", "text-color", "#0094CA");
  } else {
    setText("reviewButton", "Clear Review");
    setProperty("reviewButton", "text-color", "red");
  }
}

// Function to save answer and make hide/show for next , prev and submit button
function saveAnswer(letter, index) {
  userAnswers[index] = letter;
  if (letter == "") {
    setText("selectedAnswerLabel", "Selected answer: None");
  } else {
    setText("selectedAnswerLabel", "Selected answer: " + letter);
  }
//  if (getProperty("quizSubmitButton","hidden"))
  setProperty("quizSubmitButton","hidden",!(inReviewMode || (letter != "" && index+1==quizQuestions.length)));
  setProperty("nextButton","hidden",(letter == "" || inReviewMode || index+1==quizQuestions.length));
  setProperty("prevButton","hidden",(letter == "" || inReviewMode || index==0));
}

//Function to mark Review / Clear Review button
function markReviewUnReview(index) {
  if (getText("reviewButton")  == "Mark Review") {
      reviewQuestions[index] = 1;
      setText("reviewButton", "Clear Review");
      setProperty("reviewButton", "text-color", "red");
  }
  else{
      reviewQuestions[index] = 0;
      setText("reviewButton", "Mark Review");
      setProperty("reviewButton", "text-color", "#0094CA");
  }
}

/*    Quiz Screen Event details and overall functionality ends here   */    


/*    Review Screen Event details and overall functionality Starts here   */    

//When user clicks Show Results button
onEvent("showResultButton", "click", function( ) {
	showResults(quizQuestions);
});

// When user clicks on Question 1 label
onEvent("review1Label", "click", function( ) {
	showQuizScreen(0);
	
});

// When user clicks on Question 2 label
onEvent("review2Label", "click", function( ) {
	showQuizScreen(1);
});

// When user clicks on Question 3 label
onEvent("review3Label", "click", function( ) {
	showQuizScreen(2);
});

// When user clicks on Question 4 label
onEvent("review4Label", "click", function( ) {
	showQuizScreen(3);
});

// When user clicks on Question 5 label
onEvent("review5Label", "click", function( ) {
	showQuizScreen(4);
});

// When user clicks on Question 6 label
onEvent("review6Label", "click", function( ) {
	showQuizScreen(5);
});

// When user clicks on Question 7 label
onEvent("review7Label", "click", function( ) {
	showQuizScreen(6);
});

// When user clicks on Question 8 label
onEvent("review8Label", "click", function( ) {
	showQuizScreen(7);
});

// When user clicks on Question 9 label
onEvent("review9Label", "click", function( ) {
	showQuizScreen(8);
});

// When user clicks on Question 10 label
onEvent("review10Label", "click", function( ) {
	showQuizScreen(9);
});

//Functions related to Review screens

// Function to show the review screen 
function showReviewScreen() {
  inReviewMode = true; 
  setScreen("reviewScreen");
  showReviewQuestions(quizQuestions, reviewQuestions, userAnswers); 
}

//Function to show the questions on the 10 labels dynamically using for loop
function showReviewQuestions( testQuestionBank, reviewQuizQuestions, userAnsweredQuestion){
  var reviewCount=0;
  for ( var i = 0; i < testQuestionBank.length; i++) {
    setText("review" + (i + 1) + "Label", "Question " + (i + 1) + ": Your answer: " + userAnsweredQuestion[i].toUpperCase());
    if (reviewQuizQuestions[i] == 0) {
      setProperty("review" + (i + 1) + "Label", "text-color", "blue");
    } else {
      reviewCount++;
      setProperty("review" + (i + 1) + "Label", "text-color", "red");
    }
  }
  setProperty("showResultButton","hidden",(reviewCount>0));
}

/*    Review Screen  Event details and overall functionality ends here   */    


/*    Result Screen Event details and overall functionality Starts here   */    

// When user clicks to  restart quiz. 
onEvent("restartButton", "click", function() {
  inReviewMode = false;
  showQuizScreen(0); 
}); 

//Function to calculate score and display result of correct and wrong answers (Function with parameter and for loop and if statement)
function showResults(testQuestionBank) {
  setScreen("resultScreen");
  var quizScore= calculateQuizScore(testQuestionBank);
  setText("scoreLabel", "Final Score: " + quizScore + " / " + testQuestionBank.length +  ';  Percentage '+  Math.round(quizScore *100/testQuestionBank.length));
  for ( var i = 0; i < testQuestionBank.length; i++) {
    if (userAnswers[i] == testQuestionBank[i].answer.toUpperCase()) {
      setText("result" + (i + 1) + "Label", "Question " + (i + 1) + ": Correct | Your answer: " + userAnswers[i]);
      setProperty("result" + (i + 1) + "Label", "text-color", "blue");
    } else {
      setText("result" + (i + 1) + "Label", "Question " + (i + 1) + ": Wrong | Your answer: " + userAnswers[i] + " | Correct: " + testQuestionBank[i].answer.toUpperCase());
      setProperty("result" + (i + 1) + "Label", "text-color", "red");
    }
  }
  
}

//Function to calculate and return the score (With Parameter and For Loop and if statement.)
function calculateQuizScore(testQuestionBank){
  var score=0;
  for ( var i = 0; i < testQuestionBank.length; i++) {
    if (userAnswers[i] == testQuestionBank[i].answer.toUpperCase()) {
      score++;
    }
  }
  return score;
}

/*    Result Screen Event details and overall functionality ends here   */    
