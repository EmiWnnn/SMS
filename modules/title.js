function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / EWA Bomber v1 - github.com/EmiWnnn";
    } else {
        process.stdout.write('\x1b]2;' + x + " / EWA Bomber v1.0 - github.com/EmiWnnn" + '\x1b\x5c');
    }
}

module.exports = console_title;