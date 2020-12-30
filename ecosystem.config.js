   module.exports = {
     apps: [
       {
         name: 'sapper',
         cwd: '/usr/src/app/sapper/',
         script: 'NODE_ENV=production && npm run build && npm run start',
         instances:4 ,
         autorestart: true,
         watch: false,
         max_memory_restart: '512M',
         env: {
           NODE_ENV: 'development',
         },
         env_production: {
           NODE_ENV: 'production',
         },
       },
     ],
   };
