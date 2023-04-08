  //Radio Buttons and Receive Message element:
var hideRBRM = document.querySelector(".rbrm-buttons");
var affirmationButton = document.querySelector(".first-rdButton");
var mantraButton = document.querySelector(".second-rdButton");
var receiveMessageButton = document.querySelector(".message-button");

  // Add your message related elements:
var yourMessageButton = document.querySelector(".add-message-button");
var displayUserText = document.querySelector(".userMsg");

  // Form elements
var userForm = document.querySelector(".view-form");
var userSubmitButton = document.querySelector(".submit-your-message");
var userAffirmationMsg = document.querySelector(".user-affirmation");
var userMantraMsg = document.querySelector(".user-mantra");
var userAffirmationButton = document.querySelector(".user-affbutton");
var UserMantraButton = document.querySelector(".user-manbutton");
var buddha = document.querySelector(".logo");

  // Event listeners:
receiveMessageButton.addEventListener("click", rendomeMessage);
yourMessageButton.addEventListener("click", createYourMessage);
userSubmitButton.addEventListener("click", displayUserMessage);

  // Functions:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function rendomeMessage() {
  if (affirmationButton.checked) {
    displayUserText.innerText = affirmations[getRandomIndex(affirmations)];                
    buddha.classList.add("hidden");
  } else if (mantraButton.checked) {
    displayUserText.innerText = mantras[getRandomIndex(mantras)];
    buddha.classList.add("hidden");
  } else {
    displayUserText.innerText = (" ✨ Affirmation ✨ Mantra? Please choose one ❤️");
    buddha.classList.add("hidden");
  };                                                         
};

function createYourMessage() {
  buddha.classList.add("hidden");
  userForm.classList.remove("hidden");
  hideRBRM.classList.add("hidden");
  displayUserText.classList.add("hidden");
};


function displayUserMessage(event) {
  event.preventDefault();
    if (userAffirmationButton.checked){
      displayUserText.innerText = userAffirmationMsg.value;
        affirmations.push(userAffirmationMsg.value);
      userForm.classList.add("hidden");
        displayUserText.classList.remove("hidden");
        hideRBRM.classList.remove("hidden");
    }else if(UserMantraButton.checked){
      displayUserText.innerText = userMantraMsg.value;
        mantras.push(userMantraMsg.value);
      userForm.classList.add("hidden");
        displayUserText.classList.remove("hidden");
        hideRBRM.classList.remove("hidden");
    }else{
      alert("✨ Affirmation ❤️ Mantra? Please choose one ✨");
    };
    document.querySelector("form").reset();
};

var affirmations = [
    "✨ If you are irritated by every rub, how will your mirror be polished? ✨", 
    "✨ I am in the process of becoming the best version of myself ✨", 
    "✨ I have the freedom & power to create the life I desire ✨",
    "✨ I choose to be kind to myself and love myself unconditionally ✨", 
    "✨ My possibilities are endless ✨",
    "✨ Before time takes you by surprise, Ask for good red wine and get wise ✨",
    "✨ You are not of gold, don't believe the lies, You are put to dust, once again you'll rise. ✨ ",
    "✨ The cure for the pain is the pain ✨",
    "✨ I deserve to be healthy and feel good ✨", 
    "✨ Don't permit sorrow to be your friend, Sadness and pain become your trend ✨", 
    "✨ Don't let the book or the farm you tend, Rule your life before to earth you descend ✨", 
    "✨ I honor my body by trusting the signals that it sends me ✨",
    "✨ I manifest perfect health by making smart choices ✨"
    ];
    
    var mantras = [
    "✨ The secrets eternal neither you know nor I, And answers to the riddle neither you know nor I ✨",
    "✨ Behind the veil there is much talk about us, why, When the veil falls, neither you remain nor I. ✨",
    "✨ Don\'t let yesterday take up too much of today ✨", 
    "✨ Every day is a second chance ✨", 
    "✨ Tell the truth and love everyone ✨", 
    "✨ I am free from sadness ✨", 
    "✨ The caravan of life shall always pass, Beware that is fresh as sweet young grass ✨",
    "✨ Let's not worry about what tomorrow will amass, Fill my cup again, this night will pass, alas ✨", 
    "✨ You are not a drop in the ocean. You are the entire ocean in a drop ✨", 
    "✨ In the beginning it is you, in the middle it is you and in the end it is you✨", 
    "✨ I love myself ✨", 
    "✨ I am present now ✨", 
    "✨ Inhale the future, exhale the past ✨", 
    "✨ This too shall pass ✨", 
    "✨ Yesterday is not today ✨", 
    "✨ The only constant is change ✨",
    "✨ I am the sky, the rest is weather ✨"
    ];