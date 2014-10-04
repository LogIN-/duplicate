/* 
* @Author: login
* @Date:   2014-10-04 14:03:31
* @Last Modified by:   login
* @Last Modified time: 2014-10-04 14:10:43
*/

var duplicate = require('./src/build/Release/duplicate');

/*
-R --recurse:      for each directory given after this option follow
                   subdirectories encountered within
-s --symlinks      follow symlinks
-H --hardlinks     normally, when two or more files point to the same
                   disk area they are treated as non-duplicates; this
                   option will change this behavior
-n --noempty       exclude zero-length files from consideration
-f --omitfirst     omit the first file in each set of matches
-1 --sameline      list each set of matches on a single line
-S --size          show size of duplicate files
-d --delete        prompt user for files to preserve and delete all
                   others; important: under particular circumstances,
                   data may be lost when using this option together
                   with -s or --symlinks, or when specifying a
                   particular directory more than once; refer to the
                   fdupes documentation for additional information    
*/

var options = ['recurse', 'symlinks'];
var directory = '/home/login/documents/repos/duplicate/src/testdir';

duplicate(options, directory, function(result){
    console.log(result);
});