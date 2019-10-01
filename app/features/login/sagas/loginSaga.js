import { put, call, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loginActions from 'app/features/login/actions';
import { navigateToHome } from 'app/navigation/NavigationHelpers';

export default function* fetchLogin() {
  yield put(loginActions.enableLoader());

  // call api
  // const respose= yield call...
  yield delay(2000);
  const response = {
    success: true,
    data: { id: 1 },
  };

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader({}));
    yield call(navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader({}));
    setTimeout(() => {
      Alert.alert('Login fail!');
    }, 200);
  }
}
