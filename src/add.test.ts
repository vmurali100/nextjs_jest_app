import add from './add';

describe('add Test',()=>{
    it('should return 3',()=>{
        expect(add(1,2)).toBe(3)
    })
})