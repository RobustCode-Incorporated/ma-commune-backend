const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: "service_account",
      projectId: "ma-commune-66fc3",
      private_key_id: "3a54147eb287d0be62b3cfc7f21b7b2aa8c7027e",
      private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCcyYC6ZKIKunK\nAS9RL6O/Z1N8/dK0pExqJ10XvknLY96hHUK0s9xDNK4mmpE33qyMv/LEzlArtRqT\nlsCg75MP2hPbmCmGgp+LWD/V524e7uybUJXY/NfSKz2tyaD6KULM1QRN0NK/y+If\nqUuEXOyLufPCL7SHBP1n8vKTCqDoDf/850ae/aSpyxFOatUtHH6L5UE0sHYASitg\nhRg2+bJ4njqRNrDI+Q4ZZQPxd+F9LPSWyuzNcMLnM4e8AGe9FccXrWTvV1CskRoo\nniv6AZs7VdjT9J6fRmVB452G8BPDSLBg6FZQGQZzEhH6+7VWIian2+oyoC8+BvQog\nBhu1ADRLAgMBAAECggEAC6QgJPF908gZ6f2LKyWafIV/ko6RlD330y0bHiZGvbXz\naJrbWP0hlSZsvKPpSLp8gwqkypJ9azhy6F4QlzHwkHTiVnW0GrjsO0fjvncV+SUd\npii7Z9uvQgZTsXlOOVvKA4BHOy9ixpe6qGGWw0xa3vyZcskvWhv63cPGMPZkbq/5\nF6ofjB5/W7YbQcr+VL0AJk9ppxnYKbgAZ3smT22qwriN3yosgX8A3PiwrB7J3J16\nj5On9SdnuXkoox3fLxaSvcJVNXod+/Kwty9H1Ovs0M0JBENsjPMs41vWWGFPcimr\n32Rq5NINYHyW8S8pwbb6wIRdZsskhVxb6LkJWObD8QKBgQDwBb3EOThI55/oMY7t\n0rJ9glclHRmyAcH1tx23Syb4QWU85qpybYCjc/fG7PRpJPZGaDgOAtKe9y5zEfJB\nhpUG/YNvdtvaUVuOLGrpWWyHnjHsQCWphFAse2PphoM5A9zJT4IZim66isrqbNUR\nHj4+tiUY0nW0a0WLCzjLsxY+0QKBgQDPZMwPg0rsGxI0kf7FR1cOjlSYnebfbUeS\n1jnAV1IL2R1aNL1lj2g2MEVMGi2rmmKlXq4LNH3JDiOsvTR2eGtLg+Sq7/ZkT53F\nBQgrD/YFh3dR4tr8voI13bDFWbWJQNhC37nbr/4yBWX4CL/T3uCLjRnWadv3O9yU\nkzkppVHgWwKBgQDMw7ke+8m+uIu85PqQfZ10YYvCx86yA7nay/t38Y8vX2rkx8xF\njpGd4ENT27avNK89ZY/ctB/HKgzgckEAEbZ1njVRFE9/MsUux0n2BSoHkLf6WsdG\nlPBo4mNcSDsOmvLycvgEngrU7a8qyuoCjpB/o5iGUpXD83gCpPIxJXkm4QKBgHss\nR1GzTW0ayt40E1cBfr/jYnTd2v+5fHfGCbilY9IrmZY4mn/WAzOjyZRgO92eLJZA\nvCdlfotJfYCbQqxV6ouIAuhO6kw7SN15lpdUvG4ePYyBqkPPta/eQZ2EISAqRga5\nrz29sb/tmtkMAToJNd1L6RuB9aVJhUEsixej2xPfAoGBANZMv/HJGYZCLomK3stu\n5p3SmUZUSDHfGmHuYLT5Ud4tmyQYxbkwItnyd5KXheYNOUoJxY5JP6jKG7nU64p8\n5ZA0R0WBITH1abc2wFc/yJXw41f3Zhs0kpuCTo5/J+xabpfpZ6gGx4lkdlIQ1LaS\n5aawaWCrhsoOUSWY8yQFGs12\n-----END PRIVATE KEY-----\n`,
      clientEmail: "firebase-adminsdk-fbsvc@ma-commune-66fc3.iam.gserviceaccount.com",
      clientId: "102428218683034779423",
      authUri: "https://accounts.google.com/o/oauth2/auth",
      tokenUri: "https://oauth2.googleapis.com/token",
      authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
      clientX509CertUrl: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40ma-commune-66fc3.iam.gserviceaccount.com"
    }),
  });
}

module.exports = admin;