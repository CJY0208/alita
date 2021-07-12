import { IApi } from '@umijs/types';

export default function (api: IApi) {
  let plugins = [
    // commands
    require.resolve('./plugins/commands/version'),
    require.resolve('@alitajs/generate'),

    // bundle configs
    require.resolve('@umijs/plugin-request'),
    require.resolve('@umijs/plugin-dva'),
    require.resolve('@umijs/plugin-antd'),
    require.resolve('./plugins/features/appType'),
    require.resolve('@alitajs/routes'),
    require.resolve('@alitajs/router'),
    require.resolve('@alitajs/keep-alive'),
    require.resolve('@alitajs/main-path'),
    require.resolve('@alitajs/retain-log'),
    require.resolve('./plugins/defaultConfig'),
    require.resolve('./plugins/features/complexRoute'),
    require.resolve('@umijs/plugin-esbuild'),
    require.resolve('./plugins/features/displayName'),
    require.resolve('./plugins/features/packageId'),
    require.resolve('./plugins/features/displayIcon'),
    require.resolve('./plugins/features/noBuiltInPlugins'),
    require.resolve('@umijs/plugin-helmet')
  ];
  if (api.userConfig.appType !== 'pc') {
    plugins.push(require.resolve('@alitajs/hd'));
    plugins.push(require.resolve('@alitajs/layout'));
  }
  if (api.userConfig.mfsu) {
    plugins.push(require.resolve('./plugins/features/mfsu'));
  }
  if (api.userConfig.appType === 'cordova') {
    plugins.push(require.resolve('@alitajs/cordova'));
  }
  // debug and console
  if (api.userConfig.aconsole) {
    plugins.push(require.resolve('@alitajs/aconsole'));
  }
  return {
    plugins,
  };
}
