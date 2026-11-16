// Model 1
let bt1=document.getElementById("bt1")
bt1.onclick=()=>{
    console.log('Ramu')
    let a=20
    let b=30
    let c=a+b
    console.log(c)
}

let bt2=document.getElementById('bt2')
bt2.ondblclick=()=>{
    console.log("Chiyaan");
    let a = 20;
    let b = 30;
    let c = a + b;
    console.log(c);
}
let bt3=document.getElementById("bt3")
bt3.onmouseover=()=>{
    console.log("Vicky");
    let a = 200;
    let b = 100;
    let c = a - b;
    console.log(c);
}


// MOdel 2
let h=document.getElementById("h1")
let color=()=>{
    h.style.color="red"
    h.style.backgroundColor="yellow"
    h.style.fontSize="50px"
    h.style.fontFamily="cursive"
    h.style.border="2px solid black"
    h.style.width="400px"
    h.style.height="100px"
    h.animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateY(100px)'},
        {transform: 'translateY(0px)'}
    ],{
        duration: 2000,
        iterations: Infinity
    })
}
// Back to normal
let normal=()=>{
    h.style.color="black"
    h.style.backgroundColor = "blue";
    h.style.fontSize = "20px";
    h.style.fontFamily = "normal";
    h.style.width = "0px";
    h.style.height = "0px";
    h.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(0px)" },
        { transform: "translateY(0px)" },
      ],
      {
        duration: 2000,
        iterations: Infinity,
      },
    );
}

