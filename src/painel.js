function enviar() {
    const nameCampo = document.getElementById('nome')
    const emailCampo = document.getElementById('endereco')
    const teleCampo = document.getElementById('telefone')
    const mensCampo = document.getElementById('mensagem')

    const name = nameCampo.value
    const email = emailCampo.value
    const telefone = teleCampo.value
    const mensagem = mensCampo.value

    if (name === '') {
        nameCampo.style.borderColor = 'red';
        document.getElementById('mensErro').innerHTML = 'campo obricatório'
    }else{
        nameCampo.style.borderColor = 'green';
    }

    if (email === '') {
        emailCampo.style.borderColor = 'red';
        document.getElementById('mensErro2').innerHTML = 'campo obricatório'
    } else {
        emailCampo.style.borderColor = 'green';
    }

    if (telefone === '') {
        teleCampo.style.borderColor = 'red';
        document.getElementById('mensErro3').innerHTML = 'campo obricatório'
    } else {
        teleCampo.style.borderColor = 'green';
    }

    if (mensagem === '') {
        mensCampo.style.borderColor = 'red';
        document.getElementById('mensErro4').innerHTML = 'campo obricatório'
    } else {
        mensCampo.style.borderColor = 'green';
    }

    return;
}
