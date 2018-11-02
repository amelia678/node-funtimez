
function hello(whom) {
    console.log(`Send nodes ${whom}`);
    
}

function goodbye(whom) {
    console.log(`no more nodes ${whom}`);
}
// 1.export the hello function
module.exports = {
    hello, //equivalent to hello: hello
    goodbye //equivalent to goodbye: goodbye

};

