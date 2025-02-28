from django.urls import path
from .views import CreateUserView, NoteListCreateView, NoteDeleteView


urlpatterns = [
    path('user/register/', CreateUserView.as_view(), name='register'),
    path('notes/', NoteListCreateView.as_view(), name='note-list'),
    path('notes/delete/<int:pk>', NoteDeleteView.as_view(), name='delete-note')
]
