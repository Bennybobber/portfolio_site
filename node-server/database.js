
async function getLanguages(cb){

  const experience = async () => { 
    fs.readFile('experience.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    //console.log(student);
    return data
    });
  }
  console.log(experience)
}

module.exports = {getLanguages}