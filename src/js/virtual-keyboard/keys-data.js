const CELL_CLASS = ["tilt", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero", "minus", "plus", "backspace", "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "brackL", "brackR", "slash", "del", "capsLook", "a", "s", "d", "f", "g", "h", "j", "k", "l", "dashComma", "upperComma", "enter", "shiftL", "leftSlash", "z", "x", "c", "v", "b", "n", "m", "dash", "comma", "rightSlash", "keyUp", "shiftR", "ctrlL", "win", "altL", "space", "altR", "ctrlR", "keyleft", "keyDown", "keyRight"];

const EN_KEYS = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "", "", "", "", "", "", " ", "", "", "", "", "", ""],
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift", "", "", "", "", "", " ", "", "", "", "", "", ""]
];

const RU_KEYS = [
    ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift", "ArrowUp", "Control", "fn", "OS", "Alt", " ", "Alt", "Context", "Control", "ArrowLeft", "ArrowDown", "ArrowRight"],

    ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "Shift", "ArrowUp", "Control", "fn", "OS", "Alt", " ", "Alt", "Context", "Control", "ArrowLeft", "ArrowDown", "ArrowRight"]
]

export { CELL_CLASS, EN_KEYS, RU_KEYS };