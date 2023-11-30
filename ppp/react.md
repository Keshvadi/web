# React

## React Basics

* Components are the building blocks in React.
* JSX is a syntax extension for JavaScript used in React to write elements.
* Props allow passing data from parent to child components.
* State enables components to manage and update their data.
* Hooks like useState and useEffect are essential for managing state and side effects.

### Main Concepts

* React has three main concepts
  * React Component
    * building blocks in React
    * similirat to functions
    * resemble functions that receive inputs (props, state) and produce outputs (UI)
    * react components has two input: props and state.
    * props are immute. you can not change them. You can change state.
    * react component can be either of Class Component or Function Component
    * you should learn both, but prefer function components over the class components.
    * resusable and composable
    * invoke as html element ```<YourComponent />```
    * capable of managing a private internal state
  * Reactive updates
    * React reacts to changes in data or state
    * Facilitates automatic updates to the browser
  * virtual views in memory
    * generate HTML using javascript
    * no HTML template language
    * use virtual DOM

### A Sample React App

* The react app starts with Index.js
  in the index.js, we should import the apps
    ```import App from ./App;```
    then inside the app, we can build our components.

    ```js
    // App.js
    import './App.css';

    function App(){
    return(
    <div className='App'>
        <header>
            <p>
                This is a sample web page.
            </p>
        </header>
    </div>
    );}
    export default App;
    ```

    ```js
    // index.js
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );
    ```

### Click Counter App

```js
// Click.js
import React, {useState} from 'react'; // import to use hook
import './App.css';

function ClickCounter() {
    const [counter, setCounter] = useState(0); // hook
    return (
        <div> 
            // use arrow function
            <button onClick={() => setCounter(counter+1)}>{counter}</button> 
        </div>
    );   
}

export default ClickCounter;
```

```js
// App.js
import './App.css';
import ClickCounter from './Click';
function App(){
return(
<div className="App-header">
    <header>
        <p>
            This is a sample page.
            <ClickCounter />
        </p>
    </header>
</div>
);
}

export default App;
```

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_One from './App_One';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**Note**: In a typical React application, besides the root DOM element where the React app is mounted (```<div id="root"></div>``` or similar), there aren't any other predefined or special DOM elements reserved specifically for React.

* we can apply CSS to a JSX elemetns
  
```js
import React, { useState } from 'react';
import './App.css';

function ClickCounter() {
    const [counter, set_counter] = useState(0);
    const handle_click = () => set_counter(counter+1);
    return (
        <div>
            <button style={{color:'red', fontSize:'xx-large', padding:'5px 10px', borderRadius:'5px'}} onClick={handle_click}>
                {counter}
            </button>
        </div>
    );
}

export default ClickCounter;
```

* Here another example how to use multiple components

```js
// App.js
import React, { useState } from "react";
import './App.css';

function Click(){
    const [counter, setCounter] = useState(0);
    function increase_counter() {
        setCounter(counter+1);        
    }
    return(
        <div>
            <button onClick={increase_counter} style={{fontSize:'xx-large'}}> {counter}</button> 
        </div>
    );
}

function Greeting({name}) {
    return (
        <p>Hello {name}</p>
    );
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                This is a new Page
                <Greeting name="Nicole" />
                <Click />
            </header>
        </div>
    );
}

export default App;
```

* The same example using main App and using two component.
* in this example, we send the props from parent component to the child components

```js
import React, { useState } from "react";
import './App.css';


// a component only for button
function Button(props) {
    return (
        <button style={{fontSize:'xx-large'}} onClick={props.on_click_fuction}>+1</button>
    );
}
// a component only for display the number of clicks
function Display(props) {
    return(
        <div>
            Number of Clicks: {props.message}
        </div>
    )    
}

// a component for App which calls other components
function App() {
    const [counter, set_counter] = useState(0); // using hook
    const increase_counter = () => { set_counter(counter + 1) };

    return (
        <div className="App">
            <header className="App-header">
                <Display message={counter} /> <br/>
                <Button on_click_fuction={increase_counter} />
            </header>
        </div>
    );

}
export default App;
```

### Using Arrow Functions in React Event Handlers

The discussion bellow is about the arrow funciton in the onClick function in below:

```js
import React, { useState } from "react";
import './App.css';


// a component only for button
function Button(props) {
    const style_items = { fontSize: 'xx-large', borderRadius: '10px', margin: '10px', width: '80px', height: '60px' };
    return (
        <button style={style_items} onClick={() => props.on_click_fuction(props.increamental_size)}> // here
            {props.increamental_size}
        </button>
    );
}

// a component only for display the number of clicks
function Display(props) {
    return (
        <div>
            Number of Clicks: {props.message}
        </div>
    )
}

// a component for App which calls other components
function App() {
    const [counter, set_counter] = useState(0); // using hook
    const increase_counter = (increamental_size) => { set_counter(counter + increamental_size) };

    return (
        <div className="App">
            <header className="App-header">
                <Display message={counter} /> <br />
                <Button on_click_fuction={increase_counter} increamental_size={1} />
                <Button on_click_fuction={increase_counter} increamental_size={-1} />
            </header>
        </div>
    );

}
export default App;
```

* In React, event handlers like ```onClick``` expect a function reference to execute when an event occurs. When assigning an event handler in JSX, it's essential to prevent immediate function invocation and ensure the function executes only when the event occurs.

Problem:

```js
<button onClick={props.on_click_function(props.incremental_size)}>
```

Directly calling <code>props.on_click_function(props.incremental_size)</code> in the event handler would lead to immediate execution during rendering, not when the button is clicked.

Solution:

```js
<button onClick={() => props.on_click_function(props.incremental_size)}>
```

Using an arrow function <code>() =></code> creates a new anonymous function, preventing immediate execution. This function is invoked only when the button is clicked, ensuring the correct behavior for the event handler.

Purpose:

1. Preventing Immediate Invocation: Arrow functions in event handlers delay the execution of the intended function until the event occurs (e.g., button click), avoiding immediate invocation during rendering.
2. Delayed Execution on Event: The arrow function acts as an intermediary, ensuring the actual function executes with the specified arguments only when the event (e.g., click) takes place.

This pattern helps maintain the reference to the intended function and its arguments, ensuring the expected behavior when handling events in React components.

* In React, when attaching an event handler like onClick to a button (or any element), you are providing a function reference to be executed when the event occurs.
* When using <code>props.on_click_function(props.incremental_size)</code> directly within the <code>onClick</code> attribute <code>(onClick={props.on_click_function(props.incremental_size)})</code>, it immediately executes <code>props.on_click_function with props.incremental_size</code> during the rendering phase (not waiting for a click event).
* To resolve this issue and ensure that <code>props.on_click_function</code> is called only when the button is clicked, you use an arrow function <code>(() =>)</code> as an intermediary:

```js
<button onClick={() => props.on_click_function(props.incremental_size)}>
```

* By wrapping <code>props.on_click_function(props.incremental_size)</code> within an arrow function in the <code>onClick</code> attribute, you're passing a new function reference that will be invoked only when the button is clicked. This way, you control when the function execution happens—specifically during the click event—not during rendering.

## Imports

Importing JavaScript Modules:

```js
import MyComponent from './MyComponent';
```

Importing CSS Files:

```js
import './styles.css';
```

Importing Other Files:

```js
import myImage from './myImage.png';
import data from './data.json';
import myFont from './font.ttf';
```

## Notes

* The export default keywords specify the main component in the file.

```js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

* JSX is stricter than HTML. You have to close tags like ```<br />```. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a ```<div>...</div>``` or an empty ```<>...</>``` wrapper

### Rendering lists

```js
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

## Using Hooks

Functions starting with use are called Hooks. <code>useState</code> is a built-in Hook provided by React. You can find other built-in Hooks in the API reference. You can also write your own Hooks by combining the existing ones.

## Deploy on GitHub

* check this resouce: [GitHub](https://create-react-app.dev/docs/deployment/)

* Steps
  * create a github repository like tictactoe. The address is something like this: <https://github.com/Keshvadi/tictactoe>
  * then run this in your project directory

    ```bash
    npm install --save gh-pages
    ```

  * then create your project and build it using

    ```bash
    npm run build
    ```

  * then modify <code>package.json</code> file in your react project
    * add home page like this:

        ```json
        "homepage": "https://github.com/Keshvadi/tictactoe",
        ```

    * modify script section to this:

        ```json
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            "start": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
            "build": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"},
        ```

  * then run this command to deploy it

    ```bash
    npm run deploy
    ```

  * then go to the github project and change the branch to gh-pages
  * go to the setting --> Pages, and and see your webpage address.
  * your react app address is: <https://keshvadi.github.io/tictactoe/>

## [Thinking in React](https://react.dev/learn/thinking-in-react)

* When you build a user interface with React, break it apart into pieces called components.
* Then, you will describe the different visual states for each of your components.
* Finally, you will connect your components together so that the data flows through them.
* This tutorial guide you through the thought process of building a searchable product data table with React.

### Start with the mockup

To implement a UI in React, you will usually follow the same five steps.

#### Step 1: Break the UI into a component hierarchy

<img src="./react/s_thinking-in-react_ui_outline.png" style="width:50%">

```js
// image code
<img src="./react/s_thinking-in-react_ui_outline.png" style="width:50%">
```

Now that you’ve identified the components in the mockup, arrange them into a hierarchy. Components that appear within another component in the mockup should appear as a child in the hierarchy:

* FilterableProductTable
  * SearchBar
  * ProductTable
    * ProductCategoryRow
    * ProductRow

#### Step 2: Build a static version in React

* Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.

* To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using **[props](https://react.dev/learn/passing-props-to-a-component)**.
* **Props** are a way of passing data from **parent to child**.
* If you’re familiar with the concept of **[state](https://react.dev/learn/state-a-components-memory)**, don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.

#### Step 3: Find the minimal but complete representation of UI state

* To make the UI interactive, you need to let users change your underlying data model. You will use **state** for this.
* Think of state as the minimal set of changing data that your app needs to remember. The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself).
* "Don't repeat yourself" (DRY) is a principle of software development aimed at reducing repetition of information which is likely to change, replacing it with abstractions that are less likely to change, or using data normalization which avoids redundancy in the first place.
* Figure out the absolute minimal representation of the state your application needs and compute everything else on-demand.
* For example, if you’re building a shopping list, you can store the items as an array in state. If you want to also display the number of items in the list, don’t store the number of items as another state value—instead, read the length of your array.
* Now think of all of the pieces of data in this example application:
    1. The original list of products
    2. The search text the user has entered
    3. The value of the checkbox
    4. The filtered list of products
Which of these are state? Identify the ones that are not:
* Does it <b>remain unchanged</b> over time? If so, it isn’t state.
* Is it <b>passed in from a parent</b> via props? If so, it isn’t state.
* **Can you compute** it based on existing state or props in your component? If so, it definitely isn’t state!
What’s left is probably state.

Let’s go through them one by one again:

1. The original list of products is passed in as props, so it’s not state.
2. The search text seems to be state since it changes over time and can’t be computed from anything.
3. The value of the checkbox seems to be state since it changes over time and can’t be computed from anything.
4. The filtered list of products isn’t state because it can be computed by taking the original list of products and filtering it according to the search text and value of the checkbox.

This means only the search text and the value of the checkbox are state! Nicely done!

##### Props vs State

There are two types of “model” data in React: props and state. The two are very different:

* [Props are like arguments](<https://react.dev/learn/passing-props-to-a-component>) you pass to a function. They let a parent component pass data to a child component and customize its appearance. For example, a <code>Form</code> can pass a color prop to a <code>Button</code>.
* [State is like a component’s memory](<https://react.dev/learn/state-a-components-memory>). It lets a component keep track of some information and change it in response to interactions. For example, a Button might keep track of isHovered state.
* Props and state are different, but they work together. A parent component will often keep some information in state (so that it can change it), and pass it down to child components as their props. It’s okay if the difference still feels fuzzy on the first read. It takes a bit of practice for it to really stick!

#### Step 4: Identify where your state should live

After identifying your app’s minimal state data, you need to identify which component is responsible for changing this state, or owns the state. Remember: React uses one-way data flow, passing data down the component hierarchy from parent to child component. It may not be immediately clear which component should own what state. This can be challenging if you’re new to this concept, but you can figure it out by following these steps!

For each piece of state in your application:

1. Identify every component that renders something based on that state.
2. Find their closest common parent component—a component above them all in the hierarchy.
3. Decide where the state should live:
    1. Often, you can put the state directly into their common parent.
    2. You can also put the state into some component above their common parent.
    3. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

* Add state to the component with the [useState() Hook](<https://react.dev/reference/react/useState>). Hooks are special functions that let you “hook into” React. Add two state variables at the top of FilterableProductTable and specify their initial state:

```js
function FilterableProductTable({ products }) {
const [filterText, setFilterText] = useState('');
const [inStockOnly, setInStockOnly] = useState(false);}
```

Then, pass filterText and inStockOnly to ProductTable and SearchBar as props:

```js
<div>
  <SearchBar 
    filterText={filterText} 
    inStockOnly={inStockOnly} />
  <ProductTable 
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly} />
</div>
```

#### Step 5: Add inverse data flow

* Currently your app renders correctly with props and state flowing down the hierarchy. But to change the state according to user input, you will need to support data flowing the other way: the form components deep in the hierarchy need to update the state in FilterableProductTable.
*

```js
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />)}
```

#### Full Application

```js
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
```
