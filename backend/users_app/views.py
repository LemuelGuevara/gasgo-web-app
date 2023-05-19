import jwt, datetime

from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import status

from .serializers import UserAuthSerializer
from .models import UserAuth
from .utils.authentication import AuthenticationChecker

auth_checker = AuthenticationChecker()


# Create your views here.
class SignUpView(APIView):
    def post(self, request):
        serializer = UserAuthSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)


class LogInView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = UserAuth.objects.filter(email=email).first()

        auth_checker.check_if_user(user)
        auth_checker.check_password(user, password)

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        login_response = Response()

        login_response.set_cookie(key='jwt', value=token, httponly=True)
        login_response.data = {
            'jwt': token
        }

        return login_response


class UserAuthView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        auth_checker.check_jwt_token(token)

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("unauthenticated")

        user_auth = UserAuth.objects.filter(id=payload['id']).first()
        user_auth_serializer = UserAuthSerializer(user_auth)

        return Response(user_auth_serializer.data)


class LogOutView(APIView):
    def post(self, request):
        logout_response = Response()
        logout_response.delete_cookie('jwt')
        logout_response.data = {
            'message': 'Logout successful'
        }

        return logout_response
