'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (dirs, callback) {
    var list = [];

    (0, _recursiveReaddir2.default)(dirs.shift(), function (err, res) {
        if (err) {
            return callback(err);
        }

        list = res;

        if (!dirs.length) {
            return callback(null, list);
        }

        readdirs(dirs, function (_err, _res) {
            if (_err) {
                return callback(_err);
            }

            list = list.concat(_res);

            if (!dirs.length) {
                return callback(null, list);
            }
        });
    });
};

var _recursiveReaddir = require('recursive-readdir');

var _recursiveReaddir2 = _interopRequireDefault(_recursiveReaddir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;