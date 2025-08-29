

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

 **getElementById :-
 We basically use it when have a unique ID. And it always return one element.

**getElementsByClassName :-
When multiple element have class name so we use getElementByClassName for find
all as a HTML Collections.

**querySelector / querySelectorAll :- 
We use querySelector() for find first matching word like (.class,#Id, div, p. etc) 
And for querySelectorAll() it returns all matching element as a Nodelist.

2. How do you **create and insert a new element into the DOM**?

First take a variable with meaningfull name and than document.createElement word than
inside of parenthesis create div / h1 / p etc as your requirement than take the variable 
and use . notation innertext/HTML and create as your own.

Secondly in our dom should be  exist a parent element than grab the parent and use append
child method for insert new element in dom.

3. What is **Event Bubbling** and how does it work?

Event Bubbling :-  Is when we add when we add event-listener in child its step by step going parent than grandparent and than until root element become propagate, i mean its going from bottom to top.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation :- technique is when we use event listener in parent its step by step goin to child
and if child happen event so it could work for insert event listener in parent.

Its popular because in future if added one or multiple child no need to add event listener
dynamic way it can access due to use parent even listener. 

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() :- Its stop any event default behaiviour,Sorry to say Cant't widely
 explain because i don't know about this method in depth.

 stopPropagation() :- Its help to stop propagate event bubbling or capturing.

