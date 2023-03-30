const person1 = {
    Firstname: "Harry",
    Lastname: "Potter",
    color: "Black"
  };
  
  const person2 = {
    Firstname: "Hermione",
    Lastname: "Granger",
    color: "Brown"
  };
  
  const person3 = {
    Firstname: "Ron",
    Lastname: "Weasley",
    color: "Red"
  };
  
  function getParagraphById(id) {
    console.log(document.getElementById(id));
  }
  
  const paragraphOne = document.getElementById("p1");
  console.log(paragraphOne.innerHTML);
  console.log(paragraphOne.textContent);
  console.log(paragraphOne.style);
  
  function setTextContent1() {
    const paragraphOne = document.getElementById("p1");
    paragraphOne.innerHTML = person1.Firstname + " " + person1.Lastname;
    paragraphOne.style.color = person1.color;
  }
  
  setTextContent1();
  
  const paragraphTwo = document.getElementById("p2");
  console.log(paragraphTwo.innerHTML);
  console.log(paragraphTwo.textContent);
  console.log(paragraphTwo.style);
  
  function setTextContent2() {
    const paragraphTwo = document.getElementById("p2");
    paragraphTwo.innerHTML = person2.Firstname + " " + person2.Lastname;
    paragraphTwo.style.color = person2.color;
  }
  
  setTextContent2();
  
  const paragraphThree = document.getElementById("p3");
  console.log(paragraphThree.innerHTML);
  console.log(paragraphThree.textContent);
  console.log(paragraphThree.style);
  
  function setTextContent3() {
    const paragraphThree = document.getElementById("p3");
    paragraphThree.innerHTML = person3.Firstname + " " + person3.Lastname;
    paragraphThree.style.color = person3.color;
  }
  
  setTextContent3();
  