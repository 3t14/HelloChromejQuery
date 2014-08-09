/**
 * jQuery Notification example.
 * @author @3t14
 */
$(function(){
	$('#msg').val('');
	var notify_count = 0;
	$('#confirmButton').click(function(){
		console.log('confirmButton was clicked');
		chrome.notifications.create(
		  'id_'+notify_count,{
		      type: 'basic', 
		      iconUrl: 'isjuku-icon-16.png', 
		      title: 'Confirmation', 
		      message: $('#msg').val(),
		      buttons: [{ title: 'OK',image: ''}, ],
		      priority: 0},
		  function(notificationId) {
		  	console.log(notificationId + ' was clicked');
		  }		
		); 
		$('#msg').val('');
	});
});
