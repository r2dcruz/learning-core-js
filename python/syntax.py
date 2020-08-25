#starting out my tutorial of python

def reverse_string():
    array = []
    string = input("enter a string: ")
    for x in string:
        array.append(x)
    print(array)

reverse_string()

number = 5
if number == 10:
     print("Number is 10")
 elif number < 10:
     print("Number is less than 10")
 else:
     print("Number is more than 10")
        

data = None
if data:
    print("data is not none")
else:
     print("data is none")

# mini game using while

import random

playerhp = 260
enemyatkl = 60
enemyatkh = 80

while playerhp > 30:
  dmg = random.randrange(enemyatkl, enemyatkh)
  playerhp = playerhp - dmg

  if playerhp <= 30:
    playerhp = 30

  print("enemy strikes for ", dmg, " points of damage. Current HP is", playerhp)

  if playerhp == 30:
    print("you have died. You cannot respawn, as you are dead.")
    break

# my python practice so far

import random

playerhp = 260
enemyatkl = 60
enemyatkh = 80

while playerhp > 30:
  dmg = random.randrange(enemyatkl, enemyatkh)
  playerhp = playerhp - dmg

  if playerhp <= 30:
    playerhp = 30

  print("enemy strikes for ", dmg, " points of damage. Current HP is", playerhp)

  if playerhp == 30:
    print("you have died. You cannot respawn, as you are dead.")
    break

####

player1 = 20
player2 = 30
player3 = 40

while playerhp > 30:
  dmg = random.randrange(enemyatkl, enemyatkh)
  playerhp = playerhp - dmg

  if playerhp <= 30:
    playerhp = 30

  print("enemy strikes for ", dmg, " points of damage. Current HP is", playerhp)

  if playerhp == 30:
    print("you have died. You cannot respawn, as you are dead.")
    break

  # 1 week hiatus, and thinking about going to get degree...

