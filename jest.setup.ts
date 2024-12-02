/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";

// Hapus ini jika sudah ada di lingkungan jsdom
import { TextEncoder as NodeTextEncoder, TextDecoder as NodeTextDecoder } from 'util';
global.TextDecoder = NodeTextDecoder as any;
global.TextEncoder = NodeTextEncoder as any;

// Mocking console.log and alert
global.console.log = jest.fn();
global.alert = jest.fn();
