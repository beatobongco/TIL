# Week 1

## Manifesto

* Individuals and interactions - over processes and tools
* Working software - over comprehensive documentation
* Customer collaboration - over contract negotiation
* Responding to change - over following a plan

## 12 Principles

* early and continuous delivery of valuable software 
* welcome changing requirements, even late in development
* deliver software frequently
* business people x developers work together daily
* build projects around motivated individuals. Give them env and support
* face-to-face conversation to convey information
* working software is the primary measure of progress
* sustainable development -- dont overwork!
* technical excellence + good design = enhanced agility 
* simplicity is essential (via negativa, maximize work not done)
* self-organizing teams -- dont overmanage
* at regular intervals, team reflects on how to be better and then inacts the change

## Agile Methods

### XP

Extreme programming. 

Kent Beck. 

Not documentation but programs and programming at the center. 

### Lean

Mary Poppendieck.

Lean (from Toyota Production System, also Lean startup!).

Get rid of waste.

### Crystal

Alistair Cockburn.

Combination of agile and traditional.

### Scrum

Schwaber and Sutherland.

Currently dominates.

Self-organizing teams. Short release iterations like sprints.

In practice, when we talk about agile we talk about Scrum. Not entirely accurate.

### Principles in depth

Principles - abstract, prescriptive
Practice - concrete, prescriptive
Assertion - statement about the world

Testing is absent.

### Agile Values

* reduced role for manager -- do not assign tasks to project members
* no "big upfront" steps -- requirements and development as you go, no long periods of planning
* iterative development -- short cycles
* limited, negotiated scope -- only build what's really needed
* focus on quality, achieved through testing

# Week 2

![image](https://user-images.githubusercontent.com/3739702/37384578-ab8c72d2-278a-11e8-8d5b-4b5ed55c4385.png)

## The enemy: the big upfront anything

Waterfall model -- basically it's bad

Agile criticizes requirements. They change and are wasteful. Doesn't mean we shouldn't have them.

Agile views on requirements
* XP -- req gathering produces detail just before it is needed throughout development
* Scrum -- projs do not have an upfront analysis or design phase, all work occurs within sprint cycles
* Lean -- separating reqs from implmentation is just another form of "handover" -- impedance mismatch

Any good engineer has to define a problem before she solves it.

Takeaway: Too much time spent on requirements is wasteful. But teams should still plan.

## Organizational principles

1. Put the customer at the center -- JTBD will definitely help!!

"You will get results with real customers... A proxy for a real customer leads to waste
as you develop features that aren't used, specify tests that don't reflect the real acceptance
criteria, and lose the chance to build real relationships between the people with the most
diverse perspective of the project." -- Beck

XP: there's a customer who is part of the team (hard to do in practice)

Scrum: product owner (takes away part of role of manager, has responsibility to the client org)

2. Accept change

3. Let the team self-organize

Roles of the leader
* encourage progress
* help catch errors
* remove impediments
* provide support and help in difficult situations
* make sure that skepticism does not ruin the team's spirit

Schwaber "Control through peer pressure and "control by love" are the basis of subtle control.
The dynamic flow of the team surfaces the tacit (unconscious) knowledge of the group and creates
explicit knowledge in the form of software.

How about decentralized control? Is that possible? Like a semi-flat organization that allows
each member to collaborate, give feedback, praise and if needed, chastise.

4. Maintain a sustainable pace

* People perform best if they are not overstressed
* Devs shouldn't work more than 40 hour weeks
* no consecutive overtime
* XP avoids "crunch time" of trad projects thanks to short release cycles

* frequent code-merge
* always maintain executable, test-covered, high-quality code
* constant refactoring helps keep fresh and alert minds
* collaborative style
* constant testing

### YAGNI

You ain't gonna need it. Work on the story you have not what you think you need. "Even if we
know we're going to need it."

> Poppendieck: Our software systems contain far more features than are ever going to
be used. Extra features increase the complexity of the code, driving up costs nonlinearly.
If even half of our code is unnecessary - a convervative estimate - the cost is not just double;
it's perhaps ten times more expensive than it needs to be.

### 7 Wastes of Software Development

* Extra/Unused features (overproduction)
* Partially developed work not released (Inventory)
* Intermediate/unused artifacts (extra processing)
* Seeking information (motion)
* Escaped defects not caught by tests/reviews (Defects)
* Waiting (incl. customer waiting)
* Handoffs (transportation)
