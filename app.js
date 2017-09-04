const express = require("express");
const path = require("path");
const csv = require("fast-csv");
const app = express();

//Set static path
app.use(express.static(path.join(__dirname, "public")));

// Holds physician data
const physicianData = [];

// Read CSV file and push it array
csv.fromPath("data/OP_DTL_OWNRSHP_PGYR2016_P06302017.csv")
  .on("data", function(data) {
    // console.log(data);
    physicianData.push(data);
  })
  .on("end", function() {
    console.log("done");
    console.log(physicianData);
  });

function compare(str1, str2){
    return str1 != null && str2!= null && str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
}

// API Route
app.get("/address", (req, res) => {

  // Read query params
  const fname = req.query.fname;
  const mname = req.query.mname;
  const lname = req.query.lname;
  console.log(fname + " " + mname + "  " + lname);

  // Identify matching records
  var result = null;
  for (var i = 0; i < physicianData.length; i++) {
    var row = physicianData[i];
    if (compare(row[2], fname) && compare(row[3], mname) && compare(row[4], lname)) {
      result = row;
      break;
    }
  }
  //const result  = physicianData.find(record[2] === fname && record[3] === mname && record[4] === lname);
  console.log("Physician match found  = " + result);
  if (result != null){
    res.send(result[6] + ", " + result[8] + ", " + result[9] + ", " + result[10] );
  }else {
      console.log("Error: No match found");
      res.sendStatus(204);
  }

});

app.listen(3000, () => {
  console.log("Server listens at port 3000");
});
