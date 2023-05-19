from django.contrib import admin
from django.urls import path, include
from .views import SignUpView, LogInView, UserAuthView, LogOutView

urlpatterns = [
    path('sign_up', SignUpView.as_view()),
    path('log_in', LogInView.as_view()),
    path('user_auth_info', UserAuthView.as_view()),
    path('log_out', LogOutView.as_view())
]
