
$(document).ready(function(){


		// chapterFilter(book);
	var clickCount=0

	var i=0

	var selected_chapter=1

		var chapter_number=50

	var current_verses= []

	var verse_number= current_verses.length

      var version = $('#version option:selected').val()

      var book = $('#book option:selected').val()

	var params= {

		p:book,
		v:version
	}


	$('.fa.fa-caret-square-o-down').click(function(){

		clickCount=clickCount+1

		if(clickCount%2 != 0){

			

			$('.main').animate({top:'100px'},"slow")
		

		console.log(clickCount)

		} else {

			$('.main').animate({top:'-380px'},"slow")

		console.log(clickCount)

		}

		

	})


	$('.chapter-display h1').text( $('#book option:selected').text()+ ' '+ selected_chapter) 

		chapterFilter(book)


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


				 $('.chapter-display').append( '<p>'+ verse_number+'   '+ value.verse+'</p>')

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




 	$('.version select').click().change(function(){



 		version = $('#version option:selected').val()

			var params= {
				p:book,
				v:version
			}

			getRequest(params);
 	})




 	$('.book select').click().change(function(){

 			$('.chapter-display h1').text( $('#book option:selected').text()+ ' '+ 1) 
 

 		book = $('#book option:selected').val()
 		

 		version = $('#version option:selected').val()

			var params= {
				p:book,
				v: version
			}

			getRequest(params);

			chapterFilter(book);			
 	})


	$('.new-book select').click().change(function(){
 			
 			selected_chapter=1

 		book = $('#new-book option:selected').val()
 		version = $('#version option:selected').val()


 		$('.chapter-display h1').text( $('#new-book option:selected').text()+ ' '+ selected_chapter) 

			var params= {
				p:book,
				v: version
			}

			getRequest(params);

			chapterFilter(book);	

 	})


	$('.chapter select').change(function(){


   		selected_chapter= $(this).val()

   		console.log(selected_chapter)

   		// console.log( 'length of book is'+ book.length)

   		book= book.substring(0, book.length-1)

   		console.log(book)

   		$('.chapter-display h1').text( $('#book option:selected').text()+ ' '+ selected_chapter) 

 		version = $('#version option:selected').val()

			var params= {
				p:book+selected_chapter,
				v: version
			}

			console.log(book+selected_chapter)

			getRequest(params);

			book=book+'1'

 		
 	})



	
	$('.nav').show();

});