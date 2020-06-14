
export default class ApplicationSerializer {
  constructor(createArgs) {
    Object.assign(this, createArgs);
  }

  static create(createArgs) {
    return new this(createArgs);
  }

  normalizeResponse(store, modelClass, payload) {
    return payload;
  }
}
