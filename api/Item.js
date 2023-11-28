class Item {
  constructor(id, name, value, image, listId, isChecked) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.image = image;
    this.listId = listId;
    this.isChecked = isChecked;
  }
}

module.exports = Item;
