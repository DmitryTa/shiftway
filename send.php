
<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="postmaster@shooshoo.ru";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://shooshoo.ru";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
$phone=$_POST['phone']; 
$modelName=$_POST['model-name'];
$modelColorClassic=$_POST['model-color-classic'];
$modelColorTransformer=$_POST['model-color-transformer'];
$modelColorXl=$_POST['model-color-xl'];
$modelColorX=$_POST['model-color-x'];
$modelnoSelect=$_POST['modal-no-select'];
 
$msg=" 
 
 
<p>Заказчик: $name  </p>
 
 
<p>Телефон: $phone  </p>
 
<p>Модель: $modelName </p>

<p>Цвет classic: $modelColorClassic </p>
<p>Цвет transformer: $modelColorTransformer </p>
<p>Цвет xl: $modelColorXl </p>
<p>Цвет x: $modelColorX </p>
<p>Заказ: $modelnoSelect </p>
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name", "$msg"); 
 
  
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Новый заказ от $name"); 
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n <===============================>"); 
 
fclose($f); 
 
  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 6000); 
//--></script> 
 
$msg 
 
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
exit; 
 
 
 
?>