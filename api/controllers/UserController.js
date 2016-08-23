module.exports = {
  signin: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let user = req.body;

      // 呼叫 UserService.checkUser 完成相關處理
      let userExist = await UserService.checkUser({user});

      // 回傳驗證結果
      res.view('info.jade', {user: userExist, loginSuccess: true});

    } catch (e) {
      res.serverError(e);
    }
  },
  signup: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let user = req.body;


      let newuser = await UserService.signupUser({user});
      /******************************
      let user = await User.create({
        email: req.body.email,
        password: req.body.password
      });
      /********************************/


      // 呼叫 UserService.checkUser 完成相關處理
      let userExist2 = await UserService.checkUser({user});

      // 回傳驗證結果
      res.view('info.jade', {user: userExist2, loginSuccess: true});

    } catch (e) {
      res.serverError(e);
    }
  },
}
