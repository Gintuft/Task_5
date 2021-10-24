// 1. На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет)

const ulElement = document.createElement('ul')
document.body.append(ulElement)

for (let i = 1; i < 25; i++) {
    const liElement = document.createElement('li')
    ulElement.append(liElement)
    liElement.textContent = i + 1
    i = i + 2
}


const arrayOfElements = []
for (let li of document.querySelectorAll('li')) {
    if (li.textContent % 2 == 0) {
        arrayOfElements.push(li.textContent)
    }
}

arrayOfElements.forEach(number => {
    const liElement = document.createElement('li')
    ulElement.append(liElement)
    liElement.textContent = number
}
)


// Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option). Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li. Для добавления можно использовать функцию setInterval https://learn.javascript.ru/settimeout-setinterval

// Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой. Старайтесь дробить код на небольшие функции (не обязательно(не обязательно.2.1* Использовать bootstrap для стилей

function createElement(tagName = 'div', content = '', styles = {}) {
    const element = document.createElement(tagName)
    element.textContent = content
    for (let prop in styles) {
        element.style[prop] = styles[prop]
    }
    return element
}

function createSelectELement(options = []) {
    const selectElement = createElement('select')
    for (let option of options) {
        const optionElement = createElement('option', option)
        optionElement.setAttribute('value', option)
        selectElement.append(optionElement)
    }
    return selectElement
}


const formElement = createElement('form')
const inputElement = createElement('input')
document.body.append(formElement)
document.querySelector('form').append(inputElement)

const selectElement = createSelectELement(['Варшава', 'Лондон', 'Париж', 'Москва'])
document.querySelector('form').append(selectElement)

const ulElement2 = createElement('ul')
document.body.append(ulElement2)

function createLiElement() {
    const liElement = createElement('li')
    liElement.textContent = 'hello'
    ulElement2.append(liElement)
    return ulElement2
}

const myInterval = setInterval(createLiElement, 1000);
setTimeout(() => { clearInterval(myInterval) }, 10000);


