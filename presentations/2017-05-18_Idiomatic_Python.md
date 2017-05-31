title: 10 Things from Idiomatic Python
author:
  name: Beato Bongco
  url: https://beatobongco.com
output: 2017-05-18_Idiomatic_Python.html
controls: true

--

# 10 Things from Idiomatic Python
## A nano presentation

--


Always code as if the guy who ends up maintaining your code
will be a violent psychopath who knows where you live.

`-John Woods comp.lang.c++`

`(also the preface to Idiomatic Python)`


--

### What is idiomatic code?

* code that follows conventions
* using the easiest and most common way in Python to do something

--

### Writing idiomatic code

* makes it more readable
* is usually more efficient (physically + performance)
* makes it more maintainable
* Good for the general community (sets standards)

--

### This presentation

* will not cover everything
* only the interesting, non-intuitive parts (in my opinion)
* please skim book

--

### Why read the book?

* it's an easy read (1 sitting)
* no harm in revisiting basics once in a while
* I will post a copy in **#random**
* Great intro for newbies or those switching from other languages

--

# Let's start!
## 10 things about Idiomatic Python!

--

### 1. Exceptions

 * Use them for control flow in Python.
 * WTF?!

--

Exceptions are everywhere in Python, even in a `for` loop!

`for` loops use them for stopping.

When you use `for`, `iter()` is called on it and it goes through it until `StopIteration` is raised.

```python
my_list = ['exceptions', 'are', 'cool']
a = iter(my_list)
a.next()
a.next()
a.next()
a.next()
```

--

Use them to write EAFP vs LBYL code!

Bad:
```python
 def get_log_level(config_dict):
  if 'ENABLE_LOGGING' in config_dict:
    if config_dict['ENABLE_LOGGING'] != True:
      return None
    elif not 'DEFAULT_LOG_LEVEL' in config_dict:
      return None
    else:
      return config_dict['DEFAULT_LOG_LEVEL']
  else:
    return None
 ```
--

Good:
```python
def get_log_level(config_dict):
  try:
    if config_dict['ENABLE_LOGGING']:
      return config_dict['DEFAULT_LOG_LEVEL']
  except KeyError:
    # if either value wasn't present, a
    # KeyError will be raised, so
    # return None
    return None
```

--

### 2. Use the `*` operator to represent the "rest" of a list

* specific to Python 3 though :(

--

```python
my_list = ['I', 'want', 'a', 'big', 'sandwich']
```

Try these:
```python
(*uno, dos, tres) = my_list
>>> ?
```

```python
(uno, *dos, tres) = my_list
>>> ?
```

```python
(uno, dos, *tres) = my_list
>>> ?
```

--

### 3. `dict` comprehension

Everyone knows about list comprehensions, but what about dict comprehensions?

--

This is super useful for filtering information.

```python
class User:
  def __init__(self, first_name, last_name, email, credits):
    self.first_name = first_name
    self.last_name = last_name
    self.email = email
    self.credits = credits

users_list = [
  User('Luis', 'Pugoy', 'pugspugspugs@aol.com', 69),
  User('Marte', 'Parte', 'parte@marte.io', 80085),
  User('Gibby', 'Duenas', None, 666),
  User('Janine', 'Duenas', 'jadu@gmail.com', 10000)
]

emails = {user.first_name: user.email for user in users_list if user.email}
```

--

### 4. `set` comprehension

...how about set comprehensions?

--

```python
class User:
  def __init__(self, first_name, last_name, email, credits):
    self.first_name = first_name
    self.last_name = last_name
    self.email = email
    self.credits = credits

users_list = [
  User('Luis', 'Pugoy', 'pugspugspugs@aol.com', 69),
  User('Marte', 'Parte', 'parte@marte.io', 80085),
  User('Gibby', 'Duenas', None, 666),
  User('Janine', 'Duenas', 'jadu@gmail.com', 10000)
]

unique_fams = {user.last_name for user in users_list if user.credits > 100}
```

--

### 5. `namedtuple`

Is it a `tuple` is it a `dict`? No, it's a `namedtuple`!

--

What is it?

Let's rewrite `User` class!

```python
from collections import namedtuple

User = namedtuple('User', ['first_name', 'last_name', 'email', 'credits'])

gibby = User('Gibby', 'Duenas', None, 666)

# You can get attributes it by position
print gibby[0]

# Or by name
print gibby.last_name

# But like a tuple, it's immutable. This gives an error
gibby.last_name = 'McGibberson'
```

--

### 6. generator expressions

--

* generators are awesome!
* generates things "on demand"
* unlike list comprehension, memory intensive for large data
* ex. lazy loading

--

```python

for a, b in ((user.last_name.upper(), 'Php ' + str(user.credits)) for user in users_list):
  print a, b

```

--

### 7. Use leading underscores in function and variable names to denote private data

* `_` denotes protected
* `__` denotes private
* Just a convention?

--

** Nope!**

* prefixing stuff with `_` makes sure it's not imported with `*`
* `__` "mangles", useful when someone else will use your class as superclass and you wanna protect your class's variables.

--

### 8. `__enter__` and `__exit__` in your classes that require housekeeping

* Everyone familiar with context manager `with`?

--

* `__enter__` and `__exit__` are good for stuff like db connections
* get creative!

--

### 9. Document what something does, not how

 * Sounds super obvious (but sometimes I forget)
 * proper, not leaky abstraction
 * if idiomatic, should be self-documenting
 * causes you to change it when you change actual code (more work)

--

### 10. Teach others to write idiomatic code!

--

# Thanks for listening! :)
