// Vriables targeting the relevant DOM elements.

var homeBtn = document.querySelector('#btn-home');
var receiveMessageBtn = document.querySelector('#btn-receive-msg');
var collectionBtn = document.querySelector('#btn-collection');
var createBtn = document.querySelector('#btn-create');
var editBtn = document.querySelector('#btn-edit');
var createAffBtn = document.querySelector('#btn-create-aff');
var createManBtn = document.querySelector('#btn-create-man');
var affirmationRb = document.querySelector('#rb-affirmation');
var mantraRb = document.querySelector('#rb-mantra');
var messageDisplay = document.querySelector('#message-display');
var homeSection = document.querySelector('#main-section');

// Event listeners

window.addEventListener('load', displayMessages);
homeBtn.addEventListener('click', goHome);
collectionBtn.addEventListener('click', goToCreateYourOwn);
createAffBtn.addEventListener('click', addNewMessage);
createManBtn.addEventListener('click', addNewMessage);
createBtn.addEventListener('click', toggleCreateMessage);

// Event handlers and other functions

receiveMessageBtn.addEventListener('click', function (event) {
    event.preventDefault();
    var currentMessage;
    if(affirmationRb.checked){
        currentMessage = getMessage('affirmation');
    }else if(mantraRb.checked) {
        currentMessage = getMessage('mantra');
    };
    messageDisplay.innerHTML = `<p>${currentMessage.msg}</p>`;
});

function getMessage(type) {
    var filtered = [];
    for(var i = 0; i < messages.length; i++){
        if(messages[i].type === type){
            filtered.push(messages[i]);
        };
    };
    return filtered[getRandomIndex(filtered)];
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function displayMessages() {
    affirmationList.innerHTML = ''
    mantraList.innerHTML = ''
    for(var i = 0; i < messages.length; i++) {
        if(messages[i].type === 'affirmation') {
            affirmationList.innerHTML += `<div id="${messages[i].id}">${messages[i].msg}</div>`;
        }else if(messages[i].type === 'mantra'){
            mantraList.innerHTML += `<div id="${messages[i].id}">${messages[i].msg}</div>`
        };
    }
}


function goHome() {
  
};

function goToCreateYourOwn() {
   homeSection.classList.add('hidden');
};

function toggleCreateMessage() {
};

function addNewMessage(event) {

};
