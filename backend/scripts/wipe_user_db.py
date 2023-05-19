import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "gasgo_rest_api.settings")
django.setup()

from users_app.models import UserAuth

UserAuth.objects.all().delete()

