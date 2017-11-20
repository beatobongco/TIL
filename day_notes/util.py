import os

for x in sorted(os.listdir()):
  print('<li><a href="https://github.com/beatobongco/TIL/blob/master/day_notes/' + x + '">' + x + '</a></li>')
