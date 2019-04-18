# STopbarShowHideOnScrollComponent

Provide a simple way to create a topbar that display/hide itself on scroll up/down.

### Example
```html
	<s-topbar-show-hide-on-scroll>
  <!-- my cool topbar here... -->
</s-topbar-show-hide-on-scroll>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

Extends **SWebComponent**




## Attributes

Here's the list of available attribute(s).

### scrollUp

Specify the scroll up value needed to display the topbar

Type : **{ Integer }**

Default : **10**


### placeholder

Specify if want a placeholder to take the place of the original topbar or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**


### keepShown

Specify if want to keep the topbar shown or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **false**


### keepHided

Specify if want to keep the topbar hided or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **false**




## Methods


### show

Show the topbar


### hide

Hide the topbar


### isShown

Check if the topbar is shown or not

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** true if shown, false if not