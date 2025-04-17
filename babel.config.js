module.exports = function (api){
    api.cache(true);
    return{
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module:react-native-dotenv',
                {
                moduleName: '@env', //Permite llamar al .env
                path: '.env',
                blocklist: null,
                allowlist: null,
                safe: false,
                allowUndefined: true,
                },
            ],
            'react-native-reanimated/plugin'
        ],
    }
}