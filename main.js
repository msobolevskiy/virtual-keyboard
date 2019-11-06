document.body.insertAdjacentHTML('afterbegin', '<div class="container"></div>');
document.body.children[0].insertAdjacentHTML('afterbegin', '<div class="textarea-wrapper"></div>');
document.querySelector('.textarea-wrapper').insertAdjacentHTML('afterbegin', ' <textarea class="textarea" name="textarea" id="textarea" cols="30" rows="10"></textarea>');
document.body.children[0].insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');

let arrKeyBoard;
let lang = localStorage.getItem('language');
const specialKeys = ['Tab', 'backspace', 'Del', 'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Alt', 'Space'];


function renderKeyboard(keysLang) {
  class Btn {
    constructor(keyCode, keyLang, cssClass, textEng, textRu) {
      this.keyCode = keyCode;
      this.lang = keyLang;
      this.cssClass = cssClass;
      this.textEng = textEng;
      this.textRu = textRu;
    }

    get textBtn() {
      if (this.lang === 'ru') return this.textRu;

      return this.textEng;
    }
  }

  const key1 = new Btn(192, keysLang, 'button', '`', 'Ё');
  const key2 = new Btn(49, keysLang, 'button', '1', '1');
  const key3 = new Btn(50, keysLang, 'button', '2', '2');
  const key4 = new Btn(51, keysLang, 'button', '3', '3');
  const key5 = new Btn(52, keysLang, 'button', '4', '4');
  const key6 = new Btn(53, keysLang, 'button', '5', '5');
  const key7 = new Btn(54, keysLang, 'button', '6', '6');
  const key8 = new Btn(55, keysLang, 'button', '7', '7');
  const key9 = new Btn(56, keysLang, 'button', '8', '8');
  const key10 = new Btn(57, keysLang, 'button', '9', '9');
  const key11 = new Btn(48, keysLang, 'button', '0', '0');
  const key12 = new Btn(189, keysLang, 'button', '-', '-');
  const key13 = new Btn(187, keysLang, 'button', '=', '=');
  const key14 = new Btn(8, keysLang, 'button backspace', 'backspace', 'backspace');

  const key15 = new Btn(9, keysLang, 'button tab', 'Tab', 'Tab');
  const key16 = new Btn(81, keysLang, 'button', 'Q', 'Й');
  const key17 = new Btn(87, keysLang, 'button', 'W', 'Ц');
  const key18 = new Btn(69, keysLang, 'button', 'E', 'У');
  const key19 = new Btn(82, keysLang, 'button', 'R', 'К');
  const key20 = new Btn(84, keysLang, 'button', 'T', 'Е');
  const key21 = new Btn(89, keysLang, 'button', 'Y', 'Н');
  const key22 = new Btn(85, keysLang, 'button', 'U', 'Г');
  const key23 = new Btn(73, keysLang, 'button', 'I', 'Ш');
  const key24 = new Btn(79, keysLang, 'button', 'O', 'Щ');
  const key25 = new Btn(80, keysLang, 'button', 'P', 'З');
  const key26 = new Btn(219, keysLang, 'button', '[', 'Х');
  const key27 = new Btn(221, keysLang, 'button', ']', 'Ъ');
  const key28 = new Btn(220, keysLang, 'button', '\\', '\\');
  const key29 = new Btn(46, keysLang, 'button tab', 'Del', 'Del');

  const key30 = new Btn(20, keysLang, 'button caps', 'Caps Lock', 'Caps Lock');
  const key31 = new Btn(65, keysLang, 'button', 'A', 'Ф');
  const key32 = new Btn(83, keysLang, 'button', 'S', 'Ы');
  const key33 = new Btn(68, keysLang, 'button', 'D', 'В');
  const key34 = new Btn(70, keysLang, 'button', 'F', 'А');
  const key35 = new Btn(71, keysLang, 'button', 'G', 'П');
  const key36 = new Btn(72, keysLang, 'button', 'H', 'Р');
  const key37 = new Btn(74, keysLang, 'button', 'J', 'О');
  const key38 = new Btn(75, keysLang, 'button', 'K', 'Л');
  const key39 = new Btn(76, keysLang, 'button', 'L', 'Д');
  const key40 = new Btn(186, keysLang, 'button', ';', 'Ж');
  const key41 = new Btn(222, keysLang, 'button', '\'', 'Э');
  const key42 = new Btn(13, keysLang, 'button enter', 'Enter', 'Enter');

  const key43 = new Btn(16, keysLang, 'button shift', 'Shift', 'Shift');
  const key44 = new Btn(90, keysLang, 'button', 'Z', 'Я');
  const key45 = new Btn(88, keysLang, 'button', 'X', 'Ч');
  const key46 = new Btn(67, keysLang, 'button', 'C', 'С');
  const key47 = new Btn(86, keysLang, 'button', 'V', 'М');
  const key48 = new Btn(66, keysLang, 'button', 'B', 'И');
  const key49 = new Btn(78, keysLang, 'button', 'N', 'Т');
  const key50 = new Btn(77, keysLang, 'button', 'M', 'Ь');
  const key51 = new Btn(188, keysLang, 'button', ',', 'Б');
  const key52 = new Btn(190, keysLang, 'button', '.', 'Ю');
  const key53 = new Btn(191, keysLang, 'button', '/', '.');
  const key54 = new Btn(38, keysLang, 'button', '<img src="./pic/up-arrow.jpg" alt="up"', '<img src="./pic/up-arrow.jpg" alt="up"');
  const key55 = new Btn(16, keysLang, 'button shift2', 'Shift', 'Shift');

  const key56 = new Btn(17, keysLang, 'button', 'Ctrl', 'Ctrl');
  const key57 = new Btn(18, keysLang, 'button', 'Alt', 'Alt');
  const key58 = new Btn(32, keysLang, 'button space', 'Space', 'Space');
  const key59 = new Btn(18, keysLang, 'button', 'Alt', 'Alt');
  const key60 = new Btn(17, keysLang, 'button', 'Ctrl', 'Ctrl');
  const key61 = new Btn(37, keysLang, 'button', '<img src="./pic/left-arrow.png" alt="left">', '<img src="./pic/left-arrow.png" alt="left">');
  const key62 = new Btn(40, keysLang, 'button', '<img src="./pic/d-arrow.png" alt="down">', '<img src="./pic/d-arrow.png" alt="down">');
  const key63 = new Btn(39, keysLang, 'button', '<img src="./pic/right-arrow.jpg" alt="right">', '<img src="./pic/right-arrow.jpg" alt="right">');

  arrKeyBoard = [
    [key1, key2, key3, key4, key5, key6, key7, key8, key9, key10, key11, key12, key13, key14],
    [key15, key16, key17, key18, key19, key20, key21, key22, key23, key24, key25, key26, key27,
      key28, key29],
    [key30, key31, key32, key33, key34, key35, key36, key37, key38, key39, key40, key41, key42],
    [key43, key44, key45, key46, key47, key48, key49, key50, key51, key52, key53, key54, key55],
    [key56, key57, key58, key59, key60, key61, key62, key63],
  ];
  return arrKeyBoard;
}


function elementGeneration(arrayKeyBoard) {
  const myNode = document.querySelector('.keyboard');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  for (let i = 0; i < arrayKeyBoard.length; i += 1) {
    document.querySelector('.keyboard').insertAdjacentHTML('beforeend', `<div class="row${i}"></div>`);

    for (let j = 0; j < arrayKeyBoard[i].length; j += 1) {
      document.querySelector(`.row${i}`).insertAdjacentHTML('beforeend', `<div keyCode="${arrayKeyBoard[i][j].keyCode}" class="${arrayKeyBoard[i][j].cssClass}">${arrayKeyBoard[i][j].textBtn}</div>`);
    }
  }
}


function pressingAButtonOnAPhysicalKeyboard() {
  document.body.addEventListener('keydown', (e) => {
    const btn = document.querySelector(`[keycode="${e.keyCode}"]`);
    document.querySelector('.textarea').focus();
    btn.classList.add('active');
  });
  document.body.addEventListener('keyup', (e) => {
    const btn = document.querySelector(`[keycode="${e.keyCode}"]`);
    btn.classList.remove('active');
  });
}


function changedLanguage(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

function keySpace(key, text) {
  const textArea = text;
  if (key.classList.contains('active')) textArea.value = (`${`${textArea.value} `}`);
}

function keyBackSpace(key, text) {
  const textArea = text;
  if (key.classList.contains('active')) textArea.value = textArea.value.substring(0, textArea.value.length - 1);
}

function keyEnter(key, text) {
  const textArea = text;
  if (key.classList.contains('active')) textArea.value = (`${`${textArea.value}\n`}`);
}

function keyTab(key, text) {
  const textArea = text;
  if (key.classList.contains('active')) {
    key.preventDefault();
    textArea.value = (`${`${textArea.value}        `}`);
  }
}

function virtualButton() {
  const virtBut = document.querySelectorAll('.button');
  virtBut.forEach((el) => {
    el.addEventListener('mousedown', () => {
      const text = document.querySelector('.textarea');
      const btnShift = document.querySelector('.shift');
      const btnSpace = document.querySelector('.space');
      const btnBackSpace = document.querySelector('.backspace');
      const btnEnter = document.querySelector('.enter');
      const btnTab = document.querySelector('.tab');


      el.classList.add('active');
      keySpace(btnSpace, text);
      keyBackSpace(btnBackSpace, text);
      keyEnter(btnEnter, text);
      keyTab(btnTab, text);

      //  special keys check
      for (let i = 0; i < specialKeys.length; i += 1) {
        if (el.innerText === specialKeys[i]) {
          el.addEventListener('mouseup', () => {
            el.classList.remove('active');
          });
          return;
        }
      }

      // active Shift check
      if (btnShift.classList.contains('active')) {
        text.value = (`${text.value + el.innerText}`);
      } else text.value = (`${text.value + el.innerText.toLowerCase()}`);


      el.addEventListener('mouseup', () => {
        el.classList.remove('active');
      });
    });
  });
}

renderKeyboard(lang);
elementGeneration(arrKeyBoard);
pressingAButtonOnAPhysicalKeyboard();
virtualButton();


changedLanguage(
  () => {
    
    if (lang === 'ru') {
      lang = 'eng';
    } else lang = 'ru';
    renderKeyboard(lang);
    elementGeneration(arrKeyBoard);
    virtualButton();
    localStorage.setItem('language', `${lang}`);
  },
  'ShiftLeft',
  'ControlLeft',
);
