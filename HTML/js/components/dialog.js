//dialog 
 var dialog = $('.dia').dialog({
  autoOpen: false,  //dialog hidden when open page
  modal: true,  //other items on the page will be disabled, cannot be interacted with
  draggable: false, //the dialog will not be draggable by the title bar
  resizable: false,
  width: '38%',
  height: 'auto'
});

//handle How To Play action
document.getElementById("intro").onclick=function(){
   //dialog.dialog('open');
    alert("");
}