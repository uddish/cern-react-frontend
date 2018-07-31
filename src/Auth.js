// import simpleOAuth from 'simple-oauth2';
// import configs from './configs';
// import https from 'https';
// import jwt from 'jsonwebtoken';
//
//
// const oauthClient = simpleOAuth.create({
//   client: {
//     id: configs.oauth.config.client_id,
//     secret: configs.oauth.config.secret,
//   },
//   auth: {
//     tokenHost: configs.oauth.config.tokenHost,
//     tokenPath: configs.oauth.config.tokenPath,
//     authorizePath: configs.oauth.config.authorizePath,
//   },
// });
//
// /**
//  * Redirects user to authorization page
//  */
// const authorizationURI = oauthClient.authorizationCode.authorizeURL({
//   scope: configs.oauth.config.scope,
//   state: configs.oauth.config.state,
// });
//
// /**
//  * Callback for OAuth2.0 implementation
//  * @param {Request} req
//  * @param {Response} res
//  */
//  async function oauthCallback(req, res) {
//    const code = req.query.code;
//    const options = {
//      code: code,
//    };
//
//    try {
//      // Get authorization code from CERN OAuth2 service
//      const result = await oauthClient.authorizationCode.getToken(options);
//      const token = oauthClient.accessToken.create(result);
//      // Transform authroization code into an access token
//     const token = oauthClient.accessToken.create(result);
//     // Get user information and create session
//     getUserInfoCreateSession(req.session, token, res);
//    }
//    catch(error) {
//     console.error('Access Token Error', error.message);
//     return res.status(500).json('Authentication Failed');
//    }
//  }
//
//  /**
//   * Queries CERN OAuth2 service to get the user e-groups and user data
//   * @param {Express-session} session
//   * @param {AccessToken} token
//   * @param {Response} res
//   */
//  function getUserInfoCreateSession(session, token, res) {
//    if(session === undefined)  {
//      return res.status(500).json('Session is undefined');
//    }
//    if(token === undefined)  {
//      return res.status(500).json('Token is undefined');
//    }
//    getUserInformation(session, token, res);
//  }
//
//  function getUserInformation(session, token, res)  {
//    let options =  {
//      host: config.oauth.config.resourceHost,
//      path: config.oauth.config.resourcePathGroups,
//      headers: {
//        Authorization: `Bearer ${token.token.access_token}`,
//      },
//    };
//    //Querying user groups
//    https
//     .request(options, response => {
//       let jsonGroups = '';
//       response.on('data', function(data) {
//         jsonGroups += data;
//       });
//       response.on('end', function() {
//         const groups = JSON.parse(jsonGroups).groups;
//         // After querying groups, lets query user data
//         options.path = configs.oauth.config.resourcePathUser;
//         https
//           .request(options, response => {
//             let jsonUser = '';
//             response.on('data', function(data) {
//               jsonUser += data;
//             });
//             response.on('end', function() {
//               const user = JSON.parse(jsonUser);
//               createSession(user, groups, session, res);
//             });
//           })
//           .end();
//       });
//     })
//     .end();
//  }
//
//  /**
//  * Generate a JWT Token, containing username and groups, to be used in Kapiato
//  * @param {string} username
//  * @param {string} groups
//  */
// function generateToken(username, groups) {
//     const payload = {
//         username: username,
//         groups: groups,
//     };
//     const token = jwt.sign(payload, configs.oauth.config.jwt_secret);
//     return token;
// }
//
//  function createSession(user, group, session, res) {
//    const tokenJWT = generateToken(user.username, groups);
//    session.user = user;
//    session.access_token = tokenJWT;
//    session.isAuthenticated = true;
//    res.redirect('/');
//  }
