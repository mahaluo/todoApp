cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-badge.Badge",
      "file": "plugins/cordova-plugin-badge/www/badge.js",
      "pluginId": "cordova-plugin-badge",
      "clobbers": [
        "cordova.plugins.notification.badge"
      ]
    },
    {
      "id": "cordova-plugin-local-notification.LocalNotification",
      "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
      "pluginId": "cordova-plugin-local-notification",
      "clobbers": [
        "cordova.plugins.notification.local"
      ]
    },
    {
      "id": "cordova-plugin-local-notification.LocalNotification.Core",
      "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
      "pluginId": "cordova-plugin-local-notification",
      "clobbers": [
        "cordova.plugins.notification.local.core",
        "plugin.notification.local.core"
      ]
    },
    {
      "id": "cordova-plugin-local-notification.LocalNotification.Util",
      "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
      "pluginId": "cordova-plugin-local-notification",
      "merges": [
        "cordova.plugins.notification.local.core",
        "plugin.notification.local.core"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-badge": "0.8.8",
    "cordova-plugin-local-notification": "0.9.0-beta.2",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-screen-orientation": "3.0.2"
  };
});