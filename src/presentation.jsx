/* eslint-disable import/no-webpack-loader-syntax */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Image,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#EFEFEF',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        theme={theme}>
        <Slide>
          <Heading>
            What is React?
          </Heading>
        </Slide>
        <Slide>
          <Heading>
            Topics
          </Heading>
          <List>
            <Appear>
              <ListItem>
                When & How to use it
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                State, props, and components
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Architecture
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Styling
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Global state
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Frameworks like Redux & MobX
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Debugging and optimizing
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            Quick Rundown
          </Heading>
          <Appear>
            <Text margin={30}>
              Widely adopted framework for web apps
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Built for state management
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              JSX syntax combines logic and presentation
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Custom components used just like HTML tags
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            When to use it?
          </Heading>
          <List>
            <Appear>
              <ListItem margin={30}>
                Interactive pages
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin={30}>
                Web apps
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin={30}>
                Pages with asynchronous data hydration
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin={30}>
                Whenever you want!
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            How's it work?
          </Heading>
          <Appear>
            <Text margin={30}>
              Maintains a virtual DOM, an internal representation of what the DOM should be
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              When this virtual DOM changes, the real DOM is updated and rerendered partially
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            Let's take a look at JSX
          </Heading>
          <Appear>
            <Text margin={30}>
              Similar to a templating language
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Seemlessly integrate HTML and Javascript
            </Text>
          </Appear>
          <Appear>
            <Text textSize={32} margin={30}>
              Before - <CodeSnippet>element.innerHTML = '&lt;span&gt;text&lt;span/&gt;';</CodeSnippet>
            </Text>
          </Appear>
          <Appear>
            <Text textSize={32} margin={30}>
              Before - <CodeSnippet>$(element).append('&lt;span&gt;text&lt;span/&gt;';)</CodeSnippet>
            </Text>
          </Appear>
          <Appear>
            <Text textSize={32} margin={30}>
              <span style={{
                color: 'green',
                fontWeight: 'bold'
              }}>After</span> - <CodeSnippet>render() &#123; return &lt;span&gt;text&lt;span/&gt;; }</CodeSnippet>
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text>
            Example time!
          </Text>
        </Slide>
        <Slide>
          <Text>
            This is a React Component
          </Text>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/1a-jsx-react-component.txt')}/>
          <Text>
            Class with a <CodeSnippet>render()</CodeSnippet> method
          </Text>
        </Slide>
        <Slide>
          <Text>
            Simple calculator
          </Text>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/1b-jsx-calculator-hardcoded.txt')}/>
        </Slide>
        <Slide>
          <Text>
            Okay... let's spice it up
          </Text>
        </Slide>
        <Slide>
          <Text>
            We can insert Javascript code with &#123; }
          </Text>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/2-jsx-calculator-js.txt')}/>
        </Slide>
        <Slide>
          <Text>
            We can reference variables, too
          </Text>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/3-jsx-calculator-variables.txt')}/>
        </Slide>
        <Slide>
          <Text margin={30}>
            What about user input?
          </Text>
          <Appear>
            <Text>
              New concept: <CodeSnippet>state</CodeSnippet>
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/4-jsx-calculator-state.txt')}/>
        </Slide>
        <Slide>
          <Text margin={30}>
            There's a lot going on
          </Text>
          <Appear>
            <Text margin={30}>
              Let's break it down. What's <CodeSnippet>this.state</CodeSnippet>?
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              State is a built-in property of React components
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Think of it like an internal data-store for each component
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text margin={30}>
            State changes make the component rerender
          </Text>
          <Appear>
            <Text margin={30}>
              State can be initialized in the constructor
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              State is modified with <CodeSnippet>this.setState()</CodeSnippet>
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text>
            Let's look at the example again
          </Text>
        </Slide>
        <Slide>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/4-jsx-calculator-state.txt')}/>
        </Slide>
        <Slide>
          <Text>
            Next up...
          </Text>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            Code Reuse
          </Heading>
        </Slide>
        <Slide>
          <Text margin={30}>
            React allows simple code reuse through components
          </Text>
          <Appear>
            <Text>
              Components can be used in <CodeSnippet>render()</CodeSnippet>!
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text margin={30}>
            Let's break the number inputs into components
          </Text>
          <Appear>
            <Text margin={30}>
              To do this, we're going to use <CodeSnippet>this.props</CodeSnippet>
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Props are state that comes from the parent component
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Props are defined as element attributes
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/5-jsx-calculator-components.txt')}/>
        </Slide>
        <Slide>
          <Text margin={30}>
            Rules and tips about State and Props
          </Text>
          <Appear>
            <Text margin={30}>
              State is internal - never to be modified or observed outside of its component
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Passing functions as props is a great way to propagate data upwards
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Prop changes, like state, cause rerenders
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text margin={30}>
            Now we know the basics
          </Text>
          <Appear>
            <Text margin={30}>
              Let's talk about code architecture
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            Rules of thumb
          </Heading>
          <List>
            <Appear>
              <ListItem margin={30}>
                Break out new components to deduplicate
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin={30}>
                Reusable components should have their own file
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin={30}>
                Keep state within React - avoid mixing
                in <CodeSnippet>window</CodeSnippet>, <CodeSnippet>jQuery</CodeSnippet>, etc
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            Aside: Styling & CSS
          </Heading>
          <Appear>
            <Text margin={30}>
              Our calculator doesn't look very good
            </Text>
          </Appear>
          <Appear>
            <Image src={require('./assets/calculator-no-style.png')}/>
          </Appear>
        </Slide>
        <Slide>
          <Text margin={30}>
            Multiple ways to apply CSS
          </Text>
        </Slide>
        <Slide>
          <Text margin={30}>
            Inline
          </Text>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/6-jsx-inline-css.txt')}/>
          <Appear>
            <Text margin={30}>
              Style can be built up from state and props
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text margin={30}>
            External
          </Text>
          <Text>JSX</Text>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/7a-jsx-external-css.txt')}/>
          <Appear>
            <div>
              <Text>CSS</Text>
              <CodePane lang={'jsx'} source={require('!raw-loader!./code/7b-jsx-external-css-style.txt')}/>
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            Okay, back to thinking about data
          </Heading>
        </Slide>
        <Slide>
          <Text margin={30}>
            What if our project is more complicated?
          </Text>
          <Appear>
            <Text margin={30}>
              State and props only go so far
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Breaks down for large hierarchies of interlinked components
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text margin={30}>
            Luckily, React has answers for this!
          </Text>
          <Appear>
            <Text margin={30}>
              Can use data stores and reducers for this
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Allow state shared between many components
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Dispatch actions to modify the data store
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text margin={30}>
            Two counters with a shared value
          </Text>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/8-reducers-and-stores.txt')}/>
        </Slide>
        <Slide>
          <Text margin={30}>
            What if our project is <span style={{fontWeight: 'bold'}}> even more </span> complicated?
          </Text>
          <Appear>
            <Text margin={30}>
              That's where React add-on frameworks come in
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Redux & MobX are the most popular
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            When to use a React framework?
          </Heading>
          <Appear>
            <Text margin={30}>
              Need for advanced debugging & profiling through tooling
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Hitting limitations of native React
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Extremely complex application state
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={5} textColor='tertiary'>
            Finally, let's look at debugging and optimizing
          </Heading>
          <Appear>
            <Text margin={30}>
              Official React Developer Tools chrome extension is very helpful!
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              For optimization, look at rerenders
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Naive react will rerender too often
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text margin={30}>
            Reducing rerenders
          </Text>
          <CodePane lang={'jsx'} source={require('!raw-loader!./code/9-reducing-rerenders.txt')}/>
        </Slide>
        <Slide>
          <Heading margin={10}>
            That's all!
          </Heading>
          <Appear>
            <Text margin={30}>
              <span style={{fontStyle: 'italic'}}>This presentation itself was made in React!</span>
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Thanks for listening!
            </Text>
          </Appear>
          <Appear>
            <Text margin={30}>
              Questions?
            </Text>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}

class CodeSnippet extends React.Component {
  render() {
    return <span style={{fontFamily: 'monospace', color: '#4e5056'}}>{this.props.children}</span>;
  }
}
