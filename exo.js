const { Client } = require("pg")
const client = new Client({
  connectionString: "postgresql://localhost/pg-lesson-one"
});

client.connect()

//afficher nom en fonction de l'id
async function getStudents(id){
    const result = await client.query(`SELECT (name) from students where id= ${id}`)
    console.log(`SELECT (name) from students where id= ${id} : ${result.rows}`)
}

// Mettre à jour
async function updateStudent(name,id) {
    const result = await client.query("UPDATE students SET name=($1) where (id)=($2)", [name,id])
    console.log(`UPDATE students SET name=($1) where (id)=($2)", [name,id] : User updated for ID ${id} name ${name}`)
}

// delete
async function deleteStudent (id) {
    const results = await client.query(
      "DELETE FROM students WHERE id=($1)",[id])
    console.log(`DELETE FROM students WHERE id=($1)",[id] : Delete succed for ID ${id}`)
  }

// inserer
async function addStudent(name){
      if(!name){
          return;
      }
      const result = await client.query("INSERT INTO students (name) VALUES ($1) RETURNING *", [name]);
      console.log(`INSERT INTO students (name) VALUES ($1) : Job done for ${name} ${result.rows[0]}!` ); // we are using [0] because there is only 1 record here.s
    }

// afficher
async function getStudents() {
  const result = await client.query("SELECT * from students");
  console.log(`SELECT * from students ${result.rows}`)
}

addStudent()
deleteStudent(14)
updateStudent('toto',2)
getStudents(12)
getStudents().then(() => process.exit(0))
