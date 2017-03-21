// $(function(){
//   $("form").submit(function(event){
//     event.preventDefault();
    
//     var action = $(this).attr('action');
//     var method = $(this).attr('method');
    
//     var description = $(this).find('#todo_description').val();
//     var priority = $(this).find('#todo_priority').val();
    
//     var data = $(this).serializeArray();

//   $.ajax({
//     method: method,
//     url: action,
//     data: data,
    
//   // this line makes the response format JavaScript and not html.
//   dataType: 'script'
//       });
//     });
//   });