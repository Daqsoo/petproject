window.onload = function phoneMenu() 
	{
	var menu = document.getElementById('myTopmenu');
	menu.onclick = function myFunction() 
		{
 			if (menu.className === 'topmenu') 
 				{
  				menu.className += ' responsive';
 				}
 			else
 				{
  					menu.className = 'topmenu';
 				}
		}
}