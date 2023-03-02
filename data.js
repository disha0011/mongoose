const bcrypt = require("bcryptjs");

const data = {
  users: [
    {
       
      name: "disha",
      password: bcrypt.hashSync("disha@909", 8),
      isAdmin: true,
      email: "disha@gmail.com",
    },
    {
      name: "jinal",
      password: bcrypt.hashSync("jinal@123", 8),
      isAdmin: true,
      email: "jinal@gmail.com",
    },
    {
      name: "prit",
      password: bcrypt.hashSync("prit@123", 8),
      isAdmin: true,
      email: "prit@gmail.com",
    },
  ],

};




module.exports = data;
