from rest_framework.exceptions import AuthenticationFailed


class AuthenticationChecker:
    auth_error_messages = {
        'user': {'not_found': 'User is not found.', 'not_token': 'Unauthenticated'},
        'password': {'incorrect': 'Password is incorrect'},
    }

    def check_if_user(self, user):
        if user is None:
            raise AuthenticationFailed(self.auth_error_messages['user']['not_found'])

    def check_password(self, user, password):
        if not user.check_password(password):
            raise AuthenticationFailed(self.auth_error_messages['password']['incorrect'])

    def check_jwt_token(self, token=None):
        if not token:
            raise AuthenticationFailed(self.auth_error_messages['user']['not_token'])
