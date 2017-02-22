

var assert = require('assert');
var path = require('path');
var readdirs = require('../index');

const getAbsolutePaths = files => files.map(file => path.join(__dirname, file));

describe('readdirs', () => {
    it('correctly lists all files in nested directories', function(done) {
        let argDirs = getAbsolutePaths([
            'testdir/a',
            'testdir/b',
            'testdir/c'
        ]);
        let expected = getAbsolutePaths([
            'testdir/a/1.md',
            'testdir/a/2.md',
            'testdir/a/3.md',
            'testdir/b/1.md',
            'testdir/b/2.md',
            'testdir/b/3.md',
            'testdir/b/a/1.md',
            'testdir/b/a/2.md',
            'testdir/b/a/3.md',
            'testdir/b/b/1.md',
            'testdir/b/b/2.md',
            'testdir/b/b/3.md',
            'testdir/c/1.md',
            'testdir/c/2.md',
            'testdir/c/3.md',
            'testdir/c/a/1.md',
            'testdir/c/a/2.md',
            'testdir/c/a/3.md'
        ]);

        readdirs(argDirs, (err, res) => {

            assert.ifError(err);
            assert.deepEqual(res.sort(), expected.sort());

            done();
        })
    });
});
