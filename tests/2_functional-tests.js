const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('POST /api/threads/{board}', function (done) {
        chai
            .request(server)
            .post('/api/threads/general')
            .set('content-type', 'application/json')
            .send({text: "Hello", delete_password: '1234'})
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                done();
            });
    });
    test('GET /api/threads/{board}', function (done) {
        chai
            .request(server)
            .get('/api/threads/general')
            .set('content-type', 'application/json')
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                done();
            });
    });
    test('DELETE /api/threads/{board}', function (done) {
        chai
            .request(server)
            .delete('/api/threads/general')
            .send({thread_id: '671f9d7e6224f93458d9fee6', delete_password: '12345'})
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                assert.equal(res.text, "incorrect password");
                done();
            });
    });
    test('DELETE /api/threads/{board}', function (done) {
        chai
            .request(server)
            .delete('/api/threads/general')
            .send({thread_id: '671f9d7e6224f93458d9fee6', delete_password: '1234'})
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                assert.equal(res.text, "success");
                done();
            });
    });
    test('PUT /api/threads/{board}', function (done) {
        chai
            .request(server)
            .put('/api/threads/general')
            .send({thread_id: '671f9d7e6224f93458d9fee6'})
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                assert.equal(res.text, "reported");
                done();
            });
    });
    test('POST /api/replies/{board}', function (done) {
        chai
            .request(server)
            .post('/api/replies/general')
            .set('content-type', 'application/json')
            .send({thread_id: '671f9d6e6224f93458d9fed8', text: "Hello reply", delete_password: '1234'})
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                done();
            });
    });
    test('GET /api/replies/{board}', function (done) {
        chai
            .request(server)
            .get('/api/replies/general')
            .set('content-type', 'application/json')
            .query({thread_id: '671f9d6e6224f93458d9fed8'})
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                done();
            });
    });
    test('DELETE /api/replies/{board}', function (done) {
        chai
            .request(server)
            .delete('/api/replies/general')
            .send({thread_id: '671f9d6e6224f93458d9fed8', reply_id: '671fbf4393d7b3a02ee56766', delete_password: '12345'})
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                assert.equal(res.text, "incorrect password");
                done();
            });
    });
    test('DELETE /api/replies/{board}', function (done) {
        chai
            .request(server)
            .delete('/api/replies/general')
            .send({thread_id: '671f9d6e6224f93458d9fed8', reply_id: '671fbf4393d7b3a02ee56766', delete_password: '1234'})
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                assert.equal(res.text, "success");
                done();
            });
    });
    test('PUT /api/replies/{board}', function (done) {
        chai
            .request(server)
            .put('/api/replies/general')
            .send({thread_id: '671f9d6e6224f93458d9fed8', reply_id: '671fbf4393d7b3a02ee56766'})
            .end(function (err, res) {
                if (err) return console.error(err);
                assert.equal(res.status, 200);
                assert.equal(res.text, "reported");
                done();
            });
    });
});
