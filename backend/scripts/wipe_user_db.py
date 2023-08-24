import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
django.setup()

from users_app.models import UserAuth

UserAuth.objects.all().delete()

