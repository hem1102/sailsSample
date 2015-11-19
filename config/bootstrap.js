/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = async (cb) => {
  try {
    let user = await User.create({name: 'testuser'});
    let post = await Post.create({title: 'testTitle'});
    await user.setPosts([post]);

    cb();
  } catch (e) {
    cb(e);
  }
};
