//two-dimensional array. first array includes articles. second array includes penalty points respective to articles in first array. *incomplete*
var articles = [["Violated self-study regulation", "Violated outdoor regulation (2)", "Violated outdoor regulation (5)", "Late for school", "Absent from school", "Dress code", "Destroyed school property", "Violated cleaning regulation", "Violated curfew regulation(3)", "Violated curfew regulation(8)", "Violated food regulation(2)", "Violated food regulation(10)", "Violated computer regulation", "Used electronic device", "EOP Violation", "Lied", "Absent from Court", "Late for Court", "Did not follow teacher's direction(3)", "Did not follow teacher's direction(4)", "Did not follow teacher's direction(5)", "Late for morning exercise", "Absent from morning exercise", "Late for self-study", "Insolent attitude", "Auditory Disturbance", "Late for honjung", "Absent from honjung"],
[2, 2, 5, 2, 3, 2, 2, 1, 3, 8, 2, 10, 5, 5, 2, 5, 3, 2, 3, 4, 5, 2, 3, 1, 2, 2, 1, 2]];

//���ڽ� �ҷ���, ��������Ż��, ��������, ������ �ҷ���, ���⹰ �ļա�, ��û�� �ҷ���, ������ ���ݡ�, ������ ������, ����ǰ ����(2)��, ����ǰ ����(10)��, ����ǻ�� ���ݡ�, �������⡱, ��EOP ���ݡ�, ����������, ������ ������, ������ ������, ������ ������(3)��, ������ ������(4)��, ������ ������(5)��, ����ħ�� ������, ����ħ�� ������, ���ڽ� ������

//array for person objects
var people = [];
//index number of cells to be merged
var overlap = [0, 1, 2, 7];

//person object constructor function
function Person(number, grade, name, points){
  this.number = number;
  this.grade = grade;
  this.name = name;
  this.sum = points;
  this.count = 1;
}


//add article box**
function addArticleBox(){
  var div = document.createElement('div');
  var box = document.getElementById('articleBox');
  div.innerHTML = '<input class="radius" id="article" list="articlelist" placeholder=" Select Violation"/> <datalist id="articlelist"></datalist>';
  box.appendChild(div);
}
//remove article box**
function removeArticleBox(){
  var box = document.getElementById('articleBox');
  if(box.children.length > 1){
    box.removeChild(box.lastChild);
  }
}



//triggerd on submit button click. loops through datalist to pass article values as parameters**
function appendData(){
  var arr = document.getElementsByTagName('datalist');
  for(var i = 0; i < arr.length; i++){
    submitData(arr[i].previousElementSibling.value);
  }
  resetArticle();
}


//**
function getAttendance(){
  var name = document.getElementById('searchName').value;
  var grade = setGrade('ten', 'ele', 'twe');
  if(name != "" && grade != undefined){
    var i;
    for(i = 0; i < people.length; i++){
      if(people[i].name === name && people[i].grade === grade){
        var submit = document.getElementById('displayText');
        var seatText = document.createElement('h4');
        submit.innerHTML = name+", your seat number is No."+people[i].number;
        submit.style.textAlign = "center";
        submit.style.color = "black";
        submit.appendChild(seatText);
        break;
      }
    }
    if(i === people.length) alert('Congratulations!! You don\'t go to court~!');
  }
}
