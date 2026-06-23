import { sum } from "./addNumbers"; 

import { describe, test, expect } from '@jest/globals';


describe("Check if No Numbers Or one Number Only", () => {
    
    test("Return The Number", () => {
        expect(sum(10, 20)).toBe(30);
    });
    test("Return The Boolean ", ()=>{
        expect(isNaN(sum(1,-2))).toBeFalsy();
    })
    test("Return to Be Greater Than 12", ()=>{
        expect(sum(1, 20)).toBeGreaterThan(12);
    })
}); 