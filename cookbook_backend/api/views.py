from django_filters.rest_framework import DjangoFilterBackend
from drf_spectacular.types import OpenApiTypes
from rest_framework.viewsets import ReadOnlyModelViewSet
from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiResponse, OpenApiParameter

from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


@extend_schema_view(
    list=extend_schema(
        summary="Получение информации обо всех категориях.",
        description="Возвращает список всех категорий.",
        responses={
            200: OpenApiResponse(CategorySerializer(many=True), description="Список всех категорий.")
        }
    ),
    retrieve=extend_schema(
        summary="Получение информации о категории.",
        description="Возвращает информацию о категории по её ID.",
        responses={
            200: OpenApiResponse(response=CategorySerializer, description="Информация о категории."),
            404: OpenApiResponse(description="Категория не найдена.")
        },
        parameters=[
            OpenApiParameter(
                name="id",
                location=OpenApiParameter.PATH,
                type=OpenApiTypes.INT,
                description="Уникальное целочисленное значение, идентифицирующее данную категорию.",
                required=True
            )
        ]
    )
)
class CategoryViewSet(ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


@extend_schema_view(
    list=extend_schema(
        summary="Получение информации обо всех рецептах.",
        description="Возвращает список всех рецептов с возможностью фильтрации по категории.",
        responses={
            200: OpenApiResponse(RecipeSerializer(many=True), description="Список всех рецептов.")
        },
        parameters=[
            OpenApiParameter(
                name="category",
                location=OpenApiParameter.QUERY,
                type=OpenApiTypes.INT,
                description="Позволяет фильтровать рецепты по категории (ID категории).",
                required=False
            )
        ]
    ),
    retrieve=extend_schema(
        summary="Получение информации о рецепте.",
        description="Возвращает информацию о рецепте по его ID.",
        responses={
            200: OpenApiResponse(response=RecipeSerializer, description="Информация о рецепте."),
            404: OpenApiResponse(description="Рецепт не найден.")
        },
        parameters=[
            OpenApiParameter(
                name="id",
                location=OpenApiParameter.PATH,
                type=OpenApiTypes.INT,
                description="Уникальное целочисленное значение, идентифицирующее данный рецепт.",
                required=True
            )
        ]
    )
)
class RecipeViewSet(ReadOnlyModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category']
