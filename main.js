var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript; //content = conteúdo = guarda o texto convertido em fala

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    //speak_data = document.getElementById("textbox").value; / atualizando speakData que está dentro da função speak().
    speak_data = "Tirando sua selfie em 5 segundos"; //A variável speak_data sempre terá o texto como “Tirando sua selfie em 5 segundos”.

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    /*"utterThis" - é uma variável na qual armazenaremos o texto convertido em fala.
"SpeechSynthesisUtterance" - é a função que irá converter texto em fala.*/

    synth.speak(utterThis);
    /*Agora nós convertemos texto em fala e o armazenamos dentro da variável "utterThis", 
    então vamos passar essa variável para a função speak() da API "speechSynthesis" armazenada na variável chamada "synth".*/

    Webcam.attach(camera);

/*como adicionar a função set Timeout e atrasar a função take_snapshot()  
O primeiro passo é definir a função setTimeout() dentro da função speak()
O segundo passo é definir uma função vazia dentro da função set Timeout. Em seguida, chame a função take_snapshot() que é uma função
 para tirar uma selfie, dentro de uma função setTimeout() porque queremos que o processo de tirar uma selfie seja atrasado em 5 segundos.*/

    setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 5000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
