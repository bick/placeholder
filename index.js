"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Placeholder = ({ width, height }) => {
    const placeholderStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: '#ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
    };
    return (react_1.default.createElement("div", { style: placeholderStyle },
        width,
        "x",
        height));
};
exports.default = Placeholder;
