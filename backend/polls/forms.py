from django import forms 
from .models import review

class SampleForm(forms.ModelForm):
  class Meta:
    model = review
    fields = {'title','text'}
    widgets = {
      'title': forms.TextInput(),
      'text': forms.TextInput(),
    }
    labels = {
      'title':'タイトル',
      'text':'テキスト',
    }