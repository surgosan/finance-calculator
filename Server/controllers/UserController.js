const { User } = require('../models');
const errors = require('./errors');

module.exports = {
    async getUsers (req, res) {
      try {
          const users = await User.findAll();

          users.length === 0 ? errors.emptyReturn(res, 'No users found.') : res.send(users)
      } catch (error) { errors.errorHandler(res, error, 'Could not fetch users.') }
    },

    async getById (req, res) {
      try {
          const { id } = req.body;
          const user = await User.findByPk(id);
          res.send(user);
      } catch (error) { errors.errorHandler(res, error, 'Could not fetch user.') }
    },

    async verifyUser (req, res) {
      try {
          const { username, password } = req.body;
          const account = await User.findOne({
              where: { username: username }
          });
          if(!account) {
              res.send(false);
          } else if(password === account.password) {
              res.send(true);
          } else {
              res.send(false)
          }

      } catch (error) { res.send(false) }
    },

    async newUser (req, res) {
        try {
            const user = await User.create(req.body);
            res.send(`Welcome ${user.first_name}.`);
        } catch (error) { errors.errorHandler(res, error, 'Could not create user.') }
    },

    async deleteUser (req, res) {
        try {
            const { id } = req.body;
            await User.destroy({where: { id }});
            res.send('User deleted');
        } catch (error) { errors.errorHandler(res, error, 'Could not delete user.') }
    },

    async editUser (req, res){
        try {
            const { id } = req.body;
            const user = await User.findByPk(id);

            if(user)
            {
                await user.update(req.body, {
                    where: { id: id }
                });
                res.send(`${user.first_name} updated successfully.`)
            } else {
                res.send('User not found.')
            }
        } catch (error) { errors.errorHandler(res, error, 'Could not edit user.') }
    }
}