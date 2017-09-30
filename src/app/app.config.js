angular
    .module("app.config", [])
    .config(function ($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
        $urlRouterProvider.otherwise("/");
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state("___", {
                controller: "AppCtrl",
                controllerAs: "appCtrl",
                abstract: true
            })
            .state("___.examples", {
                state: "___.examples",
                url: "/examples",
                abstract: true
            })
            .state("___.examples.login_form", {
                url: "/login_form",
                templateUrl: "views/examples/login_form.view.html"
            })
            .state("___.examples.finance_data", {
                url: "/finance_data",
                templateUrl: "views/examples/finance_data.view.html"
            })
            .state("___.examples.task_tracker", {
                url: "/task_tracker",
                templateUrl: "views/examples/task_tracker.view.html"
            })
            .state("___.components", {
                url: "/components",
                abstract: true
            })
            .state("___.components.checkbox", {
                url: "/checkbox",
                templateUrl: "views/components/checkbox.view.html"
            })
            .state("___.components.clipped_text", {
                url: "/clipped_text",
                templateUrl: "views/components/clipped_text.view.html"
            })
            .state("___.components.combobox", {
                url: "/combobox",
                templateUrl: "views/components/combobox.view.html"
            })
            .state("___.home", {
                url: "/",
                templateUrl: "views/home.view.html"
            })
            .state("___.components.horizontal_layout", {
                url: "/horizontal_layout",
                templateUrl: "views/components/horizontal_layout.view.html"
            })
            .state("___.components.horizontal_menu", {
                url: "/horizontal_menu",
                templateUrl: "views/components/horizontal_menu.view.html"
            })
            .state("___.components.loading_mask", {
                url: "/loading_mask",
                templateUrl: "views/components/loading_mask.view.html"
            })
            .state("___.components.modal", {
                url: "/modal",
                templateUrl: "views/components/modal.view.html"
            })
            .state("___.components.number_field", {
                url: "/number_field",
                templateUrl: "views/components/number_field.view.html"
            })
            .state("___.components.path", {
                url: "/path",
                templateUrl: "views/components/path.view.html"
            })
            .state("___.components.push_button", {
                url: "/push_button",
                templateUrl: "views/components/push_button.view.html"
            })
            .state("___.components.radio", {
                url: "/radio",
                templateUrl: "views/components/radio.view.html"
            })
            .state("___.components.text", {
                url: "/text",
                templateUrl: "views/components/text.view.html"
            })
            .state("___.components.text_field", {
                url: "/text_field",
                templateUrl: "views/components/text_field.view.html"
            })
            .state("___.components.time_field", {
                url: "/time_field",
                templateUrl: "views/components/time_field.view.html"
            })
            .state("___.components.toggle_button", {
                url: "/toggle_button",
                templateUrl: "views/components/toggle_button.view.html"
            })
            .state("___.components.tree", {
                url: "/tree",
                templateUrl: "views/components/tree.view.html"
            })
            .state("___.components.vertical_layout", {
                url: "/vertical_layout",
                templateUrl: "views/components/vertical_layout.view.html"
            })
            .state("___.components.window", {
                url: "/window",
                templateUrl: "views/components/window.view.html"
            });
    });
