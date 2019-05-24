'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2U1N2YxNmRjY2UyODE0NGE5Zjk0ZTciLCJmaXJzdE5hbWUiOiJPdW1hciIsImxhc3ROYW1lIjoiRGlhcnJhIiwicm9sZSI6IkFkbWluIiwiaW1hZ2UiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLUZoYXF3ZzJ4ejVRL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFjL1IzZlJENDRMcXhrL3Bob3RvLmpwZyIsImlhdCI6MTU1ODYyODI5OX0.GnucOnDeShyD8-mzhoyi2BtVND-E9_nFP8tckO42Acw'; // npm i --save-dev supertest-as-promised


describe('App', function () {
  describe('Posts', function () {
    it('should pass auth check and get posts', function () {
      return (0, _supertestAsPromised2.default)(_server2.default).get('/api/customers').set('Authorization', 'Bearer ' + token).expect(200);
    });
  });
});

describe('App', function () {
  describe('Posts', function () {
    it('should pass auth check and get posts', function () {
      return (0, _supertestAsPromised2.default)(_server2.default).get('/api/customers/5c65e5f6f127020ced987500').set('Authorization', 'Bearer ' + token).expect(200);
    });
  });
});

describe('App', function () {
  describe('Posts', function () {
    it('should pass auth check and get posts', function () {
      return (0, _supertestAsPromised2.default)(_server2.default).get('/api/users').set('Authorization', 'Bearer ' + token).expect(200);
    });
  });
});

describe('App', function () {
  describe('Posts', function () {
    it('should pass auth check and get posts', function () {
      return (0, _supertestAsPromised2.default)(_server2.default).get('/api/users/5c916819d250284730363eea').set('Authorization', 'Bearer ' + token).expect(200);
    });
  });
});

// describe('App', () => {
//   describe('Posts', () => {
//     it('should pass auth check and get posts', () => request(app)
//       .get('/api/customers')
//       .set('Authorization', `Bearer ${token}`)
//       .expect(401));
//   });
// });