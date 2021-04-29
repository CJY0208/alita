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
  if (api.userConfig.appType === 'cordova') {
    plugins.push(require.resolve('@alitajs/cordova'));
  }
  if (api.userConfig.appType === 'micro') {
    plugins.push(require.resolve('@alitajs/micro'));
  }
  if (api.userConfig.appType === 'native' || api.userConfig.appType === 'micro') {
    plugins.push(require.resolve('@alitajs/native'));
  }
  if (api.userConfig.tabsLayout) {
    plugins.push(require.resolve('@alitajs/tabs-layout'));
  }

  // 如果是 pc ，则为完全无内置插件的纯净版本,pc 项目需要的组件由项目自己安装
  if (api.userConfig.appType === 'pc') {

  }
  return {
    plugins,
  };
}
