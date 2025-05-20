document.addEventListener("DOMContentLoaded", function() {
    const formData = {
        name: '',
        surname: '',
        email: '',
        message: '',
        age: null,
        gender: '',
        education: '',
        languages:{
            Javascript: '',
            Python: '',
            Java: '',
            Csharp: '',
            Cpp: '',
            C: '',
            Php: ''
        }
    };

    const form = document.getElementById('myform');

    form.addEventListener('button', function(event) {
        event.preventDefault();
        try {
            nameCheck();
            surnameCheck();
            emailCheck();
            ageCheck();
            genderCheck();
            messageCheck();
            educationCheck();

            console.log('Form gönderildi!');
            alert('Yönlendiriliyorsun');
            redirect();
            form.submit();
        } catch (error) {
            event.preventDefault();
            alert("An error occurred: " + error.message);
        }
    });

    function nameCheck() {
        if (formData.name === '')
            throw new Error("name: bu alan boş olamaz.");
        else if (formData.name.length <= 1)
            throw new Error("name: ismin tek harfli olamaz.");
    }

    function surnameCheck() {
        if (formData.surname === '')
            throw new Error("soyisim: bu alan boş olamaz.");
        else if (formData.surname.length <= 1)
            throw new Error("soyisim: soyismin tek harfli olamaz.");
    }

    function emailCheck() {
        if (formData.email === '')
            throw new Error("e-mail: bu alan boş olamaz.");
        else if (!formData.email.includes('@')) {
            throw new Error("e-mail: geçerli bir mail adresi gir.");
        }
    }

    function ageCheck() {
        if (formData.age < 1 || formData.age > 130)
            throw new Error("yaş: 1-130 arası kabul edilebilir!");
        else if (formData.age === null)
            throw new Error("yaş: alan boş olamaz");
    }

    function genderCheck() {
        if (formData.gender === '')
            throw new Error("cinsiyet: bu alan boş olamaz.");
    }

    function messageCheck() {
        if (formData.message === '')
            throw new Error("mesaj: bu alan boş olamaz.");
        else if (formData.message.length > 200)
            throw new Error("mesaj: 200 karakterden fazla mesajlar kabul edilmez.");
    }

    function educationCheck() {
        if (this.formData.education == ''){
            throw new Error("eğitim: Bu alan boş bırakılamaz.")
        }
    }

    function redirect() {
        formData.name = document.getElementById('name').value;
        formData.surname = document.getElementById('surname').value;
        formData.email = document.getElementById('email').value;
        formData.age = document.getElementById('age').value;
        formData.gender = document.querySelector('input[name="gender"]:checked').value;
        formData.message = document.getElementById('message').value;
        formData.languages = document.querySelector('input[name="languages"]:checked').value;
        window.location.href = "../about/about.html";
        window.open("../about/about.html");
    }

    function resetForm() {
        formData.name = '';
        formData.surname = '';
        formData.email = '';
        formData.age = null;
        formData.gender = '';
        formData.message = '';
        formData.education = ''
        formData.languages = {
            Javascript: '',
            Python: '',
            Java: '',
            Csharp: '',
            Cpp: '',
            C: '',
            Php: ''
        }
    }
});

new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            surname: '',
            email: '',
            message: '',
            age: null,
            gender: '',
            education: '',
            languages:{
                Javascript: '',
                Python: '',
                Java: '',
                Csharp: '',
                Cpp: '',
                C: '',
                Php: ''
            }
        }
    },
    methods: {
        nameCheck() {
            if (this.formData.name == '')
                throw new Error("name: bu alan boş olamaz.");
            else if (this.formData.name.lenght <= 1)
                throw new Error("name: ismin tek harfli olamaz.");
        },
        surnameCheck() {
            if (this.formData.surname == '')
                throw new Error("soyisim: bu alan boş olamaz.");
            else if (this.formData.name.surname <= 1)
                throw new Error("soyisim: soyismin tek harfli olamaz.");
        },
        emailCheck() {
            if (this.formData.email == '')
                throw new Error("e-mail: bu alan boş olamaz.");
            else if (!this.formData.email.includes('@')) {
                throw new Error("e-mail: geçerli bir mail adresi gir.");
            }
        },
        ageCheck() {
            if (this.formData.age < 1 || this.formData.age > 130)
                throw new Error("yaş: 1-130 arası kabul edilebilir!");
            else if (this.formData.age == null)
                throw new Error("yaş: alan boş olamaz");
        },
        genderCheck() {
            if (this.formData.gender == '')
                throw new Error("cinsiyet: bu alan boş olamaz.");
        },
        messageCheck() {
            if (this.formData.message == '')
                throw new Error("mesaj: Bu alan boş bırakılamaz.");
            else if (this.formData.message.lenght > 200)
                throw new Error("mesaj: 200 karakterden fazla mesajlar kabul edilmez.");
        },
        educationCheck(){
            if (this.formData.education == ''){
                throw new Error("eğitim: Bu alan boş bırakılamaz.")
            }
        },
        redirect() {
            const formData = {
                name: document.getElementById('name').value,
                surname: document.getElementById('surname').value,
                email: document.getElementById('email').value,
                age: document.getElementById('age').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                message: document.getElementById('message').value,
                education: document.getElementById("education").value
            };
            window.location.href = "../about/about.html";
            window.open("../about/about.html");
        },
        submitForm(event) {
            event.preventDefault();  // Formun otomatik olarak gönderilmesini durdur
            try {
                this.nameCheck();
                this.surnameCheck();
                this.emailCheck();
                this.ageCheck();
                this.genderCheck();
                this.messageCheck();
                this.educationCheck();

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
        resetForm() {
            // Formu temizle
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
            this.formData.surname = '';
            this.formData.age = null;
            this.formData.gender = '';
            this.formData.education = ''
            this.formData.languages = {
                Javascript: '',
                Python: '',
                Java: '',
                Csharp: '',
                Cpp: '',
                C: '',
                Php: ''
            }
        }
    }
});