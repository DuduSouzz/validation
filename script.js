
//Função para exibir um pop-up de mensagem
function showMessage(message) {
    alert(message); //Exibe a mensagem em um pop-up
}

//Função para obter os parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        message: params.get('message'),
        type: params.get('type')
    };
}

//Quando o documento estiver carregado
window.onload = function() {
    const { message, type } = getQueryParams();
    if (message) {
        showMessage(message);
        //Redireciona para remover os parâmetros da URL
        window.history.replaceState(null, '', window.location.pathname);
    }
};


window.sr = ScrollReveal({ reset: true }); 
 
sr.reveal('.Imagem_3', { 
    rotate: { x: 50, y: -300, z: 0}, 
    durantion: 4000, 
    delay: 200, 
    easing: 'ease-in-out'  
}); 
 
sr.reveal('.Conteudo', { 
    delay: 100, 
    durantion: 2000, 
    easing: 'ease-in-out' 
}); 
 
 





















const form   = document.getElementById('form');   
const campos = document.querySelectorAll('.required');   
const spans  = document.querySelectorAll('.span-required');   
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;   
const telefoneRegex = /^[0-9]$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();   
    nameValidate();
    emailValidate();
    telefoneValidate();
    
});

   
function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}
   

   
function nameValidate(){   
    if (campos [0].value.length < 3)   
    {   
        
        setError(0, 'NÃO ACEITO MENOS QUE 3');  
        return;
        
    }    
    else    
    {   
        removeError(0, 'ACEITO MAIS QUE 3');   
    }   
}   
   
function emailValidate(){   
    if (emailRegex.test(campos[1].value))   
        {   
            removeError(1, 'email válido');
        }
        else{
            setError(1, 'email inválido');
        }   
   
}   
   
function telefoneValidate(){
    if (campos [2].value.length === 11){
        telefoneRegex.test(campos[2].value);
        removeError(2, 'telefone válido');
    }
    else{
        setError(2, 'telefone inválido');
    }   
}