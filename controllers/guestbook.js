
const Guestbook = require('../models/guestbook');

function postEntry (req, res) {
  const data = req.body;

  try {
    Guestbook.create(data);
  } catch (err) {
    res.statusCode = err.status;
    res.send(err.message);
    return;
  }

  res.send(`Hola, ${data.name}!, Gracias por tu mensaje.`);
  
}

function getEntry (req, res) {
  const entryId = req.params.name;
  let entry;

  try {
    entry = Guestbook.getById(entryId);
  } catch (err) {
    res.statusCode = err.status;
    res.send(err.message);
    return;
  }

  // res.send(entry);
  res.render('entry', { entry })
}

function getEntries (req, res) {
  const entries = Guestbook.getAll();

  // res.send(entries);
  res.render('entries', { entries });
}


module.exports = {
  postEntry,
  getEntry,
  getEntries
};