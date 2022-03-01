// Menu button ----------------------------------------
let img = document.querySelector('#imgMenu');
let h1 = document.querySelector('h1');

img.addEventListener('mouseover', function(){  // При наведении на меню - изменить вид меню
    this.closest('img').setAttribute('src', 'menu1.png');
});
img.addEventListener('mouseout', function(){
    this.closest('img').setAttribute('src', 'menu.png');
});

// To-Do List ------------------------------------------
let input = document.querySelector('#taskInput');
let ul = document.querySelector('#ulTask');

let form = document.querySelector('#form'); 
form.addEventListener('submit', function(event){  // При отправлении формы (в инпуте) сраб-ет ф-я
    event.preventDefault();  // Остановить обновление страницы
    let text = input.value;
    let liElem = document.createElement('li'); liElem.style['border'] = '1.5px solid rgba(37, 37, 37, 0.98)'; liElem.style['borderRadius'] = '5px'; liElem.style['padding'] = '6px 6px 6px 6px'; liElem.style['marginBottom'] = '5px';
    liElem.innerText = text;
    ul.append(liElem);

    input.value = '';

    // Delete -------------------------------------
    let del = document.createElement('img');
    del.setAttribute('role', 'button');
    del.setAttribute('src', 'delete.png');
    del.style['width'] = '30px';  del.style['float']='right';
    liElem.append(del);

    let divForFix = document.querySelector('#placeForFix');
    del.addEventListener('mouseover', function(){
        this.closest('img').setAttribute('src', 'deleteon.png');
    });
    del.addEventListener('mouseout', function(){
        this.closest('img').setAttribute('src', 'delete.png');
    });
    del.addEventListener('click', function(){
        this.closest('li').remove();
        if(ul.firstElementChild === null){   // вернуть "No tasks", если нет элементов
            let fix = document.createElement('div');
            fix.innerText = "No tasks";
            fix.setAttribute('id', 'fixTask'); 
            fix.style['margin-bottom'] = '50px';
            divForFix.append(fix);
        };
    });

    let noTask = document.querySelector('#fixTask'); // Всё работает, но выдаёт ошибку, поэтому этот код расположен в самом конце, чтоб выполнить все инструкции до этого.
    if(ul.firstElementChild != null){  // Удалить пометку "No Tasks"
        noTask.remove();
    }
});
