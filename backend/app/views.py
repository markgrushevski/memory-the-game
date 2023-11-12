import random
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Player, Card, Game
from .serializers import PlayerSerializer, CardSerializer, GameSerializer


# ---------------------- api ------------------------
class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class RandomNumberView(APIView):
    def get(self, request, number, *args, **kwargs):
        if number % 2 != 0:
            return Response({"error": "Number should be even"}, status=status.HTTP_400_BAD_REQUEST)

        cards = Card.objects.all()
        if not cards.exists():
            return Response({"error": "No cards available"}, status=status.HTTP_404_NOT_FOUND)

        cards_list = list(cards.values())

        result = random.sample(cards_list, number // 2) * 2
        random.shuffle(result)

        return Response(result, status=status.HTTP_200_OK)