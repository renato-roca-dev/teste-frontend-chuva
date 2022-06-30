document.getElementById("verMais").addEventListener("click", function(){
    document.getElementById("texto-oculto").style.display = "block";
    document.getElementById("verMais").style.display = "none";
})

"use strict";
var checkbox = document.getElementById("toggle")
var header = document.getElementById("header-principal-texto")
var headerIdioma = document.getElementById("idioma")
var headerLoginInfo = document.getElementById("login-info")
checkbox.addEventListener("change", function(){
    if(checkbox.checked){
        header.style.display = "block"
        headerIdioma.style.display = "flex"
        headerLoginInfo.style.display = "flex"
    } else{
        header.style.display = "none"
        headerIdioma.style.display = "none"
        headerLoginInfo.style.display = "none"
    }
})
window.onresize = function(){
    if(window.innerWidth >= 768){
        header.style.display = "block"
        headerIdioma.style.display = "flex"
        headerLoginInfo.style.display = "flex"
    }
    if(window.innerWidth <= 768){
        header.style.display = "none"
        headerIdioma.style.display = "none"
        headerLoginInfo.style.display = "none"
    }
}

Array.from(document.getElementsByClassName("criarTopico")).forEach(function(item) {
    item.addEventListener("click", function(){
        if(document.getElementById("discussoes-feedback").style.display = "block"){
            document.getElementById("discussoes-informacoes").style.display = "none";
            document.getElementById("discussoes-concluido").style.display = "none";
        } else{
            document.getElementById("discussoes-informacoes").style.display = "block";
        }
    
        var botaoBold = document.getElementById("texto-bold");
        var botaoItalic = document.getElementById("texto-italic");
        var texto = document.getElementById("conteudo");
    
        botaoBold.addEventListener("click", function(){
            if(texto.style.fontWeight != "bold"){
                texto.style.fontWeight = "bold";
                botaoBold.style.color = "#ED7839"
            } else{
                texto.style.fontWeight = "400";
                botaoBold.style.color = "black"
            }
        })
    
        botaoItalic.addEventListener("click", function(){
            if(texto.style.fontStyle != "italic"){
                texto.style.fontStyle = "italic"
                botaoItalic.style.color = "#ED7839"
            } else{
                texto.style.fontStyle = "normal"
                botaoItalic.style.color = "black"
            }
        })
    })
});

var secaoPerguntas = document.getElementById("perguntas")
document.getElementById("btnEnviar").addEventListener("click", function(e){
    e.preventDefault();
    if(document.getElementById("assunto").value == ""){
        alert("Por favor digite um assunto válido!");
        document.getElementById("assunto").focus();
        return false;
    }
    if(document.getElementById("conteudo").value == ""){
        alert("Por favor digite um conteúdo válido!");
        document.getElementById("conteudo").focus();
        return false;
    }
    if(document.getElementById("assunto").value != "" && document.getElementById("conteudo").value != ""){
        var assunto = document.getElementById("assunto").value
        var conteudo = document.getElementById("conteudo").value
        function criarPost(){
            var article = document.createElement("article")
            var divFeedback = document.createElement("div")
            var divArtigo = document.createElement("div")
            var divPergunta = document.createElement("div")
            var i = document.createElement("i");
            var iDot = document.createElement("i");
            var iCoracao = document.createElement("i");
            var pFeedBack = document.createElement("p");
            var pAutor = document.createElement("p");
            var pConteudo = document.createElement("p");
            var pLike = document.createElement("p");
            var aEditar = document.createElement("a");
            var aAssunto = document.createElement("a");
            var header = document.createElement("header");
            var botaoDots = document.createElement("button");
            var botaoCoracao = document.createElement("button");
            var botaoComentario = document.createElement("button");

            article.className = "pergunta";

            divFeedback.id = "feedback-autor"
            article.appendChild(divFeedback)
            i.className = "fa-solid fa-check-double"
            divFeedback.appendChild(i)
            pFeedBack.textContent = "Aguardando feedback dos autores"
            divFeedback.appendChild(pFeedBack)
            aEditar.setAttribute("href", "#")
            aEditar.id = "editar-topico"
            aEditar.textContent = "Editar tópico"
            divFeedback.appendChild(aEditar)

            divArtigo.className = "artigo-pergunta feedback-blur"
            article.appendChild(divArtigo)
            header.className = "header-pergunta"
            divArtigo.appendChild(header)
            aAssunto.setAttribute("href", "#")
            aAssunto.className = "pergunta-titulo"
            aAssunto.textContent = assunto
            header.appendChild(aAssunto)
            pAutor.className = "autor-pergunta"
            pAutor.textContent = "alguem12"
            header.appendChild(pAutor)

            pConteudo.className = "conteudo-pergunta"
            pConteudo.textContent = conteudo
            divArtigo.appendChild(pConteudo)

            divPergunta.className = "pergunta-botoes"
            divArtigo.appendChild(divPergunta)

            botaoDots.setAttribute("type", "button")
            botaoDots.className = "dots"
            divPergunta.appendChild(botaoDots)
            iDot.className = "fa-solid fa-ellipsis-vertical"
            botaoDots.appendChild(iDot)

            botaoCoracao.setAttribute("type", "button")
            botaoCoracao.className = "coracao"
            divPergunta.appendChild(botaoCoracao)
            iCoracao.className = "fa-solid fa-heart"
            botaoCoracao.appendChild(iCoracao)

            pLike.className = "like"
            pLike.textContent = "0 likes"
            divPergunta.appendChild(pLike)


            botaoComentario.setAttribute("type", "button")
            botaoComentario.className = "resposta"
            botaoComentario.textContent = "0 resposta"
            divPergunta.appendChild(botaoComentario)

            secaoPerguntas.appendChild(article)
            return article;
        }
        document.getElementById("discussoes-feedback").style.display = "none"
        document.getElementById("discussoes-concluido").style.display = "block"
        document.getElementById("assunto").value = ""
        document.getElementById("conteudo").value = ""
        criarPost()
    }
})

Array.from(document.getElementsByClassName("coracao")).forEach(function(item) {
    item.addEventListener("click", function add(){
        var like = item.parentNode.getElementsByClassName("like")[0]
        var likeValue = item.parentNode.getElementsByTagName("span")[0]
        var likeValueNum = Number(likeValue.innerHTML)
        if(like.classList.contains("clicado")){
            like.classList.remove("clicado");
            likeValue.innerHTML = likeValueNum - 1
        } else{
            like.classList.add("clicado");
            likeValue.innerHTML = likeValueNum + 1
        }
    })
});

Array.from(document.getElementsByClassName("dots")).forEach(function(item) {
    item.addEventListener("click", function(){
        var artigo = item.parentElement.parentElement.parentElement
        var artigoResposta = artigo.getElementsByClassName("pergunta-respostas")[0]
        if(artigoResposta.classList.contains("pergunta-resposta-ativo")){
            artigoResposta.classList.remove("pergunta-resposta-ativo");
        } else{
            artigoResposta.classList.add("pergunta-resposta-ativo");
        }
    })
});

Array.from(document.getElementsByClassName("resposta")).forEach(function(item) {
    item.addEventListener("click", function(){
        var artigo = item.parentElement.parentElement.parentElement
        var artigoResposta = artigo.getElementsByClassName("pergunta-respostas")[0]
        if(artigoResposta.classList.contains("pergunta-resposta-ativo")){
            artigoResposta.classList.remove("pergunta-resposta-ativo");
        } else{
            artigoResposta.classList.add("pergunta-resposta-ativo");
        }
    })
});