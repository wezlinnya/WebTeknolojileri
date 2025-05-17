const button = document.getElementsByClassName('button');
const map = {
    'giris': 'screens/login/login.html'
}
Array.from(button).forEach(element => {
    element.addEventListener('click', () => {
        switch (element.id) {
            case 'giris':
                window.location.href = map['giris'];
                break;
            default:
                break;
        }
    });

    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = '#039be5';
        element.style.height = '50%';
    });

    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '#01579b';
        element.style.height = '25%';

    });
});