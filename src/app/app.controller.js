// noinspection JSUnusedLocalSymbols
angular
    .module("app.controller", [])
    .controller("AppCtrl", function ($scope, ZEN_UI, ZenLogger, Task_Tracker_Icon_Groups, Task_Tracker_Icon_Glyphs) {

        $scope.ZEN = ZEN_UI.COMPONENTS;
        $scope.Task_Tracker_Icon_Groups = Task_Tracker_Icon_Groups;
        $scope.Task_Tracker_Icon_Glyphs = Task_Tracker_Icon_Glyphs;

        var me = this;

        me.highlightAllElements = false;
        me.exampleModel = {
            ui1_login: null,
            ui1_password: null,
            ui2_data: [{
                year: 2017,
                months: [{
                    month: "July",
                    contracts: [{
                        active: true,
                        date: "29.07.2017 – 30.07.2017",
                        sum: "12 000"
                    }]
                }, {
                    month: "May",
                    contracts: [{
                        active: true,
                        date: "13.05.2017 – 14.05.2017",
                        sum: "11 500"
                    }]
                }, {
                    month: "April",
                    contracts: [{
                        active: true,
                        date: "28.04.2017 – 29.04.2017",
                        sum: "5 200"
                    }, {
                        active: false,
                        date: "01.04.2017 – 02.04.2017",
                        sum: "11 500"
                    }]
                }]
            }],
            ui3_activeToggle: "My tasks",
            ui3_tasks: [{
                taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.TRIVIAL,
                name: 'Trivial Task'
            }, {
                taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.MINOR,
                name: 'Minor Task'
            }, {
                taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.MAJOR,
                name: 'Major Task'
            }, {
                taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.CRITICAL,
                name: 'Critical Task'
            }, {
                taskType: Task_Tracker_Icon_Glyphs.task_type.TASK,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.BLOCKER,
                name: 'Blocker Task'
            }],
            ui3_new_features: [{
                taskType: Task_Tracker_Icon_Glyphs.task_type.NEW_FEATURE,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.TRIVIAL,
                name: "Trivial Feature"
            }, {
                taskType: Task_Tracker_Icon_Glyphs.task_type.NEW_FEATURE,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.MINOR,
                name: "Minor Feature"
            }],
            ui3_bugs: [{
                taskType: Task_Tracker_Icon_Glyphs.task_type.BUG,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.MAJOR,
                name: "Major Bug"
            }, {
                taskType: Task_Tracker_Icon_Glyphs.task_type.BUG,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.CRITICAL,
                name: "Critical Bug"
            }, {
                taskType: Task_Tracker_Icon_Glyphs.task_type.BUG,
                severity: Task_Tracker_Icon_Glyphs.color_task_severity.BLOCKER,
                name: "Blocker Bug"
            }]
        };
        me.tmpModel = {
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            radioButton1: null,
            radioButton2: null,
            combobox1: null,
            combobox2: 2,
            combobox3: null,
            comboboxArray: [{
                id: null,
                name: ""
            }, {
                id: 2,
                name: "el 2"
            }, {
                id: 22,
                name: "el 22"
            }, {
                id: 222,
                name: "el 222"
            }, {
                id: 2222,
                name: "el 2222"
            }],
            toggleButton1: false,
            toggleButton2: false,
            toggleButton3: false,
            toggleButton4: false,
            toggleButton5: false,
            toggleButton6: false,
            toggleButton7: false,
            toggleButton8: false,
            toggleGroup1: null,
            toggleGroup2: null,
            toggleGroup3: null,
            toggleGroup4: null,
            toggleGroup5: null,
            textfield1: null,
            textfield2: null,
            textfield3: null,
            textfield4: null,
            numberField1: 123,
            numberField2: 666,
            numberField3: 666,
            numberField5: null,
            timeField1: new Date(1970,0,1,0,0,0),
            timeField2: new Date(1970,0,1,0,0,0),
            timeField3: new Date(1970,0,1,0,0,0)
        };

        me.examples = [
            "Login Form",
            "Finance Data",
            "Task Tracker"
        ];
        me.components = {
            "Content"   : ["Text", "Clipped Text"],
            "Form"      : ["Combobox", "Push Button", "Toggle Button", "Checkbox", "Radio", "Text Field", "Number Field", "Time Field"],
            "Layout"    : ["Horizontal Layout", "Vertical Layout"],
            "Navigation": ["Horizontal Menu", "Path"],
            "Panel"     : ["Loading Mask", "Tree"],
            "Window"    : ["Modal", "Window"]
        };
        me.getExampleHref = function (itemName) {
            var result = "/examples/"+itemName.toLowerCase().replace(" ","_");
            return result;
        };
        me.getComponentHref = function (itemName) {
            var result = "/components/"+itemName.toLowerCase().replace(" ","_");
            return result;
        };
        me.logo = "data:image/png;base64,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";

        me.windowCloseButtonOnClick = function () {
            console.log("close window");
        };
        me.pushButtonOnClick = function () {
            console.log("click push button");
        };

        /*
        $scope.$watch(angular.bind(me, function () {
            return me.tmpModel.timeField1;
        }), function (e) {
            ZenLogger.trace("Time field 1 changed:", e, typeof e);
        });*/

    });
