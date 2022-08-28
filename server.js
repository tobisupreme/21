const express = require("express")
const app = express()
const PORT = 8000

const rappers = {
  "21 savage": { age: 29, birthName: "Charles Hayden Savage", birthLocation: "London, England" },
  "falz": { age: 31, birthName: "Folarin Falana", birthLocation: "Ibadan, Oyo" },
  "taz": { age: 18, birthName: "Taz", birthLocation: "Taz, Taz" },
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (req, res) => {
  const rapperName = req.params.name.toLowerCase()
  if (rappers[rapperName]) {
    res.json(rappers[rapperName])
  } else {
    res.json(rappers.taz)
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})
