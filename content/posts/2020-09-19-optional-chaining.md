---
template: post
title: Optional Chaining
slug: optional-chaining
draft: false
date: 2020-09-19T06:50:10.206Z
description: An optional chain is a chain of one or more property accesses and
  function calls, the first of which begins with the token?
submission: JavaScript
author: Vinoth
---
An optional chain is a chain of one or more property accesses and function calls, the first of which begins with the token `?.`.

Long chains of property accesses in JavaScript can be error-prone, as any of them might evaluate to `null` or `undefined` (also known as “nullish” values).

Checking for property existence on each step easily turns into a deeply-nested structure of if-statements.

Using the new optional chaining operator, we can rewrite the above example as follows:

The `?.` operator functions similarly to the `.` chaining operator, except that instead of causing an error if a reference is nullish (`null` or `undefined`), the expression short-circuits with a return value of `undefined`.

When used with function calls, it returns `undefined` if the given function does not exist.

> Note: If there is a property with such a name and which is not a function, using `?.` will still raise a `TypeError` exception (`x.y` is not a function).

## Optional callbacks or event handlers

## Optional chaining with expressions

## Optional chaining with an array

> Optional chaining is forbidden in write contexts such as `a?.b = c`.
> Optional deletion as in: `delete a ?.b` is supported.

Let's see what babel transpiler does with this Optional chaining syntax

It transpile into

If you don't know what `void 0` does, it evaluates the given expression and then returns `undefined`.

## Syntax

### Resources

1. [V8](https://v8.dev/features/optional-chaining)
2. [tc39](https://tc39.es/proposal-optional-chaining/)
3. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

Thanks for reading!