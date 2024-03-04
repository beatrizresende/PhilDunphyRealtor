window.addEventListener('load', () => {
    const verTelefone1 = document.getElementById('verTelefone1');
    const verTelefone2 = document.getElementById('verTelefone2');
    const cpf = document.getElementById('cpf');
    const telefoneForm = document.getElementById('telefoneForm');
    const enviarMensagem = document.getElementById('enviarMensagem');
    const buttonAbrirMobile = document.getElementById('buttonAbrirMobile');
    const menuMobile = document.querySelector('.mobile');


    let mostrarTelefone = (verTelefone) => {
        if (verTelefone.innerText == "Ver telefone") {
            verTelefone.innerText = "(99) 9999-9999";
        } else {
            verTelefone.innerText = "Ver telefone";
        }
    }

    verTelefone1.addEventListener('click', (evento) => {
        evento.preventDefault();
        mostrarTelefone(verTelefone1);
    })

    verTelefone2.addEventListener('click', (evento) => {
        evento.preventDefault();
        mostrarTelefone(verTelefone2);
    })

    const mascararCpf = () => {
        switch (cpf.value.length) {
            case 3:
                cpf.value += ".";
                break;
            case 7:
                cpf.value += ".";
                break;
            case 11:
                cpf.value += "-";
                break;
            default:
                break;

        }
    }

    cpf.addEventListener('keydown', (event) => {
        let key = event.key;
        if (key != "Backspace" && key != "Delete") {
            mascararCpf();
        }
    });

    const mascararTelefone = () => {
        switch (telefoneForm.value.length) {
            case 0:
                telefoneForm.value += "(";
                break;
            case 3:
                telefoneForm.value += ") ";
                break;
            case 10:
                telefoneForm.value += "-";
                break;
            default:
                break;

        }
    }

    telefoneForm.addEventListener('keydown', (event) => {
        let key = event.key;
        if (key != "Backspace" && key != "Delete") {
            mascararTelefone();
        }
    });

    enviarMensagem.addEventListener('click', (evento) => {
        evento.preventDefault();
        alert('Formulário enviado!');
    })

    function abrirMobile() {
        menuMobile.classList.add('abrir');
    }
    
    function fecharMobile() {
        menuMobile.classList.remove('abrir');
    }
    
    buttonAbrirMobile.addEventListener('click', () => {
        if(!menuMobile.classList.contains('abrir'))
        abrirMobile();
        else fecharMobile();
    }) 

});



function calcularRegraDeTres() {
    const primeiraVariavel = document.getElementById('primeiraVariavel');
    const segundaVariavel = document.getElementById('segundaVariavel');
    const terceiraVariavel = document.getElementById('terceiraVariavel');
    const resultado = document.getElementById('resultado');

    resultado.value = segundaVariavel.value * terceiraVariavel.value / primeiraVariavel.value;
}


function abrirModal() {
    const modal = document.getElementById('janelaModal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (evento) => {
        if (evento.target.id == 'fechar' || evento.target.id == 'janelaModal') {
            modal.classList.remove('abrir');
        }
    })
}

function download() {
    const buttonDownload = document.querySelector('.download');
    html2canvas(document.querySelector("#five")).then(canvas => {
        buttonDownload.href = canvas.toDataURL('image/png');
        buttonDownload.click();
    });
}

