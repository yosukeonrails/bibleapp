
   function chapterFilter(book ){

      $('#chapter-number option').remove()
        
      if (book=='gen1'){ chapter_number= 50; book='genesis'} 
      else if (book=='exodus1'){ chapter_number= 40; book='exodus'} 
      else if (book=='leviticus1'){ chapter_number= 27; book='leviticus1'} 
      else if (book=='numbers1'){ chapter_number= 36; book='numbers1'} 
      else if (book=='deutoronomy1'){ chapter_number= 36; book='deutoronomy1'} 
      else if (book=='joshua1'){ chapter_number= 24; book='joshua1'} 
      else if (book=='judges1'){ chapter_number= 21; book='judges1'} 
      else if (book=='ruth1'){ chapter_number= 4; book='ruth'} 
      else if (book=='1samuel1'){ chapter_number= 31; book='1samuel'} 
      else if (book=='2samuel1'){ chapter_number= 24; book='2samuel'} 
      else if (book=='1kings1'){ chapter_number= 22; book='1kings'} 
      else if (book=='2kings1'){ chapter_number= 25; book='2kings'} 
      else if (book=='1chronicles1'){ chapter_number= 29; book='1chronicles'} 
      else if (book=='2chronicles2'){ chapter_number= 36; book='2chronicles'}                
      else if (book=='ezra1'){ chapter_number= 10; book='ezra'} 
      else if (book=='nehemiah1'){ chapter_number= 13; book='nehemiah'} 
      else if (book=='esther1'){ chapter_number= 10; book='esther'} 
      else if (book=='job1'){ chapter_number= 42; book='job'} 
      else if (book=='ps1'){ chapter_number= 150; book='ps'} 
      else if (book=='proverbs1'){ chapter_number= 31; book='proverbs'} 
      else if (book=='ecclesiastes1'){ chapter_number= 12; book='ecclesiastes'} 
      else if (book=='song1'){ chapter_number= 8; book='song'} 
      else if (book=='isaiah1'){ chapter_number= 66; book='isaiah1'} 
      else if (book=='jeremiah1'){ chapter_number= 52; book='jeremiah'} 
      else if (book=='lamentations1'){ chapter_number= 5; book='lamentations'} 
      else if (book=='ezekiel1'){ chapter_number= 48; book='ezekiel'} 
      else if (book=='daniel1'){ chapter_number= 12; book='daniel'} 
      else if (book=='hosea1'){ chapter_number=14; book='hosea'}
       else if (book=='joel1'){ chapter_number=3; book='joel'}
        else if (book=='amos1'){ chapter_number=9; book='amos'}
         else if (book=='obadiah1'){ chapter_number=1; book='obadiah'}
          else if (book=='jonah1'){ chapter_number=4; book='jonah'}
           else if (book=='micah1'){ chapter_number=7; book='micah'}
           else if (book=='nahum1'){ chapter_number=3; book='nahum'}
           else if (book=='habakkuk1'){ chapter_number=3; book='habakkuk'}
            else if (book=='zephaniah1'){ chapter_number=3; book='zephaniah'}
             else if (book=='haggai1'){ chapter_number=2; book='haggai'}
           else if (book=='zechariah1'){ chapter_number=14; book='zechariah'}
           else if (book=='malachi'){ chapter_number=4; book='malachi'}

           else if (book=='matthew1'){ chapter_number=28; book='matthew'}
           else if (book=='mark1'){ chapter_number=16; book='mark'}
           else if (book=='luke1'){ chapter_number=24; book='luke'}
             else if (book=='john1'){ chapter_number=21; book='john'}
           else if (book=='acts1'){ chapter_number=28; book='acts'}
           else if (book=='romans1'){ chapter_number=16; book='romans'}
             else if (book=='1corinthians1'){ chapter_number=16; book='1corinthians'}
           else if (book=='2corinthians1'){ chapter_number=13; book='2corinthians'}
           else if (book=='galatians1'){ chapter_number=6; book='galatians'}
             else if (book=='ephesians1'){ chapter_number=6; book='ephesians'}
           else if (book=='philippians1'){ chapter_number=4; book='philippians'}
           else if (book=='colossians1'){ chapter_number=4; book='colossians'}
             else if (book=='1thessalonians1'){ chapter_number=5; book='1thessalonians'}
           else if (book=='2thessalonians1'){ chapter_number=3; book='2thessalonians'}
           else if (book=='1timothy1'){ chapter_number=6; book='1timothy'}
              else if (book=='2timothy1'){ chapter_number=4; book='2timothy'}
           else if (book=='titus1'){ chapter_number=3; book='titus'}
           else if (book=='philemon1'){ chapter_number=1; book='philemon'}
              else if (book=='hebrews1'){ chapter_number=13; book='hebrews'}
           else if (book=='james1'){ chapter_number=5; book='james'}
           else if (book=='1peter1'){ chapter_number=5; book='1peter'}
              else if (book=='2peter1'){ chapter_number=3; book='2peter'}
           else if (book=='1john1'){ chapter_number=5; book='1john'}
           else if (book=='2john1'){ chapter_number=1; book='2john'}
              else if (book=='3john1'){ chapter_number=1; book='3john'}
           else if (book=='jude1'){ chapter_number=1; book='jude'}
           else if (book=='revelations1'){ chapter_number=22; book='revelations'}


      console.log(chapter_number)

      console.log(book)

      i=0

      for (i = 1; i <= chapter_number; i++) { 

         $('#chapter-number').append('<option value='+i+'>'+i+'</option>')

      }
    }
