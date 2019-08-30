
const _ = require('lodash');
const GbError = require('../util/errors');

const Guestbook = [];

function create(data) {
  const existing = _.find(Guestbook, entry => {
    return entry.name === data.name;
  });

  if (existing) {
    throw new GbError(1001);
  }

  Guestbook.push(data);
}

function getById(id) {
  const entry = _.find(Guestbook, { name: id });

  if (!entry) {
    throw new GbError(1002);
  }

  return entry;
}

function getAll() {
  return  _.orderBy(Guestbook, ['name']);
}


module.exports = {
  create,
  getById,
  getAll,
}