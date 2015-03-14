var back=[];
$('document').ready(function(){
    var socket = io.connect();
    socket.on('back',function(b) {
        back=b;
        var str;
        for (var t in back) {
            str +='<p>'+back[t].user + ' says ' + back[t].text +'</p>';
        }
        $('#pg').html(str);
        
    });
    $('#go').click(function () {
        socket.emit('hello',{
            'user':$('#un').val(),
            'text':$('#txt').val()
        });
        $("#txt").val('');
    })
});