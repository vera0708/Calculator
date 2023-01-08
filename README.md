# Calculator

A small Node.js calculator that counts Roman and Arabic numbers

![image](https://user-images.githubusercontent.com/111682119/211213370-42326dc3-8798-4708-8b7e-f2c36fc39228.png)


## Pre requirements

Node.js should be installed 

## How ro run

```
node calc.js
```

### How to change initial data

1. Open calc.js
2. In the line 3 change the argument of the function `calculate`
3. Run the file (`node calc.js`)

### API

The function `calculate` takes 1 argument (string)

The string contains two numbers (Roman or Arabic) and an operator. 

List of operators: `+ | - | * | /`

Numbers should be from 1 to 10

Examples of a valid string:

- `VI * V`
- `9 / 3`
- `X + III`
- `10 - 1`
