from django.contrib import admin
from .models import test
from .models import review
from .models import coWorkingSpace
from .models import favoriteTable

# Register your models here.
@admin.register(coWorkingSpace)
class coWorkingSpaceAdmin(admin.ModelAdmin):
  pass
@admin.register(test)
class test(admin.ModelAdmin):
  pass

@admin.register(review)
class review(admin.ModelAdmin):
  pass

@admin.register(favoriteTable)
class favoriteTable(admin.ModelAdmin):
  pass

