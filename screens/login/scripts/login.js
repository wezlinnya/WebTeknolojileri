const auth = {
    username: 'g231210040@sakarya.edu.tr',
    password: 'g231210040',
}
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', submit);


function submit(event) {
    event.preventDefault();
    if (usernameInput.value === auth.username && passwordInput.value === auth.password){
        redirect();
        form.submit();
    }
    else if(usernameInput.value == '' || passwordInput.value == ''){
        alert("Kullanıcı adı veya şifre boş olamaz.");
    }
    else {
        alert("Kullanıcı adı ya da şifreniz hatalı, tekrar deneyiniz.");
    }
}

function redirect() {
    alert("Giriş Başarılı. Hoşgeldiniz " + usernameInput.value);
    window.location.href = "../about/about.html";
    window.open("../about/about.html");
}

new Vue({
    el: '#app',
    data: {
        formData: {
            username: '',
            password: ''
        }
    },
    methods: {
        Check() {
            if (this.formData.username == '')
                throw new Error("name: bu alan boş olamaz.");
            else if (this.formData.name != auth.username)
                throw new Error("name: ismin tek harfli olamaz.");
        },
        redirect() {
            const formData = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
            };
            window.location.href = "../about/about.html";
            window.open("../about/about.html");
        },
        submitForm(event) {
            event.preventDefault();  // Formun otomatik olarak gönderilmesini durdur
            try {
                console.log('Form gönderildi!');
                //console.log(this.formData);
                alert('Yönlendiriliyorsun');
                this.redirect();
                document.getElementById('myform').submit();  // Doğrulama başarılı olduğunda formu gönder
                // Doğrulama başarılıysa true döner ve form gönderilir
                return true;

            } catch (error) {
                alert("An error occurred: " + error);
                return false;  // Doğrulama başarısız olduğunda formu gönderme
            }
        },
        
    }
});