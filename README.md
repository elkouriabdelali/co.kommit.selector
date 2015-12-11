# com.kommit.selector

This is a simple widget to use when you have an Array de strings or
object and need the user to select one item.


## Basic Usage
with a simple Array

```javascript

  // Alloy.createWidget('co.kommit.selector').init({list: someArray, title: "some title"}, afterSelectCallback, createNewCallback);

  var items = ["one", "two", "three", "fourt"];


  Alloy.createWidget('co.kommit.selector').init({list: items, title: "Select one item"}, function(selected) {
        alert("the item " + selected + "was selected");
  });


```
