const { Client } = require('pg')
const connectionString = "postgresql://hg:12Feuer3@localhost:5432/hg"

select(connectionString);
console.log("Test");


select = async (cs) => {
    const client = new Client({
	connectionString: connectionString
    })
    
    client.connect()
    const res = await client.query('select * from hg.test;', (err, res) => {
	console.log(res.rows[0].name)
	client.end()
    })
}


    
