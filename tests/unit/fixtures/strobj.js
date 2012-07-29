
// this generates 'Do not use String as a constructor' unless "strobj" is set
var mystr = new String("blah blah blah");

// this generates 'Do not use Number as a constructor' unless "strobj" is set
var mynum = new Number(10); 

// this always generates 'Do not use Boolean as a constructor'
var mynum = new Boolean(10); // no reason to ever need this

// this always generates 'Do not use JSON as a constructor'
var myjjj = new JSON(); // this is always bad
