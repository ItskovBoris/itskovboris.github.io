function popUp(url)
{
	window.open(url, 'game', 'height=600,width=856,resizable=yes' );
	if (window.focus) newwindow.focus();
	return false;
}

function popUpText(url)
{
	window.open(url, 'game', 'height=600,width=856,resizable=yes,scrollbars=yes' );
	if (window.focus) newwindow.focus();
	return false;
}