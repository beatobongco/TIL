## Rules to remember from game theory

*game* - situation of strategic interdependence, outcome depends on *moves* of other players

### Two types of games
* sequential - players can only make move after the other players finish (as in chess)
* simultaneous - players can make moves at the same time (as in starcraft)

In reality games can have both sequential and simultaneous moves so the lessons we learn can be generally applied if deemed relevant.

### Rule 1: Look forward and reason backwards

Related: Munger's [Inversion](https://fs.blog/2013/10/inversion/).

Build a *game tree* starting with the end goal. Try to think what's needed to get there.

### Rule 2: Use your dominant strategy

Put all conceivable combinations of choices in a table and their expected return.

A *dominant strategy* is a strategy that dominates all of yours in terms of returns. It makes the player better off than he would be if he used any other strategy, no matter what strategy is opponent uses.

### Rule 3: Eliminate your dominated strategies

A *dominated strategy* is a strategy that has a worse outcome than any of your strategies, no matter what the opponent uses.

Slightly related: [alpha-beta pruning](https://www.youtube.com/watch?v=l-hh51ncgDI), removing parts of the search tree not worth searching. It assumes opponent always makes optimal decisions.

### Rule 4: Look for an equilibrium

*Equilibrium* - a pair of strategies in which each player's action is the best response to the other's.

If there's no equilibrium, use randomness as systemic behavior can be exploited by opponents.

To be update: I'm guessing knowing equilibrium means you can predict what your opponent will do. 
