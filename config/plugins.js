module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("emailSMTP"),
      port: env("SMTP_PORT", 465),
      auth: {
        user: env("usernameEmail"),
        pass: env("passwordEmail"),
      },
    },
    settings: {
      defaultFrom: env("usernameEmail"),
      defaultReplyTo: env("usernameEmail"),
    },
  },
  upload: {
    enabled: true,
  },
});
