
var projectList = [
    {"name" : "Java One"},
    {"name" : "Golang Two"},
]

var boardUrl = 'http://localhost:8080/api/v1/boards';

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
    //console.log(boardElement.getAttribute('data-uid'));
    showProjects(boardElement);
    //boardElement.style.display = 'block';
}

function updateMenu(board,databoard,board_id){
    console.log("update menu");
    var menublock = document.getElementsByClassName("menu-block")[0];
    var boarditem = '<div ' + 'class=menu-item ' + 'data-uid=' + board_id  +  ' onclick="loadMenu(' + databoard + ')">' + board + '</div>';
    if(menublock.innerHTML == "Menu"){
        menublock.innerHTML = boarditem;
    }
    else{
        menublock.innerHTML += boarditem;
    }
}

function removeFromMenu(board_id){
    var menublock = document.getElementsByClassName("menu-block")[0];
    //var uid = boardElement.getAttribute('data-uid');
    console.log('delete menu item with uid ' + board_id);
    var menuItem = menublock.querySelectorAll("div[data-uid='"+board_id+"']")[0];
    console.log(menuItem);
    menuItem.remove();
}

/*
function getBoardProjects(board_id){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',boardUrl + '/' + board_id + '/projects');
    xhr.setRequestHeader('authorization','Bearer ' + sessionStorage.getItem('access-token'));
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            //console.log(xhr.responseText);
            var result = JSON.parse(xhr.responseText);
            //console.log(result.projects);
            return result.projects;
        }
    }
}*/



function showProjects(boardElement){

    //console.log(boardElement.data-uid);
    var id = boardElement.getAttribute('data-uid');

    var xhr = new XMLHttpRequest();
    xhr.open('GET',boardUrl + '/' + id + '/projects');
    xhr.setRequestHeader('authorization','Bearer ' + sessionStorage.getItem('access-token'));
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var result = JSON.parse(xhr.responseText);
            console.log(result.projects);
            var projects = result.projects;
            var projectBlock = "";
            var boardId = boardElement.id;
            if(boardId){
                projectBlock = document.getElementById(boardId);
            }

            projects.forEach(function(project){
                var template = '<div class="project-card">' + 
                '<span>' + project.name + '</span>' +
                '<ul>' + 
                    '<li>Task One</li>' + 
                    '<li>Task Two</li>' +
                '</ul>' +
                '</div>';
                projectBlock.innerHTML += template;
            });
            boardElement.style.display = 'block';
        }
    };
}

function removeProjects(e,removeBtn){
    e.stopPropagation();
    //console.log(removeBtn);
    var boardSection = removeBtn.parentElement.parentElement;
    var board_id = boardSection.getAttribute('data-uid');
    console.log(board_id);
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE',boardUrl + '/' + board_id);
    xhr.setRequestHeader('authorization','Bearer ' + sessionStorage.getItem('access-token'));
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
            boardSection.remove();
            removeFromMenu(board_id);
        }
    };

}

//showProjects();

function addBoard(board,id,status){
    //var board = document.getElementById("board-input").value;
    boardIndex++;
    var boardId = 'projectlist_' + boardIndex;
    var databoard = "board_" + boardIndex;
    var template = '<section class="board-block" ' +'id=' + databoard + ' data-uid=' + id + '><div class="board-header">'
                    + board + '<button class="remove-board" onclick="removeProjects(event,this)">Remove Projects</button></div>'
                    +  '<div class="project-block"' + 'id=' + boardId + '></div>'
                    + '</section>';
    document.getElementById("boardlist").innerHTML += template;
    updateMenu(board,databoard,id);
    
    //debug this later TODO
    //var section = document.getElementById(databoard);
    //var removeButton = section.querySelectorAll(".remove-board")[0];
    //console.log(removeButton.parentElement.parentElement);
    //removeButton.addEventListener("click",removeProjects);
    //console.log(removeButton);
    //showProjects(boardId,id);
}

function addBoardFunc(){
    var board = document.getElementById("board-input").value;
    var userDetail = JSON.parse(sessionStorage.getItem('user-detail'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST',boardUrl);
    xhr.setRequestHeader('authorization','Bearer ' + sessionStorage.getItem('access-token'));
    xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    var params = 
        {
            "description": board + '-Tracker',
            "name": board,
            "owner_id": userDetail.id
          };
    
    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 201){
            console.log(xhr.responseText);
            //var appendMode = true;
            var boardDetail = JSON.parse(xhr.responseText);
            addBoard(board,boardDetail.id,boardDetail.status);
            
        }
    };

}

function getAllBoards(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',boardUrl);
    
    var  params = {
        "page":1,
        "limit":10
        };
    
    xhr.setRequestHeader('authorization','Bearer ' + sessionStorage.getItem('access-token')), 
    xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
            var result = JSON.parse(xhr.responseText);
            var boards = result.boards;
            boards.forEach(function(board){
                addBoard(board.name,board.id,board.status);
            });
        }
    };

}

getAllBoards();