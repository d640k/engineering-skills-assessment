# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The only time we will ever default to the trivial key is if there is no event provided to the function, so we can take care of this case at the top of the function. The remaining lines in the function deal with a provided value for event. If the event has a partition key, we use that, otherwise use the event itself. In both cases, we have to ensure it's a string, so check for that. Finally, if there is no partition key or if it exceeds 256 characters, we need to generate a new one. Return the resulting value.
