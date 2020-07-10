// this is similiar to the responsd one
// get is used.. set cannot be used as only readable and sent...
// to check the method we use req.is()
// it is req.is('json') or can use the fullform
// also req.is('application/*')
// req.ip gives the ip address of the client

// URL HANDLING FOR QUERY
// link looks like www.google.com/jay?order=desc&shoe[color]=blue&.....
// here req.query.order=desc and req.query.shoe.color=blue and so on
// to get the path we use req.path