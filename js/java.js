let textinho;
let crip;
let div = document.querySelector('.caixa');

function criptografar(){
textinho = document.getElementById("text1").value;
if (textinho !== ''){
  if(!verificarAcentos(textinho) && !verificarNumeros(textinho) && textinho == textinho.toLowerCase()){
  crip = textinho.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
  escrever();
  document.getElementById("item").value = crip;
  document.getElementById('text1').value = '';
  div.style.display = 'none';
  }
  else{
    document.getElementById("mensagem1").style.display = "flex";
    document.getElementById('caixa-after').style.opacity="0";
    const element = document.getElementById("mensagem1");
      setTimeout(() => {
        element.style.display = 'none';
      }, 3000);
      div.style.display = 'block';
  }
}
else{
document.getElementById("mensagem").style.display = "flex";
document.getElementById("text1").focus();
    document.getElementById('caixa-after').style.opacity="0";
    const element = document.getElementById("mensagem");
      setTimeout(() => {
        element.style.display = 'none';
      }, 3000);
      div.style.display = 'block';
}
}


function descriptografar(){
  textinho = document.getElementById("text1").value;
  if (textinho !== ''){
    if(!verificarAcentos(textinho) && !verificarNumeros(textinho) && textinho == textinho.toLowerCase()){
    crip = textinho.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    escrever();
    document.getElementById("item").value = crip;
    document.getElementById('text1').value = '';
    div.style.display = 'none';
    }
    else{
      document.getElementById("mensagem1").style.display = "flex";
      document.getElementById('caixa-after').style.opacity="0";
      const element = document.getElementById("mensagem1");
        setTimeout(() => {
          element.style.display = 'none';
        }, 3000);
        div.style.display = 'block';
    }
  }
  else{
  document.getElementById("mensagem").style.display = "flex";
  document.getElementById("text1").focus();
      document.getElementById('caixa-after').style.opacity="0";
      const element = document.getElementById("mensagem");
        setTimeout(() => {
          element.style.display = 'none';
        }, 3000);
        div.style.display = 'block';
  }
}

function verificarAcentos(texto) {
  var regexAcentos = /[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙãõÃÕâêîôûÂÊÎÔÛäëïöüÄËÏÖÜ]/;
  if (regexAcentos.test(texto)) {
      return true;
  } else {
      return false;
  }
}

function verificarNumeros(texto) {
  var numeros = /[0123456789]/;
  if (numeros.test(texto)) {
      return true;
  } else {
      return false;
  }
}

function escrever(){
  document.getElementById("caixa-after").style.opacity = "1";
}

function copiar() {
  let texto_copiar = document.getElementById('item');
  texto_copiar.disabled = false;
  texto_copiar.select();
  document.execCommand('copy');
  texto_copiar.value = "";
  texto_copiar.disabled = true;
  document.getElementById("mensagem2").style.display = "flex";
  document.getElementById('caixa-after').style.opacity="0";
  
  div.style.display = 'block';

  const element = document.getElementById("mensagem2");
    setTimeout(() => {
    element.style.display = 'none';
    }, 3000);
}
