import database from "infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1+1 as sum");
  console.log(result);
  res.status(200).json({ mensagem: "Missão foi realizada com Êxito - API" });
}

export default status;
