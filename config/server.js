module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0", "http://strapi.ixia2986.odns.fr"),
    port: env.int("PORT", 1337),
    settings: {
        cors: {
            enabled: true,
            // headers: '*',
            origin: ["http://strapi.ixia2986.odns.fr"],
        },
    },
    admin: {
        auth: {
            secret: env("ADMIN_JWT_SECRET", "43bb85937de5b1aa1a070075975e9433"),
        },
    },
});