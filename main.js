let hide = function() {
    document.getElementById('homeMenu').style.display = 'none';
}

let show = function() {
    document.getElementById('homeMenu').style.display = 'block';
}

function eventHandler() {
    if (document.getElementById('homeMenu').style.display === 'none') {
        show();
        return;
    } else {
        hide();
        return;
    }
}

let hidePages = function() {
    document.getElementById('pagesMenu').style.display = 'none';
}

let showPages = function() {
    document.getElementById('pagesMenu').style.display = 'block';
}

function eventHandlerPages() {
    if (document.getElementById('pagesMenu').style.display === 'none') {
        showPages();
        return;
    } else {
        hidePages();
        return;
    }
}

let hideSubMenu = function() {
    document.getElementById('subMenu').style.display = 'none';
}

let showSubMenu = function() {
    document.getElementById('subMenu').style.display = 'block';
}

function eventHandlerSubMenu() {
    if (document.getElementById('subMenu').style.display === 'none') {
        showSubMenu();
        return;
    } else {
        hideSubMenu();
        return;
    }
}


// function visibility() {
//     document.getElementById("homeSubmenu").classList.remove('invisible');
//     document.getElementById("homeSubmenu").classList.add('visible');
// }

// function pageVisibility() {
//     document.getElementById("pageSubmenu").classList.remove('invisible');
//     document.getElementById("pageSubmenu").classList.add('visible');

// }


// function invisible() {
//     document.getElementById("homeSubmenu").classList.remove('visible');
//     document.getElementById("homeSubmenu").classList.add('invisible');
// }

// function pageInvisibility() {
//     document.getElementById("pageSubmenu").classList.remove('visible');
//     document.getElementById("pageSubmenu").classList.add('invisible');
// }

