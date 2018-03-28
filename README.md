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

myComponent
    .setContent('Hello World')
    .renderTo(document.body);
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
    * [new Component(tpl, [cfg])](#new_Component_new)
    * _instance_
        * [.getWidget(widget)](#Component+getWidget) ⇒ [<code>Component</code>](#Component) \| <code>undefined</code>
        * [.get(query)](#Component+get) ⇒ [<code>Component</code>](#Component) \| <code>undefined</code>
        * [.getAll(query)](#Component+getAll) ⇒ <code>array</code>
        * [.isVisible()](#Component+isVisible) ⇒ <code>boolean</code>
        * [.hide([opt])](#Component+hide) ⇒ [<code>Component</code>](#Component)
        * [.show([opt])](#Component+show) ⇒ [<code>Component</code>](#Component)
        * [.setState(state)](#Component+setState) ⇒ [<code>Component</code>](#Component)
        * [.getState()](#Component+getState) ⇒ <code>\*</code>
        * [.setContent(content)](#Component+setContent) ⇒ [<code>Component</code>](#Component)
        * [.getContent()](#Component+getContent) ⇒ <code>HTMLElement</code>
        * [.append(...cmp)](#Component+append) ⇒ [<code>Component</code>](#Component)
        * [.renderTo(target, [opt])](#Component+renderTo) ⇒ [<code>Component</code>](#Component)
        * [.on(eventName, callback)](#Component+on) ⇒ [<code>Component</code>](#Component)
        * [.suspendEvent(...eventName)](#Component+suspendEvent) ⇒ [<code>Component</code>](#Component)
        * [.resumeEvent(...eventName)](#Component+resumeEvent) ⇒ [<code>Component</code>](#Component)
        * [.suspendEvents()](#Component+suspendEvents) ⇒ [<code>Component</code>](#Component)
        * [.resumeEvents()](#Component+resumeEvents) ⇒ [<code>Component</code>](#Component)
    * _static_
        * [.isComponent(cmp)](#Component.isComponent) ⇒ <code>boolean</code>

<a name="new_Component_new"></a>

### new Component(tpl, [cfg])
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
    </tr><tr>
    <td>[cfg]</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>[cfg.widget]</td><td><code>string</code></td><td></td>
    </tr>  </tbody>
</table>

<a name="Component+getWidget"></a>

### component.getWidget(widget) ⇒ [<code>Component</code>](#Component) \| <code>undefined</code>
Get component by widget name

**Kind**: instance method of [<code>Component</code>](#Component)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>widget</td><td><code>string</code></td><td><p>name</p>
</td>
    </tr>  </tbody>
</table>

<a name="Component+get"></a>

### component.get(query) ⇒ [<code>Component</code>](#Component) \| <code>undefined</code>
Get component by query

**Kind**: instance method of [<code>Component</code>](#Component)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>query</td><td><code>string</code></td><td><p>selector</p>
</td>
    </tr>  </tbody>
</table>

<a name="Component+getAll"></a>

### component.getAll(query) ⇒ <code>array</code>
Get all components by query

**Kind**: instance method of [<code>Component</code>](#Component)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>query</td><td><code>string</code></td><td><p>selector</p>
</td>
    </tr>  </tbody>
</table>

<a name="Component+isVisible"></a>

### component.isVisible() ⇒ <code>boolean</code>
Check if component is visibile

**Kind**: instance method of [<code>Component</code>](#Component)  
<a name="Component+hide"></a>

### component.hide([opt]) ⇒ [<code>Component</code>](#Component)
Hide component

**Kind**: instance method of [<code>Component</code>](#Component)  
**Emits**: <code>Component#event:hide</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[opt]</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>[opt.type]</td><td><code>string</code></td><td><code>&quot;display&quot;</code></td>
    </tr>  </tbody>
</table>

<a name="Component+show"></a>

### component.show([opt]) ⇒ [<code>Component</code>](#Component)
Show component

**Kind**: instance method of [<code>Component</code>](#Component)  
**Emits**: <code>Component#event:show</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[opt]</td><td><code>object</code></td><td></td>
    </tr><tr>
    <td>[opt.type]</td><td><code>string</code></td><td><code>&quot;display&quot;</code></td>
    </tr><tr>
    <td>[opt.showType]</td><td><code>string</code></td><td><code>&quot;block&quot;</code></td>
    </tr>  </tbody>
</table>

<a name="Component+setState"></a>

### component.setState(state) ⇒ [<code>Component</code>](#Component)
Set state

**Kind**: instance method of [<code>Component</code>](#Component)  
**Emits**: <code>Component#event:state</code>, <code>Component#event:beforeState</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>state</td><td><code>*</code></td>
    </tr>  </tbody>
</table>

<a name="Component+getState"></a>

### component.getState() ⇒ <code>\*</code>
Get current state

**Kind**: instance method of [<code>Component</code>](#Component)  
<a name="Component+setContent"></a>

### component.setContent(content) ⇒ [<code>Component</code>](#Component)
Update content

**Kind**: instance method of [<code>Component</code>](#Component)  
**Emits**: <code>Component#event:beforeContentChange</code>, <code>Component#event:contentChange</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>content</td>
    </tr>  </tbody>
</table>

<a name="Component+getContent"></a>

### component.getContent() ⇒ <code>HTMLElement</code>
Get content

**Kind**: instance method of [<code>Component</code>](#Component)  
<a name="Component+append"></a>

### component.append(...cmp) ⇒ [<code>Component</code>](#Component)
Append other Medom components

**Kind**: instance method of [<code>Component</code>](#Component)  
**Emits**: <code>Component#event:contentChange</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...cmp</td><td><code><a href="#Component">Component</a></code></td><td><p>component to append</p>
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

<a name="Component+on"></a>

### component.on(eventName, callback) ⇒ [<code>Component</code>](#Component)
Adds listener to instance

**Kind**: instance method of [<code>Component</code>](#Component)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>eventName</td><td><code>string</code></td><td><p>event name</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td><p>callback</p>
</td>
    </tr>  </tbody>
</table>

<a name="Component+suspendEvent"></a>

### component.suspendEvent(...eventName) ⇒ [<code>Component</code>](#Component)
Suspends firing of the named event(s), works only with native component event.

**Kind**: instance method of [<code>Component</code>](#Component)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...eventName</td><td><code>string</code></td><td><p>multiple event names to suspend</p>
</td>
    </tr>  </tbody>
</table>

<a name="Component+resumeEvent"></a>

### component.resumeEvent(...eventName) ⇒ [<code>Component</code>](#Component)
Resumes firing of the named event(s), works only with native component event.

**Kind**: instance method of [<code>Component</code>](#Component)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>...eventName</td><td><code>string</code></td><td><p>multiple event names to resume.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Component+suspendEvents"></a>

### component.suspendEvents() ⇒ [<code>Component</code>](#Component)
Suspends all events, works only with native component event.

**Kind**: instance method of [<code>Component</code>](#Component)  
<a name="Component+resumeEvents"></a>

### component.resumeEvents() ⇒ [<code>Component</code>](#Component)
Resume all events, works only with native component event.

**Kind**: instance method of [<code>Component</code>](#Component)  
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
    * [.getByQuery(query, [ctx])](#DOM.getByQuery) ⇒ <code>\*</code>
    * [.getByQueryAll(query, [ctx])](#DOM.getByQueryAll) ⇒ <code>\*</code>

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

### DOM.getByQuery(query, [ctx]) ⇒ <code>\*</code>
Get Medom component by query

**Kind**: static method of [<code>DOM</code>](#DOM)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>query</td><td></td>
    </tr><tr>
    <td>[ctx]</td><td><code>document</code></td>
    </tr>  </tbody>
</table>

<a name="DOM.getByQueryAll"></a>

### DOM.getByQueryAll(query, [ctx]) ⇒ <code>\*</code>
Get Medom components by query

**Kind**: static method of [<code>DOM</code>](#DOM)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>query</td><td></td>
    </tr><tr>
    <td>[ctx]</td><td><code>document</code></td>
    </tr>  </tbody>
</table>


## License
medom is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>