/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },

  create: function (req, res) {
    var params = req.params.all();

    User.create({name: params.name}).exec(function createCB(err, created){
        return res.json({
          notice: 'Created user with name ' + created.name
        });
      }
    );
  },


  /**
   * `UserController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `UserController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `UserController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

