
import readdir from 'recursive-readdir';

const readdirs = (dirs, callback) => {
    let list = [];

    readdir(dirs.shift(), function (err, res) {
        if (err) {
            return callback(err);
        }

        list = res;

        if (!dirs.length) {
            return callback(null, list);
        }

        readdirs(dirs, (_err, _res) => {
            if (_err) {
                return callback(_err);
            }

            list = list.concat(_res);

            if (!dirs.length) {
                return callback(null, list);
            }
        })
    });
};

module.exports = readdirs;
