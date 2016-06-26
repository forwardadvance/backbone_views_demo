# Starting with Views

Views are little objects that manage a region of the DOM. They can either manage some existing HTML, or they can create a new set of elements.

## Exercise

* Create a new CatView object to show a cat. If you don't like cats, choose a different domain.
* Add a render method to the view, have it call $el.html() and pass it in a string.
* Add an initialize method to your view. Have it call render.
* Create an instance of your view, passing in a jQuery selector as an el attribute. refer to the demo if you can't remember how.

## Reading

Have a flick through <http://backbonejs.org/#View>

## Further exercise

Find out the answers to the following:

1. What is el?
2. What is $el?
3. What is $?
4. What is this.$? How is it different to plain old $?
