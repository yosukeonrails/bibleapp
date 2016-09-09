
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

			url:'http://getbible.net/json',
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


      	 $.each(myData, function(index, value){

				console.log(value.verse)

				current_verses.push(value.verse)

				verse_number = current_verses.length

				console.log( verse_number)

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


