# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

its a way to build user interfaces and the problem it solves is that you can do things without having the data at that exact time. use state and use effect are some of those promises.

1. Describe component state.

those are components that have useState within them. useState is a placeholder for data and a way to change that data. if you have a score component you will have a usestate for your score and your setscore it might hold an away and home team score or it could have a whole tournament of scores and you can access it and change it if you need to

1. Describe props.

props are data that is passed down in a component tree. you give the top most component all the data and it can hand down the data that any child or grandchild  needs. most importantly you can't pass props up they can only go down the tree.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

side effects are events that can change depending on what is happening. if you create a card that displays information about something you click on but you then click on something else the component is the same but the information it contains is different. its a way for us to reuse something without repeating ourselves. when the data that is being passed into it changes then that's when the side effects take effect. and we need to use useEffect to achive this and you can use useState within those and props and anything else you need.