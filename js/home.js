var projectList = [
    {"name" : "Java One"},
    {"name" : "Golang Two"},
]

var boardIndex = 1;

function togglemenu(){
    var menu = document.getElementsByClassName("menu-block")[0];
    var toggleVal = menu.style.display;
    if(toggleVal != "none"){
        menu.style.display = 'none';
    }
    else{
        menu.style.display = '';
    }
}

function loadMenu(boardElement){
    console.log("load menu clicked " + boardElement.id);
    boardElement.style.display = 'block';
}

function updateMenu(board,databoard){
 var menublock = document.getElementsByClassName("menu-block")[0];
 var boarditem = '<div ' + 'class=menu-item ' + 'data-board=' + databoard + ' onclick="loadMenu(' + databoard + ')">' + board + '</div>';
 if(menublock.innerHTML == "Menu"){
     menublock.innerHTML = boarditem;
 }
 else{
     menublock.innerHTML += boarditem;
 }
}

function showProjects(boardId){

    //var projectBlock = document.getElementsByClassName("project-block")[0];
    var projectBlock = "";
    if(boardId){
        projectBlock = document.getElementById(boardId);
    }
  
    projectList.forEach(function(project){
        var template = '<div class="project-card">' + 
        '<span>' + project.name + '</span>' +
        '<ul>' + 
            '<li>Task One</li>' + 
            '<li>Task Two</li>' +
        '</ul>' +
        '</div>';
        projectBlock.innerHTML += template;
    });
}

function removeProjects(){
    console.log(this);
    var boardSection = this.parentElement.parentElement; 
    console.log(boardSection);
    document.getElementById("boardlist").removeChild(boardSection);
    
}

//showProjects();

function addBoard(){
    var board = document.getElementById("board-input").value;
    boardIndex++;
    var boardId = 'projectlist_' + boardIndex;
    var databoard = "board_" + boardIndex;
    var template = '<section class="board-block" ' +'id=' + databoard + '><div class="board-header">'
                    + board + '<button class="remove-board">Remove Projects</button></div>'
                    +  '<div class="project-block"' + 'id=' + boardId + '></div>'
                    + '</section>';
    document.getElementById("boardlist").innerHTML += template;
    updateMenu(board,databoard);
    var removeButton = document.getElementById(boardId).parentElement.querySelectorAll(".remove-board")[0];
    removeButton.addEventListener("click",removeProjects);
    showProjects(boardId);
}