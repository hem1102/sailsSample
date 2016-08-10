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

      let userCreat = await UserService.createUser({user});

      // 回傳驗證結果
      res.view('info.jade', {user: userCreat, loginSuccess: true});
    } catch (e) {
      res.serverError(e);
    }
  },
  uploadimg: function(req, res) {
    if (req.method === 'GET')
        return res.json({ 'status': 'GET not allowed' });
    //	Call to /upload via GET is error

    var uploadFile = req.file('uploadFile');
    console.log(uploadFile);

    uploadFile.upload({ dirname: '../../assets/images' }, function onUploadComplete(err, files) {
    // Earlier it was ./assets/images .. Changed to ../../assets/images
    //	Files will be uploaded to ./assets/images
    // Access it via localhost:1337/images/file-name

        if (err) return res.serverError(err);
        //	IF ERROR Return and send 500 error with error

        console.log(files);
        res.json({ status: 200, file: files });
    });
  }

}
