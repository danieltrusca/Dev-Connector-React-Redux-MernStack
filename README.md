# Dev-Connector-React-Redux-MernStack

-use npx create-react-app dev-connector

-use express validator: npm i express-validator
https://express-validator.github.io/docs/
if you are having the same question what is the difference between check and body, the answer is body
is checking just req.body and check is checking req.body, req.headers, req.cookies and many more
const { check, validationResult } = require("express-validator");

-for getting your avatar from gravatar use
npm i gravatar
const gravatar = require('gravatar');
const avatar = gravatar.url(email, {
s: "200",
r: "pg",
d: "mm",
});

      s-size
      r-rating (pg-parental quide, we want to be sure to avoid naked pics)
      d-default (mm brings up a default form)

-https://jwt.io/
npm i jsonwebtoken

const payload = {
user: {
id: user.id,
},
};

jwt.sign(
payload,
config.get("jwtSecret"),
{ expiresIn: "5 days" },
(err, token) => {
if (err) throw err;
res.json({ token });
}
);
