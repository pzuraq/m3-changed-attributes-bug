import { getOwner, setOwner } from '@ember/application';

export default class Adapter {
  constructor(createArgs) {
    setOwner(this, getOwner(createArgs));
  }

  static create(createArgs) {
    return new this(createArgs);
  }

  createRecord(store, modelClass, snapshot) {
    return {
      data: {
        id: 123,
        type: 'recipe',
        attributes: snapshot.attributes()
      },
      included: [],
    };
  }

  updateRecord(store, modelClass, snapshot) {
    snapshot.changedAttributes();
  }
}
