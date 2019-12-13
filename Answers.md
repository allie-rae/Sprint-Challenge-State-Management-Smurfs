1. What problem does the context API help solve?

The problem: prop drilling! Context API makes it easier to share state across all levels of the application without having to use prop drilling.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - A packet of information that is sent to the reducer to update state. An action is just a plain object. It must have a type attribute and may have an optional payload. Reducers - reducers represent the state tree. Reducers take in state and an action and change the state in a predictable way according to the action type. Store - The store in redux is is where state is stored. The store is known as the single source of truth because it is where all components get their state, and all components update the same state in the store through the ui -> action -> reducer -> store pattern. This is unlike regular react where components can have completely separate state and where some state is inaccessible to certain components based on the structure of the application. 


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and can be accessed by any component. Component state is local and can only be accessed by that component and it's children. Component state is great for simple, small apps. Application state is more complicated but is much better in big applications where state management starts to become unwieldy. 


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that makes asynchronous requests possible! It allows you to return a function in your action creator instead of an action, which makes it possible to delay the dispatch of an action, or only dispatch the action if certain conditions have been met. 


1. What is your favorite state management system you've learned and this sprint? Please explain why!

I think Redux is my favorite because I can see how useful it is! Once you understand how it works, it seems like a great tool to use. It's complicated to set up, but I like that all of the components can share and update the same state and you don't have to worry about prop drilling.