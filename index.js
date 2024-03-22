// let createTaskBtn = document.querySelector('.header__create-btn');
// let saveModalBtn = document.querySelector('.modal__window-btn-save');
// let cencelModalBtn = document.querySelector('.modal__window-btn-cencel');

// let modal = document.querySelector('.modal__window');


// createTaskBtn.onclick = function() {
//     console.log(modal);
//     modal.style.opacity = 1;
//     let blockEmpty = document.querySelector('.banner__block-empty');
//     blockEmpty.style.opacity = 0;
    
   
// }

// cencelModalBtn.onclick = function() {
//     modal.style.opacity = 0;
//     let blockEmpty = document.querySelector('.banner__block-empty');
//     blockEmpty.style.opacity = 1;
//     document.querySelector('.modal__window-input').value = '';
//     document.querySelector('.modal__window-textarea').value = '';
//     document.querySelector('.modal__window-radio-btn').value = '';
// }

// saveModalBtn.onclick = function() {
//     let elem1 = document.querySelector('.modal__window-input');
//     let elem2 = document.querySelector('.modal__window-textarea');
//     let elem3 = document.querySelector('.modal__window-select');
//     let elem4 = document.querySelector('.modal__window-radio-btn');

//     elem1.value = '';
//     elem2.value = '';
//     elem3.value = '';
//     elem4.value = '';

//     let obj = {
//         title: elem1.value,
//         description: elem2.value,
//         color: elem3.value,
//         priority: elem4.value,
//     }

//     console.log(obj);

//     console.log('title:', obj.title);
//     console.log('description:',obj.description);
//     console.log('color:', obj.color);
//     console.log('priority:', obj.priority);
// }

const openModalWindow = document.querySelector('.header__button');
const openModalWindowMain = document.querySelector('.main__no-tasks-btn');
const closeModalWindow = document.querySelector('.modal__window-close');
const cancelModalWinow = document.querySelector('.modal__button-cancel')
const saveModalWindow = document.querySelector('.modal__button-ok');
const modal = document.querySelector('.modal');
const mainNoTasks = document.querySelector('.main__no-tasks')


openModalWindow.addEventListener('click', function() {
    modal.classList.add('active');
})

openModalWindowMain.addEventListener('click', function() {
    modal.classList.add('active');
})

closeModalWindow.addEventListener('click', () => {
    modal.classList.remove('active');
})

cancelModalWinow.addEventListener('click', function() {
    modal.classList.remove('active');

    document.querySelector('.modal__form-input').value = '';
    document.querySelector('.modal__form-textarea').value = '';
    document.querySelector('.modal__form-radio').value = '';
})

saveModalWindow.addEventListener('click', function() {
    let elem1 = document.querySelector('.modal__form-input');
    let elem2 = document.querySelector('.modal__form-textarea');
    let elem3 = document.querySelector('.modal__form-select');
    let elem4 = document.querySelectorAll('.modal__form-radio');

    for (let i = 0; i < elem4.length; i++){
        if (elem4[i].checked){
             data = elem4[i].value;
             break;
        }
    }
    console.log(data)

    let obj = {
        title: elem1.value,
        description: elem2.value,
        color: elem3.value,
        priority: data,
    }

    console.log(obj)
    console.log('title:', obj.title);
    console.log('description:', obj.description);
    console.log('color:', obj.color);
    console.log('priority:', obj.priority);

    mainNoTasks.style.display = 'none';
    modal.classList.remove('active');

    document.querySelector('.modal__form-input').value = '';
    document.querySelector('.modal__form-textarea').value = '';
    document.querySelector('.modal__form-select').value = '';
    document.querySelectorAll('.modal__form-radio').value = '';
})

