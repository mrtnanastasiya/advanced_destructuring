
export default function orderByProps(obj, order) {
    const sortedProps = [];
    const unsortedProps = [];

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (order.includes(key)) {
                sortedProps.push({ key, value: obj[key] });
            } else {
                unsortedProps.push({ key, value: obj[key] });
            }
        }
    }

    // Сортируем свойства объекта по ключу (если ключи для сортировки указаны)
    sortedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));

    // Сортируем оставшиеся свойства в алфавитном порядке
    unsortedProps.sort((a, b) => a.key.localeCompare(b.key));

    const result = [...sortedProps, ...unsortedProps];
    return result;
}

