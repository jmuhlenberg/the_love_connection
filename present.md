## Presentation

## Daniel
Daniel Will Describe the website and do a brief crud demo….

Describe the website:

The love connection is a “basic” dating website where a user can create a profile, view the profile and delete the profile.  Additionally, the website matches your “romantic” preferences against all other members in the database and presents a list of users who match all of your preferences.   

For example,

I’ll create Margo

(What you put in for margo is mostly unimportant.  Her userid should be margot722 and her image should be :

    ./images/margot722.jpeg   

Margot’s preferences do matter.  

Age: 18-25.  
Height: tall.
Gender: Male.
Build: stocky.
EyeColor : brown.
HairColor:  red.

When you hit add new user margot's matches will appear at the bottom of the screen;

Do a hard page refresh and explain that you're going to update Margot's record to wanting to date the same group of men but with blue eyes.....


## after the hard refresh jim will interject here...
If you look at the screen now you'll see it allows for the option of a new user or an existing user.  After he puts in the new id the idea of a new user is suspended and only the existing user's information is displayed.  This was done through the use of a ternary operator. refers to line XXX in app.js


## back to Daniel

Now…. Enter     margot722 as a userid …. This will give her a couple of matches

Update Margot with the exact same information except change the eye color to blue and she will get a different set of matches


## john will interject here about the matching process.  
To correctly match the current user with potential matches in the database, we used the .filter method. We pulled the keys from the Likes model to compare the user preferences to other user attributes. For simplicity, we've forced the results to be total matches. If we had more time and maybe a little more knowledge we would have attempted installing a ranking system based on the attributes that matched.


## Back to Daniel
So we added, viewed, updated and now we'll delete Margot.  

Then delete her and try and log back in and that should be the end of demonstrating CRUD.  

## Daniels Wins:
this is one of the most complex projects I've ever been about of. It showed me what a collaborative group effort of hard work can achieve in under a week. I learned a lot not only doing my part with css but what john and jim were able to achieve on the backend.

## Daniels Struggles:
we were trying to implement frameworks like materialize and material UI for css. Our trouble was that the documentation seemed like it wanted us to download and import files on our local devices for implementation and really havent learned that.

## Most important thing you learned:
how to work and collaborate on this stuff as a team

## Was working on a team better or worse than working alone?
pros and cons to each

## Jim

## Jim's Wins:
My understanding of ternary operators and boolean toggles was really improved by from this process.  I have also become a big fan of the debug application in inspect.  It allows you to set breakpoints and actually see the values of variables while the application is running.  It was super useful.

## Jim's Struggles:
Our server.js routes were copies of the routes we had done for our other projects.  Well.... after we updated we brought back and put into a variable that was supposed to have one user in it an array of all the users.  This caused the application to error.  And the big takeaway is that you really need to think about what is coming back because I didn't and it was a 3 to 4 hour project to figure it out.

## Most important thing you learned:
to be super intentional / thoughtful about what is coming and going from functions.

## Was working on a team better or worse than working alone?
I was pleased to work with such a great group.  They were flexible and were nice when I did dumb things. We focused on the main goal of getting the project done right.  We communicated often - I'd work with Daniel and John again any time.

## john

## john's Wins:
My wins include, working collaboratively as a team to achieve a complex goal, pushing ourselves to attempt very technical problems, and expanding my knowledge of how React works.

## john's Struggles:
One of my biggest struggles was figuring out how to properly format the data to send to the database. I struggled with properly organizing an object within an object so they'd be uploaded to two related models.

## Most important thing you learned:
The most important thing I gained was more patience. We solved very technical issues that required creative solutions and if I were by myself, I probably wouldn't have tackled such a project in as short amount of time.

## Was working on a team better or worse than working alone?
We worked very successfully as a team. I don't think there are necessarily pros or cons, but I see them more as adjustments one needs to make to become a productive team member.
