// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'kkev5vr7c8'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-gqxaut6c.us.auth0.com',            // Auth0 domain
  clientId: '5u8v07at7zew02l2YpPfWkFwUE4LALra',          // Auth0 client id
  callbackUrl: 'http://huybt-bucket.s3-website-us-east-1.amazonaws.com/callback'
}