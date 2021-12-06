# Computer architecture

A string parser in the form of a web app that takes a complex string of Assembly instructions and quickly puts them in a table to identify various hazzards.

## What are hazzards?
In the domain of central processing unit (CPU) design, hazards are problems with the instruction pipeline in CPU microarchitectures when the next instruction cannot execute in the following clock cycle, and can potentially lead to incorrect computation results. Three common types of hazards are data hazards, structural hazards, and control hazards (branching hazards).

There are several methods used to deal with hazards, including pipeline stalls/pipeline bubbling, operand forwarding, and in the case of out-of-order execution, the scoreboarding method and the Tomasulo algorithm. [Wikipedia](https://en.wikipedia.org/wiki/Hazard_(computer_architecture))

![Screenshot](https://res.cloudinary.com/stamatakis/image/upload/v1638793364/github/computer-architecture/Screenshot_2021-12-06_at_2.22.37_PM_o2xrhe.png)

## Development server
Run `npm i` to install dependencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
