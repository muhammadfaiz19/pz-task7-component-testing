// jest.setup.ts
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from 'util';

// Mocking console.log and alert
global.console.log = jest.fn();
global.alert = jest.fn();

// jest.setup.js

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
