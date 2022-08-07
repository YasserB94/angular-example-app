# Angular Example-Application

In this repository I follow along with the introduction to angular on [angular.io](angular.io)
Since some features did not work on stackblitz (window alerts) I decided to clone it locally to complete the tour.

## Roadmap

### Creating the product list

used
` *ngFor` to repeat a `<div>` element for every product in the provided list.

Within the `<div>` I added an `<h3>` element that contain's the product's name by using _Angular's interpolation syntax_ (`{{ }}`) that allows me to render the property value as text.
`<h3> {{ product.name }}</h3>`

Next I had to turn these into links by surrounding them with an `<a>` element.
then I had to add a hovering tooltip by using the standard html `title` attribute. and use the _property binding syntax_ (`[ ]`) so I could use the property value within a template expression.
`<a [title]="product.name + ' details'"> {{ product.name }}</a>`

next I got introduced into the _`*ngIf` directive_ which sets a condition to wether the element is rendered or not. `<p *ngIf="product.description"> {{ product.description }} </p>` The discription only renders if there is a desciption.

The last step taught me how to _Bind an event_(`(event)="method()"`) to the component's class methods. by adding a button. `<button type="button"(click)="share()">Share</button>`

---

### Passing Data to a child component

Next I'll learn about passing data between different components.

First I have to create the child component by running the command `ng generate component product-alerts` which generates 4 new files in a dedicated folder for the component

Here Angular's documentation tells me to take note of the `@Component()` _decorator_ which indicates that the class in the product-alerts.component.ts file is a component. This is also where the metadata for the component resides.

Now I have to set this component up to reveice the product data by importing _Input_ from the _@angular/core_. `import { Input } from '@angular/core';`

Next I am told to add a product property to the component but with the `@Input()` _decorator_, this decorator indicates that the value for the property will be passed in from the component's parent's class. In this case the _ProductListComponent_ made in the previous steps.

Now it's time to make the component, a button that uses the `*ngIf` that checks if there is a _product_ to display and if the price > 699.

Now within my _parent component the product-list_ I can display the new button by adding it underneith the share button `<app-product-alerts>[product]="product"</app-product-alerts>` trough _property binding_ I can pass trough the current product of the for loop towards the `@Input() prodcut:Product| undefined `attribute of the new product-alerts-component.

---

### Passing Data to a parent component

Made it to the next chapter! Here I'm going to learn how to _emit_ an event towards the parent component.

For this Anular suggests (for now) to use the _Output and EventEmitter from the @angular/core_. by adding them to the imports.

Next I am instructed to create a new Event Emitter within the _ProductAlertsComponent_ And set it as an _@Output()_ By adding `@Output() notify = new EventEmitter();`.

Now I have to _emit()_ the event on click by adding the `(click)="notify.emit()` event to my button.

Now within the parent component:_product-list-component_ I need some kind of method to trigger whenever the child emits. Here it's a simple `window.alert()` In an `OnNotify()` method.

To trigger this method I have to bind the newly created _notify_ event to this new _onNotify()_ method by adding `(notify)="onNotify()"` to my _App-products-alerts_ component in the _product-list_.

---

### Adding Navigation

Next up in the guide is page navigation, using URLs to nagivate the page, allowind the browser's back and forward buttons to work.

First I'm instructed to create yet another component, so here we go `ng g c product-details`

To start I'm told to give this new component a path In the Router by adding another object into the RouterModule within _app.module.ts_ and actually set the links towards these paths by modifying the previously generated product title's a tag. and instead of _href_ use `[routerLink]="['/products', product.id]"`

Here the setup route contains the fixed _'/products'_ path, and the variable _id property_ of the product.
