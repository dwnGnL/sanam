let languageButton = document.querySelector('.toggle-language');
let initialLang = document.querySelector('html')

languageButton.onclick = () => initialLang.lang == 'ru' ? initialLang.lang = 'en' : initialLang.lang = 'ru';