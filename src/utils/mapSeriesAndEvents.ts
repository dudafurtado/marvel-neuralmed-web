interface Item {
  resourceURI: string;
  name: string;
}

export default function mapSeriesAndEvents(items: Item[], message: string) {
  let mappedItems = items.slice(0, 3).map((item, i) => ({ id: i, name: item.name }));
  if (mappedItems.length === 0) {
    mappedItems = [{ id: 1, name: message }];
  }
  return mappedItems;
}
