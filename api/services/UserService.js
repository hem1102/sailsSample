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
  createUser: async ({user}) => {
    try {
      let info = {
        email: user.email,
        password: user.password
      }

      // 根據 model 的 spec 完成下列實作
      let userCreat = await User.create(info);

      return userCreat;

    } catch (e) {
      throw e;
    }
  },
}
