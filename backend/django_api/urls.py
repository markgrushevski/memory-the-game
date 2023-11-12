from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from app.views import PlayerViewSet, CardViewSet, GameViewSet, RandomNumberView
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'players', PlayerViewSet)
router.register(r'cards', CardViewSet)
router.register(r'games', GameViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/shuffledCards/<int:number>/', RandomNumberView.as_view(), name='layout'),
    path('', TemplateView.as_view(template_name='index.html')),
]
