title: 10 Things from Idiomatic Python
author:
  name: Beato Bongco
  url: https://beatobongco.com
output: idiomatic.html
controls: true

--

# 10 Things from Idiomatic Python
## A nano presentation

--

```
Always code as if the guy who ends up maintaining your code
will be a violent psychopath who knows where you live.
--John Woods comp.lang.c++
--preface of Idiomatic Python
```

--

Writing idiomatic code

* makes it more readable
* is usually more efficient (physically + performance)
* makes it more maintainable

--

Also,

* it's an easy read (1 sitting)
* no harm in revisiting basics once in a while
* I will post a copy in #random
* Great for newbies or those switching from other languages
--

### Exceptions

 * Use them for control flow in Python.
 * WTF?
 
--

 * Exceptions are everywhere, even in for loop!

```
my_list = ['exceptions', 'are', 'cool']
a = iter(my_list)
a.next()
a.next()
a.next()
a.next()
```

--

 * Use them to write EAFP vs LBYL code
 
 Nope
 ```
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

Yep

```
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

### Use all() 

 * all(iterable) returns True if bool(element) is True for all elements
 
--

3. * operator to repr rest of list (p. 35)

4. dict comprehension (p. 39)

5. set comprehension (p. 42)

6. namedtuple (p. 45)

7. protected and private mangling (p. 55)

8. __enter__ and __exit__ (p. 63)

9. generator expressions (p. 64)

10. Document what something does, not how (p. 74)

