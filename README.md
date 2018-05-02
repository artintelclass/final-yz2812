# Final

## Brief
For the final your are free to choose what you'd like to do. The project should be a creative use of machine learning. It should be more ambitious in scope compared to what we've done so far this semester. You could do any number of things. A few sample ideas are:
* Build upon and fully complete one of your projects from earlier in the semester
* Create an interactive classification app or game [(example)](https://experiments.withgoogle.com/ai/emoji-scavenger)
* Create a physical comic book using style transfer
* Create an interactive dance performance
* Generate a musical composition or an EP of songs
* Create a music/sound generation tool
* Create a twitter bot (a variation could be a bot that learns and grows from people's responses)
* Print out a series of AI enabled art
* Create an interactive application (tool/game/art piece) of char-rnn like text generation 
* Create an art piece that illustrates/amplifies characteristics of this technology (could be illuminating or comedic or both)
* Train an LSTM on SVG data and output new SVGs

The list could go on and on. The above should be considered far from exhaustive.

You may work within a group or by yourself. 

## Grading Rubric
* 25% Creative Thinking: The project should not be just reproducing things using the tools we've looked at. It should have some novel implementation or approach in the application of the tech. Depending on the project, this could include indication of development of personal style/taste (if art project for example), and/or imaginative implementations of the tech in exploring ideas. 
* 25% Production Quality: The project needs to be well polished, with considerable work put into the finished work.
* 25% Clear Conceptual Underpinning: The project needs to be well thought out, and have a clear concept that you are working with from start to finish.
* 18% Machine Learning Application: The project should use and benefit from machine learning.
* 7% Press: The project execution and documentation should be at a level that you feel comfortable submitting it to a press outlet. This last 7% will be for those who actually submit their project to one or more press outlets. The outlet doesn't have to cover your project, you just need to have sent it in.


## Schedule
* April 16th (Mon): Ideas & concepts presented
* April 23rd (Mon): Mid-project: considerable work needs to be done at this point.
* May 2nd (Wed): ***FINAL PROJECT PRESENTATIONS***
* May 7th (Mon): IM Show

## Repo
Project Proposal
* Project Theme: Deeper Emoticon
* Background:
** As many people in the world using Emojis to express their feeling, Emoticon (顔文字) is widly used in Eastern Asian countries   where the language is based on logogram. Unlike phonogram languages, where the most characters are shown in keyboard of computer or      mobilephones, logogram based languages usually need Input Method Editor programs or apps to type. These programs or apps preserve the space for Emoticons as well as bring more unsusal characters for people to create more Emoticon. Distinguished from Emoji, Emoticons are not icons but the combination of different special text characters. Also, compared to Emoji's ono-to-one relationship between word and emoji icon, Emoticon have varying expression combined by diffrent characters to express similar meanings. In this regard, the expression of emoticon is more vague than emoji, where similar emoticons can reflect different content of user's emotion. Inspired by MIT's Deepmoji program, I am interested to use AI to explore the sentimental relationship between text and emoticons.
* Brainstorm:   
Since the using senarios of emoticons are different from Emoji, there is hard to find enough trainding data to construct model to predict Emoticons for sentences. Therefore, I am planning to use the pre-trained model from Deepmoji to construct the relationship between Emoji and thier presenting word, and connect to Emoticons under the same word description. Alternatively, I am looking for some pre-trained model analyzing emotion reflected by sentences and concluding them as words, and then connect word to Emoticons directly. After the connection, the project is able to access basic function, which can analyze text and generate corresponding emoticons, and I can explore more about th erelationship between diffrent emoticons and develop more interesting user interactions.   
Link to Deepmoji:(https://deepmoji.mit.edu/)    
Link to a Emoticon Website:(http://japaneseemoticons.me/)
* Overall Introduction:   
My final project is based on MIT's projcet Deepmoji, where the AI will find corresponding emoji for input sentence. In my project, I replaced these emojis with emoticons, and constrcuted a web server to illustrate on a P5.js sketch. Since Emoticons are made of unicode characters orgining from languages, they are more visually consistant with text compared with colorful emojis. In terms of interaction, users can type a sentence, and the program will return the corresponding emoticon and floating around the sketch. If users move the cursor on one of the floating emoticons, the original text will be shown.
* Possible Application   
The possible applications of this project are pretty broad. On the one hand, it can be applied as a digital commenting
book for museums or exhibitions. After the visiting, visitors can leave their comments on, and can view others' comments. In this case, the convertion from text to emoticon increases the interes of the commenting process, motivating people to participate in, and the convertion of emoticon is convenient for them and organizers to check the general feedback denoted by emoticons. On the other hand, this application can optimize the watching experience for people watching online video with bullet curtain commenting function. Usually, some users prefer to have non-realtime interaction with other users by leave comment that floating around the video screen to express their emotions. However, too many long sentences might block the video content and influence the watching experience. Therefore, this projcet provides a new method transfering sentences to emoticons who taking less space while revealing commenters' emotional expression, and allow users to look the whole sentence by moving the cursor on the emoticon.   
* Demo(Screenshot):   
![Imgur](https://imgur.com/a/RNTbvIZ.jpg)
* Self-Evaluation:   
In this project, I have learned and understand plenty of knowledge about different coding languages, and how can I use them to apply artificial intelligence related projcet to public users. Starting from switching code in the pretrained model in Python, I teired to use tensorflow.js and keras.js to accopmlish web-based model prediction. However, due to the model's converting issue, I had to use flask to construct the server and create a webpage where the data can pass between python and html. In order to optimize the visual effect of the project, I used P5.js to create a sketch to illustate the interaction. Overall, I am satisfied with the project, as the process of making it gives me a clear clue that how to integrate different coding part together. Nevertheless, I have to admit that the process of figuring out the issue of running the model on browser took me too much time, which resulted I did have too much time on polishing the project. For the next step, I will consider add more emoticons into the program, which can generate various but similar emoticons for the same input.


