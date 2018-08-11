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
    }
};
```

### default html template 

```
<div class="roman-numbers">
    <input type="number" class="numeric-value">
    <input type="text" readonly="readonly" class="roman-value">
</div>
```