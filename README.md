# jQuery RomanNumbers

A simple but powerful jQuery plugin for convert numbers to roman numbers.

## Getting Started

see the examples in the examples-directory.

### jQuery options

```
var ratingOptions = {
    selectors: {
        sourceFieldSelector: '.numeric-value',  // the source input
        targetFieldSelector: '.roman-value'     // the target input
    },
    direction: 'roman2numeric'                  // numeric2roman or roman2numeric
};
```

### convert numeric to roman

```
<div class="roman-numbers text-center block">
    <h4>from numeric</h4>
    <input type="number" class="text-center form-control numeric-value">
    <h4>to roman</h4>
    <input type="text" readonly="readonly" class="text-center form-control roman-value">
</div>

<script src="../dist/js/jquery.roman-numbers.min.js"></script>
<script>
    var options = {
        selectors: {
            sourceFieldSelector: '.numeric-value',
            targetFieldSelector: '.roman-value'
        },
        direction: 'numeric2roman'
    };

    $(".roman-numbers").romanNumbers(options);
</script>
```

### convert roman to numeric

```
<div class="roman-numbers text-center block">
    <h4>from roman</h4>
    <input type="text" class="text-center form-control numeric-value">
    <h4>to numeric</h4>
    <input type="text" readonly="readonly" class="text-center form-control roman-value">
</div>

<script src="../dist/js/jquery.roman-numbers.min.js"></script>
<script>
    var options = {
        selectors: {
            sourceFieldSelector: '.numeric-value',
            targetFieldSelector: '.roman-value'
        },
        direction: 'roman2numeric'
    };

    $(".roman-numbers").romanNumbers(options);
</script>
```
