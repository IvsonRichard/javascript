var agora = new Date ()
var hora = agora.getHours()
    res.innerHTML = `<p> são exatamente ${hora} horas.</p>`
 

if ( hora < 12){
    {res.innerHTML = `<p>  bom dia</p><br>` }//condição aninhada.
else if ( hora <= 18)
    {res.innerHTML = `<p> boa tarde<br>`} 
}else{
 res.innerHTML = ('<p>boa noite</p> ')
}