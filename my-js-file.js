console.log("Hello world")

function showAlert(){
    alert("Hello World")
}

function bigger(){
    let textarea = document.getElementById("myTextArea");
    textarea.style.fontSize= "24pt";
}

function radioButton(){
    //alert("Fancifying the text");
    let textarea = document.getElementById("myTextArea");
    let fButton = document.getElementById('fButton');
    let bButton = document.getElementById('bButton');
    if(fButton.checked){
        textarea.style.fontWeight = 'bold';
        textarea.style.color='blue';
        textarea.style.textDecoration = 'underline';
    }
    else if(bButton.checked){
        textarea.style.fontWeight = 'normal';
        textarea.style.color='black';
        textarea.style.textDecoration = 'none';
        
    }  
}

function capitalize(){
    let textarea = document.getElementById("myTextArea");
    let text = textarea.value;

    //Create an array of sentnces.
    let sentences = text.split(".");

    //Iterate over each sentence in array.
    let splitSentences = sentences.map(function(sentence){
        let words = sentence.trim().split(" ");     //Now split each sentence into an array of words.
        if(sentence.trim() !==""){
            words[words.length-1] = words[words.length-1] + "-Moo";     //Last word we append -Moo.
        } 
        return words.join(" ");     //Join the words back to a sentence.
    });
    textarea.value = splitSentences.join(". ");     //Join all the sentences back to the paragraph.
    textarea.value = textarea.value.toUpperCase();
}