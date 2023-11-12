from django.db import models

class Player(models.Model):
    name = models.CharField(max_length=100)
    score = models.IntegerField()

class Card(models.Model):
    background_color = models.CharField(max_length=100)
    url = models.URLField()

class Game(models.Model):
    difficulty = models.CharField(max_length=255)
    history = models.JSONField()
    players = models.JSONField()
