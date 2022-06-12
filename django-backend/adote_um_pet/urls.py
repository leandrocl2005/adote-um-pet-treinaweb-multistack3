from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/pets", include("pet.urls")),
    path("api/adocoes", include("adocao.urls")),
]
