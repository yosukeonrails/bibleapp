
$(document).ready(function(){

	var current_verses= []
	var chapter_number= current_verses.length

      var version = $('#version option:selected').val()
      var book = $('#book option:selected').val()


	var params= {
		p:book,
		v:version
	}


    getRequest(params);


      function getRequest(params){

      	$.ajax({

			url:'http://getbible.net/json',
			dataType: 'jsonp',
			data: params,
			jsonp: 'getbible',

			success:function(data){

				myData = data.chapter

				console.log(myData)

				showResults(myData);

				}
			});

      }



      
      function showResults(myData){


      	 $.each(myData, function(index, value){

      	 		console.log(value.verse)

      	 	current_verses.push(value.verse)

      	 	console.log(current_verses)

      	 	chapter_number = current_verses.length

      	 	console.log( chapter_number)



			})

      }




     
 	$('.version select').change(function(){

 		version = $('#version option:selected').val()

			var params= {
				p:book,
				v:version
			}

			getRequest(params);
 	})




 	$('.book select').change(function(){

 		book = $('#book option:selected').val()
 		version = $('#version option:selected').val()

			var params= {
				p:book,
				v: version
			}

			getRequest(params);

			console.log(book)

 	})


		
	

	

});


