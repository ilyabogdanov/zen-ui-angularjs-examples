
angular
    .module( "app", [
        "templates-main",
        "ui.router",
        "app.config",
        "TaskTrackerIcon",
        "app.controller",
        "ZenUI"
    ])
    .run(function (ZEN_UI, ZenLogger, ZEN_LOG_LEVEL) {
        ZEN_UI.SYSTEM.LOADING_MASK_LOCATION = "assets/img/loading.gif";
        ZenLogger.setLevel(ZEN_LOG_LEVEL.OFF);
    });

