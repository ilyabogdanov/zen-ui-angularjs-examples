
// noinspection JSCheckFunctionSignatures
angular
    .module("TaskTrackerIcon", [])
    .constant("Task_Tracker_Icon_Groups", {
        PROJECT_STATUS: "project_status",
        MONOTONE_TASK_SEVERITY: "monotone_task_severity",
        COLOR_TASK_SEVERITY: "color_task_severity",
        TASK_STATUS: "task_status",
        TASK_TYPE: "task_type",
        TEXT_EDITOR: "text_editor"
    })
    .constant("Task_Tracker_Icon_Glyphs", {
        project_status: {
            IN_PROGRESS: "in_progress",
            SCHEDULED: "scheduled",
            PLANNED: "planned",
            FINISHED: "finished",
            CANCELED: "canceled"
        },
        monotone_task_severity: {
            TRIVIAL: "trivial",
            MINOR: "minor",
            MAJOR: "major",
            CRITICAL: "critical",
            BLOCKER: "blocker"
        },
        color_task_severity: {
            TRIVIAL: "trivial",
            MINOR: "minor",
            MAJOR: "major",
            CRITICAL: "critical",
            BLOCKER: "blocker"
        },
        task_status: {
            RESOLVED: "resolved",
            CANCELED: "canceled",
            DUPLICATE: "duplicate",
            IN_PROGRESS: "in_progress",
            OPEN: "open"
        },
        task_type: {
            TASK: "task",
            NEW_FEATURE: "new_feature",
            IMPROVEMENT: "improvement",
            BUG: "bug"
        },
        text_editor: {
            BOLD: "bold",
            ITALIC: "italic",
            UNDERLINE: "underline",
            STRIKETHROUGH: "strikethrough",
            CODE: "code",
            FILE_UPLOAD: "file_upload"
        }
    })
    .directive("zenTaskTrackerIcon", function () {
        return {
            link: function () {},
            replace: true,
            restrict: "E",
            scope: {
                zenGroup: "=",
                zenGlyph: "="
            },
            template: "<div class=\"zen_ui__static_raster_icon\" data-collection=\"task_tracker_collection\" data-group=\"{{zenGroup}}\" data-glyph=\"{{zenGlyph}}\"></div>"
        };
    });