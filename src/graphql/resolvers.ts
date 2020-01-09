const bcrypt = require("bcryptjs");

const persons = [
  { id: 1, firstName: "Joseph" },
  { id: 2, firstName: "Baka" },
  { id: 3, firstName: "Mary Ruth" }
];

export const resolvers = {
  Query: {
    books: async (_: any, __: any, { dataSources }: any) =>
      //  await dataSources.book.query()
      await dataSources.bookRepo.findAllBooks()
    // persons: async (_: any, __: any, { dataSources }: any) => {
    //   return persons; // dataSources.personRepo.findAllPersons();
    //   //return await dataSources.personRepo.findAllPersons();
    // }

    //books: () => books
  }
  // Mutation: {
  //   login: async (_, __, { dataSources }) => {
  //     user = await dataSources.user.find();
  //   },
  //   register: async (parent, { username, password }, dataSources, info) => {
  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     const user = await ctx.prisma.createUser({
  //       username,
  //       password: hashedPassword
  //     });
  //     return user;
  //   }
  // }
};
