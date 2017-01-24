import express from 'express';
import validateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';

import User from '../models/user';

let router = express.Router();

router.post('/', (req,res) => {
  console.log(req.body);
  //will return some data
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    //get data from forms
    const { username, password, email } = req.body;
    //hash pw
    const password_digest = bcrypt.hashSync(password, 10); //synchronous function, 2nd parameter is # of times salted

    //use user model to forge object; create user
    //2nd parameter specify options; timestamp: true prevents current date
    User.forge({
      username, email, password_digest
    }, { hasTimestamps: true }).save()
      .then(user => res.json({ success: true }))
      .catch(err => res.status(500).json({ error: err }));

  } else {
    res.status(400).json(errors);
  }
});

export default router;
