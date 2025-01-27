from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, RecipeViewSet


router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('recipes', RecipeViewSet)

urlpatterns = router.urls
