DESIGN.md
 
A “design document” for your project in the form of a Markdown file called DESIGN.md that discusses, technically, how you implemented your project and why you made the design decisions you did. Your design document should be at least several paragraphs in length. Whereas your documentation is meant to be a user’s manual, consider your design document your opportunity to give the staff a technical tour of your project underneath its hood.
 
Overall design
We used HTML, CSS, and JavaScrip to implement this project.
 
STEPS OF DESIGNING THE EXTENSION
 
 1) Prompt the user to sign in. After clicking the “sign in” button, users are prompted to “sign in through Google”. After clicking that button, they are redirected to a page where they can use their Google credentials to sing in. After being authenticated by Google, users are redirected to the extension. Additionally, their sign in credentials are stored in Firebase. Refer to pop.html.
  
 2) Users rate the article, their political view and paste the given article’s url. For each rating, users use a slider. Having input these 3 fields, users click the submission button. The information from these three fields is sent to the console. Ideally, this information would be sent to Firebase. Since the sliders are composed of an array of size 10, the slider information is stored in a number from 0-10. For example, if I move the bias slider to the far left (i.e. I think that the article is completely unbiased), then the number 0 is stored. Refer to welcome.html.
 
3) Display data in the graph. For this, we need to convey data to the graph. Ideally, we would convey relevant data from Firebase to the graph. In the graph, the x-axis represents the political views of the users (x=0 => left-winged to x=10 => right-winged). The y-axis represents the bias ratings of the users (y=0 => article is unbiased to y=10 => the article is biased). To plot the users’ ratings, (if using the Firebase data)we query the firebase for all of the (x,y) pairs where the url column matches the url input by the user in step 2). Data collected from the query would be displayed in the graph. Since we didn’t manage to successfully store data from the inputs to Firebase, we instead used a sample to display in the graph.  Additionally, there is a button through which the users can sign out. Refer to  main.html
