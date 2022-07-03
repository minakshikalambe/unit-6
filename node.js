Explain in brief what is node js?
->Introduction: Node.js is an open-source and cross-platform runtime environment for executing JavaScript code outside a browser. 
You need to remember that NodeJS is not a framework and it’s not a programming language.
 Most people are confused and understand it’s a framework or a programming language.
 We often use Node.js for building back-end services like APIs like Web App or Mobile App.

How is node js non-blocking?
->Non-Blocking methods are executed asynchronously. 
Asynchronously means that the program may not necessarily execute line by line. 
The program calls the function and move to the next operation and does not wait for it to return.

What is throughput?
->Throughput refers to how much data can be transferred from one location to another in a given amount of time.
 It is used to measure the performance of hard drives and RAM, as well as Internet and network connections.

How is Node js having high IO throughput?
->Node.js is asynchronous and single-threaded. This means that all I/O operations don’t block any other operations. 
It also means that you can send emails, read files, query the database, etc. all at the same time.

Each request to the web-server won’t create a separate Node.js process. Although, one Node.js process would run at all times which would listen to the connections. 
JavaScript code is also executed in the process’ main thread while all other I/O operations are executed in separate threads which results in almost no delays.

The virtual machine in Node.js (V8) which is responsible for executing JavaScript consists of a JIT compilation. 
The virtual machine can take the source code to compile it into the machine code at runtime. What it means is that all the “hot” functions that get called often than not can be compiled to the machine code thus boosting the execution speed.

What are CPU intensive tasks?
->CPU intensive tasks can be defined as those tasks that require a lot of computational power. 
This includes any task that requires a lot of processing power, whether it’s a high-powered server or a desktop computer. 
As a web developer, you should be aware of what types of tasks are CPU intensive and which ones aren’t. In this article, we’ll cover what counts as CPU intensive tasks and how to identify them.

How can you end up blocking your main thread in node.js?
->Node.js uses non-blocking I/O, the mechanism that allows you to have a single thread of execution running your program.
 If Node.js had to use blocking I/O, you wouldn’t be able to do anything else while waiting for an I/O to complete.

What is the event loop?
->JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. 
This model is quite different from models in other languages like C and Java.

What are different phases in event loop?
->Timers: Callbacks scheduled by setTimeout() or setInterval() are executed in this phase.
Pending Callbacks: I/O callbacks deferred to the next loop iteration are executed here.
Idle, Prepare: Used internally only.
Poll: Retrieves new I/O events.
Check: It invokes setIntermediate() callbacks.
Close Callbacks: It handles some close callbacks. Eg: socket.on(‘close’, …)

What is process.tick?
->When we pass a function to process.nextTick(), we instruct the engine to invoke this function at the end of the current operation, 
before the next event loop tick starts

When can process.tick starve your event loop?
->


What is the difference between setTimeout and setInterval?
->setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, 
starting after the interval of time, then repeating continuously at that interval.

How can you make a network request with http module from the backend?
