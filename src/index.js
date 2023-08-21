import app from './app.js';

const server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log(`Server running at http://localhost:3000/`);
});
