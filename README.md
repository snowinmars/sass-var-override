# sass-var-override
Override sass color functions to support css variables usage

Todo: to npm

# What it does
The repository provides `/src/styles/foo.scss` file to import.

Import `/src/styles/foo.scss` overrides the foo() function 

It replace default scss function with custom function that supports css variables style.

All custom functions looks like
```
foo(color, ...) {
    if (!color.startsWith("var(--") {
        return default_foo(color, ...);
    }

    // do custom stuff
}
```

`default_foo()` above is default scss color function, described in [sass docs](http://www.sass-lang.com/documentation/modules/color).

The most difficult math calculations was taken from [node-sass repo](https://github.com/sass/node-sass), see its `/src/libsass/src/functions.cpp` file.