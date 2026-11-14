 javascript is synchronous & single threaded(all the system work one by one , and becouse of it execution chock & engine chock) = its a default js

 Execution useContext 
          .  each operation waite for the last one to compelete before executing
          . execute line by line , console.log 1 then console.log 2
          . call stack & memory heap 

1 Blocking code = block the flow of Perform ex = read file as sync way 
2 Non blocking code = does not block execution ex = read file as a Async way 


                        JavaScript Runtime
                                │
                    ┌───────────┴───────────┐
                    │                       │
            Memory Heap              Call Stack
                    │                       │
            Objects / Arrays          JS execution
            Functions                 one-by-one
                    │                       │
                    └───────────┬───────────┘
                                │
                        Web APIs
                    (Browser provides them)
                                │
                    ┌───────────┼───────────┐
                    │           │           │
                setTimeout     DOM        fetch()
                setInterval   Events      Promise
                    │           │           │
                    └───────────┴───────────┘
                                │
                        Callback / Task
                            Queue
                                │
                        Event Loop
                                │
                        Call Stack


note  = setTimeout(..., 0) ka matlab immediately execute nahi hota. It means callback can be queued after the timer condition is satisfied and the call stack is available.

