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
// 3D Scroll

let zSpacing = -1000; // расстояние от оси Z ( от оси до фотографии)
	lastPos = zSpacing / 5; // позиция с анимацией при загрузке
		my_frames = document.getElementsByClassName('frame'); //
		frames = Array.from(my_frames); //все элементы страницы в массиве
		zVals =  []; // массив значений оси Z

window.onscroll = function() {
	let top = document.documentElement.scrollTop;
		delta = lastPos - top; // Условная позиция сверху
		lastPos = top; // обновление последней позиции

		frames.forEach(function(n, i){ //  nтекущий обрабатываемый эл, i его индекс
			zVals.push((i * zSpacing) + zSpacing);
			zVals[i] += delta * -5; // -5 speed scrollin
			let frame = frames[i];
				transform = `translateZ(${zVals[i]}px)`; //исчезание кадров
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0 // плавное затухание слайдов
		frame.setAttribute('style', `transform: ${transform}; opacity:${opacity}`); //атрубиты каждому кадру
	})

}
window.scrollTo(0,1)