# sass-var-override
Override sass color functions to support css variables usage

Todo: to npm

# What it does

It allows you to use css variables in sass color functions, like `darken(var(--color), 20%)`.

# Must have
- Each css variable should be splited into eight items: hex, rgb, hsl and alpha. F.e. if you want `--color` var, you have to create

    - `--color: #4a5e8e`
    - `--color-hue: 222`
    - `--color-saturation: 31`
    - `--color-llightness: 42`
    - `--color-red: 74`
    - `--color-green: 94`
    - `--color-blue: 142`
    - `--color-alpha: 1`

- Update all eight variables manually.

# How it works

The repository provides `/src/styles/foo.scss` file to import.

Import `/src/styles/foo.scss` overrides the `foo()` sass color function. 

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
