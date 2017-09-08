import {takeEvery} from 'redux-saga';
import {fork,call,put} from 'redux-saga/effects';
import {getRecentPosts} from '../services/api';
import {browserHistory} from 'react-router';

function * fetchRecentPosts(feathersApp){
    const posts = yield call(getRecentPosts,feathersApp);
    yield put({type: "RECENT_POST_SUCCEEDED",posts});
}

function * recentPostSaga(feathersApp){
    yield * takeEvery("RECENT_POST_REQUESTED",fetchRecentPosts,feathersApp);
}

export default function* root(feathersApp){
    yield[
        fork(recentPostSaga,feathersApp)
    ]
}