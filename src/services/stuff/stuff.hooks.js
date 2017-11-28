
const debug = message => context => {
  console.log(message, context.data);
};

const mutate = context => {
  context.data = {
    asdf: "asdf"
  };
};

module.exports = {
  before: {
    all: [debug('before'), mutate, debug('after')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
