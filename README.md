# Medom
Just a wrapper of HTML elements.
<br/><br/>
<a href="https://travis-ci.org/fabioricali/medom" target="_blank"><img src="https://travis-ci.org/fabioricali/medom.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

## Installation
```
npm install --save medom
```

## Example
```javascript
const {Component} = require('medom');

const myComponent = new Component('<app-my-component></app-my-component>');

myComponent.dom.innerHTML = 'Hello World';

myComponent.renderTo(document.body);
```

## API

## Classes

<dl>
<dt><a href="#Component">Component</a></dt>
<dd></dd>
<dt><a href="#DOM">DOM</a></dt>
<dd></dd>
</dl>

<a name="Component"></a>

## Component
**Kind**: global class  

* [Component](#Component)
    * [new Component(tpl)](#new_Component_new)
    * _instance_
        * [.append(cmp)](#Component+append) ⇒ [<code>Component</code>](#Component)
        * [.renderTo(target, [opt])](#Component+renderTo) ⇒ [<code>Component</code>](#Component)
    * _static_
        * [.isComponent(cmp)](#Component.isComponent) ⇒ <code>boolean</code>

<a name="new_Component_new"></a>

### new Component(tpl)
Create instance

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>tpl</td><td><code>string</code></td><td><p>html string</p>
</td>
    </tr>  </tbody>
</table>

<a name="Component+append"></a>

### component.append(cmp) ⇒ [<code>Component</code>](#Component)
Append other Medom components

**Kind**: instance method of [<code>Component</code>](#Component)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>cmp</td><td><code><a href="#Component">Component</a></code> | <code><a href="#Component">Array.&lt;Component&gt;</a></code></td><td><p>component to append</p>
</td>
    </tr>  </tbody>
</table>

<a name="Component+renderTo"></a>

### component.renderTo(target, [opt]) ⇒ [<code>Component</code>](#Component)
Render component to target

**Kind**: instance method of [<code>Component</code>](#Component)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>target</td><td></td><td></td>
    </tr><tr>
    <td>[opt]</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>[opt.append]</td><td><code>boolean</code></td><td><code>true</code></td>
    </tr>  </tbody>
</table>

<a name="Component.isComponent"></a>

### Component.isComponent(cmp) ⇒ <code>boolean</code>
Check if is a Medom component

**Kind**: static method of [<code>Component</code>](#Component)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>cmp</td><td><code>*</code></td>
    </tr>  </tbody>
</table>

<a name="DOM"></a>

## DOM
**Kind**: global class  

* [DOM](#DOM)
    * [.get(element)](#DOM.get) ⇒ <code>\*</code>
    * [.getByQuery(query)](#DOM.getByQuery) ⇒ <code>\*</code>
    * [.getByQueryAll(query)](#DOM.getByQueryAll) ⇒ <code>\*</code>

<a name="DOM.get"></a>

### DOM.get(element) ⇒ <code>\*</code>
Get Medome component by Element

**Kind**: static method of [<code>DOM</code>](#DOM)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>element</td>
    </tr>  </tbody>
</table>

<a name="DOM.getByQuery"></a>

### DOM.getByQuery(query) ⇒ <code>\*</code>
Get Medom component by query

**Kind**: static method of [<code>DOM</code>](#DOM)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>query</td>
    </tr>  </tbody>
</table>

<a name="DOM.getByQueryAll"></a>

### DOM.getByQueryAll(query) ⇒ <code>\*</code>
Get Medom components by query

**Kind**: static method of [<code>DOM</code>](#DOM)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>query</td>
    </tr>  </tbody>
</table>


## License
medom is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>