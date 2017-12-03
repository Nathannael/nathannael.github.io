json_en = { "about":"about", "greeting":"Hi, I'm Nathann!", "desc":"I'm 22 years old, and I'm a web developer. I like all that things that go beep-boop, so in my free time I'll probably be reading something about technology, studying something related to software development (I was just watching stuff on Elixir and Go the other day) or listening to electronic music. Feel free to say hi on my socials on the main page!"};
json_pt = { "about":"sobre", "greeting":"Olá, meu nome é Nathann!", "desc":"Tenho 22 anos e sou desenvolvedor web. Sou um entusiasta de tudo que tenha a ver com computadores, então no meu tempo livre me divido entre ler artigos e ouvir podcasts sobre tecnologia, estudar algo relacionado a programação (esses dias estava fazendo uns vídeos de Elixir e Go), e escutar música eletrônica. Sinta-se livre para entrar em contato comigo nas minhas redes sociais que estão na página principal!"};

document.getElementById("closebtn").addEventListener("click", closeNav);
document.getElementById("about").addEventListener("click", openNav);
document.getElementById("pt").addEventListener("click", () => translate(json_pt));
document.getElementById("en").addEventListener("click", () => translate(json_en));
closeNav();


/* Open when someone clicks on the span element */
function openNav() {
  debugger;
  document.getElementById("myNav").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

function translate(json) {
  for(key in json){
    var value = json[key];
    document.getElementById(key).innerText = value;
  }
}
