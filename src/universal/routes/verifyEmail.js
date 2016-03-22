export default {
  path: 'verify-email/:verifiedEmailToken',
  getComponent: async (location, cb) => {
    let component = await System.import('universal/modules/auth/containers/VerifyEmail/VerifyEmailContainer');
    cb(null, component);
  }
};
