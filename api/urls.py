from . import views
from django.urls import path

urlpatterns=[
    path('',views.getRoutes, name='routes'),
    path('notes/',views.getNotes,name='notes'),
    path('notes/<str:pk>/',views.getNote),
    # path("notes/<str:pk>/", views.getNote)
]