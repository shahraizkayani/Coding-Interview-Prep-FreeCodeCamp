/*
First create a buffer that is 64-bytes. Then create a Int32Array typed array with a view of it called i32View.


*/
var bytesize = 64;
var buffer = new ArrayBuffer(bytesize);
var i32view = new Int32Array(buffer);
