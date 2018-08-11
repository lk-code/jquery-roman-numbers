jQuery.fn.romanNumbers = function (options) {

    var defaults = {
        selectors: {
            sourceFieldSelector: '',
            targetFieldSelector: ''
        }
    };

    var romanNumbers = [
        {
            numeric: 1000,
            roman: 'm'
        },
        {
            numeric: 500,
            roman: 'd'
        },
        {
            numeric: 100,
            roman: 'c'
        },
        {
            numeric: 50,
            roman: 'l'
        },
        {
            numeric: 10,
            roman: 'x'
        },
        {
            numeric: 5,
            roman: 'v'
        },
        {
            numeric: 1,
            roman: 'i'
        }
    ];

    var settings = $.extend({}, defaults, options);

    var methods = {
        init: function (element) {
            var me = this;

            methods.validateSettings();
            methods.registerEvents(element);
        },

        validateSettings: function (element) {
            var me = this;

            if (settings.selectors.sourceFieldSelector === null || settings.selectors.sourceFieldSelector === '') {
                throw "settings 'sourceFieldSelector' is empty";
            }

            if (settings.selectors.targetFieldSelector === null || settings.selectors.targetFieldSelector === '') {
                throw "settings 'targetFieldSelector' is empty";
            }
        },

        registerEvents: function (element) {
            var me = this;

            $(element).children(settings.selectors.sourceFieldSelector).on("input", $.proxy(me.onSourceValueChanged, me, element));
        },

        onSourceValueChanged: function (element) {
            var me = this;
            var sourceNumber = $(element).children(settings.selectors.sourceFieldSelector).val();
            var targetField = $(element).children(settings.selectors.targetFieldSelector);
            var romanNumber = methods.getRomanNumberFromNumeric(sourceNumber, 0, "");

            targetField.val(romanNumber);
        },

        getRomanNumberFromNumeric: function(number, romanIndex, romanNumber) {

            var romanPair = romanNumbers[romanIndex];

            if(number >= romanPair.numeric) {
                romanNumber = romanNumber + romanPair.roman;
                number -= romanPair.numeric;

                if(number > 0) {
                    return methods.getRomanNumberFromNumeric(number, romanIndex, romanNumber);
                }
            } else {
                return methods.getRomanNumberFromNumeric(number, (romanIndex + 1), romanNumber);
            }

            return romanNumber;
        }
    };

    return this.each(function () {
        methods.init($(this));
    });
};