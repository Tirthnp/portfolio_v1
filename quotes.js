var quotes = [
    {quote:"I would never let a woman kick my ass. If she tried something, I'd be like, HEY! You get yourb*tch ass back in the kitchen and make me some pie!",author: "Cartman"},
    {quote:"Hippies.They're everywhere. They wanna save Earth, but all they do is smoke pot and smell bad.",author:"Cartman"},
    {quote:"I've learned somthing toady. I shouldn't get high and come up with ideas. I should come up with ideas and get high to reward myself.",author:"Towlie"},
    {quote:"Well, I've been lickin' this carpet for 3 whole hours and I don't feel like a lesbian.",author:"Cartman"},
    {quote:"I am not gay I am the voice of a generation. I am also a genious, so I would KNOW if I was a fish, witch I AM NOT!",author:"Kanye West"},
    {quote:"Remamber children, there are no stupid questions. Just stupid people.",author:"Mr. Garrison"},
    {quote:"Oh, I forgot to tell you that part. I’m Lorde.",author:"Randy Marsh"},
    {quote:"Why’d you have to rub your clit on stage dad?",author:"Stan"},
    {quote:"Cock magic isn’t an Asian thing or a Mexican thing. White people do it, too, if they’re poor enough.",author:"Randy Marsh"},
    {quote:"Just because I make a good living with my music doesn’t mean you can just blow it all on Canadough.",author:"Randy Marsh"},
    {quote:"Your wiener, my balls, they’re all public domain.",author:"Cartman"},
    {quote:"I AMMM Lorde. LAWDY LAWDY LORDE.",author:"Lorde"},
    {quote:"I don’t wanna use the girls’ bathroom if anyone can use it. It’s gonna be all crowded.",author:"Cartman"},
    {quote:"We have a problem with cis-gingers who are intolerant … We call them cis-ies!",author:"Cartman"},
    {quote:"Kim Kardashian is a short overweight woman, who manipulates her image and makes average girls feel horrible about themselves... In real life, Kim Kardashian has the body of a hobbit.",author:"Wendy"},
    {quote:"The dragons are still just on their way! They keep promising dragons, but all I get are more floppy weiners in my face!",author:"Butters"},
    {quote:"Winter's coming, Sharon, and I'm a busy little bee. Buzz! Buzz!",author:"Randy Marsh"},
    {quote:"Renting DVDs is more ancient than Madonna's boobs!",author:"Stan"},
    {quote:"Why don't you shut up, Dad, and stick it in your ear for crying out loud!",author:"Butters"},
    {quote:"Butters, people can't just go around beating up people who have diabetes!",author:"Kyle"},
    {quote:"Somebody who would have sex with Kyle's mom would have sex with just about anything!",author:"Stephen Stotch"},
    {quote:"I may be fat, but I'm not Honey Boo Boo!",author:"Cartman"},
    {quote:"Oh, they'd love it! A sport where safety is all that matters? How about we call it sarcastaball?!",author:"Randy Marsh"},
    {quote:"Anyway, thanks a lot, and stay away from my man, bitch.",author:"Cartman"},
    {quote:"If I crap in a forest, the blood will attract beavers, Kyle!",author:"Cartman"},
    {quote:"What you're looking at there is a Jewpacabra. It's like a sasquatch, only more elusive, more ferocious, and a little more greedy.",author:"Cartman"},
    {quote:"You know why girls wear make-up and perfume? Cause they're ugly and they stink.",author:"Clyde"},
    {quote:"And we want our moms to stop tripping because bitches be tripping all the time!",author:"Randy Marsh"},
    {quote:"No, dude, fuck you, we're burning this shit.",author:"Randy Marsh"},
    {quote:"It does email and web browsing and shits in Kyle's mouth? This is the greatest thing ever invented.",author:"Cartman"},
    {quote:"Why don't you at least go across and the street and get some condoms? Because we should at least be safe if you're going to f**k me.",author:"Cartman"},
    {quote:"You gonna deglaze that f**king pan? I'd deglaze the f**k out of that pan.",author:"Randy Marsh"},
    {quote:"Butterflies have no concern for such things. Now I'm gonna go find myself some butterfly poon.",author:"Randy Marsh"},
    {quote:"Snooki want smoosh smoosh.",author:"Snooki"},
    {quote:"All those ladies have stinky vaginas?",author:"Butters"},
    {quote:"Oh Jesus man! They're gonna get me! Oh Christ!",author:"Tweek"},
    {quote:"That's my last J asshole!",author:"Towlie"},
    {quote:"Cartman, you are so goddamn stupid it is unbelievable.",author:"Stan"},
    {quote:"Eric! Are you training that pony to please you?!",author:"Jimbo"},
    {quote:"You know, my mom says God has a plan for everybody. I guess I was plan B.",author:"Jimmy"},
    {quote:"I myself, went through a homosexual phase.",author:"Father Maxi"},
    {quote:"What if I promise not to be gay anymore? Pinky swear?",author:"Big Gay Al"},
    {quote:"Just because somebody's gay, doesn't mean they molest children. Straight people do that too.",author:"Randy Marsh"},
    {quote:"Watching porn isn't like doing coke you fag.",author:"Jesus"},
    {quote:"I want you to look at me when we make love, and not just my balls",author:"Randy Marsh"},
    {quote:"I'm just a stupid piece of crap.",author:"Mr. Hanky"},
    {quote:"Parents can be pretty cruel sometimes dude. They get off on it.",author:"Stan"},
    {quote:"I feel great. I haven't had this much attention paid to my cooch since I was sixteen.",author:"Mrs. Crabtree"},
    {quote:"Don't worry; sister is still taking very good care of me. She just loves to smack me in the face and tell me I'm worthless!",author:"Pip"},
    {quote:"I don't want to do it if it hurts or if it makes you get all sticky.",author:"Butters"},
    {quote:"I'm gay! I'm gay as a gymnast on shore leave!",author:"Mr. Garrison"},
    {quote:"You never f**king care when I die!",author:"Kenny"},
    {quote:"TIM-MAY!",author:"Timmy"},
    {quote:"We're gonna learn about the reproductive system. Vaginas, and penises! Butt sex!",author:"Mr. Garrison"},
    {quote:"to which Mrs. Clinton replied, 'I don't even like vagina.'",author:"News Anchor"},
    {quote:"Queef is the vaginal discharge of gas.",author:"Mr. Mackey"},
    {quote:"C'mon Ned, this isn't a whorehouse; it's a horROR house.",author:"Jimbo"},
    
  ];
  
  var quote = '';
  function getRandomQuote(quotes) {
    quoteUsed = Math.floor(Math.random() * (quotes.length - 0) + 0);
    quote = quotes[quoteUsed].quote + ' - ' + quotes[quoteUsed].author;
    return quote;
  }
  
  $('#quote').text(getRandomQuote(quotes));
    $('#newquote').click(function() {
      lastQuote = quoteUsed.toString();
      
      $('#quote').text (getRandomQuote(quotes));
  });
  
  $('#tweet').click(function() {
    var hrefForTweeting = 'https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=';
    window.open(hrefForTweeting + quote);
  });
  