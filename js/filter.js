
   function chapterFilter(book ){

  $('.chapter li').remove()
   	  
   	if (book=='romans1'){ chapter_number= 16; book='romans'} 
   	else if (book=='ps1'){ chapter_number= 150; book='ps'}
	else if (book=='jn1'){ chapter_number=21; book='jn'}

		console.log(chapter_number)

		console.log(book)

	i=0



		for (i = 0; i <= chapter_number; i++) { 
    
    $('.chapter').append('<li>'+i+'</li>')

}
   }


   