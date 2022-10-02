function showNotification( {top, right, html, className} ) {
  let div = document.createElement( 'div' );
  div.className = 'notification';
  if( className ) { div.classList.add( className ) };

  div.style.top = `${top}px`;
  div.style.right = `${right}px`;

  div.innerHTML = html;
  document.body.append( div );
}

showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});