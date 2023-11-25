class Item {
  constructor(id, name, value, listId, isChecked) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.listId = listId;
    this.isChecked = isChecked;
  }
}

module.exports = Item;
