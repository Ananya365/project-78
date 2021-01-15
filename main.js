var abt=[
  "My Family Book",
  "Neeraj Shukla",
  "Nishi Shukla",
  "Ananya Shukla"
]

var images=[
    "The-family-book.jpg",
    "papa-2.jpg",
    "mumma-2.jpg",
    "me.jpg"
];
var x=0;
function slide_next(){
    document.getElementById("image_change").src =images[x];
    document.getElementById("lbl").innerHTML=abt[x];
    x++;
    if ( x == 4)
    {
      x=0;
    }
}