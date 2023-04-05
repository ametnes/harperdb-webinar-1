const logger = {
    trace: (...msg) => console.log('TRACE', ...msg),
    debug: (...msg) => console.log('DEBUG', ...msg),
    info: (...msg) => console.log('INFO', ...msg),
    warn: (...msg) => console.log('WARN', ...msg),
    error: (...msg) => console.log('ERROR', ...msg),
    fatal: (...msg) => console.log('FATAL', ...msg),
    notify: (...msg) => console.log('NOTIFY', ...msg)
}

module.exports = logger