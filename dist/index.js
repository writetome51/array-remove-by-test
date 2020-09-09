import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
export function removeByTest(test, array, useRemovedItem = () => void 0) {
    const action = (value, index, array) => {
        let removed = getAndRemoveByIndex(index, array);
        useRemovedItem(removed, index, array);
    };
    forEach_ifPasses_doAction_fromRight(test, action, array);
    function forEach_ifPasses_doAction_fromRight(test, action, array) {
        for (let i = array.length - 1; i > -1; --i) {
            if (test(array[i], i, array))
                action(array[i], i, array);
        }
    }
}
/***********

export getAndRemoveByTest(
    test: (value, index?, array?) => boolean,
    array,
    getValue: (value, index?, array?) => any = (value) => value,
): any[] {

    let found = [];

    // Removes items in descending index order:
    removeByTest(test, array, (value, index, array) => {
        found.push(getValue(value, index, array));
    });

    // Return items in ascending index order:
    return reverse(found);
}

 *************/
