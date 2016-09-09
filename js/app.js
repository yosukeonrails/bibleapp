
$(document).ready(function(){

	var i=0

		var chapter_number;

	var current_verses= []

	var verse_number= current_verses.length

      var version = $('#version option:selected').val()

      var book = $('#book option:selected').val()

	var params= {

		p:book,
		v:version

	}


    getRequest(params);


      function getRequest(params){

      	$.ajax({

			url:'https://getbible.net/json',
			dataType: 'jsonp',
			data: params,
			jsonp: 'getbible',

			success:function(data){

				myData = data.chapter

      			current_verses=[]

				console.log(myData)

				showResults(myData);

				}
			});

      }



      function showResults(myData){

      			$('#verse option').remove();

      			$('.chapter-display p').remove();

      	 $.each(myData, function(index, value){


				console.log(value.verse)


				current_verses.push(value.verse)

				verse_number = current_verses.length

				console.log( verse_number)


				 $('.chapter-display').append( '<p>'+ verse_number+' '+ value.verse+'</p>')

				$('#verse').append('<option value='+verse_number+'>'+verse_number+'</option>')

			})

      }



 	$('.verse select').change(function(){

 		$('.chapter-display p').remove();

 		console.log('THIS IS ' + current_verses[3])

 		console.log('USE THIS NU<BER '+ $('#verse option:selected').val())

 		var selected_verse_number= ($('#verse option:selected').val())

 		$('.chapter-display').append('<p>'+selected_verse_number+ ' '+ current_verses[ selected_verse_number-1 ]+'</p>')

 	})




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

			chapterFilter(book);			

 	})


	


   $('.chapter').on('click', 'li', function(){

   		selected_chapter= $(this).text()

   		console.log(selected_chapter)

   		// console.log( 'length of book is'+ book.length)

   		book= book.substring(0, book.length-1)

   		console.log(book)

 		version = $('#version option:selected').val()

			var params= {
				p:book+selected_chapter,
				v: version
			}

			console.log(book+selected_chapter)

			getRequest(params);

			book=book+'1'



			// chapterFilter(book);
   			})


	

	

});


