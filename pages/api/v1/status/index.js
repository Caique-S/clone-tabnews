function status(req, res) {
  res.status(200).json({ mensagem: "Missão realizada com Êxito - API" });
}

export default status;
