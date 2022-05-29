function myFunction(){
    var element = document.body;
  //   var ele=document.getElementById('para');
  //   ele.classList.toggle("pa");
    //document.getElementById('para').style.color="blue";
   element.classList.toggle("dark-mode");
   var el=document.getElementById("faceb1");
              el.classList.toggle("face2");
   var el=document.getElementById("faceb2");
      el.classList.toggle("face2");
  var el=document.getElementById("faceb3");
      el.classList.toggle("face2");
  var el=document.getElementById("faceb4");
      el.classList.toggle("face2");
  //  var el = document.getElementById('face');
  //  el.classList.toggle("face1");
  var e=document.getElementById("icon1");
      e.classList.toggle("facebook1");
  var e=document.getElementById("icon2");
      e.classList.toggle("facebook1");
  var e=document.getElementById("icon3");
      e.classList.toggle("facebook1");
  var e=document.getElementById("icon4");
      e.classList.toggle("facebook1");
  var btn=document.getElementById("out-btn");
      btn.classList.toggle("semi1");
      var btn=document.getElementById("lmenu");
      btn.classList.toggle("mmenu");
  }

  function myfun(){
    var y=document.getElementById('box1');
    y.classList.toggle('tbox');
    var y=document.getElementById('n1');
    y.classList.toggle('nav4');
    var y=document.getElementById('n2');
    y.classList.toggle('nav5');
    var y=document.getElementById('n3');
    y.classList.toggle('nav6');
}

let screen = document.getElementById('screen');
        buttons = document.querySelectorAll('button');
        let screenValue='';
    const btn=document.querySelector('.speaker');
    const content=document.querySelector('.content');
    
    const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition= new SpeechRecognition();
    
    recognition.onstart = function(){
       console.log("voice is activated");

    };
    recognition.onspeechend=function(){
       console.log("voice is deactivated");
    
    };
    recognition.onresult=function(event){
       const current=event.resultIndex;
       const transcript=event.results[current][0].transcript;
       console.log(transcript);
        readoutloud(transcript);
    };
    btn.addEventListener('click',()=>{
       recognition.start();
       const speech=new SpeechSynthesisUtterance();
    speech.volume=1;
       speech.rate=0.75;
       speech.text=('How may I help you');
       speech.pitch=0;
       window.speechSynthesis.speak(speech);
    });
    function readoutloud(message){
       const speech=new SpeechSynthesisUtterance();
       if(message.includes('x')){
           message=message.replace('x','*');
           console.log(message);
       }
       if(message.includes('into')){
           message=message.replace('into','*');
           console.log(message);
       }
       if(message.includes('plus')){
           message=message.replace('plus','+');
           console.log(message);
       }
       if(message.includes('divided by')){
           message=message.replace('divided by','/');
           console.log(message);
       }
       if(message.includes('bracket open')){
           message=message.replace('bracket open','(');
           console.log(message);
       }
       if(message.includes('bracket close')){
           message=message.replace('bracket close',')');
           console.log(message);
       }
       if(message.includes('equal to')){
           message=message.replace('equal to','');
           let calc= document.getElementById('calc');
           calc.value=message;
           setTimeout( ()=>{
           console.log(message);
       screen.value = eval(message);
       const speech=new SpeechSynthesisUtterance();
    speech.volume=1;
       speech.rate=0.75;
       speech.text=screen.value;
       speech.pitch=0;
       window.speechSynthesis.speak(speech);
           },2*1000
           )
       }
      
    //    const sp=new SpeechSynthesisUtterance();
    // sp.volume=1;
    //    sp.rate=0.75;
    //    sp.text=(screen.value);
    //    sp.pitch=0;
    //    window.speechSynthesis.speak(sp);
    //    }
    if(message.includes('enable dark mode')){
        const sp=new SpeechSynthesisUtterance();
    sp.volume=1;
       sp.rate=0.75;
       sp.text=('enabling...');
       sp.pitch=0;
       window.speechSynthesis.speak(sp);
        var element = document.body;
        
    if( element.classList.contains("dark-mode")){
           const sp=new SpeechSynthesisUtterance();
            sp.volume=1;
        sp.rate=0.75;
        sp.text=('dark mode is already enabled');
        sp.pitch=0;
        window.speechSynthesis.speak(sp);
        }
        else{
            setTimeout( ()=>{
        
            element.classList.toggle("dark-mode");
            var ele = document.getElementById("main");
        ele.classList.toggle("check1");
            },2*1000
            );
        }
    }
    else if(message.includes('my')){
           const text=['ok'];
           speech.text=text;
           speech.volume=1;
       speech.rate=1;
       window.speechSynthesis.speak(speech);
       }
    else{
       speech.volume=1;
       speech.rate=0.75;
       speech.text=message;
       speech.pitch=0;
       window.speechSynthesis.speak(speech);
        }

    }
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        var n=screenValue.length;
        str=screenValue.substring(0,n-1);
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            if(screenValue.substring(n)=='*')
            {
                screenValue = screenValue.substring(0,n);
            screen.value = screenValue;
            }
            screenValue += buttonText;
            screen.value = screenValue;
            if(screenValue.charAt(n-1)=='*'&&(buttonText=='/'||buttonText=='+'||buttonText=='-'||buttonText=='*'))
        {
            console.log(buttonText);
            screenValue = screenValue.substring(0,n);
            screen.value = screenValue;
        }
        else if(screenValue.charAt(n-1)=='-'&&(buttonText=='/'||buttonText=='+'||buttonText=='-'||buttonText=='*'))
        {
            screenValue = screenValue.substring(0,n);
            screen.value = screenValue;
        }
        else if(screenValue.charAt(n-1)=='+'&&(buttonText=='/'||buttonText=='+'||buttonText=='-'||buttonText=='*'))
        {
            screenValue = screenValue.substring(0,n);
            screen.value = screenValue;
        }
        else if(screenValue.charAt(n-1)=='/'&&(buttonText=='/'||buttonText=='+'||buttonText=='-'||buttonText=='*'))
        {
            screenValue = screenValue.substring(0,n);
            screen.value = screenValue;
        }
        if(buttonText=='*'&&screenValue=='*')
        {
            screenValue='';
            console.log( screenValue);
            screen.value = screenValue;
        }
       
        }
        else if (buttonText == 'C') {
            screenValue = "";
            calc.value='';
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = str;
            calc.value='';
            screen.value = screenValue;
        }
        else if (buttonText == '^') {
            buttonText = '^';
            Math.pow(2,4)
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
           let calc= document.getElementById('calc');
           calc.value=screenValue;
            var v= Number(eval(screenValue));
            screen.value=v.toLocaleString();
            console.log(screen.value.toString().toLocaleString());
        }
        else if(buttonText=='/'&&screenValue==''||buttonText=='='&&screenValue==''
        ||buttonText=='+'&&screenValue=='')
        {
            screenValue='';
            screen.value = screenValue;
            console.log(screen.value);
        }
        else if(buttonText == '.')
        {
            if(screenValue==''){
            buttonText="0.";
            screenValue = buttonText;
            screen.value = screenValue;
            }
            else if(screenValue.substring(n-1)=='/'||screenValue.substring(n-1)=='+'||screenValue.substring(n-1)=='-'
        ||screenValue.substring(n-1)=='*'){
                buttonText=screenValue.substring(0,n)+'0.';
                screenValue = buttonText;
            screen.value = screenValue;
            }
            else{
                screenValue = screenValue+buttonText;
            screen.value = screenValue;
            }
            
        }
        // else if(screenValue.charAt(n-1)=='*'&&(buttonText=='/'||buttonText=='+'||buttonText=='-'||buttonText=='*'))
        // {
        //     console.log(buttonText);
        //     screenValue = screenValue.substring(0,n);
        //     screen.value = screenValue;
        // }
       
        // ||screenValue.charAt(n-1)=='+'
        // ||screenValue.charAt(n-1)=='-'||screenValue.charAt(n-1)=='='
        else {
            screenValue += buttonText;

            screen.value = screenValue;
           
        }
        
        // console.log(v.toLocaleString());
    })
}