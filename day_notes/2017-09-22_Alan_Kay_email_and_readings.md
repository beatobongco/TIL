# Alan Kay's Email and Readings

### Email

> The first appearance of an "AI as a part of the UI" I'm aware of was in an early paper by John McCarthy "Programs With Common Sense" from 1958 or so (attached). This was part of the thinking that John, Marvin, and others started officially in a famous conference in 1956 (one of the influences was Turing's earlier paper about machine intelligence). Another part of the context was that John had seen the SAGE (air defense) graphics terminals, and had the thought that "every home in the future will have one" (an "information utility" in analogy to the power, water, gas, telephone, etc shared utilities of the day). This led to the realization that the interaction would have to be done in human commonsense terms, and than an AI with commonsense would be extremely useful.

The interesting point here is that people have been thinking about "AI as a part of the UI" for a really
long time (McCarthy's paper was written the year my dad was born).

![image](https://user-images.githubusercontent.com/3739702/30768937-547f881e-a042-11e7-9064-8614b4e46584.png)

![image](https://user-images.githubusercontent.com/3739702/30768938-57e0e48a-a042-11e7-9b9c-f9640dcc6f00.png)

SAGE graphics terminals https://en.wikipedia.org/wiki/Semi-Automatic_Ground_Environment

For the "information utility" part, I think that's the internet already but maybe there's more to that.
Augmented with AI, the internet could truly be a tool for downloading information into the brain instead
of a medium of passive consumption.

> There was OK Moore's "talking typewriter" idea from the late 50s (mentioned in the other attachment below).

the talking typewriter: it was a device that spoke the words typed on it, but remained silent for whatever entered that isn't a word.

It seems Alan thinks this wasn't adopted because it was forgotten "in a pop-culture". This seems like a 
trivial thing to implement today using a dictionary + Google's speech API and could even be something small project for
UI kata!

source: https://www.mail-archive.com/fonc@vpri.org/msg03144.html

> Another early set of thoughts to have semi-intelligent mentoring came via Licklider's visions of the early 60s (take a look at the later 1968 paper "Computers as a communications device" by Lick and Bob Taylor (part of the online handouts for the Stanford lectures).

> And yet another -- the weakest, but still interesting in the eventual size of the larger effort -- was for the PLATO system at the U of Illinois in the early 60s onward.

From https://en.wikipedia.org/wiki/PLATO_(computer_system) : By the late 1970s, it supported several thousand graphics terminals distributed worldwide, running on nearly a dozen different networked mainframe computers. Many modern concepts in multi-user computing were developed on PLATO, including forums, message boards, online testing, e-mail, chat rooms, picture languages, instant messaging, remote screen sharing, and multiplayer games.

> I've inserted versions of these ideas in both research projects and in talks and writings. A relatively recent writing was an invited chapter on the future of reading (attached)

> The weak set of ideas (generally) today pretty much can only see tools as "outside us" and as "servants and services". This misses that what we need are better "insides" stuff working between our ears, and really good tools can help build these (one of them is reading and writing). This other way to look at AIs is about how they can be used to help grow *us*.

I agree with this wholeheartedly. I want to create AI-powered tools that help us learn better, help us grow better.
I think humans augmented with technology are the future, but things like neuralink are too far away 
and too uncertain (but I'm still optimistic about it). I think gains can be made in the coming years, 
using the hardware that's available (laptops, tablets, phones), innovating on user interfaces combined with
deep / reinforcement learning to tailor the UI's behavior to the user.

I, too, want AI's to help grow *us*. I want humankind to be in the equation later on, not to just be ruled by
machines and algorithms. I can see this is a thin line to walk but I want to walk it right.

### Programs with Common Sense - John McCarthy

* McCarthy was trying to describe a computer program that could carry out elementary verbal reasoning.
* The program will be able to improve itself based on the input statements we give it.
* Program will have "common sense": it will reach decisions based on anything it is told + previous knowledge.
* An existing checkers program is described, one that could modify the weights it used to evaluate positions.
This is not what McCarthy wants however. He wants a machine that can discover the principle of opposition.
* If one wants a machine to discover an abstraction the machine must be able to represent this abstraction 
in some relatively simple way.
* Not sure if I agree with the above. Deep neural nets represent things they learn in not so simple ways. 
Maybe there's a way to synthesize both viewpoints? 
* McCarthy talks about AI generalization (learning arbitrary behavior) and qualities it must possess:
  * It must be able to represent all behaviors: construct automata or program in a general purpose PL.
  * Changes in behavior must be expressible in a simple way.
  * All aspects of behavior must be improvable. This includes the improving mechanism.
  * The machine must have concepts of partial success (!!) because on difficult problems decisive 
  success/failtures come too infrequently. 
  (Note: the concept of partial goals that could tweak the weights of an ML algorithm is really interesting)
  * The system must be able to create subroutines (I guess this means deviating from original programmed goal?)
 * Of the above, McCarthy focuses on the second. The goal is to create a system that can be told to do things
 as a human would, and for that we would need to construct a language of instruction that doesn't rely on any
 knowledge of internal structure and previous knowledge.
 * Imperative vs declarative is discussed. How do vs What do. Humans understand declarative, computers imperative.
 * The gist I get from "THE CONSTRUCTION OF THE ADVICE TAKER" part is that the machine can have intuition:
 an immediate deduction routine when given a set of premises will deduce a set of immediate conclusions. 
 * Later on, the machine should be able to produce other conclusions which may be of interest. 
 * These could be what Kahneman discusses as System 1 and 2. A fast gut feel routine and a slower deliberate routine.
 * The machine should also be able to deduce fuzzily related things (e.g. 1776 is both a number and date of American
 Revolution).
 (Try to tie this in with [Pieter Abbeel](https://github.com/beatobongco/TIL/blob/master/day_notes/2017-09-18_Pieter_Abbeel_interview.md) where he said the next challenge is have systems reason over long horizons)
 * The next section describes a language the system could use.
 * My beef with this is it still seems very explicitly programmed and perhaps defining a language like this even if 
 it is elegant, is limiting. But I need to learn more about reinforcement learning first. Maybe this thinking is its
 ancestor.
 * Random idea: how about larger RNN's with longer-term memory, when a problem fits an initial "profile", an old RNN state
 will be accessed. (Not even sure they work that way). RNN's that remember as we do.
