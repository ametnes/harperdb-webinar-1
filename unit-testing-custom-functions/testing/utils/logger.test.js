const { randomUUID } = require('crypto')
const sinon = require('sinon')
const { test, beforeEach, afterEach } = require('tap')

const logger = require('../utils/logger')

let consoleStub;
let id;

beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
    id = randomUUID()
});

afterEach(() => {
    consoleStub.restore();
})

test('trace works as intended', async t => {
    logger.trace(id)
    t.ok(consoleStub.calledWith('TRACE', id), 'TRACE level log should be called with the unique id')
})

test('debug works as intended', async t => {
    logger.debug(id)
    t.ok(consoleStub.calledWith('DEBUG', id), 'DEBUG level log should be called with the unique id')
})

test('info works as intended', async t => {
    logger.info(id)
    t.ok(consoleStub.calledWith('INFO', id), 'INFO level log should be called with the unique id')
})

test('warn works as intended', async t => {
    logger.warn(id)
    t.ok(consoleStub.calledWith('WARN', id), 'WARN level log should be called with the unique id')
})

test('error works as intended', async t => {
    logger.error(id)
    t.ok(consoleStub.calledWith('ERROR', id), 'ERROR level log should be called with the unique id')
})

test('fatal works as intended', async t => {
    logger.fatal(id)
    t.ok(consoleStub.calledWith('FATAL', id), 'FATAL level log should be called with the unique id')
})

test('notify works as intended', async t => {
    logger.notify(id)
    t.ok(consoleStub.calledWith('NOTIFY', id), 'NOTIFY level log should be called with the unique id')
})