import {merge} from './merge';

test('no member in any collection', () => {
    expect(merge([],[],[])).toStrictEqual([])
});

test('one collection being blank', () => {
    let collection1:number[] = [2,4,6];
    let collection2:number[] = [9,6,1];

    expect(merge([],collection1,collection2)).toStrictEqual([1,2,4,6,6,9]);
    expect(merge(collection1,[],collection2)).toStrictEqual([1,2,4,6,6,9]);
    expect(merge(collection2.reverse(),collection1,[])).toStrictEqual([1,2,4,6,6,9]);
})

test('two collections being blank', () => {
    let collection:number[] = [1,4,7,7,7,8,9];

    expect(merge(collection,[],[])).toStrictEqual(collection);
    expect(merge([],collection,[])).toStrictEqual(collection);
    expect(merge([],[],collection.reverse())).toStrictEqual([1,4,7,7,7,8,9]);
})

test('normal collections', () => {
    let collection1:number[],collection2:number[],collection3:number[],result:number[];
    const sortResult = (result: number []): number[] => result.sort((a,b) => a-b);

    collection1 = [1,2,4,5,7,9,10,12,14];
    collection2 = [1,1,1,1,4,5,6,7,8,9,10,11,11,11];
    collection3 = [7,7,7,7,7,4,2,2,2,2,2,1,1,1];
    result = [...collection1,...collection2,...collection3]
    

    expect(merge(collection1,collection2,collection3)).toStrictEqual(sortResult(result))
    expect(merge(collection2,collection1,collection3)).toStrictEqual(sortResult(result))
})

test('random collections', () => {
    let collection1:number[],collection2:number[],collection3:number[],result:number[];
    const sortResult = (result: number []): number[] => result.sort((a,b) => a-b);

    collection1 = Array.from({length: Math.floor(Math.random()*200)}, () => Math.floor(Math.random()*Math.random()*40))
    sortResult(collection1)

    collection2 = Array.from({length: Math.floor(Math.random()*300)}, () => Math.floor(Math.random()*Math.random()*40))
    sortResult(collection2)

    collection3 = Array.from({length: Math.floor(Math.random()*400)}, () => Math.floor(Math.random()*Math.random()*40))
    sortResult(collection3).reverse()
    result = [...collection1,...collection2,...collection3]

    expect(merge(collection1,collection2,collection3)).toStrictEqual(sortResult(result))
})