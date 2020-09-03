exports.handler = function(event, context, callback) {
    const secretContent = `
    <h3>Welcome To The Secret Area</h3>
    <p>Here we can tell you this is just a <strong>test</strong> webpage of mine</p>
    `
    let body

    if (event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if (body.password == "sunday") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }
}