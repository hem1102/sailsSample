module.exports = {

  checkUser: async ({user}) => {
    try {
      let where = {
        email: user.email,
        password: user.password
      }

      // 根據 model 的 spec 完成下列實作
      let userExist = await User.findOne({where});

      return userExist;

    } catch (e) {
      throw e;
    }
  },

  signupUser: async ({user}) => {
    try
    {

      let usersignup = await User.create({
        email: user.email,
        password: user.password
      });
      
      return usersignup;

    } catch (e) {
      throw e;
    }
  },
}
