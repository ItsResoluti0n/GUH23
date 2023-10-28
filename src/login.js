const Keyboard = window.SimpleKeyboard.default;

const defaultTheme = "hg-theme-default";

const myKeyboard = new Keyboard({
  theme: defaultTheme,
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  layout: {
    'default': [
      '` 4 8 7 2 5 3 1 9 0 6 - = back',
      'tab a b c d e f g h i j [ ] \\',
      'caps k l m n o p q r s ; \' enter',
      'shift t u v w x y z , . / shift',
      'dotco @ {space}'
    ],
    'shift': [
      '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
      '{tab} Q W E R T Y U I O P { } |',
      '{lock} A S D F G H J K L : " {enter}',
      '{shift} Z X C V B N M &lt; &gt; ? {shift}',
      '.com @ {space}'
    ]
  }
});

document.getElementById("username").value = "";
document.getElementById("password").value = "";

var inputDOM = document.querySelector(".input");

/**
 * Keyboard show
 */
document.getElementById("username").addEventListener("focus", (event) => {
  inputDOM = document.getElementById("username");
  myKeyboard.setInput(inputDOM.value);
  showKeyboard();
});

document.getElementById("password").addEventListener("focus", (event) => {
  inputDOM = document.getElementById("password");
  myKeyboard.setInput(inputDOM.value);
  showKeyboard();
});

/**
 * Keyboard show toggle
 */
document.addEventListener("click", (event) => {
  if (
    /**
     * Hide the keyboard when you're not clicking it or when clicking an input
     * If you have installed a "click outside" library, please use that instead.
     */
    myKeyboard.options.theme.includes("show-keyboard") &&
    !event.target.className.includes("input") &&
    !event.target.className.includes("hg-button") &&
    !event.target.className.includes("hg-row") &&
    !event.target.className.includes("simple-keyboard")
  ) {
    hideKeyboard();
  }
});

function onChange(input) {
  inputDOM.value = input;
}

function onKeyPress(button) {
  alert("This will type the character: " + button);
}

function clearInput(element) {
  var elementID = element.id;
  alert("This will clear all of the input, are you sure?");
  if (elementID == "x-user") {
    myKeyboard.clearInput();
    document.getElementById("username").value = "";
  } else if (elementID == "x-pass") {
    myKeyboard.clearInput();
    document.getElementById("password").value = "";
  }
}

function showKeyboard() {
  myKeyboard.setOptions({
    theme: `${defaultTheme} show-keyboard`
  });
}

function hideKeyboard() {
  myKeyboard.setOptions({
    theme: defaultTheme
  });
}

function loginClose() {
    document.getElementById("login").style.display = "none";
}