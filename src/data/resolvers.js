const resolvers = {
  Query: {
    allName: () => {
      return [{ name: "ivan" }];
    }
  }
};

module.exports = resolvers;
