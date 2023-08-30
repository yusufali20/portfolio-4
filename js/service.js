let tab_button = document.querySelectorAll('.tab_button');
let content_area = document.querySelectorAll('.content_area');

for (let i = 0; i < tab_button.length; i++) {
    tab_button[i].addEventListener('click', function () {
        for (let i = 0; i < content_area.length; i++) {
            content_area[i].className = 'content_area';
        }
        document.getElementById(this.dataset.id).className = 'content_area active';
        for (let i=0; i<tab_button.length; i++){
            tab_button[i].className='tab_button';
            this.className='tab_button active';
        }
    })
}